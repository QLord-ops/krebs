import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";

const services = [
  {
    title: "Kanal- & Rohrleitungsbau",
    image: "/krebs/images/hero-tiefbau.jpg",
    text: "Neubau und Sanierung von Schmutz-, Regen- und Trinkwasserleitungen inkl. Hausanschlüsse.",
    bullets: ["Hausanschlüsse", "Regenwasser", "Schmutzwasser", "Trinkwasser", "Fernwärme"],
  },
  {
    title: "Straßenbau",
    image: "/krebs/images/site-roadworks.jpg",
    text: "Gehwege, Zufahrten, Fahrbahnen und Wiederherstellung - dauerhaft belastbar ausgeführt.",
    bullets: ["Gehwege", "Zufahrten", "Fahrbahnen", "Wiederherstellung", "Erschließung"],
  },
  {
    title: "Erdbau",
    image: "/krebs/images/site-excavation.jpg",
    text: "Aushub, Baugruben, Planum und Verdichtung - präzise vorbereitet und termingerecht umgesetzt.",
    bullets: ["Aushub", "Baugruben", "Planum", "Verdichtung", "Geländeprofilierung"],
  },
  {
    title: "Pflasterbau",
    image: "/krebs/images/reference-paving.jpg",
    text: "Einfahrten, Höfe, Stellplätze und Wege - funktional, langlebig und optisch hochwertig.",
    bullets: ["Einfahrten", "Höfe", "Gehwege", "Stellplätze", "Naturstein & Betonpflaster"],
  },
  {
    title: "Außenanlagen",
    image: "/krebs/images/reference-bridge.jpg",
    text: "Zufahrten, Terrassen, Entwässerung und Gestaltung - Ihr Außenbereich in besten Händen.",
    bullets: ["Zufahrten", "Stellplätze", "Terrassen", "Entwässerung", "Stützmauern"],
  },
  {
    title: "Sanierung & Umbau",
    image: "/krebs/images/hero-cat.jpg",
    text: "Drainage, Abdichtung, Reparaturen und Wiederherstellung - fachgerecht und nachhaltig.",
    bullets: ["Drainage", "Abdichtung", "Wiederherstellung", "Reparatur", "Bestehende Flächen"],
  },
];

const projects = [
  {
    title: "Radwegbrücke Bremke",
    category: "Außenanlagen",
    image: "/krebs/images/reference-bridge.jpg",
  },
  {
    title: "Überlandleitung Billeben",
    category: "Kanalbau",
    image: "/krebs/images/focus-kanal-reference.png",
  },
  {
    title: "Feuerwehrzufahrt Göttingen-Nord",
    category: "Pflasterbau",
    image: "/krebs/images/reference-paving.jpg",
  },
  {
    title: "Pflasterflächen im Bestand",
    category: "Straßenbau",
    image: "/krebs/images/site-roadworks.jpg",
  },
  {
    title: "Abbruch & Baugrube",
    category: "Erdbau",
    image: "/krebs/images/hero-tiefbau.jpg",
  },
  {
    title: "Außenanlage im Ortskern",
    category: "Außenanlagen",
    image: "/krebs/images/site-excavation.jpg",
  },
];

const values = [
  ["Klare Werte", "Verlässlichkeit, transparente Abläufe und klare Kommunikation."],
  ["Moderne Technik", "Eigener Maschinenpark und moderne Baustellenlogistik."],
  ["Eigene Kolonnen", "Erfahrene Teams, die Hand in Hand arbeiten."],
  ["Saubere Ausführung", "Termingerechte Arbeit und fachgerechte Wiederherstellung."],
];

const careerProofs = [
  {
    icon: "team",
    title: "Ein Team, das hält.",
    text: "Erfahrene Kollegen, kurze Wege und gegenseitiger Respekt.",
  },
  {
    icon: "machine",
    title: "Moderne Technik.",
    text: "Leistungsstarke Maschinen und digitale Prozesse auf der Baustelle.",
  },
  {
    icon: "shield",
    title: "Sichere Zukunft.",
    text: "Regionale Projekte, sichere Abläufe und verlässliche Perspektiven.",
  },
];

const roles = [
  { title: "Polier / Vorarbeiter", type: "m/w/d", meta: "Vollzeit" },
  { title: "Baggerfahrer / Maschinist", type: "m/w/d", meta: "Vollzeit" },
  { title: "Facharbeiter Tief- & Straßenbau", type: "m/w/d", meta: "Vollzeit" },
  { title: "LKW-Fahrer", type: "m/w/d", meta: "Vollzeit" },
  { title: "Auszubildender Tief- & Straßenbau", type: "m/w/d", meta: "Ausbildung" },
  { title: "Initiativbewerbung", type: "", meta: "Vollzeit / Teilzeit" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/krebs/images/hero-cat.jpg"
          >
            <source src="/krebs/videos/imagefilm.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Tiefbau · Straßenbau · Kanalbau</p>
              <h1 id="hero-title">
                <span>Bauen,</span>
                <span>was</span>
                <span>verbindet.</span>
              </h1>
              <p>
                Krebs Tief- & Straßenbau realisiert Erdarbeiten, Rohrleitungsbau,
                Pflasterflächen, Außenanlagen und Sanierungen - mit klarer Abstimmung,
                erfahrenen Kolonnen und sichtbaren Ergebnissen.
              </p>
              <div className="hero-actions">
                <a className="button button-red" href="#kontakt">Projekt anfragen</a>
                <a className="button button-ghost" href="#referenzen">Referenzen ansehen</a>
              </div>
            </div>
            <div className="hero-mark" aria-hidden="true">
              <span />
            </div>
          </div>
          <div className="hero-facts" aria-label="Krebs Tiefbau Fakten">
            <div>
              <span>Seit 2007</span>
              <strong>im Bau aktiv</strong>
            </div>
            <div>
              <span>Region</span>
              <strong>Göttingen · Kassel · Northeim · Heiligenstadt</strong>
            </div>
            <div>
              <span>Leistungen</span>
              <strong>Kanalbau · Straßenbau · Erdbau · Pflasterbau</strong>
            </div>
            <div>
              <span>Auftraggeber</span>
              <strong>Öffentliche, gewerbliche und private Projekte</strong>
            </div>
          </div>
        </section>

        <section id="leistungen" className="section light-section">
          <div className="services-showcase">
            <div className="services-intro">
              <p className="eyebrow red">Was wir draußen möglich machen</p>
              <h2>Unsere Leistungen</h2>
              <p>
                Tiefbau, Straßenbau und Außenanlagen aus einer Hand: technisch sauber
                geplant, mit eigenen Kolonnen umgesetzt und auf der Baustelle sichtbar
                ordentlich geführt.
              </p>
              <a className="button button-red" href="#kontakt">Beratung anfordern</a>
            </div>
            <div className="services-media">
              <Image src="/krebs/images/site-excavation.jpg" alt="Krebs Tiefbau Bagger auf einer Baustelle" width={1200} height={900} />
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="k-icon small" aria-hidden="true" />
                  </div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href="#referenzen">Projektbeispiele ansehen</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="focus-section" aria-labelledby="focus-title">
          <div className="focus-copy">
            <p className="eyebrow red">Projekt im Fokus</p>
            <h2 id="focus-title">Kanal- und Rohrleitungsbau im Bestand</h2>
            <p className="focus-lead">
              Präzise geplant, sauber ausgeführt und mit minimaler Beeinträchtigung
              für Anwohner und Infrastruktur.
            </p>
            <dl>
              <div>
                <dt>Leistung</dt>
                <dd>Kanalbau, Rohrleitungsbau und Wiederherstellung</dd>
              </div>
              <div>
                <dt>Aufgabe</dt>
                <dd>Enge Abstimmung, saubere Baugrube und fachgerechte Verlegung.</dd>
              </div>
              <div>
                <dt>Ergebnis</dt>
                <dd>Belastbare Infrastruktur und termingerechte Übergabe.</dd>
              </div>
            </dl>
            <a className="button button-red" href="#kontakt">Projekt im Detail anfragen</a>
          </div>
          <div className="focus-media">
            <Image className="focus-main-image" src="/krebs/images/focus-kanal-reference.png" alt="Kanalbau und Rohrleitungsgraben im Bestand" width={1200} height={900} />
            <div className="focus-thumbs" aria-hidden="true">
              <Image src="/krebs/images/hero-tiefbau.jpg" alt="" width={500} height={360} />
              <Image src="/krebs/images/site-roadworks.jpg" alt="" width={500} height={360} />
              <Image src="/krebs/images/site-excavation.jpg" alt="" width={500} height={360} />
            </div>
          </div>
          <div className="stats-row">
            <div><strong>2007</strong><span>gegründet</span></div>
            <div><strong>30+</strong><span>Mitarbeiter</span></div>
            <div><strong>100+</strong><span>Projekte jährlich</span></div>
            <div><strong>Regional</strong><span>für die Region im Einsatz</span></div>
          </div>
        </section>

        <section id="referenzen" className="section references-section">
          <div className="references-layout">
            <div className="references-rail">
              <p className="eyebrow">Referenzen</p>
              <h2>Dokumentierte Baustellen nach Leistungsbereich</h2>
              <div className="filter-row" aria-label="Leistungsbereiche">
                {["Alle", "Kanalbau", "Straßenbau", "Erdbau", "Pflasterbau", "Außenanlagen"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="button button-outline-red" href="#kontakt">Mehr Referenzen ansehen</a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <Image src={project.image} alt="" width={900} height={620} />
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <a href="#kontakt">Projekt ansehen</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="unternehmen" className="company-section">
          <div className="company-copy">
            <p className="eyebrow red">Unternehmen</p>
            <h2>Erfahrung. Technik. Verlässlichkeit.</h2>
            <p>
              Krebs Tief- & Straßenbau wurde 2015 gegründet und ist heute ein
              zuverlässiger Partner für Kommunen, Unternehmen und private Bauherren
              in Göttingen, Kassel, Northeim und Heiligenstadt.
            </p>
            <p>
              Wir realisieren Tiefbau-, Straßenbau- und Kanalbauprojekte mit moderner
              Technik, erfahrenen Teams und klarem Anspruch.
            </p>
            <a className="button button-red" href="#kontakt">Mehr über uns</a>
          </div>
          <div className="company-image">
            <Image src="/krebs/images/company-reference-team.png" alt="Krebs Team mit Bagger auf einer Baustelle" width={1400} height={760} />
          </div>
          <div className="values-panel">
            <div className="values-intro">
              <p className="eyebrow red">Wofür wir stehen</p>
              <h3>Klare Werte. Verlässliche Partnerschaft.</h3>
            </div>
            <div className="value-grid">
              {values.map(([title, text], index) => (
                <article key={title}>
                  <div>
                    <span className="k-icon small" aria-hidden="true" />
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <blockquote>
              <span aria-hidden="true">“</span>
              <p>Wir bauen nicht nur Infrastruktur. Wir schaffen Verbindungen für morgen.</p>
            </blockquote>
          </div>
        </section>

        <section id="karriere" className="career-section">
          <div className="career-shell">
            <div className="career-copy">
              <div className="career-brand">
                <BrandLogo />
              </div>
              <p className="eyebrow red">Karriere</p>
              <h2>Bau mit uns die Infrastruktur von morgen.</h2>
              <p>
                Ob Facharbeiter, Maschinist, Polier oder Azubi - bei Krebs arbeitet ein
                echtes Team mit moderner Technik, festen Abläufen und klaren Aufgaben.
              </p>
              <div className="career-proofs">
                {careerProofs.map((proof) => (
                  <div key={proof.title}>
                    <span className={`career-proof-icon ${proof.icon}`} aria-hidden="true" />
                    <strong>{proof.title}</strong>
                    <span>{proof.text}</span>
                  </div>
                ))}
              </div>
              <a className="button button-red career-cta" href="#kontakt">Jetzt bewerben</a>
            </div>
            <div className="career-board">
              <div className="career-photo">
                <Image src="/krebs/images/company-reference-team.png" alt="Krebs Team vor Bagger auf einer Baustelle" width={1400} height={820} />
              </div>
              <div className="role-grid" aria-label="Offene Positionen">
                {roles.map((role, index) => (
                  <a className="role-row" href="#kontakt" key={role.title}>
                    <span className="role-number">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{role.title}</strong>
                    {role.type ? <small>{role.type}</small> : <small aria-hidden="true" />}
                    <em>{role.meta}</em>
                    <span className="role-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <div className="contact-copy">
            <p className="eyebrow">Baustellen-Check</p>
            <h2>Lassen Sie uns Ihr Projekt einschätzen.</h2>
            <p>
              Schildern Sie uns Ihr Vorhaben. Wir melden uns schnell und unverbindlich bei Ihnen.
            </p>
            <address>
              <a href="tel:+4936066086080">03606 / 60 86 08 0</a>
              <a href="mailto:info@krebs-tiefbau.de">info@krebs-tiefbau.de</a>
              <span>Siemeröder Straße 2<br />37308 Heilbad Heiligenstadt OT Siemerode</span>
              <span>Mo - Do 8:00 - 16:00 Uhr<br />Fr 8:00 - 13:00 Uhr</span>
            </address>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <BrandLogo variant="light" />
        <nav aria-label="Footer Navigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#referenzen">Referenzen</a>
          <a href="#unternehmen">Unternehmen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <span>Copyright 2026 Krebs Tief- & Straßenbau GmbH</span>
      </footer>
    </>
  );
}
