import ChapterCard from '@/components/chapterCard';
import PresentationCard from '@/components/presentationCard';
import content from '@/content.json';
import { clearPath } from '@/utils';

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 text-lg text-white">
      <PresentationCard />
      <div className="flex w-4/5 max-w-5xl flex-col gap-2">
        <h3 className="text-lg font-medium">Table of contents</h3>
        {content.map((chapter) => (
          <ChapterCard
            key={chapter.chapter}
            chapter={clearPath(chapter.chapter)}
            parts={chapter.parts}
          />
        ))}
      </div>
    </div>
  );
}
