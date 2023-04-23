export const nextPrev = <T extends any[]>(content: T, slug: string) => {
  const t = content
    .map((c) => c.post.map((p) => `${c.chapter}-${p.title}`))
    .flat();
  const i = t.indexOf(slug);

  return {
    next: t[i + 1] || null,
    prev: t[i - 1] || null,
  };
};
