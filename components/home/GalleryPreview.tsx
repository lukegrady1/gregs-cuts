import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY, type GalleryItem } from "@/lib/gallery";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";

const VIDEO_ITEM: GalleryItem = {
  src: asset("/gregs_cuts.mp4"),
  alt: "Inside Greg's Cuts — short video clip",
  category: "The Shop",
  width: 1280,
  height: 720,
  type: "video",
};

export function GalleryPreview() {
  const items = [VIDEO_ITEM, ...GALLERY.slice(0, 7)];
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Recent work" title="The Work." />

        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <VintageFrame key={item.src} className="bg-[var(--color-surface)] group overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
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
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>
            </VintageFrame>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-display text-lg uppercase tracking-wide"
          >
            See the full gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
