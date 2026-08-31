import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BookingBand } from "@/components/home/BookingBand";
import { PolicyNotices } from "@/components/policies/PolicyNotices";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Haircuts, blow-dry styling, perms, waxing and more at ${SITE.name} hair salon in ${SITE.city}. See the full menu — call to book.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The menu"
        title="Services & Pricing"
        intro="The full price list. Tips appreciated, never expected. Call ahead or walk in — consultations are free."
      />
      <section className="bg-[var(--color-bg)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 space-y-20">
          {SERVICE_CATEGORIES.map((category, i) => (
            <section
              key={category.slug}
              id={category.slug}
              className="scroll-mt-24"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-[var(--color-line)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-[var(--color-ink)]">
                  {category.title}
                </h2>
              </div>
              {category.note && (
                <p className="mt-3 ml-16 text-[var(--color-ink-muted)] italic">
                  {category.note}
                </p>
              )}
              <ul className="mt-6 border-t border-[var(--color-line)]">
                {category.services.map((svc) => (
                  <li
                    key={svc.name}
                    className="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] py-4"
                  >
                    <div>
                      <span className="font-display text-xl text-[var(--color-ink)]">
                        {svc.name}
                      </span>
                      {svc.note && (
                        <span className="block mt-1 text-sm text-[var(--color-ink-muted)] italic">
                          {svc.note}
                        </span>
                      )}
                    </div>
                    <span className="font-display text-2xl text-[var(--color-accent)] whitespace-nowrap">
                      {svc.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <PolicyNotices />
        </div>
      </section>
      <BookingBand />
    </>
  );
}
