import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { SITE, HOURS_LIST, getTodayKey } from "@/lib/content";
import { BarberPoleIcon } from "./BarberPoleIcon";

export function Footer() {
  const today = getTodayKey();
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <BarberPoleIcon className="w-4 h-8" />
            <span className="font-display text-2xl text-[var(--color-ink)]">
              {SITE.name.toUpperCase()}
            </span>
          </div>
          <p className="mt-4 text-[var(--color-ink-muted)] max-w-xs">{SITE.tagline}</p>
          <p className="mt-3 font-accent text-2xl text-[var(--color-accent)]">
            Since {SITE.yearEstablished}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Hours</p>
          <table className="w-full text-sm">
            <tbody>
              {HOURS_LIST.map((d) => (
                <tr
                  key={d.key}
                  className={d.key === today ? "text-[var(--color-ink)]" : "text-[var(--color-ink-muted)]"}
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

        <div>
          <p className="eyebrow mb-4">Find us</p>
          <ul className="space-y-3 text-[var(--color-ink-muted)]">
            <li>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-[var(--color-accent)]"
              >
                <MapPin size={16} className="mt-1 shrink-0 text-[var(--color-accent)]" />
                <span>
                  {SITE.street}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </span>
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-[var(--color-accent)]">
                <Phone size={16} className="text-[var(--color-accent)]" />
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
              >
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--color-ink-muted)]">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--color-accent)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-accent)]">
              Terms
            </Link>
            <a
              href="https://gradydigital.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-accent)]"
            >
              Built by Grady Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
