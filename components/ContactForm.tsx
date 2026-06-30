"use client";

import { useState } from "react";

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
      <label>
        Welche Leistung benötigen Sie?
        <select name="service" defaultValue="Kanal- & Rohrleitungsbau">
          <option>Kanal- & Rohrleitungsbau</option>
          <option>Straßenbau</option>
          <option>Erdbau</option>
          <option>Pflasterbau</option>
          <option>Außenanlagen</option>
          <option>Sanierung & Umbau</option>
        </select>
      </label>
      <label>
        Ort des Projekts
        <input name="location" type="text" placeholder="z. B. Göttingen" />
      </label>
      <fieldset>
        <legend>Wer stellt die Anfrage?</legend>
        <label><input type="radio" name="clientType" defaultChecked /> Privat</label>
        <label><input type="radio" name="clientType" /> Gewerbe</label>
        <label><input type="radio" name="clientType" /> Öffentlich</label>
      </fieldset>
      <label>
        Wann soll es starten?
        <input name="start" type="text" placeholder="Projektbeschreibung" />
      </label>
      <label>
        Fotos / Pläne hochladen
        <input name="upload" type="file" />
      </label>
      <label className="check-row">
        <input type="checkbox" name="callback" />
        Rückruf gewünscht
      </label>
      <label className="check-row">
        <input type="checkbox" name="privacy" required />
        Ich stimme der Datenschutzerklärung zu.
      </label>
      <button className="button button-red" type="submit">Projekt einschätzen lassen</button>
      <p className="form-status" role="status" aria-live="polite">
        {sent ? "Danke. Dies ist ein Demo-Formular - die Anfrage wurde noch nicht versendet." : ""}
      </p>
    </form>
  );
}
