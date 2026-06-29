import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bauwerk Meister GmbH – Hochwertiger Wohnbau, Gewerbebau & Sanierung",
  description:
    "Premium Bauunternehmen für Wohnbau, Gewerbebau, Sanierung und Projektsteuerung in Deutschland. Klare Planung, saubere Ausführung und transparente Kommunikation.",
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
