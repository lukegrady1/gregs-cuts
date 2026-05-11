import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Reviews" title="What Folks Say." inverted />

        <div className="mt-12 -mx-6 px-6 overflow-x-auto snap-row">
          <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-3">
            {REVIEWS.slice(0, 3).map((r) => (
              <article
                key={r.name}
                className="w-[85vw] sm:w-[60vw] md:w-auto bg-[var(--color-bg)] text-[var(--color-ink)] p-8 border border-[var(--color-line)] flex flex-col"
              >
                <div className="flex text-[var(--color-accent)] mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[var(--color-ink)] flex-1">&ldquo;{r.body}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
                  <span className="font-display text-xl">{r.name}</span>
                  <span className="text-xs text-[var(--color-ink-muted)] uppercase tracking-wider">
                    {r.source} · {r.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
