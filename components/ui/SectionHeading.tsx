import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  const ink = inverted ? "text-[var(--color-bg)]" : "text-[var(--color-ink)]";
  const muted = inverted ? "text-[var(--color-bg)]/70" : "text-[var(--color-ink-muted)]";
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <h2 className={`font-display ${ink} text-4xl md:text-6xl`}>{title}</h2>
      {subtitle ? <p className={`mt-4 ${muted}`}>{subtitle}</p> : null}
    </div>
  );
}
