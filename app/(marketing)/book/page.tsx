import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GhlCalendarEmbed } from "@/components/book/GhlCalendarEmbed";
import { SITE } from "@/lib/content";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your Chair",
  description: `Book a haircut, beard trim, or shave at ${SITE.name} in ${SITE.city}. Pick a service, pick a time, you're in.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book online"
        title="Book your chair."
        intro="Pick a service, pick a time, pop in your details. You'll get a text confirmation right after."
      />

      <section className="bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <GhlCalendarEmbed />
        </div>
      </section>

      <section className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-16">
        <div className="mx-auto max-w-4xl px-6 grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Reschedule or cancel</p>
            <p className="text-[var(--color-ink-muted)]">
              Plans changed? Give us a heads-up at least 2 hours before your slot so we can fill the chair.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">What to expect</p>
            <ul className="text-[var(--color-ink-muted)] space-y-2 list-disc pl-5">
              <li>Confirmation text right after booking.</li>
              <li>Reminder 24 hours and 1 hour before.</li>
              <li>Walk-ins welcome when the chair is open.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
