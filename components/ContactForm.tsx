"use client";

import { useState } from "react";

const projectTypes = [
  "Wohnbau",
  "Gewerbebau",
  "Sanierung",
  "Modernisierung",
  "Projektsteuerung",
  "Noch unsicher",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {/* TODO: Replace this frontend-only submit handler with a server action or API route when a real backend is available. */}
      <div className="form-grid">
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" autoComplete="name" required />
        </label>
        <label htmlFor="email">
          E-Mail
          <input id="email" name="email" type="email" autoComplete="email" required />
        </label>
        <label htmlFor="phone">
          Telefon
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </label>
        <label htmlFor="projectType">
          Projektart
          <select id="projectType" name="projectType" defaultValue="Noch unsicher">
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="message">
        Nachricht
        <textarea id="message" name="message" rows={6} required />
      </label>
      <p className="privacy-text">
        Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage verwenden.
      </p>
      <button className="button-primary" type="submit">
        Projekt anfragen
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {sent ? "Danke. Dies ist ein Demo-Formular - die Anfrage wurde noch nicht versendet." : ""}
      </p>
    </form>
  );
}
