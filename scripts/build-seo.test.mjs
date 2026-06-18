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
