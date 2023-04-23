import Link from "next/link";

export default function Nav() {
  return (
    <div
      className="flex justify-between pl-5 pr-5 sticky top-0
        items-center py-4 border-b border-b-white w-full
       bg-slate-900"
    >
      <Link href="/" className="text-lg font-bold text-gray-200">
        Intro to Next.js
      </Link>
      <Link href="/register" className="text-lg font-bold text-gray-200">
        {`{Title}`}
      </Link>
    </div>
  );
}
