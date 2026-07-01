import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { LegalLayout } from "@/components/LegalLayout";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${siteConfig.name}.`,
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout title="Impressum">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            {siteConfig.name}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
          </p>

          <h2>Handelsregister</h2>
          <p>{siteConfig.register}</p>

          <h2>Vertreten durch</h2>
          <p>{siteConfig.representative}</p>

          <h2>Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            <br />
            Telefax: {siteConfig.fax}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>

          <h2>Angaben zur Berufshaftpflichtversicherung</h2>
          <p>
            Name und Sitz des Versicherers:
            <br />
            VHV Allgemeine Versicherung AG
            <br />
            VHV-Platz 1, 30177 Hannover
            <br />
            Geltungsraum der Versicherung: Deutschland
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            {siteConfig.representative}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </LegalLayout>
      </main>
      <SiteFooter />
    </>
  );
}
