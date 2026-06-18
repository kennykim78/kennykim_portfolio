// Notifies IndexNow (Bing, Yandex, and other participating engines — used by ChatGPT/Copilot)
// about newly published insights. The public key is hosted at https://rza.co.kr/<key>.txt.
// Run after the daily insight publish: node scripts/indexnow-ping.mjs  (add --dry-run to preview).
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE_URL, INDEXNOW_KEY } from './seo-config.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const ENDPOINT = 'https://api.indexnow.org/indexnow';

export function newestDatePosts(posts) {
  const max = posts.reduce((m, p) => (String(p.date) > m ? String(p.date) : m), '');
  return posts.filter((p) => String(p.date) === max);
}

export function buildPayload(posts, { siteUrl = SITE_URL, key = INDEXNOW_KEY } = {}) {
  const host = siteUrl.replace(/^https?:\/\//, '');
  const urlList = [siteUrl + '/', siteUrl + '/insights.html'];
  for (const p of newestDatePosts(posts)) urlList.push(siteUrl + '/insight/' + p.id + '/');
  return { host, key, keyLocation: siteUrl + '/' + key + '.txt', urlList };
}

async function submit(payload, endpoint = ENDPOINT) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  return res.status;
}

async function main() {
  const posts = JSON.parse(readFileSync(join(projectRoot, 'data', 'insights.json'), 'utf8'));
  const payload = buildPayload(posts);
  console.log('IndexNow payload:\n' + JSON.stringify(payload, null, 2));
  if (process.argv.includes('--dry-run')) {
    console.log('(--dry-run: not submitting)');
    return;
  }
  try {
    const status = await submit(payload);
    console.log('IndexNow submit status: ' + status);
    // IndexNow returns 200 or 202 on success. Do not fail the publish on a non-2xx.
    if (status < 200 || status >= 300) console.log('IndexNow non-2xx (non-fatal): ' + status);
  } catch (err) {
    console.log('IndexNow submit failed (non-fatal): ' + (err && err.message));
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
