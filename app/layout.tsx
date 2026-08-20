
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://SIZNING-DOMENINGIZ.com"),

  title: {
    default: "Türk Dili Multilevel | Türkçe CEFR Testleri",
    template: "%s | Türk Dili Multilevel",
  },

  description:
    "Türkçe CEFR sınavlarına hazırlık platformu. Okuma, dinleme, konuşma ve yazma becerilerinizi geliştirmek için multilevel testler ve interaktif alıştırmalar.",

  keywords: [
    "Türk Dili Multilevel",
    "Türkçe CEFR",
    "Türkçe sınav",
    "Türkçe test",
    "Türkçe okuma testi",
    "Türkçe dinleme testi",
    "Türkçe konuşma",
    "Türkçe yazma",
    "CEFR Türkçe",
    "Türkçe B1",
    "Türkçe B2",
    "Türkçe C1",
    "Türkçe multilevel",
  ],

  authors: [
    {
      name: "Türk Dili Multilevel",
    },
  ],

  creator: "Türk Dili Multilevel",

  openGraph: {
    title: "Türk Dili Multilevel | Türkçe CEFR Testleri",
    description:
      "Türkçe CEFR sınavlarına hazırlık için interaktif okuma, dinleme, konuşma ve yazma testleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Türk Dili Multilevel",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
