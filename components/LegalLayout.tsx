import Link from "next/link";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <article className="legal-page">
      <div className="legal-page-inner">
        <Link className="legal-back" href="/">
          ← Zurück zur Startseite
        </Link>
        <h1>{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </article>
  );
}
