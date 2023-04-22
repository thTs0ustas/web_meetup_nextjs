import "./globals.css";

export const metadata = {
  title: "Next.js",
  description:
    "Meet up presentation for Next.js 13 ( ͡° ͜ʖ ͡°) with App directory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
