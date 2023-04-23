// import { readdirSync, writeFileSync } from 'fs';
// import { join, resolve } from 'path';

// export function getChapters() {
//   const contentDir = resolve(process.cwd(), 'src/content');
//   const contentFile = join(process.cwd(), 'src/content');

//   const chapters = readdirSync(contentDir);
//   const content = chapters.map((chapter) => {
//     const parts = readdirSync(`${contentDir}/${chapter}`);
//     return {
//       chapter,
//       parts: parts.map((part) => part.split('.')[1]),
//     };
//   });

//   writeFileSync(contentFile, JSON.stringify(content));
// }

// getChapters();
