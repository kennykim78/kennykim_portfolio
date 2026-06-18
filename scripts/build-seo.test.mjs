import test from 'node:test';
import assert from 'node:assert/strict';
import { SITE_URL, MAIN_PAGES, PERSON, ORG, WEBSITE } from './seo-config.mjs';

test('SITE_URL is the canonical apex without trailing slash', () => {
  assert.equal(SITE_URL, 'https://rza.co.kr');
});

test('MAIN_PAGES lists the 5 indexable main pages with absolute paths', () => {
  const paths = MAIN_PAGES.map((p) => p.path);
  assert.deepEqual(paths, ['/', '/about.html', '/portfolio.html', '/consulting.html', '/insights.html']);
});

test('PERSON facts are grounded and include core strengths', () => {
  assert.equal(PERSON.name, 'Kenny Kim');
  assert.equal(PERSON.alternateName, '김경민');
  assert.ok(PERSON.knowsAbout.includes('기획'));
  assert.ok(PERSON.knowsAbout.includes('프론트엔드'));
  assert.ok(PERSON.knowsAbout.includes('AX'));
});

test('ORG is RZA founded by Kenny Kim', () => {
  assert.equal(ORG.name, 'RZA');
  assert.equal(ORG.founder, 'Kenny Kim');
});

test('WEBSITE.url is the apex with a single trailing slash', () => {
  assert.equal(WEBSITE.url, 'https://rza.co.kr/');
});

import { esc, abs, jsonLd, articleJsonLd } from './build-seo.mjs';

test('esc escapes HTML-significant characters', () => {
  assert.equal(esc('<a>&"'), '&lt;a&gt;&amp;&quot;');
});

test('abs builds absolute URLs from root-relative paths', () => {
  assert.equal(abs('/about.html'), 'https://rza.co.kr/about.html');
  assert.equal(abs('https://x.com/y'), 'https://x.com/y'); // already absolute, unchanged
});

test('jsonLd wraps an object in a script tag', () => {
  const out = jsonLd({ '@type': 'Thing', name: 'x' });
  assert.match(out, /<script type="application\/ld\+json">/);
  assert.match(out, /"@type": "Thing"/);
});

test('articleJsonLd contains headline, author and canonical', () => {
  const post = { id: 'p1', title: '제목<', summary: '요약', date: '2026-06-18', tags: ['CSS'], sourceUrl: 'https://s.com' };
  const out = articleJsonLd(post, 'https://rza.co.kr/insight/p1/');
  assert.match(out, /"@type": "Article"/);
  assert.match(out, /"headline": "제목\\u003c"/); // JSON.stringify handles escaping, not HTML-escaped
  assert.match(out, /"name": "Kenny Kim"/);
  assert.match(out, /"mainEntityOfPage": "https:\/\/rza\.co\.kr\/insight\/p1\/"/);
});

test('jsonLd neutralizes </script> breakout in values', () => {
  const out = jsonLd({ name: 'a</script>b' });
  assert.doesNotMatch(out, /<\/script>b/); // the value's closing tag is escaped
  assert.match(out, /\\u003c\/script>b/);
});

import { articleInnerHtml, renderInsightPage } from './build-seo.mjs';

const SAMPLE = {
  id: '2026-06-18-x', category: 'design', date: '2026-06-18',
  title: '센터링', summary: '요약문', bodyHtml: '<p>본문</p>',
  source: 'CSS-Tricks', sourceUrl: 'https://css-tricks.com/x/', tags: ['CSS', 'Layout'],
};

const FAKE_TEMPLATE = [
  '<!doctype html><html lang="ko"><head>',
  '<meta charset="UTF-8" />',
  '<link rel="canonical" href="https://rza.co.kr/insights.html" />',
  '<meta property="og:image" content="/image/og.png" />',
  '<title>Insights — Kenny Kim</title>',
  '<meta property="og:title" content="Insights — Kenny Kim" />',
  '<meta',
  '  property="og:description"',
  '  content="디자인·AI 및 IT 트렌드를 큐레이션합니다."',
  '/>',
  '<link rel="stylesheet" href="css/insights.css" />',
  '</head><body>',
  '<article class="insight-article" id="insightArticle" aria-live="polite"><!-- x --></article>',
  '<script src="js/insights.js"></script>',
  '</body></html>',
].join('\n');

test('articleInnerHtml mirrors renderDetail structure with server-rendered body', () => {
  const html = articleInnerHtml(SAMPLE);
  assert.match(html, /<h1 class="insight-title">센터링<\/h1>/);
  assert.match(html, /<div class="insight-body"><p>본문<\/p><\/div>/);
  assert.match(html, /insight-source-box/);
  assert.match(html, /#CSS/);
});

test('renderInsightPage injects base, canonical, title, article and prerender flag', () => {
  const out = renderInsightPage(SAMPLE, FAKE_TEMPLATE);
  assert.match(out, /<base href="\/" \/>/);
  assert.match(out, /<title>센터링 — Kenny Insights<\/title>/);
  assert.match(out, /<link rel="canonical" href="https:\/\/rza\.co\.kr\/insight\/2026-06-18-x\/" \/>/);
  assert.match(out, /property="og:type" content="article"/);
  assert.match(out, /window\.__INSIGHT_PRERENDERED__\s*=\s*true/);
  assert.match(out, /<h1 class="insight-title">센터링<\/h1>/); // body server-rendered into #insightArticle
  assert.doesNotMatch(out, /<!-- x -->/); // placeholder replaced
  assert.match(out, /"@type": "Article"/);
  assert.match(out, /property="og:description" content="요약문"/); // per-post summary injected
  assert.doesNotMatch(out, /큐레이션합니다/); // stale generic og:description removed
  assert.equal((out.match(/property="og:description"/g) || []).length, 1); // exactly one
  assert.equal((out.match(/property="og:image"/g) || []).length, 1); // de-duplicated
  assert.equal((out.match(/rel="canonical"/g) || []).length, 1); // exactly one canonical
  assert.match(out, /rel="canonical" href="https:\/\/rza\.co\.kr\/insight\/2026-06-18-x\/"/); // the per-post one
});

test('renderInsightPage throws if the article placeholder is missing', () => {
  assert.throws(
    () => renderInsightPage(SAMPLE, '<html><head></head><body></body></html>'),
    /insightArticle not found/
  );
});

import { renderSitemap } from './build-seo.mjs';

test('renderSitemap includes all main pages and one entry per post', () => {
  const posts = [
    { id: 'a', date: '2026-06-18' },
    { id: 'b', date: '2026-06-17' },
  ];
  const xml = renderSitemap(posts);
  assert.match(xml, /^<\?xml/);
  assert.match(xml, /<loc>https:\/\/rza\.co\.kr\/<\/loc>/);
  assert.match(xml, /<loc>https:\/\/rza\.co\.kr\/about\.html<\/loc>/);
  assert.match(xml, /<loc>https:\/\/rza\.co\.kr\/insight\/a\/<\/loc>/);
  assert.match(xml, /<lastmod>2026-06-17<\/lastmod>/);
  const locs = (xml.match(/<loc>/g) || []).length;
  assert.equal(locs, 5 + 2); // 5 main pages + 2 posts
  assert.doesNotMatch(xml, /insight\.html/); // shell excluded
});

import { renderRobots } from './build-seo.mjs';

test('renderRobots allows AI crawlers and points to sitemap', () => {
  const txt = renderRobots();
  assert.match(txt, /User-agent: \*/);
  assert.match(txt, /Allow: \//);
  for (const bot of ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'CCBot', 'Google-Extended']) {
    assert.match(txt, new RegExp('User-agent: ' + bot));
  }
  assert.match(txt, /Sitemap: https:\/\/rza\.co\.kr\/sitemap\.xml/);
});

import { renderLlms } from './build-seo.mjs';

test('renderLlms leads with Kenny Kim summary and lists recent posts', () => {
  const posts = Array.from({ length: 25 }, (_, i) => ({
    id: 'p' + i, title: 'T' + i, summary: 'S' + i, date: '2026-06-' + String((i % 28) + 1).padStart(2, '0'),
  }));
  const txt = renderLlms(posts);
  assert.match(txt, /# Kenny Kim/);
  assert.match(txt, /기획/);
  assert.match(txt, /프론트엔드/);
  assert.match(txt, /https:\/\/rza\.co\.kr\/about\.html/);
  // newest-first, capped at 20
  const postLinks = (txt.match(/\/insight\/p\d+\//g) || []).length;
  assert.equal(postLinks, 20);
});

import { INDEXNOW_KEY } from './seo-config.mjs';

test('INDEXNOW_KEY is a valid IndexNow key (hex, 8-128 chars)', () => {
  assert.match(INDEXNOW_KEY, /^[a-zA-Z0-9-]{8,128}$/);
  assert.equal(INDEXNOW_KEY, '7524750a9d09d4e77e47209370376372');
});
