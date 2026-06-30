"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#referenzen" },
  { label: "Unternehmen", href: "#unternehmen" },
  { label: "Karriere", href: "#karriere" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-link" href="#top" onClick={() => setOpen(false)}>
        <BrandLogo variant="light" />
      </a>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="phone-link" href="tel:+4936066086080">03606 60 86 08 0</a>
      <a className="header-cta" href="#kontakt">Projekt anfragen</a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Navigation öffnen"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
