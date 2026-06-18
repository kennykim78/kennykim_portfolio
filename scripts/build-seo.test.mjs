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
  '<title>Insights — Kenny Kim</title>',
  '<meta property="og:title" content="Insights — Kenny Kim" />',
  '<meta property="og:description" content="디자인·AI 및 IT 트렌드를 큐레이션합니다." />',
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
});
