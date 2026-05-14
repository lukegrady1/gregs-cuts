"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Lightweight facade for the Google Maps embed. The real iframe pulls in a
 * heavy bundle of Maps JS, so we don't mount it until the section is about to
 * scroll into view — keeping the rest of the home page fast to load.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [show]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      {show ? (
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-[var(--color-surface)] text-[var(--color-ink-muted)]"
        >
          <span
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <MapPin size={40} className="relative text-[var(--color-accent)]" />
          <span className="relative font-display uppercase tracking-wide text-sm">
            Loading map…
          </span>
        </div>
      )}
    </div>
  );
}
