"use client";

import { useState } from "react";

const services = [
  "Kanal- & Rohrleitungsbau",
  "Straßenbau",
  "Erdbau",
  "Pflasterbau",
  "Außenanlagen",
  "Sanierung & Umbau",
] as const;

const clientTypes = ["Privat", "Gewerbe", "Öffentlich"] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [clientType, setClientType] = useState<(typeof clientTypes)[number]>("Privat");
  const [fileName, setFileName] = useState("");

  return (
    <div className="contact-form-shell">
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <div className="contact-form-head">
          <p className="contact-form-kicker">Projektanfrage</p>
          <p className="contact-form-note">
            Alle Felder mit * sind erforderlich. Ihre Daten behandeln wir vertraulich.
          </p>
        </div>

        <div className="form-row">
          <label className="form-field">
            <span className="form-label">Name *</span>
            <input name="name" type="text" placeholder="Vor- und Nachname" required />
          </label>

          <label className="form-field">
            <span className="form-label">E-Mail *</span>
            <input name="email" type="email" placeholder="name@beispiel.de" required />
          </label>
        </div>

        <div className="form-row">
          <label className="form-field">
            <span className="form-label">Telefon</span>
            <input name="phone" type="tel" placeholder="z. B. 0551 123456" />
          </label>

          <label className="form-field">
            <span className="form-label">Ort des Projekts *</span>
            <input name="location" type="text" placeholder="z. B. Göttingen" required />
          </label>
        </div>

        <label className="form-field">
          <span className="form-label">Welche Leistung benötigen Sie? *</span>
          <select name="service" defaultValue={services[0]} required>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>

        <fieldset className="form-field form-fieldset">
          <legend className="form-label">Wer stellt die Anfrage? *</legend>
          <div className="radio-pills" role="radiogroup" aria-label="Art der Anfrage">
            {clientTypes.map((type) => (
              <label
                className={`radio-pill${clientType === type ? " is-active" : ""}`}
                key={type}
              >
                <input
                  type="radio"
                  name="clientType"
                  value={type}
                  checked={clientType === type}
                  onChange={() => setClientType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-row">
          <label className="form-field">
            <span className="form-label">Geplanter Start</span>
            <input name="start" type="text" placeholder="z. B. Frühjahr 2026" />
          </label>

          <div className="form-field form-field--file">
            <span className="form-label">Fotos / Pläne hochladen</span>
            <label className="file-upload">
              <span className="file-upload-button">Datei auswählen</span>
              <span className="file-upload-name">
                {fileName || "Keine Datei ausgewählt"}
              </span>
              <input
                name="upload"
                type="file"
                className="file-upload-input"
                onChange={(event) => {
                  setFileName(event.target.files?.[0]?.name ?? "");
                }}
              />
            </label>
          </div>
        </div>

        <label className="form-field">
          <span className="form-label">Projektbeschreibung *</span>
          <textarea
            name="description"
            rows={4}
            placeholder="Kurz beschreiben: Umfang, Fläche, Besonderheiten …"
            required
          />
        </label>

        <div className="form-options">
          <label className="check-row">
            <input type="checkbox" name="callback" />
            <span>Rückruf gewünscht</span>
          </label>
          <label className="check-row">
            <input type="checkbox" name="privacy" required />
            <span>
              Ich stimme der{" "}
              <a href="/datenschutz">Datenschutzerklärung</a> zu. *
            </span>
          </label>
        </div>

        <button className="button button-red contact-form-submit" type="submit" disabled={sent}>
          Projekt einschätzen lassen
        </button>

        <p className="form-status" role="status" aria-live="polite">
          {sent
            ? "Vielen Dank! Ihre Anfrage wurde erfasst. Wir melden uns in Kürze bei Ihnen."
            : ""}
        </p>
      </form>
    </div>
  );
}
