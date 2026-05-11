import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE, HOURS_LIST, getTodayKey } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description: `Find ${SITE.name} barbershop in ${SITE.city}, ${SITE.state}. Address, phone, hours, and contact form.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const today = getTodayKey();
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(
    `${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}`,
  )}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}`,
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Find the shop."
        intro="Stop in, give us a ring, or send a note. For appointments, the booking page is faster than messaging."
      />

      <section className="bg-[var(--color-bg)] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <p className="eyebrow mb-2">Address</p>
              <p className="font-display text-3xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] flex items-start gap-3">
                <MapPin size={24} className="mt-2 text-[var(--color-accent)]" />
                <span>
                  {SITE.street}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </span>
              </p>
            </a>

            <a href={SITE.phoneHref} className="block mt-8 group">
              <p className="eyebrow mb-2">Phone</p>
              <p className="font-display text-3xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] flex items-center gap-3">
                <Phone size={24} className="text-[var(--color-accent)]" />
                {SITE.phone}
              </p>
            </a>

            <div className="mt-10">
              <p className="eyebrow mb-3">Hours</p>
              <table className="w-full max-w-md text-base">
                <tbody>
                  {HOURS_LIST.map((d) => (
                    <tr
                      key={d.key}
                      className={
                        d.key === today
                          ? "text-[var(--color-ink)] bg-[var(--color-surface)]"
                          : "text-[var(--color-ink-muted)]"
                      }
                    >
                      <td className="py-2 px-3 font-medium text-[var(--color-accent)] uppercase tracking-wider text-xs">
                        {d.label}
                      </td>
                      <td className="py-2 px-3">{d.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 bg-[var(--color-ink)] text-[var(--color-bg)] p-6 max-w-md">
              <p className="text-sm">
                For appointments, please use the{" "}
                <Link href="/book" className="font-medium underline">
                  booking page
                </Link>{" "}
                — it&rsquo;s faster than messaging.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-surface)] p-8 border border-[var(--color-line)]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-[16/9] lg:aspect-[16/7] border border-[var(--color-line)]">
            <iframe
              src={embedSrc}
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing Greg's Cuts location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
