import Image from "next/image";
import { Phone } from "lucide-react";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { SITE } from "@/lib/content";

const FLYER_ALT =
  "Greg's Cuts holiday teaser. A flowing wave of dark hair with crimson highlights on a black background. The holidays are coming. So is something colorful. Coming this December.";

export function HolidayTeaserFlyer() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Coming This December"
          title="The holidays are coming."
          subtitle="So is something colorful. Stay tuned for what Greg's Cuts has in store this December."
          align="center"
        />

        <div className="mt-12">
          <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
            <Image
              src={asset("/gregs-cuts-holiday-color-teaser.webp")}
              alt={FLYER_ALT}
              width={819}
              height={918}
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
