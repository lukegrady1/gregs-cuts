import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { VintageFrame } from "@/components/ui/VintageFrame";

export function ServiceRow({ service, index }: { service: Service; index: number }) {
  const reverse = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");
  return (
    <article
      id={service.slug}
      className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center scroll-mt-24"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <span className="font-display text-7xl text-[var(--color-line)] block">{number}</span>
        <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--color-ink)]">
          {service.name}
        </h2>
        <p className="mt-4 text-[var(--color-ink-muted)] text-lg max-w-prose">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <span className="font-display text-4xl text-[var(--color-accent)]">{service.price}</span>
          <span className="flex items-center gap-2 text-[var(--color-ink-muted)]">
            <Clock size={16} />
            {service.duration}
          </span>
        </div>
        <div className="mt-8">
          <Link
            href={`/book?service=${service.slug}`}
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-display uppercase tracking-wide"
          >
            Book this service <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <VintageFrame className={`bg-[var(--color-surface)] ${reverse ? "lg:order-1" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.name} at Greg's Cuts`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </VintageFrame>
    </article>
  );
}
