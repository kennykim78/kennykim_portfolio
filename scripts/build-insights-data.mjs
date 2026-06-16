// Regenerates js/insights-data.js from data/insights.json
// Run standalone: node scripts/build-insights-data.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));

export function buildInsightsData(root = projectRoot) {
  const jsonPath = join(root, 'data', 'insights.json');
  const outPath = join(root, 'js', 'insights-data.js');
  const data = JSON.parse(readFileSync(jsonPath, 'utf8'));

  // newest first
  data.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

  const banner =
    '/**\n' +
    ' * Insights data (auto-generated from data/insights.json)\n' +
    ' * Do not edit by hand. Run scripts/generate-post.mjs or scripts/build-insights-data.mjs.\n' +
    ' */\n';
  writeFileSync(outPath, banner + 'window.INSIGHTS = ' + JSON.stringify(data, null, 2) + ';\n');
  return data.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const n = buildInsightsData();
  console.log(`Built js/insights-data.js (${n} posts)`);
}
