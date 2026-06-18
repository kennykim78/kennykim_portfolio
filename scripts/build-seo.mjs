import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE_URL, MAIN_PAGES, PERSON, ORG } from './seo-config.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));

export function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function abs(path) {
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}

export function jsonLd(obj) {
  // Escape '<' so a value containing "</script>" can't break out of the script block.
  const json = JSON.stringify(obj, null, 2).replace(/</g, '\\u003c');
  return '<script type="application/ld+json">\n' + json + '\n</script>';
}

export function articleJsonLd(post, canonical) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    inLanguage: 'ko',
    author: { '@type': 'Person', name: PERSON.name, url: abs(PERSON.profilePath) },
    publisher: {
      '@type': 'Organization',
      name: ORG.name,
      logo: { '@type': 'ImageObject', url: abs(ORG.logo) },
    },
    mainEntityOfPage: canonical,
    keywords: (post.tags || []).join(', '),
    isBasedOn: post.sourceUrl,
  });
}

export function breadcrumbJsonLd(post, canonical) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Insights', item: abs('/insights.html') },
      { '@type': 'ListItem', position: 2, name: post.title, item: canonical },
    ],
  });
}

const CAT_LABEL = { design: 'Design', ai: 'AI', plan: '기획·QA', pm: 'PM·사업기획' };
const catLabel = (c) => CAT_LABEL[c] || (c ? String(c).toUpperCase() : '');
const fmtDate = (d) => {
  const p = String(d || '').split('-');
  return p.length === 3 ? p.join('.') : String(d || '');
};

// Mirrors js/insights.js renderDetail() inner markup so existing CSS applies.
export function articleInnerHtml(post) {
  const tags = (post.tags || [])
    .map((t) => '<span class="tag">#' + esc(t) + '</span>')
    .join('');
  return (
    '<div class="insight-head">' +
    '<div class="card-meta"><span class="card-cat" data-cat="' + esc(post.category) + '">' +
    esc(catLabel(post.category)) + '</span>' +
    '<span class="card-date">' + esc(fmtDate(post.date)) + '</span></div>' +
    '<h1 class="insight-title">' + esc(post.title) + '</h1>' +
    (tags ? '<div class="insight-tags">' + tags + '</div>' : '') +
    '</div>' +
    '<div class="insight-body">' + (post.bodyHtml || '<p>' + esc(post.summary) + '</p>') + '</div>' +
    '<div class="insight-source-box">' +
    '<p>이 글은 아래 원문을 바탕으로 Kenny가 한국어로 요약·정리한 큐레이션입니다.</p>' +
    '<a href="' + esc(post.sourceUrl) + '" target="_blank" rel="noopener noreferrer nofollow">' +
    '원문 보기 — ' + esc(post.source || post.sourceUrl) + ' ↗</a>' +
    '</div>'
  );
}

export function renderInsightPage(post, template) {
  const canonical = abs('/insight/' + post.id + '/');
  const title = post.title + ' — Kenny Insights';

  // Existing social/title metas to strip (we inject fresh per-post versions below).
  const stripKeys = ['og:title', 'og:description', 'og:image', 'og:type', 'twitter:title', 'twitter:description'];

  const headInjection = [
    '<meta name="description" content="' + esc(post.summary) + '" />',
    '<meta property="og:title" content="' + esc(title) + '" />',
    '<meta property="og:description" content="' + esc(post.summary) + '" />',
    '<meta property="og:type" content="article" />',
    '<meta property="og:url" content="' + canonical + '" />',
    '<meta property="og:image" content="' + abs(PERSON.image) + '" />',
    '<meta name="twitter:title" content="' + esc(title) + '" />',
    '<meta name="twitter:description" content="' + esc(post.summary) + '" />',
    '<link rel="canonical" href="' + canonical + '" />',
    articleJsonLd(post, canonical),
    breadcrumbJsonLd(post, canonical),
  ].join('\n');

  let html = template;
  // 1) base tag so root-relative assets resolve from /insight/<id>/
  html = html.replace(/<head>/i, '<head>\n<base href="/" />');
  // 2) title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + esc(title) + '</title>');
  // 3) strip existing social/title metas (tolerant of multi-line tags), then inject fresh set
  for (const key of stripKeys) {
    const re = new RegExp('<meta\\b[^>]*(?:property|name)="' + key + '"[^>]*>', 'gi');
    html = html.replace(re, '');
  }
  html = html.replace(/<\/head>/i, headInjection + '\n</head>');
  // 4) server-render the article body (fail loudly if the template changed)
  const beforeArticle = html;
  html = html.replace(
    /(<article[^>]*id="insightArticle"[^>]*>)[\s\S]*?(<\/article>)/i,
    '$1' + articleInnerHtml(post) + '$2'
  );
  if (html === beforeArticle) {
    throw new Error('renderInsightPage: #insightArticle not found in template for ' + post.id);
  }
  // 5) prerender flag so insights.js does not clobber server HTML
  html = html.replace(
    /<\/body>/i,
    '<script>window.__INSIGHT_PRERENDERED__=true;window.__INSIGHT_ID__=' +
      JSON.stringify(post.id) + ';</script>\n</body>'
  );
  return html;
}

export function renderSitemap(posts) {
  const today = posts.reduce((m, p) => (p.date > m ? p.date : m), '2026-01-01');
  const urls = [];
  for (const pg of MAIN_PAGES) {
    const lastmod = pg.path === '/insights.html' || pg.path === '/' ? today : '';
    urls.push(
      '  <url><loc>' + abs(pg.path) + '</loc>' +
        (lastmod ? '<lastmod>' + lastmod + '</lastmod>' : '') +
        '<changefreq>' + pg.changefreq + '</changefreq>' +
        '<priority>' + pg.priority + '</priority></url>'
    );
  }
  for (const p of posts) {
    urls.push(
      '  <url><loc>' + abs('/insight/' + p.id + '/') + '</loc>' +
        '<lastmod>' + p.date + '</lastmod>' +
        '<changefreq>monthly</changefreq><priority>0.6</priority></url>'
    );
  }
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') +
    '\n</urlset>\n'
  );
}

export function renderRobots() {
  const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'CCBot', 'Google-Extended'];
  const lines = ['User-agent: *', 'Allow: /', ''];
  for (const bot of aiBots) {
    lines.push('User-agent: ' + bot, 'Allow: /', '');
  }
  lines.push('Sitemap: ' + abs('/sitemap.xml'), '');
  return lines.join('\n');
}

export function renderLlms(posts) {
  const sorted = posts.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const recent = sorted.slice(0, 20);
  const out = [];
  out.push('# Kenny Kim');
  out.push('');
  out.push('> ' + PERSON.name + ' (' + PERSON.alternateName + ') — ' + PERSON.jobTitle + '. ' + PERSON.description);
  out.push('');
  out.push('## 강점 (Expertise)');
  out.push(PERSON.knowsAbout.join(', '));
  out.push('');
  out.push('## 대표 프로젝트');
  out.push('청와대, KBS, BMW MINI, MetLife, 직방, Keymedia International(글로벌 미디어), 인도네시아 관광청, SKT Btv, KCC 등 (상세: ' + abs('/about.html') + ', ' + abs('/portfolio.html') + ').');
  out.push('');
  out.push('## 주요 페이지');
  for (const pg of MAIN_PAGES) out.push('- ' + abs(pg.path));
  out.push('');
  out.push('## 최근 인사이트');
  for (const p of recent) {
    out.push('- [' + p.title + '](' + abs('/insight/' + p.id + '/') + ') — ' + (p.summary || ''));
  }
  out.push('');
  return out.join('\n');
}
