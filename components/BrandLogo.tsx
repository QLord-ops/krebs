type BrandLogoProps = {
  variant?: "default" | "light";
};

export function BrandLogo({ variant = "default" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`} aria-label="Krebs Tief- und Straßenbau">
      <span className="brand-mark" aria-hidden="true">
        <span />
      </span>
      <span className="brand-type">
        <strong>KREBS</strong>
        <small>TIEF- & STRASSENBAU</small>
      </span>
    </span>
  );
}
