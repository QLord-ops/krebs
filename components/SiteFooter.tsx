import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandLogo variant="light" />
      <nav aria-label="Footer Navigation">
        <Link href="/#leistungen">Leistungen</Link>
        <Link href="/#referenzen">Referenzen</Link>
        <Link href="/#unternehmen">Unternehmen</Link>
        <Link href="/#kontakt">Kontakt</Link>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
      <span>Copyright 2026 Krebs Tief- & Straßenbau GmbH</span>
    </footer>
  );
}
