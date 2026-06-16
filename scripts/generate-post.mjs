// =====================================================
// Daily Insights generator
// - Pulls headlines from curated design/AI RSS feeds
// - Asks Claude to write ORIGINAL Korean deep-curation posts
// - Generates two posts by default (design 1 + ai 1)
// - Appends new posts to data/insights.json and rebuilds js/insights-data.js
//
// Usage:  ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs
// Env:
//   ANTHROPIC_API_KEY  (required)
//   INSIGHTS_MODEL     (optional, default claude-sonnet-4-6)
//   INSIGHTS_CATEGORY  (optional: "design" | "ai" to generate only one)
// Exit code 0 with no changes if nothing new is found.
// =====================================================
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildInsightsData } from './build-insights-data.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const DATA_PATH = join(projectRoot, 'data', 'insights.json');

// ---- Curated sources — Kenny identity (frontend · AX).
//      Intentionally distinct from other studios' feeds. Edit freely. ----
const FEEDS = {
  design: [
    { source: 'web.dev', url: 'https://web.dev/feed.xml' },
    { source: 'Codrops', url: 'https://tympanus.net/codrops/feed/' },
    { source: 'CSS-Tricks', url: 'https://css-tricks.com/feed/' },
    { source: 'UX Collective', url: 'https://uxdesign.cc/feed' },
  ],
  ai: [
    { source: 'The Verge AI', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml' },
    { source: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/' },
    { source: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/' },
  ],
};

const MODEL = process.env.INSIGHTS_MODEL || 'claude-sonnet-4-6';
const API_KEY = process.env.ANTHROPIC_API_KEY;
const TITLE_MAX = 40;
const SUMMARY_MAX = 130;

const FALLBACK_TAGS = {
  design: ['Frontend', 'UX', 'WebPlatform'],
  ai: ['AI', 'AX', 'Workflow'],
};

// ---------- tiny RSS/Atom parser (zero deps) ----------
function decodeEntities(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function tag(block, name) {
  const m = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i').exec(block);
  return m ? m[1] : '';
}

function normalizeImageUrl(url) {
  const s = String(url || '').trim();
  if (!s) return '';
  if (s.startsWith('//')) return `https:${s}`;
  return s;
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extractImageFromBlock(block) {
  const candidates = [
    /<media:content[^>]*url=["']([^"']+)["'][^>]*>/i,
    /<media:thumbnail[^>]*url=["']([^"']+)["'][^>]*>/i,
    /<enclosure[^>]*type=["']image\/[^"]*["'][^>]*url=["']([^"']+)["'][^>]*>/i,
    /<enclosure[^>]*url=["']([^"']+)["'][^>]*type=["']image\/[^"]*["'][^>]*>/i,
    /<(?:description|content|content:encoded|summary)[^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["'][^>]*>/i,
  ];

  for (const re of candidates) {
    const m = re.exec(block);
    if (m && m[1]) {
      const normalized = normalizeImageUrl(m[1]);
      if (/^https?:\/\//i.test(normalized)) return normalized;
    }
  }
  return '';
}

function parseFeed(xml) {
  const items = [];
  const blocks = xml.split(/<item[\s>]/i).slice(1).concat(xml.split(/<entry[\s>]/i).slice(1));
  for (const raw of blocks) {
    const block = raw;
    const title = decodeEntities(tag(block, 'title'));
    let link = decodeEntities(tag(block, 'link'));
    if (!link) {
      const m = /<link[^>]*href=["']([^"']+)["']/i.exec(block);
      if (m) link = m[1];
    }
    const date = decodeEntities(tag(block, 'pubDate') || tag(block, 'updated') || tag(block, 'published'));
    const desc = decodeEntities(tag(block, 'description') || tag(block, 'summary') || tag(block, 'content')).slice(0, 600);
    const thumb = extractImageFromBlock(block);
    if (title && link) items.push({ title, link, date, desc, thumb });
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const res = await fetch(feed.url, { headers: { 'User-Agent': 'KennyInsightsBot/1.0' } });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseFeed(xml).map((it) => ({ ...it, source: feed.source }));
  } catch {
    return [];
  }
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'insight';
}

function normalizeWhitespace(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function clampText(s, max) {
  const chars = [...normalizeWhitespace(s)];
  if (chars.length <= max) return chars.join('');
  if (max <= 3) return chars.slice(0, max).join('');
  return chars.slice(0, max - 3).join('') + '...';
}

function normalizeTitle(title, fallback) {
  const base = normalizeWhitespace(title) || normalizeWhitespace(fallback) || '인사이트 업데이트';
  return clampText(base, TITLE_MAX);
}

function normalizeSummary(summary, fallback) {
  const base = normalizeWhitespace(summary) || normalizeWhitespace(fallback) || '해외 인사이트를 한국어로 정리했습니다.';
  return clampText(base, SUMMARY_MAX);
}

function normalizeTags(tags, category) {
  const raw = Array.isArray(tags) ? tags : [];
  const cleaned = raw
    .map((t) => normalizeWhitespace(t).replace(/[^A-Za-z0-9]+/g, ''))
    .filter((t) => t.length >= 2);
  const withFallback = cleaned.length > 0 ? cleaned : (FALLBACK_TAGS[category] || ['Insight', 'Trend', 'Update']);
  return [...new Set(withFallback)].slice(0, 3);
}

function pickFreshItems(all, usedUrls, usedTitles, runUrls, runTitles, limit = 3) {
  const out = [];
  for (const it of all) {
    const t = String(it.title || '').toLowerCase();
    if (!it.link || !it.title) continue;
    if (usedUrls.has(it.link) || usedTitles.has(t)) continue;
    if (runUrls.has(it.link) || runTitles.has(t)) continue;
    out.push(it);
    if (out.length >= limit) break;
  }
  return out;
}

// "출처" link block — always lists the primary + related sources used.
function buildSourcesSection(primaryItem, relatedItems) {
  const all = [primaryItem, ...(Array.isArray(relatedItems) ? relatedItems : [])].filter(Boolean);
  const lines = all.slice(0, 3).map((it) => {
    const source = escapeHtml(it.source || 'Source');
    const title = escapeHtml(it.title || '원문');
    const link = escapeHtml(it.link || '#');
    return `<li><a href="${link}" target="_blank" rel="noopener noreferrer nofollow">${source}: ${title} ↗</a></li>`;
  }).join('');
  return `<h3>출처</h3><ul>${lines}</ul>`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function countSentences(text) {
  return String(text || '')
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean).length;
}

function validateCuration(curation) {
  const body = String(curation?.bodyHtml || '');
  const requiredHeaders = ['무슨 일인가', '여러 시각', '왜 중요한가', '실무 적용', 'Kenny의 관점', '출처'];
  if (!body.includes('<blockquote>') || !body.includes('<cite>')) {
    throw new Error('Generated bodyHtml is missing blockquote/cite.');
  }
  for (const h of requiredHeaders) {
    if (!body.includes(`<h3>${h}</h3>`)) {
      throw new Error(`Generated bodyHtml is missing required heading: ${h}`);
    }
  }

  const quoteMatch = body.match(/<blockquote>([\s\S]*?)<cite>/i);
  if (!quoteMatch) {
    throw new Error('Could not parse quote text from blockquote.');
  }
  const quoteText = quoteMatch[1].replace(/<[^>]+>/g, ' ').trim();
  if (countSentences(quoteText) > 1) {
    throw new Error('Quote guardrail violated: quote must be one sentence or shorter.');
  }
  const linkCount = (body.match(/<a\s+href=/gi) || []).length;
  if (linkCount < 2) {
    throw new Error('Generated bodyHtml needs 2+ source links (multi-source cross-analysis).');
  }
}

// ---------- Claude call ----------
async function writeKoreanCuration(item, category, relatedItems = []) {
  const relatedText = relatedItems.length > 0
    ? relatedItems.map((it, idx) => `${idx + 1}) ${it.source} | ${it.title} | ${it.link}`).join('\n')
    : '없음';

  const sys =
    '당신은 프론트엔드·AX(AI Experience)에 강한 UI/UX 전문가 Kenny의 콘텐츠 에디터입니다. ' +
    '해외 디자인/프론트엔드/AI 소식을 보고, 원문을 번역·전재하지 말고 한국 독자를 위한 ' +
    '"여러 소스를 교차 분석한 심층 큐레이션 글"을 새로 작성하세요. ' +
    '단순 소식 전달이 아니라, 주요 원문 1개를 깊이 읽어 분석하고 보조 소스 1~2개의 시각을 비교해 ' +
    '입체적으로 설명하는 것이 핵심입니다. ' +
    '저작권 보호를 위해 직접 인용은 핵심 1문장 이내로 제한하고(따옴표+출처 필수), ' +
    '본문의 대부분은 직접 쓴 분석이어야 합니다. 사실(수치/발표 내용)은 자유롭게 활용하되 표현은 새로 씁니다. ' +
    '문체는 딱딱한 보도가 아니라, 실무자가 옆에서 짚어주듯 구체적이고 밀도 있게.';
  const user =
    `다음 해외 소식을 한국어 심층 큐레이션으로 작성하세요. 본문은 800~1200자 분량의 분석 중심입니다.\n\n` +
    `[주요 원문]\n제목: ${item.title}\n출처: ${item.source}\nURL: ${item.link}\n요약(참고용): ${item.desc || '(없음)'}\n카테고리: ${category}\n\n` +
    `[교차 분석에 쓸 보조 소스 (1~2개, 본문 '여러 시각'·'출처'에 반드시 반영)]\n${relatedText}\n\n` +
    `아래 JSON만 출력하세요(설명/마크다운 금지). bodyHtml은 아래 구조를 정확히 따릅니다:\n` +
    `{\n  "title": "자연스러운 한국어 의역 제목(원문 직역 금지, 36자 내외)",\n` +
    `  "summary": "핵심을 담은 1~2문장 요약(110자 내외)",\n` +
    `  "bodyHtml": "` +
    `<p>리드 3~4문장: 무슨 일이고 지금 왜 주목해야 하는지.</p>` +
    `<blockquote>\\"원문 핵심 한 문장\\"<cite>출처명</cite></blockquote>` +
    `<h3>무슨 일인가</h3><p>주요 원문을 깊이 읽고 핵심 사실·맥락을 3~4문장으로 정리(분석하는 느낌).</p>` +
    `<h3>여러 시각</h3><p>도입 1문장.</p><ul><li><b>출처명</b> — 그 소스의 관점/주장 1~2문장.</li><li><b>다른 출처명</b> — 비교되는 관점 1~2문장.</li></ul>` +
    `<h3>왜 중요한가</h3><p>의미·파급효과 3~4문장.</p>` +
    `<h3>실무 적용</h3><ul><li>프론트엔드/UX/AI 실무 적용 포인트</li><li>두 번째 포인트</li><li>세 번째 포인트</li></ul>` +
    `<h3>Kenny의 관점</h3><p>프론트엔드·AX 관점의 차별화된 의견 3~4문장.</p>` +
    `<h3>출처</h3><ul><li><a href=\\"https://...\\">주요 출처명: 제목 ↗</a></li><li><a href=\\"https://...\\">보조 출처명: 제목 ↗</a></li></ul>` +
    `. 인용은 1문장 이내/따옴표/출처 필수, 보조 소스 최소 1개를 교차 인용.",\n` +
    `  "tags": ["영문태그", "영문태그", "영문태그"]\n}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 3000,
      system: sys,
      messages: [{ role: 'user', content: user }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = (data.content || []).map((c) => c.text || '').join('');
  const jsonStr = text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1);
  return JSON.parse(jsonStr);
}

// ---------- main ----------
async function main() {
  if (!API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY is not set. Aborting.');
    process.exit(1);
  }

  const posts = JSON.parse(readFileSync(DATA_PATH, 'utf8'));
  const usedUrls = new Set(posts.map((p) => p.sourceUrl));
  const usedTitles = new Set(posts.map((p) => (p.rawTitle || '').toLowerCase()));

  const forcedCategory = process.env.INSIGHTS_CATEGORY;
  const targetCategories = (forcedCategory === 'design' || forcedCategory === 'ai')
    ? [forcedCategory]
    : ['design', 'ai'];

  const selected = [];
  const runUrls = new Set();
  const runTitles = new Set();
  for (const cat of targetCategories) {
    const all = (await Promise.all(FEEDS[cat].map(fetchFeed))).flat();
    all.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    const freshItems = pickFreshItems(all, usedUrls, usedTitles, runUrls, runTitles, 3);
    if (freshItems.length > 0) {
      selected.push({
        item: freshItems[0],
        related: freshItems.slice(1),
        category: cat,
      });
      for (const it of freshItems) {
        runUrls.add(it.link);
        runTitles.add(String(it.title || '').toLowerCase());
      }
    } else {
      console.log(`No fresh source found for category: ${cat}`);
    }
  }

  if (selected.length === 0) {
    console.log('No new items found across feeds. Nothing to publish today.');
    process.exit(0);
  }

  const date = today();
  const newPosts = [];
  for (const picked of selected) {
    console.log(`Selected [${picked.category}] ${picked.item.source}: ${picked.item.title}`);
    if (picked.related.length > 0) {
      console.log(`Cross refs [${picked.category}]: ${picked.related.map((it) => it.source).join(', ')}`);
    }
    const c = await writeKoreanCuration(picked.item, picked.category, picked.related);
    const normalizedTitle = normalizeTitle(c.title, picked.item.title);
    const normalizedSummary = normalizeSummary(c.summary, picked.item.desc || picked.item.title);
    const normalizedTags = normalizeTags(c.tags, picked.category);
    let normalizedBodyHtml = normalizeWhitespace(c.bodyHtml) || `<p>${normalizedSummary}</p>`;
    if (!normalizedBodyHtml.includes('<h3>출처</h3>')) {
      normalizedBodyHtml += buildSourcesSection(picked.item, picked.related);
    }
    validateCuration({ bodyHtml: normalizedBodyHtml });

    if (normalizeWhitespace(c.title) !== normalizedTitle) {
      console.log(`Normalized title length/format: ${normalizedTitle}`);
    }
    if (normalizeWhitespace(c.summary) !== normalizedSummary) {
      console.log('Normalized summary length/format.');
    }

    const post = {
      id: `${date}-${slugify(normalizedTitle)}`,
      title: normalizedTitle,
      rawTitle: picked.item.title,
      category: picked.category,
      date,
      summary: normalizedSummary,
      bodyHtml: normalizedBodyHtml,
      source: picked.item.source,
      sourceUrl: picked.item.link,
      tags: normalizedTags,
      thumb: picked.item.thumb || '',
    };

    if (posts.some((p) => p.id === post.id) || newPosts.some((p) => p.id === post.id)) {
      post.id += '-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    }
    newPosts.push(post);
  }

  posts.unshift(...newPosts.reverse());
  writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2) + '\n');
  const n = buildInsightsData(projectRoot);
  for (const p of newPosts) {
    console.log(`Published [${p.category}] "${p.title}"`);
  }
  console.log(`Done. Total ${newPosts.length} new post(s), dataset now ${n}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
