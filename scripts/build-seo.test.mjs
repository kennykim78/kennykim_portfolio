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
