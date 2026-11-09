import Image from "next/image";
import { Phone } from "lucide-react";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { SITE } from "@/lib/content";

const FLYER_ALT =
  "Greg's Cuts Veterans Day Appreciation flyer. Wednesday, November 11, 2026, 9:00 AM to 1:00 PM. In honor of those who have served our country, Greg's Cuts will be opening for a special Veterans Day event. Free haircuts exclusively for military veterans. Haircut services only. Military ID required. Thank you for your courage, sacrifice, and service. Greg's Cuts, 10 Pearson Blvd, Gardner, MA 01440. 351-356-3551. Gregscuts.com.";

export function VeteransDayFlyer() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Veterans Day Appreciation"
          title="Free haircuts for veterans."
          subtitle="Wednesday, November 11, 2026, from 9:00 AM to 1:00 PM. In honor of those who have served our country, Greg's Cuts is opening for a special Veterans Day event. Haircut services only. Military ID required."
          align="center"
        />

        <div className="mt-12">
          <VintageFrame className="bg-[var(--color-surface)] overflow-hidden">
            <Image
              src={asset("/gregs-cuts-veterans-day-flyer.webp")}
              alt={FLYER_ALT}
              width={1536}
              height={1024}
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
