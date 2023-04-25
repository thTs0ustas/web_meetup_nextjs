'use client';
import NavigationButtons from '@/components/navigationButtons';
import Button from '@/components/navigationButtons/button';
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
        <NavigationButtons
          next={next}
          prev={prev}
        />
      </div>
    </div>
  );
}
