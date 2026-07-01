export const siteConfig = {
  name: "Krebs Tief- & Straßenbau GmbH",
  shortName: "Krebs Tiefbau",
  description:
    "Tiefbau, Straßenbau, Kanalbau und Außenanlagen in Göttingen, Kassel, Northeim und Heiligenstadt. Eigene Kolonnen, moderne Technik, verlässliche Ausführung.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.krebs-tiefbau.de",
  phone: "03606 / 60 86 08 0",
  phoneHref: "+4936066086080",
  fax: "03606 / 60 86 08 1",
  email: "info@krebs-tiefbau.de",
  address: {
    street: "Siemeröder Straße 2",
    city: "37308 Heilbad Heiligenstadt OT Siemerode",
    country: "DE",
  },
  geo: {
    latitude: 51.4192787,
    longitude: 10.1200621,
  },
  hours: "Mo–Do 8:00–16:00, Fr 8:00–13:00",
  foundingGmbh: 2015,
  experienceSince: 2007,
  register: "HRB 511134, Amtsgericht Jena",
  representative: "Christian Krebs",
};
