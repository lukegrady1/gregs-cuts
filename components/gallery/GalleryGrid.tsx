"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY, type GalleryCategory, type GalleryItem } from "@/lib/gallery";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { Lightbox } from "./Lightbox";

const FILTERS: ("All" | GalleryCategory)[] = ["All", "Fades", "Beards", "Classic", "The Shop"];

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(() => {
    if (filter === "All") return GALLERY;
    return GALLERY.filter((g) => g.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm uppercase tracking-wider font-display transition-colors border rounded-[2px] ${
                active
                  ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)]"
                  : "border-[var(--color-line)] text-[var(--color-ink-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {items.map((item, idx) => (
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </VintageFrame>
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(i) => setOpenIndex(i)}
      />
    </div>
  );
}
