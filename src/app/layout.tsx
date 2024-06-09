import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Random Japanese Deffence",
  description: "with CSKIM",
};

const fontSans = Noto_Sans_KR({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={cn("min-h-screen flex flex-col", fontSans.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
