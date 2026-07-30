import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.budgethomes4u.com";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BudgetHomes | Flats in Palghar West",
    template: "%s | BudgetHomes",
  },
  description:
    "Verified Palghar West property information, Fair Township prices, carpet areas, video tours, buyer guides and free site visits.",
  applicationName: "BudgetHomes",
  authors: [{ name: "BudgetHomes Editorial" }],
  creator: "BudgetHomes",
  publisher: "OM Group of Companies",
  keywords: [
    "1 BHK flat in Palghar West",
    "ready to move flat in Palghar",
    "Fair Township Palghar",
    "OM Value Homes",
    "budget homes Palghar",
    "2 BHK Palghar West",
    "3 BHK Palghar",
    "RERA approved project Palghar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "BudgetHomes",
    title: "BudgetHomes | Verified Flats in Palghar West",
    description:
      "Explore verified project information, real flat tours and buyer guides for Fair Township, Palghar West.",
    images: [
      {
        url: "https://i.ytimg.com/vi/IPvHVd5iHvc/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "Fair Township Palghar West flat tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BudgetHomes | Flats in Palghar West",
    description:
      "Verified prices, carpet areas, possession details and real video tours.",
    images: ["https://i.ytimg.com/vi/IPvHVd5iHvc/maxresdefault.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "codex-preview": "development",
    "geo.region": "IN-MH",
    "geo.placename": "Palghar West",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${newsreader.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
