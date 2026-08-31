import type { Metadata } from "next";

export const SITE_URL = "https://ocotilloyards.github.io/ocotillo-yards-website";
export const OG_IMAGE_PATH = "/og/ocotillo-lakes-ai-concept.png";
export const NEXTDOOR_URL = "https://nextdoor.com/page/ocotillo-yards-chandler-az/";
export const CONTACT_EMAIL = "oclakesyards@gmail.com";

const OG_ALT =
  "AI concept of an Ocotillo Lakes backyard in Chandler AZ — visualization, not a completed job.";

export function pageUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const withLead = path.startsWith("/") ? path : `/${path}`;
  const withTrail = withLead.endsWith("/") ? withLead : `${withLead}/`;
  return `${SITE_URL}${withTrail}`;
}

function ogImageUrl(): string {
  return `${SITE_URL}${OG_IMAGE_PATH}`;
}

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = pageUrl(path);
  const image = ogImageUrl();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "en_US",
      siteName: "Ocotillo Yards",
      images: [{ url: image, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Do you install?",
    a: "No. Ocotillo Yards is not a contractor. We visualize, then introduce an Arizona ROC crew if you want to build.",
  },
  {
    q: "Do you have an ROC?",
    a: "No. The crew we intro does.",
  },
  {
    q: "Do you file with the HOA?",
    a: "No. The homeowner or the hired crew does.",
  },
  {
    q: "Is the concept free?",
    a: "Yes — two views + an idea board.",
  },
  {
    q: "Pools?",
    a: "We do not install pools. We will not concept a pool as a construction bid.",
  },
];

export const PAGE_TITLES = {
  home: "Ocotillo Yards | Ocotillo Lakes yard concepts + licensed crew intro",
  howItWorks: "How Ocotillo Yards works | Two AI views, then a licensed intro",
  homeowners: "Ocotillo Lakes yard ideas for homeowners | Chandler AZ",
  contractors: "Arizona ROC crews | Partner with Ocotillo Yards in Chandler",
  work: "Ocotillo Lakes yard concepts and featured jobs",
  contact: "Contact Ocotillo Yards | Ocotillo Lakes, Chandler",
} as const;

export const PAGE_DESCRIPTIONS = {
  home: "Free two-view AI concepts (landscape, hardscape, LED) for Ocotillo Lakes in Chandler AZ, then an intro to an Arizona ROC crew. Ocotillo Yards is not a contractor.",
  howItWorks:
    "Send photos, get two AI views labeled AI Concept, meet an Arizona ROC crew if you want to build, then we step out of payment and install. Ocotillo Yards is not a contractor.",
  homeowners:
    "Landscape, hardscape, and LED ideas for Ocotillo Lakes homeowners in Chandler AZ. Free two-view AI concepts, then a licensed crew intro. Ocotillo Yards is not a contractor.",
  contractors:
    "Licensed Arizona ROC crews: partner with Ocotillo Yards for Ocotillo Lakes homeowner intros in Chandler. We visualize. You hold the license. Ocotillo Yards is not a contractor.",
  work: "Ocotillo Lakes yard concepts and featured jobs in Chandler AZ. Every tile is labeled AI Concept, Completed by Featured Provider, or Founding Project—In Progress. Ocotillo Yards is not a contractor.",
  contact:
    "Request two views from Ocotillo Yards for Ocotillo Lakes in Chandler, or apply as a licensed Arizona ROC crew. Email oclakesyards@gmail.com. Ocotillo Yards is not a contractor.",
} as const;
