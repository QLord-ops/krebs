import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteAnimations } from "@/components/SiteAnimations";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Tiefbau, Straßenbau & Kanalbau`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Tiefbau",
    "Straßenbau",
    "Kanalbau",
    "Pflasterbau",
    "Erdbau",
    "Außenanlagen",
    "Göttingen",
    "Kassel",
    "Northeim",
    "Heiligenstadt",
    "Krebs Tiefbau",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – Tiefbau, Straßenbau & Kanalbau`,
    description: siteConfig.description,
    images: [
      {
        url: "/krebs/images/company-construction.webp",
        width: 3000,
        height: 1000,
        alt: "Krebs Team mit Bagger auf einer Baustelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Tiefbau, Straßenbau & Kanalbau`,
    description: siteConfig.description,
    images: ["/krebs/images/company-construction.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="animations-pending">
      <body>
        <JsonLd />
        {children}
        <SiteAnimations />
      </body>
    </html>
  );
}
