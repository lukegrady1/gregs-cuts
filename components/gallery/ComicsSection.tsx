"use client";

import { useState } from "react";
import Image from "next/image";
import { COMICS } from "@/lib/comics";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { Lightbox } from "./Lightbox";

export function ComicsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (COMICS.length === 0) return null;

  // Adapt comics to the GalleryItem shape the Lightbox expects
  const lightboxItems = COMICS.map((c) => ({
    src: c.src,
    alt: c.alt,
    width: c.width,
    height: c.height,
    category: "Classic" as const,
  }));

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="From the chair"
          title="Greg's Comics"
          subtitle="Original comic strips by the man himself."
          align="center"
        />

        <div className="mt-12 space-y-8">
          {COMICS.map((comic, idx) => (
            <button
              key={comic.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="block w-full text-left group"
              aria-label={`View larger: ${comic.alt}`}
            >
              <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${comic.width} / ${comic.height}` }}
                >
                  <Image
                    src={comic.src}
                    alt={comic.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </VintageFrame>
            </button>
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
