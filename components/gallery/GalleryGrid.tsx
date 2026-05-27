"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/gallery";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { Lightbox } from "./Lightbox";

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {GALLERY.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="block w-full text-left group"
            aria-label={`View larger: ${item.alt}`}
          >
            <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>
            </VintageFrame>
          </button>
        ))}
      </div>

      <Lightbox
        items={GALLERY}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(i) => setOpenIndex(i)}
      />
    </div>
  );
}
