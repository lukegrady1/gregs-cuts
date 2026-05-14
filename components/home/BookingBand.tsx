import { Phone, MapPin } from "lucide-react";
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
        <p className="eyebrow">Your Chair Is Waiting</p>
        <h2 className="mt-4 font-display text-[var(--color-ink)] text-5xl md:text-7xl">
          Walk In. Walk Out Sharp.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={SITE.phoneHref} size="lg">
            <Phone size={18} />
            Call {SITE.phone}
          </Button>
          <Button href={SITE.mapsUrl} variant="secondary" size="lg">
            <MapPin size={18} />
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}
