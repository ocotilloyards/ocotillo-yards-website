import type { Metadata } from "next";
import { Barlow_Condensed, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PAGE_DESCRIPTIONS, PAGE_TITLES, SITE_URL } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["500", "600"],
});

const ogImage = `${SITE_URL}/og/ocotillo-lakes-ai-concept.png`;
const ogAlt =
  "AI concept of an Ocotillo Lakes backyard in Chandler AZ — visualization, not a completed job.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLES.home,
    template: "%s · Ocotillo Yards",
  },
  description: PAGE_DESCRIPTIONS.home,
  icons: { icon: "/ocotillo-yards-website/favicon.svg" },
  openGraph: {
    title: PAGE_TITLES.home,
    description: PAGE_DESCRIPTIONS.home,
    locale: "en_US",
    type: "website",
    siteName: "Ocotillo Yards",
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLES.home,
    description: PAGE_DESCRIPTIONS.home,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${barlow.variable}`}>
      <body className="flex min-h-screen flex-col bg-void text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-void focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
