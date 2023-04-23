import ChapterCard from "@/components/chapterCard";
import PresentationCard from "@/components/presentationCard";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center text-lg text-white bg-slate-900">
      <PresentationCard />
      <div className="flex flex-col gap-2 w-4/5">
        <h3 className="text-lg font-medium">Table of contents</h3>
        <ChapterCard title="Introduction" parts={["one", "two"]} />
        <ChapterCard title="Introduction" parts={["one", "two"]} />
        <ChapterCard title="Introduction" parts={["one", "two"]} />
        <ChapterCard title="Introduction" parts={["one", "two"]} />
        <ChapterCard title="Introduction" parts={["one", "two"]} />
      </div>
    </div>
  );
}
