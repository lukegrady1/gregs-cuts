import { Eyebrow } from "./Eyebrow";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-line)]">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-to-b from-[var(--color-surface)] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 min-h-[40vh] flex flex-col justify-center">
        {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
        <h1 className="font-display text-[var(--color-ink)] text-5xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-[var(--color-ink-muted)] text-lg">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
