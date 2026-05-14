import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceRow } from "@/components/services/ServiceRow";
import { BookingBand } from "@/components/home/BookingBand";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Cuts, fades, beard trims, and hot towel shaves at ${SITE.name} hair salon in ${SITE.city}. See the full menu — call to book.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The menu"
        title="Services & Pricing"
        intro="Every cut includes the basics — hot towel, neck shave, an honest opinion if you ask. Prices are flat. Tips appreciated, never expected."
      />
      <section className="bg-[var(--color-bg)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 space-y-24">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>
      <BookingBand />
    </>
  );
}
