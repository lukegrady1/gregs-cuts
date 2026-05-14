"use client";

import { MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

export function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY > 400;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 240;
      setShow(scrolled && !nearBottom);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 border-t border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-[var(--color-accent)] border-r border-[var(--color-line)] font-display tracking-wide uppercase text-base"
      >
        <MapPin size={18} />
        Directions
      </a>
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-2 py-4 bg-[var(--color-accent)] text-black font-display tracking-wide uppercase text-base"
      >
        <Phone size={18} />
        Call Now
      </a>
    </div>
  );
}
