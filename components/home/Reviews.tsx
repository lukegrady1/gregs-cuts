import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Reviews() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Reviews" title="What People Say." inverted />

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

        <div className="mt-12 text-center">
          <Button
            href="https://www.google.com/search?num=10&hl=en-IT&rlz=1C5KXLH_enUS1210US1210&sca_esv=afc85aa92f7b31d4&cs=0&output=search&tbm=lcl&kgmid=/g/11xzlgbd1d&q=Greg%27s+cuts&shem=epsdc,rimspwouoe&shndl=30&source=sh/x/kp/local/m1/1&kgs=ccb84f14c91ba503&utm_source=epsdc,rimspwouoe,sh/x/kp/local/m1/1#lkt=LocalPoiReviews&rlfi=hd:;si:1158842562816712259,l,CgtHcmVnJ3MgY3V0c5IBCmhhaXJfc2Fsb24;mv:[[42.566922077319035,-71.97996942824662],[42.56656212268097,-71.98045817175338]]&lrd=0x89e15994196a82f1:0x1015092bcb4b1e43,3,,,,"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a review
          </Button>
        </div>
      </div>
    </section>
  );
}
