import { CONTACT_EMAIL, NEXTDOOR_URL, SITE_URL } from "@/lib/seo";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Ocotillo Yards",
        url: SITE_URL,
        email: CONTACT_EMAIL,
        description:
          "Yard visualization and licensed-contractor introduction for Ocotillo Lakes in Chandler, Arizona. Ocotillo Yards is not a contractor.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chandler",
          addressRegion: "AZ",
          addressCountry: "US",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Chandler",
            containedInPlace: { "@type": "State", name: "Arizona" },
          },
          { "@type": "Place", name: "Ocotillo Lakes" },
        ],
        sameAs: [NEXTDOOR_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Ocotillo Yards",
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Ocotillo Yards visualization",
        serviceType: "Yard visualization and licensed-contractor introduction.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Chandler AZ" },
          { "@type": "Place", name: "Ocotillo Lakes" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
