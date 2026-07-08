import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ComicsSection } from "@/components/gallery/ComicsSection";
import { BookingBand } from "@/components/home/BookingBand";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Greg's Comics",
  description: `Original comic strips drawn by Greg himself at ${SITE.name} in ${SITE.city}.`,
  alternates: { canonical: "/comics" },
};

export default function ComicsPage() {
  return (
    <>
      <PageHero
        eyebrow="From the chair"
        title="Greg's Comics."
        intro="Original comic strips by the man himself."
      />
      <ComicsSection />
      <BookingBand />
    </>
  );
}
