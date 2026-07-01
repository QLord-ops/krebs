import Image from "next/image";

type BrandLogoProps = {
  variant?: "default" | "light";
};

export function BrandLogo({ variant = "default" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`} aria-label="Krebs Tief- und Straßenbau">
      <Image
        src="/brand/krebs-logo.png"
        alt=""
        width={586}
        height={168}
        className="brand-logo-image"
        priority={variant === "light"}
      />
    </span>
  );
}
