"use client";

import ContentSkeleton from "@/components/contentSkeleton";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();

  const Mdx = dynamic(() => import(`@/content/${params?.slug}.mdx`), {
    loading: () => <ContentSkeleton />,
  });

  return (
    <div className="py-8 min-h-[250px]">
      <Mdx />
    </div>
  );
}
