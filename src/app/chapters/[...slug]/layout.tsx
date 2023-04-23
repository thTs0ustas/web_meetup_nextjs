'use client';
import Button from '@/components/navigationButton';
import content from '@/content.json';
import { nextPrev } from '@/utils';
import { useParams, useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const param = useParams();
  const router = useRouter();

  const { next, prev } = nextPrev(content, param?.slug as string);

  return (
    <div className="flex items-center justify-center bg-slate-900 text-lg text-white">
      <div className="my-10 flex w-11/12 max-w-4xl flex-col justify-center rounded-sm border border-gray-600 bg-slate-800 p-8 text-base">
        {children}
        <div className="flex w-full justify-between">
          <Button
            disabled={!prev}
            onClick={() => router.push(`/chapters/${prev}`)}
          >
            Previous
          </Button>
          <Button
            disabled={!next}
            onClick={() => router.push(`/chapters/${next}`)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
