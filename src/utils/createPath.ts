export const createPath = <T extends any[]>(content: T, slug: string) => {
  const chapter = typeof slug === 'string' && slug.split('/')[0];
  const part = typeof slug === 'string' && slug.split('/')[1];

  const partPath = content
    .find((c) => c.chapter === chapter)
    ?.parts.find((p) => p.match(part.toString()));

  return `${chapter}/${partPath}`;
};
