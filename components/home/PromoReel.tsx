import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/content";

export function PromoReel() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Watch the reel"
            title="See it in action."
            subtitle="A quick look at the cuts, the chair, and the shop — straight from Greg's Cuts."
          />
          <div className="mt-8">
            <Button href={SITE.phoneHref} size="lg">
              <Phone size={18} />
              Call {SITE.phone}
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[22rem] mx-auto lg:mx-0 lg:ml-auto">
          <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
            <video
              src={asset("/gregs-cuts-promo.mp4")}
              poster={asset("/gregs-cuts-promo-poster.webp")}
              controls
              playsInline
              preload="metadata"
              aria-label="Greg's Cuts promo reel"
              className="block w-full aspect-[9/16] object-cover bg-black"
            />
          </VintageFrame>
        </div>
      </div>
    </section>
  );
}
