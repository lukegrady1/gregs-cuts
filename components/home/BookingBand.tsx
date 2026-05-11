import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function BookingBand() {
  return (
    <section className="relative bg-[var(--color-bg)] py-24 md:py-32 overflow-hidden border-y border-[var(--color-line)]">
      <div
        aria-hidden="true"
        className="giant-numeral absolute -left-12 -top-20 z-0 opacity-60"
      >
        02
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Book a chair</p>
        <h2 className="mt-4 font-display text-[var(--color-ink)] text-5xl md:text-7xl">
          Your Chair Is Waiting.
        </h2>
        <p className="mt-6 text-[var(--color-ink-muted)] text-lg">
          Pick a time. Show up. Walk out sharp.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/book" size="lg">
            Book Now <ArrowRight size={18} />
          </Button>
        </div>
        <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
          Or call <a href={SITE.phoneHref} className="text-[var(--color-accent)] hover:underline">{SITE.phone}</a>
        </p>
      </div>
    </section>
  );
}
