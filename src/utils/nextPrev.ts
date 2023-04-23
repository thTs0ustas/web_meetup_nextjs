export const nextPrev = <T extends any[]>(content: T, slug: string) => {
  const t = content.map((c) => c.parts.map((p) => `${c.chapter}/${p.split('.')[1]}`)).flat();
  const i = t.indexOf(slug);

  return {
    next: t[i + 1] || null,
    prev: t[i - 1] || null,
  };
};
