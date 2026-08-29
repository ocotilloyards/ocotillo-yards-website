import type { Metadata } from "next";
import { Barlow_Condensed, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ocotilloyards.github.io/ocotillo-yards-website"),
  title: {
    default: "Ocotillo Yards — Chandler visualization & licensed crew intro",
    template: "%s · Ocotillo Yards",
  },
  description:
    "Visualization and referral for Chandler’s Ocotillo Lakes. Free two-view AI concepts for landscape, hardscape, and LED lighting, plus a one-page idea board, then an introduction to a licensed local crew. Not a licensed contractor.",
  icons: { icon: "/ocotillo-yards-website/favicon.svg" },
  openGraph: {
    title: "Ocotillo Yards",
    description:
      "Matchmaker, not a GC. Free two-view AI concept for landscape, hardscape, and lighting in Ocotillo Lakes, then a licensed crew intro.",
    locale: "en_US",
    type: "website",
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
