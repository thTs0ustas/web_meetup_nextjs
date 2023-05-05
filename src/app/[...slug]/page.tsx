'use client';
import content from '@/content.json';

import ContentSkeleton from '@/components/contentSkeleton';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { createPath } from '@/utils/createPath';
import NavigationButtons from '@/components/navigationButtons';
import { nextPrev } from '@/utils';

export default function BlogPostPage() {
  const params = useParams();
  const { next, prev } = nextPrev(content, params?.slug as string);

  const Mdx = dynamic(() => import(`@/content/${createPath(content, params?.slug as string)}`), {
    loading: () => <ContentSkeleton />,
    ssr: false,
  });

  return (
    <div className="my-10 flex flex-col justify-center p-8 text-xs sm:text-base">
      <div className=" min-h-[250px] py-8 ">
        <Mdx />
      </div>
      <NavigationButtons
        next={next}
        prev={prev}
      />
    </div>
  );
}
