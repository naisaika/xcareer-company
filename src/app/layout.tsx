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
      <head>
        <meta property="og:title" content="FactorXキャリア－工場・製造業のための人材紹介サービス－" />
        <meta property="og:description" content="Factor Xキャリアは、工場・製造業のための人材紹介サービスです。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.factorx.jp/xcareercompany" />
        <meta property="og:image" content="https://www.factorx.jp/xcareercompany/OGP.png" />
        <meta property="og:site_name" content="FactorXキャリア－工場・製造業のための人材紹介サービス－" />
        <meta property="og:locale" content="ja_JP"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FactorXキャリア－工場・製造業のための人材紹介サービス－" />
        <meta name="twitter:description" content="Factor Xキャリアは、工場・製造業のための人材紹介サービスです。" />
        <meta name="twitter:image" content="https://www.factorx.jp/xcareercompany/OGP.png" />
        <meta name="format-detection" content="telephone=no"></meta>
      </head>
      <body className={NotoSansJPFont.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}