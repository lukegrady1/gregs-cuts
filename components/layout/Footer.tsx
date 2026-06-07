import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { SITE, HOURS_LIST, getTodayKey } from "@/lib/content";
import { asset } from "@/lib/asset";

export function Footer() {
  const today = getTodayKey();
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16 grid grid-cols-2 gap-x-6 gap-y-8 md:gap-12 md:grid-cols-3">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src={asset("/gregs_cuts_logo.webp")}
            alt={SITE.name}
            width={900}
            height={444}
            className="h-16 md:h-24 w-auto"
          />
          <p className="mt-3 md:mt-4 text-sm md:text-base text-[var(--color-ink-muted)] max-w-xs">{SITE.tagline}</p>
          <p className="mt-2 md:mt-3 font-accent text-xl md:text-2xl text-[var(--color-accent)]">
            Since {SITE.yearEstablished}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-2 md:mb-4">Hours</p>
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
          <p className="eyebrow mb-2 md:mb-4">Find us</p>
          <ul className="space-y-2 md:space-y-3 text-[var(--color-ink-muted)]">
            <li>
              <a
                href={SITE.mapsUrl}
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
            <Link href="/policies" className="hover:text-[var(--color-accent)]">
              Policies
            </Link>
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
              className="group"
            >
              Built by <span className="group-hover:text-[var(--color-accent)]">Grady Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
