import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { BookingBand } from "@/components/home/BookingBand";
import { BarberCard } from "@/components/about/BarberCard";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_STORY, SITE } from "@/lib/content";
import { BARBERS } from "@/lib/barbers";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the team at ${SITE.name} — a real neighborhood hair salon in ${SITE.city}, ${SITE.state}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Open since ${SITE.yearEstablished}`}
        title="Years of cutting. One new chair."
        intro={`Greg cut hair for years before opening his own shop. In ${SITE.yearEstablished}, he hung the sign on Pearson Boulevard — same hands, finally under his own name.`}
      />

      <section className="bg-[var(--color-bg)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <VintageFrame className="bg-[var(--color-surface)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={asset("/greg.webp")}
                alt="Greg Weatherspoon, owner of Greg's Cuts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </VintageFrame>
          <div>
            <SectionHeading eyebrow="The story" title="The leap." />
            <div className="mt-6 space-y-4 text-[var(--color-ink-muted)] text-lg max-w-prose">
              {ABOUT_STORY.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="The chair" title="The barber." align="center" />
          <div className="mt-12 grid gap-12 justify-items-center">
            {BARBERS.map((b) => (
              <BarberCard key={b.slug} barber={b} />
            ))}
          </div>
        </div>
      </section>

      <BookingBand />
    </>
  );
}
