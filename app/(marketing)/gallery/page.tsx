import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { BeforeAfterSection } from "@/components/gallery/BeforeAfterSection";
import { ComicsSection } from "@/components/gallery/ComicsSection";
import { BarberPoleDivider } from "@/components/layout/BarberPoleDivider";
import { BookingBand } from "@/components/home/BookingBand";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Recent cuts, fades, beards, comic strips, and shop photos from ${SITE.name} in ${SITE.city}.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The work"
        title="Cuts, beards, and the shop."
        intro="Real photos from real chairs."
      />
      <section className="bg-[var(--color-bg)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryGrid />
        </div>
      </section>
      <BarberPoleDivider />
      <BeforeAfterSection />
      <BarberPoleDivider />
      <ComicsSection />
      <BookingBand />
    </>
  );
}
