import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastDL - Free Instagram Video, Reels & Photo Downloader",
  description:
    "FastDL is a fast, free, and secure browser-based tool to download Instagram Videos, Reels, Photos, Stories, and Highlights in high quality. No login required.",
  keywords: [
    "Instagram Downloader",
    "FastDL",
    "Download Instagram Videos",
    "Save Instagram Reels",
    "Instagram Story Downloader",
    "Download IG Photo HD",
  ],
  authors: [{ name: "FastDL", url: "https://fastdl.io/" }],
  openGraph: {
    title: "FastDL - Free Instagram Video, Reels & Photo Downloader",
    description:
      "Save Instagram Reels, Videos, Stories, and Photos in Full HD without logging in.",
    url: "https://fastdl.io/",
    siteName: "FastDL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastDL - Instagram Downloader",
    description:
      "Fast, free & secure Instagram media downloader. Save Reels and Videos in HD.",
    creator: "@fastdlio",
  },
  alternates: {
    canonical: "https://fastdl.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fastdl.io/#organization",
        name: "FastDL",
        alternateName: "FastDL.io",
        url: "https://fastdl.io/",
        logo: "https://fastdl.io/android-chrome-512x512.png",
        sameAs: [
          "https://x.com/fastdlio",
          "https://www.pinterest.com/fastdlio/",
          "https://github.com/fastdlio",
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://fastdl.io/#webapp",
        name: "FastDL Instagram Downloader",
        url: "https://fastdl.io/",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: {
          "@id": "https://fastdl.io/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
