// Single source of truth for SEO/AEO facts. Override domain via SITE_URL env if needed.
export const SITE_URL = (process.env.SITE_URL || 'https://rza.co.kr').replace(/\/+$/, '');

// Indexable main pages (insight.html shell and signature-test.html are excluded).
export const MAIN_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about.html', changefreq: 'monthly', priority: '0.9' },
  { path: '/portfolio.html', changefreq: 'monthly', priority: '0.8' },
  { path: '/consulting.html', changefreq: 'monthly', priority: '0.6' },
  { path: '/insights.html', changefreq: 'daily', priority: '0.7' },
];

// Grounded in about.html (Philosophy / Core Value / 23-year history).
export const PERSON = {
  name: 'Kenny Kim',
  alternateName: '김경민',
  jobTitle: 'Frontend AX UI/UX Manager',
  description:
    '디자인에서 출발해 기획·UI/UX·퍼블리싱·프론트엔드·PM/PL·글로벌 협업·AI/AX까지 23년간 직접 수행해온 실무형 리더.',
  image: '/image/og.png',
  profilePath: '/about.html',
  knowsLanguage: ['ko', 'en'],
  knowsAbout: [
    '기획', 'UI/UX 디자인', '웹 퍼블리싱', '프론트엔드', 'PM/PL', 'PMO',
    '글로벌 협업', 'AX', 'AI', '사업기획', 'QA', 'BX', 'IA 설계', 'Customer Journey',
  ],
};

export const ORG = {
  name: 'RZA',
  alternateName: 'Wemeet',
  url: SITE_URL,
  logo: '/image/common/logo.svg',
  founder: 'Kenny Kim',
};

export const WEBSITE = {
  name: 'Kenny Kim Portfolio',
  url: SITE_URL + '/',
  inLanguage: 'ko',
};
