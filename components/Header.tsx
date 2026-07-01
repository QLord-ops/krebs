"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Unternehmen", href: "/#unternehmen" },
  { label: "Karriere", href: "/#karriere" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand-link" href="/" onClick={() => setOpen(false)}>
        <BrandLogo variant="light" />
      </Link>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a className="mobile-phone-link" href="tel:+4936066086080" onClick={() => setOpen(false)}>
          03606 60 86 08 0
        </a>
      </nav>
      <a className="phone-link" href="tel:+4936066086080">03606 60 86 08 0</a>
      <Link className="header-cta" href="/#kontakt">Projekt anfragen</Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
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
