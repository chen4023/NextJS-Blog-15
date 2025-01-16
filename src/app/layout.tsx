import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



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
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className="grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
