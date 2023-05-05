import NavigationButtons from '@/components/navigationButtons';
import Button from '@/components/navigationButtons/button';
import content from '@/content.json';
import { nextPrev } from '@/utils';
import { upperFirst } from 'lodash-es';
import Head from 'next/head';
import { useParams } from 'next/navigation';

export async function generateMetadata({ params }) {
  return {
    title: params.slug.map(upperFirst).join('-'),
  };
}

export default function RootLayout({ children }) {
  return (
    <div className="flex items-center justify-center bg-slate-900 text-lg text-white">
      <div className="my-10 flex w-11/12 max-w-4xl flex-col justify-center rounded-sm border border-gray-600 bg-slate-800  text-base">
        {children}
      </div>
    </div>
  );
}
