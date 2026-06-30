import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krebs Tief- & Straßenbau GmbH - Tiefbau, Straßenbau & Kanalbau",
  description:
    "Neuer One-Page-Auftritt für Krebs Tief- & Straßenbau mit Leistungen, Referenzen, Karriere und Baustellen-Check.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
