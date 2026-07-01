import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { CompanyMap } from "@/components/CompanyMap";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { ReferencesSection } from "@/components/ReferencesSection";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    title: "Kanal- & Rohrleitungsbau",
    text: "Neubau und Sanierung von Schmutz-, Regen- und Trinkwasserleitungen – inklusive Hausanschlüssen.",
    bullets: ["Regen- und Schmutzwasser", "Trinkwasser & Fernwärme", "Leitungen im Bestand", "Tiefbau & Wiederherstellung"],
  },
  {
    title: "Straßenbau",
    text: "Gehwege, Zufahrten und Fahrbahnen – dauerhaft belastbar geplant und fachgerecht ausgeführt.",
    bullets: ["Neubau & Sanierung", "Asphalt- und Pflasterflächen", "Entwässerung", "Erschließung & Anbindung"],
  },
  {
    title: "Erdbau",
    text: "Aushub, Baugruben, Planum und Verdichtung – präzise vorbereitet und termingerecht umgesetzt.",
    bullets: ["Erdarbeiten & Aushub", "Baugruben", "Planum & Verdichtung", "Geländemodellierung"],
  },
  {
    title: "Pflasterbau",
    text: "Einfahrten, Höfe, Stellplätze und Wege – funktional, langlebig und optisch hochwertig.",
    bullets: ["Naturstein & Betonpflaster", "Hof- und Einfahrtsflächen", "Gehwege & Stellplätze", "Sanierung im Bestand"],
  },
  {
    title: "Außenanlagen",
    text: "Zufahrten, Terrassen, Entwässerung und Gestaltung – Ihr Außenbereich in besten Händen.",
    bullets: ["Zufahrten & Stellplätze", "Terrassen & Wege", "Entwässerung", "Stützmauern & Gelände"],
  },
  {
    title: "Sanierung & Umbau",
    text: "Drainage, Abdichtung, Reparaturen und Wiederherstellung – fachgerecht und nachhaltig.",
    bullets: ["Drainage & Abdichtung", "Reparatur bestehender Flächen", "Instandsetzung", "Wiederherstellung"],
  },
];

const projects = [
  {
    title: "Radwegbrücke Bremke",
    category: "Außenanlagen",
    image: "/krebs/images/reference-bridge.jpg",
    alt: "Radwegbrücke Bremke – Außenanlagenprojekt von Krebs Tiefbau",
  },
  {
    title: "Überlandleitung Billeben",
    category: "Kanalbau",
    image: "/krebs/images/focus-kanal-reference.png",
    alt: "Überlandleitung Billeben – Kanal- und Rohrleitungsbau",
  },
  {
    title: "Feuerwehrzufahrt Göttingen-Nord",
    category: "Pflasterbau",
    image: "/krebs/images/reference-paving.jpg",
    alt: "Feuerwehrzufahrt Göttingen-Nord – Pflasterbau",
  },
  {
    title: "Pflasterflächen im Bestand",
    category: "Straßenbau",
    image: "/krebs/images/site-roadworks.jpg",
    alt: "Pflasterflächen im Bestand – Straßenbau",
  },
  {
    title: "Abbruch & Baugrube",
    category: "Erdbau",
    image: "/krebs/images/hero-tiefbau.jpg",
    alt: "Abbruch und Baugrube – Erdbauarbeiten",
  },
  {
    title: "Außenanlage im Ortskern",
    category: "Außenanlagen",
    image: "/krebs/images/site-excavation.jpg",
    alt: "Außenanlage im Ortskern – Gelände- und Erdbauarbeiten",
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
            preload="auto"
          >
            <source src="/krebs/videos/imagefilm-web.mp4" type="video/mp4" />
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
          </div>
          <div className="hero-facts" aria-label="Krebs Tiefbau Fakten">
            <div>
              <span>Seit 2007</span>
              <strong>im Tiefbau aktiv</strong>
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
              <Image
                src="/krebs/images/site-excavation.jpg"
                alt="Krebs Tiefbau Bagger auf einer Baustelle"
                width={1200}
                height={900}
                sizes="(max-width: 720px) 100vw, (max-width: 1040px) 90vw, 40vw"
              />
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
                    <ul>
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
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
            <div className="focus-main-frame">
              <Image
                className="focus-main-image"
                src="/krebs/images/focus-kanal-reference.png"
                alt="Kanalbau und Rohrleitungsgraben im Bestand"
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1040px) 90vw, min(55vw, 630px)"
                priority
              />
            </div>
            <div className="focus-thumbs" aria-hidden="true">
              <Image src="/krebs/images/hero-tiefbau.jpg" alt="" width={500} height={360} sizes="33vw" />
              <Image src="/krebs/images/site-roadworks.jpg" alt="" width={500} height={360} sizes="33vw" />
              <Image src="/krebs/images/site-excavation.jpg" alt="" width={500} height={360} sizes="33vw" />
            </div>
          </div>
          <div className="stats-row">
            <div><strong>2007</strong><span>Erfahrung im Tiefbau</span></div>
            <div><strong>2015</strong><span>GmbH gegründet</span></div>
            <div><strong>100+</strong><span>Projekte jährlich</span></div>
            <div><strong>Regional</strong><span>für die Region im Einsatz</span></div>
          </div>
        </section>

        <section id="referenzen" className="section references-section">
          <ReferencesSection projects={projects} />
        </section>

        <section id="unternehmen" className="company-section">
          <div className="company-copy">
            <p className="eyebrow red">Unternehmen</p>
            <h2>Erfahrung. Technik. Verlässlichkeit.</h2>
            <p>
              Die Krebs Tief- & Straßenbau GmbH wurde 2015 gegründet. Unser Erfolgsweg
              begann bereits 2007 – heute sind wir ein zuverlässiger Partner für Kommunen,
              Unternehmen und private Bauherren in Göttingen, Kassel, Northeim und Heiligenstadt.
            </p>
            <p>
              Wir realisieren Tiefbau-, Straßenbau- und Kanalbauprojekte mit moderner
              Technik, erfahrenen Teams und klarem Anspruch.
            </p>
            <a className="button button-red" href="#kontakt">Mehr über uns</a>
          </div>
          <div className="company-image">
            <Image
              src="/krebs/images/company-construction.webp"
              alt="Krebs Team mit Bagger auf einer Baustelle"
              width={3000}
              height={1000}
              sizes="(max-width: 720px) 100vw, (max-width: 1040px) 90vw, 45vw"
            />
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
              <h2>
                <span>Bau mit uns die</span>
                <span>Infrastruktur von morgen.</span>
              </h2>
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
                <Image
                  src="/krebs/images/company-reference-team.png"
                  alt="Krebs Team vor Bagger auf einer Baustelle"
                  width={1400}
                  height={820}
                  sizes="(max-width: 720px) 100vw, (max-width: 1040px) 90vw, 50vw"
                />
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

        <section id="kontakt" className="contact-section-wrap">
          <div className="contact-section">
            <div className="contact-copy">
              <p className="eyebrow red">Baustellen-Check</p>
              <h2>Lassen Sie uns Ihr Projekt einschätzen.</h2>
              <p className="contact-lead">
                Schildern Sie uns Ihr Vorhaben. Wir melden uns schnell und unverbindlich bei Ihnen.
              </p>
              <ul className="contact-details">
                <li className="contact-detail">
                  <span className="contact-detail-label">Telefon</span>
                  <a href="tel:+4936066086080">03606 / 60 86 08 0</a>
                </li>
                <li className="contact-detail">
                  <span className="contact-detail-label">E-Mail</span>
                  <a href="mailto:info@krebs-tiefbau.de">info@krebs-tiefbau.de</a>
                </li>
                <li className="contact-detail">
                  <span className="contact-detail-label">Adresse</span>
                  <span>
                    Siemeröder Straße 2
                    <br />
                    37308 Heilbad Heiligenstadt OT Siemerode
                  </span>
                </li>
                <li className="contact-detail">
                  <span className="contact-detail-label">Erreichbarkeit</span>
                  <span>
                    Mo – Do 8:00 – 16:00 Uhr
                    <br />
                    Fr 8:00 – 13:00 Uhr
                  </span>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
          <CompanyMap />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
