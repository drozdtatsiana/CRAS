import sharp from 'sharp';
import { readdir, rename } from 'node:fs/promises';
import path from 'node:path';

sharp.cache(false);
sharp.concurrency(1);

const dir = 'app/images/src';

const maxWidth = (name) => {
  if (name.startsWith('hero')) return 1920;
  if (name.startsWith('team')) return 800;
  return 1200;
};

const files = await readdir(dir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const src = path.join(dir, file);
  const tmp = path.join(dir, `tmp-${file}`);

  const img = sharp(src).resize({ width: maxWidth(file), withoutEnlargement: true });

  if (ext === '.png') {
    await img.png({ compressionLevel: 9 }).toFile(tmp);
  } else {
    await img.jpeg({ quality: 80, mozjpeg: true }).toFile(tmp);
  }

  await rename(tmp, src);
  console.log('готово:', file);
}
