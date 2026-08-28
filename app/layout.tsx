import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ocotillo Yards — Chandler visualization & licensed crew intro",
    template: "%s · Ocotillo Yards",
  },
  description:
    "Visualization and referral for Chandler’s Ocotillo Lakes. Free two-view AI backyard, roof, and landscape concepts plus a one-page idea board, then an introduction to a licensed local crew. Not a licensed contractor.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ocotillo Yards",
    description:
      "Matchmaker, not a GC. Free two-view AI concept and idea board for Ocotillo Lakes, then a licensed crew intro.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
