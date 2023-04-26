import { clearPath } from './clearPath';

export const nextPrev = (content: { chapter: string; parts: string[] }[], slug: string) => {
  const t = content
    .map((c) => c.parts.map((p: string) => `${clearPath(c.chapter)}/${clearPath(p)}`))
    .flat();
  const i = t.indexOf(slug);

  return {
    next: t[i + 1] || null,
    prev: t[i - 1] || null,
  };
};
