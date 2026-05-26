import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = dirname(__dirname);

const sources = [
  join(projectRoot, 'js', 'custom-animation.js'),
  join(projectRoot, 'js', 'history-data.js'),
];

const distJsDir = join(projectRoot, 'dist', 'js');
mkdirSync(distJsDir, { recursive: true });

for (const src of sources) {
  if (!existsSync(src)) {
    throw new Error(`Missing source file: ${src}`);
  }
  cpSync(src, join(distJsDir, src.split(/[/\\]/).pop()));
}

const sourceImageDir = join(projectRoot, 'image');
const distImageDir = join(projectRoot, 'dist', 'image');
if (existsSync(sourceImageDir)) {
  cpSync(sourceImageDir, distImageDir, { recursive: true });
}

console.log('Copied static JS and image files to dist');
