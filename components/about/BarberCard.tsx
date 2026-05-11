import Image from "next/image";
import { Instagram } from "lucide-react";
import type { Barber } from "@/lib/barbers";
import { VintageFrame } from "@/components/ui/VintageFrame";

export function BarberCard({ barber }: { barber: Barber }) {
  return (
    <article className="text-center">
      <VintageFrame className="bg-[var(--color-surface)] inline-block">
        <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden">
          <Image
            src={barber.image}
            alt={`${barber.name}, barber at Greg's Cuts`}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover"
          />
        </div>
      </VintageFrame>
      <h3 className="mt-6 font-display text-3xl text-[var(--color-ink)]">{barber.name}</h3>
      <p className="font-accent text-2xl text-[var(--color-accent)]">{barber.yearsInChair}</p>
      <p className="mt-2 text-[var(--color-ink-muted)]">{barber.specialty}</p>
      {barber.instagram ? (
        <a
          href={`https://instagram.com/${barber.instagram.replace(/^@/, "")}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
        >
          <Instagram size={16} />
          {barber.instagram}
        </a>
      ) : null}
    </article>
  );
}
