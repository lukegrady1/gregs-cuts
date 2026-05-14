"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/asset";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 h-24 flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center" aria-label={SITE.name}>
            <Image
              src={asset("/gregs_cuts_logo.png")}
              alt={SITE.name}
              width={1376}
              height={768}
              priority
              className="h-20 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[0.8rem] uppercase tracking-[0.12em] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors py-2 group"
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--color-accent)] origin-left transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href={SITE.phoneHref} size="md" className="hidden sm:inline-flex">
              <Phone size={16} />
              Call Now
            </Button>
            <button
              type="button"
              className="lg:hidden p-2 text-[var(--color-ink)] relative z-50"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="lg:hidden fixed inset-x-0 top-24 bottom-0 z-40 border-t border-[var(--color-line)] flex flex-col overflow-y-auto"
          style={{ backgroundColor: "#0E0E0E" }}
        >
          <nav className="flex-1 flex flex-col gap-2 p-8" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-4xl text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div
            className="p-6 border-t border-[var(--color-line)]"
            style={{ backgroundColor: "#0E0E0E" }}
          >
            <Button href={SITE.phoneHref} size="lg" className="w-full">
              <Phone size={18} />
              Call {SITE.phone}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
