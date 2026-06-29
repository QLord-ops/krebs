import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { CinematicHero } from "@/components/CinematicHero";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";

const services = [
  {
    title: "Wohnbau",
    text: "Individuelle Wohnprojekte mit klarer Planung, hochwertiger Ausführung und persönlicher Betreuung.",
    image: "/images/service-wohnbau.jpg",
    alt: "Morgendliches Baugrundstück für ein hochwertiges Wohnprojekt",
  },
  {
    title: "Gewerbebau",
    text: "Funktionale und repräsentative Gebäude für Unternehmen, Praxen, Büros und Investoren.",
    image: "/images/service-gewerbebau.jpg",
    alt: "Architektonische Bauphase eines repräsentativen Gewerbeprojekts",
  },
  {
    title: "Sanierung & Modernisierung",
    text: "Bestehende Immobilien modernisieren, aufwerten und technisch auf den neuesten Stand bringen.",
    image: "/images/service-sanierung.jpg",
    alt: "Modernisierte Gebäudestruktur mit ruhiger Architektur",
  },
  {
    title: "Projektsteuerung",
    text: "Strukturierte Koordination von Planung, Gewerken, Zeitplan, Budget und Kommunikation.",
    image: "/images/service-projektsteuerung.jpg",
    alt: "Abgestimmte Bauplanung mit klarer architektonischer Struktur",
  },
];

const projects = [
  {
    title: "Modernes Einfamilienhaus",
    location: "Niedersachsen",
    type: "Wohnbau",
    text: "Klare Architektur, hochwertige Materialien und ein durchdachter Bauprozess vom Entwurf bis zur Übergabe.",
    image: "/images/project-family-house.jpg",
    alt: "Modernes Einfamilienhaus in warmer Abendstimmung",
  },
  {
    title: "Bürogebäude mit klarer Struktur",
    location: "Hannover",
    type: "Gewerbebau",
    text: "Effiziente Flächenplanung, repräsentative Außenwirkung und präzise Umsetzung.",
    image: "/images/project-office.jpg",
    alt: "Bürogebäude mit klarer architektonischer Struktur",
  },
  {
    title: "Sanierung eines Bestandsobjekts",
    location: "Göttingen",
    type: "Modernisierung",
    text: "Substanz erhalten, Energieeffizienz verbessern und den Wert der Immobilie steigern.",
    image: "/images/project-renovation.jpg",
    alt: "Saniertes Bestandsobjekt mit hochwertiger moderner Fassade",
  },
];

const processSteps = [
  ["Erstgespräch", "Wir verstehen Ziele, Grundstück, Anforderungen, Budgetrahmen und Zeitplan."],
  ["Analyse & Konzept", "Wir prüfen Machbarkeit, Struktur und die sinnvollste Vorgehensweise."],
  ["Planung & Angebot", "Sie erhalten eine klare Grundlage für Entscheidung, Kosten und nächste Schritte."],
  ["Umsetzung", "Wir koordinieren Gewerke, Qualität, Termine und Kommunikation."],
  ["Übergabe & Betreuung", "Das Projekt wird sauber abgeschlossen und dokumentiert übergeben."],
];

const qualityItems = [
  {
    title: "Präzise Planung",
    text: "Klare Entscheidungen vor Baubeginn: Anforderungen, Kostenrahmen, Termine und technische Details werden sauber vorbereitet.",
  },
  {
    title: "Saubere Ausführung",
    text: "Koordinierte Gewerke, dokumentierte Abstimmungen und ein Qualitätsanspruch, der auf der Baustelle sichtbar wird.",
  },
  {
    title: "Transparente Kommunikation",
    text: "Regelmäßige Updates, feste Ansprechpartner und nachvollziehbare nächste Schritte für alle Beteiligten.",
  },
  {
    title: "Verantwortung bis zur Übergabe",
    text: "Wir begleiten das Projekt bis zum Abschluss, prüfen Details und übergeben strukturiert dokumentiert.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CinematicHero />

        <section className="trust-bar" aria-label="Demo-Vertrauensmerkmale">
          {[
            "15+ Jahre Erfahrung",
            "Wohnbau & Gewerbebau",
            "Feste Ansprechpartner",
            "Transparente Projektabläufe",
            "Qualität nach deutschen Standards",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section id="leistungen" className="section services-section">
          <div className="section-narrow">
            <h2>Leistungen für anspruchsvolle Bauprojekte</h2>
            <p>
              Von der ersten Einschätzung bis zur koordinierten Übergabe: Bauwerk Meister verbindet
              technische Klarheit mit persönlicher Verantwortung.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal-card" key={service.title}>
                <div className={`service-visual service-visual-${index + 1}`}>
                  <Image src={service.image} alt={service.alt} width={1280} height={720} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projekte" className="section projects-section">
          <div className="section-narrow">
            <h2>Ausgewählte Projekte</h2>
            <p>Ruhige Architektur, klare Entscheidungen und eine Umsetzung, die im Alltag standhält.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal-card" key={project.title}>
                <div className="project-image">
                  <Image src={project.image} alt={project.alt} width={1280} height={720} />
                  <span>{project.type}</span>
                </div>
                <div className="project-body">
                  <p>{project.location}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <a href="#kontakt">Projekt ansehen</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section comparison-section" aria-labelledby="comparison-title">
          <div className="comparison-copy">
            <h2 id="comparison-title">Was gute Bauplanung verändert</h2>
            <p>
              Gute Planung nimmt Unsicherheit aus Entscheidungen. Sie macht Kosten, Termine und
              Verantwortlichkeiten sichtbar, bevor sie zum Risiko werden.
            </p>
          </div>
          <div className="comparison-panel">
            <div>
              <h3>Vorher</h3>
              <ul>
                <li>Unklare Kosten</li>
                <li>Verzögerte Kommunikation</li>
                <li>Unsichere Abläufe</li>
                <li>Zu viele offene Fragen</li>
              </ul>
            </div>
            <span className="comparison-divider" aria-hidden="true" />
            <div>
              <h3>Nachher</h3>
              <ul>
                <li>Transparente Planung</li>
                <li>Feste Ansprechpartner</li>
                <li>Klare Projektphasen</li>
                <li>Verlässliche Entscheidungen</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="prozess" className="section process-section">
          <div className="process-intro">
            <h2>So läuft Ihr Bauprojekt ab</h2>
            <p>Ein strukturierter Ablauf schafft Orientierung für Bauherren, Partner und alle Gewerke.</p>
          </div>
          <div className="process-list">
            {processSteps.map(([title, text], index) => (
              <article className="process-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="qualitaet" className="section quality-section">
          <div className="quality-main">
            <div className="quality-media" aria-hidden="true">
              <Image src="/images/project-office.jpg" alt="" width={1280} height={720} />
            </div>
            <div className="quality-content">
              <span>Qualitätsversprechen</span>
              <h2>Qualität ist kein Zufall</h2>
              <p>
                Ein gutes Bauprojekt braucht mehr als Handwerk. Es braucht Struktur, Verantwortung und
                eine klare Kommunikation zwischen allen Beteiligten.
              </p>
            </div>
          </div>
          <div className="quality-grid">
            {qualityItems.map((item, index) => (
              <article className="quality-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-copy">
            <span>Der nächste Schritt</span>
            <h2>Planen Sie ein Bauprojekt?</h2>
            <p>
              Lassen Sie uns gemeinsam prüfen, wie Ihr Projekt sicher, hochwertig und strukturiert
              umgesetzt werden kann.
            </p>
            <div className="cta-actions">
              <a className="button-primary" href="#kontakt">
                Projekt anfragen
              </a>
              <a className="button-secondary" href="#leistungen">
                Leistungen ansehen
              </a>
            </div>
            <small>Unverbindliches Erstgespräch. Klare Einschätzung. Keine Massenabfertigung.</small>
          </div>
          <div className="cta-panel" aria-label="Was Sie im Erstgespräch erwartet">
            {[
              "Projektziel und Rahmen klären",
              "Machbarkeit und nächste Schritte einschätzen",
              "Passenden Ablauf für Ihr Vorhaben strukturieren",
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section contact-section">
          <div className="contact-copy">
            <h2>Projekt anfragen</h2>
            <p>
              Beschreiben Sie kurz Ihr Vorhaben. Bauwerk Meister meldet sich mit einer klaren ersten
              Einschätzung zurück.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <strong>
          <BrandLogo />
          <span>GmbH</span>
        </strong>
        <nav aria-label="Footer Navigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#projekte">Projekte</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </nav>
        <span>Copyright 2026 Bauwerk Meister GmbH</span>
      </footer>
    </>
  );
}
