import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SITE, HOURS_LIST, getTodayKey } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationPreview() {
  const today = getTodayKey();
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(
    `${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}`,
  )}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}`,
  )}&output=embed`;

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Find us" title="The Shop." />

          <div className="mt-8 space-y-6">
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-[var(--color-ink)] hover:text-[var(--color-accent)]"
            >
              <MapPin size={20} className="mt-1 text-[var(--color-accent)] shrink-0" />
              <span className="font-display text-2xl">
                {SITE.street}, {SITE.city}, {SITE.state} {SITE.zip}
              </span>
            </a>

            <a
              href={SITE.phoneHref}
              className="flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-accent)]"
            >
              <Phone size={20} className="text-[var(--color-accent)]" />
              <span className="font-display text-2xl">{SITE.phone}</span>
            </a>

            <div>
              <p className="eyebrow mb-3">Hours</p>
              <table className="w-full max-w-sm text-base">
                <tbody>
                  {HOURS_LIST.map((d) => (
                    <tr
                      key={d.key}
                      className={
                        d.key === today
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-ink-muted)]"
                      }
                    >
                      <td className="py-1 pr-4 font-medium text-[var(--color-accent)] uppercase tracking-wider text-xs">
                        {d.label}
                      </td>
                      <td className="py-1">{d.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-display uppercase tracking-wide"
            >
              Get directions <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[400px] border border-[var(--color-line)] overflow-hidden">
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
  );
}
