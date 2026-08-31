import { CONTACT_EMAIL } from "@/lib/seo";

export function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "customer support",
    areaServed: "US",
    availableLanguage: "English",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
