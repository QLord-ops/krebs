import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { LegalLayout } from "@/components/LegalLayout";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der ${siteConfig.name}.`,
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout title="Datenschutzerklärung">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Verantwortliche Stelle</h3>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {siteConfig.name}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
            <br />
            Telefon: {siteConfig.phone}
            <br />
            E-Mail: {siteConfig.email}
          </p>

          <h2>2. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>Google Maps</h3>
          <p>
            Diese Seite nutzt über eine Einbettung den Kartendienst Google Maps. Anbieter ist die
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Beim Aufruf der
            Karte kann Ihre IP-Adresse an Google übertragen werden. Weitere Informationen finden
            Sie in der Datenschutzerklärung von Google:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
            Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies können Browser-Typ,
            Betriebssystem, Referrer URL, Hostname, Uhrzeit der Serveranfrage und IP-Adresse sein.
          </p>

          <h2>3. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder
            Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
            Sie sich jederzeit an uns wenden.
          </p>
        </LegalLayout>
      </main>
      <SiteFooter />
    </>
  );
}
