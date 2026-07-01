import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    image: `${siteConfig.url}/brand/krebs-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: "Heilbad Heiligenstadt",
      addressRegion: "Thüringen",
      postalCode: "37308",
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    areaServed: ["Göttingen", "Kassel", "Northeim", "Heiligenstadt", "Eichsfeld"],
    sameAs: ["https://www.krebs-tiefbau.de"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
