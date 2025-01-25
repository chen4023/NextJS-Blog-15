import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sejong = localFont({
  src: '../../public/fonts/SejongGeulggot.ttf',
  display: 'swap',
  weight: '400',
  variable: '--font-Sejong',
})


// const Gmarket = localFont({
//   src: '../../public/fonts/GmarketSansTTFLight.ttf',
//   display: 'swap',
//   weight: '45 920',
//   variable: '--font-Gmarket',
// })

// const GmarketBold = localFont({
//   src: '../../public/fonts/GmarketSansTTFBold.ttf',
//   display: 'swap',
//   weight: '45 920',
//   variable: '--font-GmarketBold',
// })
export const metadata: Metadata = {
  title: "Chen Blog",
  description: "Next15 버전으로 블로그 개발",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Sejong.variable}  font-sejong flex flex-col w-full max-w-screen-2xl mx-auto`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
