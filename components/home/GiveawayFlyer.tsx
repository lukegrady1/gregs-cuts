import Image from "next/image";
import { Phone } from "lucide-react";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { SITE } from "@/lib/content";

const FLYER_ALT =
  "Greg's Cuts 1 Year Anniversary Giveaway flyer. Grand prize: Nintendo Switch 2, a free Greg's Cuts service, and free hair products. 1st and 2nd prize: a free Greg's Cuts service and free hair products. How to enter: get any service at Greg's Cuts, fill out an entry form with your name and contact details, enter as many times as you like but only once per day. 3 winners announced November 1st. Greg's Cuts, 10 Pearson Blvd, Gardner, MA. 351-356-3551.";

export function GiveawayFlyer() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="1 Year Anniversary"
          title="Win a Nintendo Switch 2."
          subtitle="Thank you for a great first year. Get any service at Greg's Cuts, fill out an entry form, and you're in. Enter once per day, as many days as you like. Three winners announced November 1st."
          align="center"
        />

        <div className="mt-12">
          <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
            <Image
              src={asset("/gregs-cuts-anniversary-giveaway-flyer.webp")}
              alt={FLYER_ALT}
              width={1024}
              height={1536}
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
