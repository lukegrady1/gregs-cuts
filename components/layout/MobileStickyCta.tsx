"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/content";

export function MobileStickyCta() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 border-t border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-md">
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-[var(--color-accent)] border-r border-[var(--color-line)] font-display tracking-wide uppercase text-base"
      >
        <Phone size={18} />
        Call
      </a>
      <Link
        href="/book"
        className="flex items-center justify-center py-4 bg-[var(--color-accent)] text-black font-display tracking-wide uppercase text-base"
      >
        Book Now
      </Link>
    </div>
  );
}
