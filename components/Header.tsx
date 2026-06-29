"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Prozess", href: "#prozess" },
  { label: "Qualität", href: "#qualitaet" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hiddenOnHero, setHiddenOnHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".cinematic-hero");
      const isOverHero = hero ? hero.getBoundingClientRect().bottom > 80 : false;

      setSolid(window.scrollY > 40);
      setHiddenOnHero(isOverHero);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`site-header ${solid ? "is-solid" : ""} ${hiddenOnHero ? "is-hidden-on-hero" : ""}`}>
      <a className="brand" href="#top" aria-label="Bauwerk Meister Startseite">
        <BrandLogo />
      </a>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#kontakt">
        Projekt anfragen
      </a>
    </header>
  );
}
