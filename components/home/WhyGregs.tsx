import { Scissors, Clock, MapPin } from "lucide-react";
import { WHY_GREGS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS = { Scissors, Clock, MapPin };

export function WhyGregs() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-line)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Why Greg's" title="Reasons people come back." />

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {WHY_GREGS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.heading}>
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-3xl text-[var(--color-ink)]">{item.heading}</h3>
                <p className="mt-3 text-[var(--color-ink-muted)]">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
