const EMAIL = "ocotilloyardsaz@gmail.com";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ocotillo Yards",
    description:
      "Visualization and referral service in Chandler, Arizona. Free two-view AI concepts for landscape, hardscape, and LED lighting, plus a one-page idea board, then an introduction to a licensed local crew. Not a licensed contractor.",
    email: EMAIL,
    areaServed: {
      "@type": "Place",
      name: "Ocotillo Lakes",
      containedInPlace: {
        "@type": "City",
        name: "Chandler",
        containedInPlace: { "@type": "State", name: "Arizona" },
      },
    },
    knowsAbout: [
      "AI landscape visualization",
      "hardscape visualization",
      "LED landscape lighting visualization",
      "Ocotillo Community Association Design Review Board",
      "licensed contractor referral",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
