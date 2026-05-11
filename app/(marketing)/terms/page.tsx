import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms" />
      <section className="bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-3xl px-6 prose prose-invert text-[var(--color-ink-muted)] space-y-4">
          <p>
            Bookings made through this site are appointments, not contracts. Reschedule or cancel by phone or
            email at least 2 hours before your slot.
          </p>
          <p>
            Prices listed on the services page are subject to change. The price quoted at the chair is the
            price you pay.
          </p>
          <p>
            By using this site, you agree these terms apply to your visit.
          </p>
        </div>
      </section>
    </>
  );
}
