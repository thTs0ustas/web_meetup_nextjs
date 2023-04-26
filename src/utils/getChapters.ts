import { readdirSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

export function getChapters() {
  const contentDir = resolve(process.cwd(), 'src/content');
  const contentFile = resolve(process.cwd(), 'src/content.json');

  const chapters = readdirSync(contentDir);

  const content = chapters.map((chapter) => {
    const parts = readdirSync(`${contentDir}/${chapter}`);
    return {
      chapter,
      parts,
    };
  });
  console.log(content);

  writeFileSync(contentFile, JSON.stringify(content));
}

getChapters();
