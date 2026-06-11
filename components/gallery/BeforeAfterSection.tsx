"use client";

import { useState } from "react";
import Image from "next/image";
import { BEFORE_AFTER } from "@/lib/beforeAfter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { Lightbox } from "./Lightbox";
import type { GalleryItem } from "@/lib/gallery";

export function BeforeAfterSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (BEFORE_AFTER.length === 0) return null;

  // Flatten to a single list the Lightbox can page through: before, after, before, after...
  const lightboxItems: GalleryItem[] = BEFORE_AFTER.flatMap((pair) => [
    { ...pair.before, category: "Classic" as const },
    { ...pair.after, category: "Classic" as const },
  ]);

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="The transformation"
          title="Before & After"
          subtitle="See the difference a visit to the chair makes."
          align="center"
        />

        <div className="mt-12 space-y-10">
          {BEFORE_AFTER.map((pair, pairIdx) => (
            <figure key={pair.before.src}>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { img: pair.before, badge: "Before", offset: 0 },
                  { img: pair.after, badge: "After", offset: 1 },
                ].map(({ img, badge, offset }) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setOpenIndex(pairIdx * 2 + offset)}
                    className="relative block w-full text-left group"
                    aria-label={`View larger: ${img.alt}`}
                  >
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-ink)]/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-bg)]">
                      {badge}
                    </span>
                    <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
                      <div className="relative w-full overflow-hidden aspect-[3/4]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 480px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </VintageFrame>
                  </button>
                ))}
              </div>
              {pair.label ? (
                <figcaption className="mt-4 text-center text-sm text-[var(--color-ink-muted)]">
                  {pair.label}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(i) => setOpenIndex(i)}
      />
    </section>
  );
}
