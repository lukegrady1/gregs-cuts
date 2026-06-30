"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { Lightbox } from "./Lightbox";
import type { GalleryItem } from "@/lib/gallery";

const FLYER: GalleryItem = {
  src: asset("/gregs-cuts-flyer.webp"),
  alt: "Greg's Cuts flyer — walk-ins welcome in Gardner, MA. Haircuts, beard trims, shampoo & treatments, eyebrow wax, and styling & blow dry, with a veterans discount.",
  category: "Classic",
  width: 1054,
  height: 1492,
};

export function FlyerSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="More than a cut"
          title="The Flyer"
          subtitle="Precision, passion, confidence — every cut restores the best version of you."
          align="center"
        />

        <div className="mt-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full text-left group"
            aria-label={`View larger: ${FLYER.alt}`}
          >
            <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${FLYER.width} / ${FLYER.height}` }}
              >
                <Image
                  src={FLYER.src}
                  alt={FLYER.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </VintageFrame>
          </button>
        </div>
      </div>

      <Lightbox
        items={[FLYER]}
        index={open ? 0 : null}
        onClose={() => setOpen(false)}
        onNavigate={() => {}}
      />
    </section>
  );
}
