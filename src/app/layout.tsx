import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { homepageMeta, siteConfig } from "@/content/homepage";
import { PREFERRED_SITE_URL } from "@/lib/seo";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  preload: true,
  adjustFontFallback: true,
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9ef",
};

export const metadata: Metadata = {
  // Preferred host is apex (https://treedrawing.us) — no www.
  metadataBase: new URL(PREFERRED_SITE_URL),
  title: {
    default: homepageMeta.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: homepageMeta.description,
  applicationName: siteConfig.name,
  authors: [{ name: "TreeDraw", url: PREFERRED_SITE_URL }],
  creator: "TreeDraw",
  publisher: "TreeDraw",
  category: "education",
  keywords: [
    "tree drawing",
    "easy tree drawing",
    "simple tree drawing",
    "how to draw a tree",
    "drawing of a tree",
    "pencil tree drawing",
  ],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    url: PREFERRED_SITE_URL,
    title: homepageMeta.title,
    description: homepageMeta.description,
    images: [
      {
        url: "/images/perf/v2/hero.webp",
        width: 720,
        height: 640,
        alt: "easy tree drawing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageMeta.title,
    description: homepageMeta.description,
    images: ["/images/perf/v2/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <GoogleAnalytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-button focus:bg-sun focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
