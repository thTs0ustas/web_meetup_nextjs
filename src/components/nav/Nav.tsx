import Link from 'next/link';

export default function Nav() {
  return (
    <div
      className="sticky top-0 flex w-full items-center justify-between
        border-b border-b-white bg-slate-900 py-4 pl-5
        pr-5"
    >
      <Link
        href="/"
        className="text-lg font-bold text-gray-200"
      >
        Intro to Next.js
      </Link>
    </div>
  );
}
