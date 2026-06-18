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
  return '<script type="application/ld+json">\n' + JSON.stringify(obj, null, 2) + '\n</script>';
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
