'use client';
import content from '@/content.json';

import ContentSkeleton from '@/components/contentSkeleton';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { createPath } from '@/utils/createPath';

export default function BlogPostPage() {
  const params = useParams();

  const Mdx = dynamic(() => import(`@/content/${createPath(content, params?.slug as string)}`), {
    loading: () => <ContentSkeleton />,
  });

  return (
    <div className="min-h-[250px] py-8">
      <Mdx />
    </div>
  );
}
