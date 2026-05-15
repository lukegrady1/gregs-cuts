import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TOP_SERVICES } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSnapshot() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What You Came For."
          subtitle="The cuts most people book. Full menu and prices on the services page."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TOP_SERVICES.map((service, i) => (
            <Link
              key={service.name}
              href={`/services#${service.anchor}`}
              className="group relative bg-[var(--color-surface)] border border-[var(--color-line)] p-8 transition-all duration-200 hover:border-[var(--color-accent)] hover:-translate-y-1"
            >
              <span className="font-display text-6xl text-[var(--color-line)] group-hover:text-[var(--color-accent)] transition-colors">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-3xl text-[var(--color-ink)]">{service.name}</h3>
              <p className="mt-3 text-[var(--color-ink-muted)]">{service.shortBlurb}</p>
              <div className="mt-6">
                <span className="font-display text-2xl text-[var(--color-accent)]">{service.price}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-display text-lg uppercase tracking-wide"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
