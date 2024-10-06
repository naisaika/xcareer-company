import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJPFont = Noto_Sans_JP({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "FactorXキャリア－工場・製造業のための人材紹介サービス－",
  description: "Factor Xキャリアは、工場・製造業のための人材紹介サービスです。",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJPFont.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
