import Nav from '@/components/nav';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Web Meetup - Next.js',
  description: 'Meet up presentation for Next.js 13 ( ͡° ͜ʖ ͡°) with App directory.',
  icons: [
    {
      rel: 'icon',
      url: '/assets/next.png',
    },
  ],
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="min-h-[calc(100vh-61px)] bg-slate-900">{children}</main>
      </body>
    </html>
  );
}
