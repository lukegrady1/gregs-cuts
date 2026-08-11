import Image from "next/image";
import { Phone } from "lucide-react";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { SITE } from "@/lib/content";

const FLYER_ALT =
  "Greg's Cuts flyer — Love your hair, prevent lice. Healthy habits for a strong start to school: check weekly, don't share hats or brushes, tie long hair back, keep hair items and backpacks off the floor, and remember lice doesn't mean anyone is unclean.";

export function LiceFlyer() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Back to school"
          title="Love your hair. Prevent lice."
          subtitle="Head lice can happen to anyone. These simple habits help keep our kids and families lice-free all year long."
          align="center"
        />

        <div className="mt-12">
          <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
            <Image
              src={asset("/gregs-cuts-lice-prevention-flyer.webp")}
              alt={FLYER_ALT}
              width={1200}
              height={1565}
              sizes="(max-width: 768px) 100vw, 720px"
              className="block w-full h-auto"
            />
          </VintageFrame>
        </div>

        <div className="mt-10 text-center">
          <Button href={SITE.phoneHref} size="lg">
            <Phone size={18} />
            Call {SITE.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
