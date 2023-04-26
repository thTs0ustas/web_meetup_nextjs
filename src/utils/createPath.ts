export const createPath = <T extends any[]>(content: T, slug: string) => {
  const chapter = typeof slug === 'string' && slug.split('/')[0];
  const part = typeof slug === 'string' && slug.split('/')[1];

  const chapterPath = content.find((c) => c.chapter.match(chapter));
  const partPath = chapterPath.parts.find((p) => p.match(part));

  return `${chapterPath.chapter}/${partPath}`;
};
