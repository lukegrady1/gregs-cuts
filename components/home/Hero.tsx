"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { VintageFrame } from "@/components/ui/VintageFrame";
import { SITE, HERO_COPY, getTodayHours } from "@/lib/content";

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const child = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-bg)] min-h-[92vh] flex items-center">
      <div
        aria-hidden="true"
        className="giant-numeral absolute right-[-4rem] bottom-[-6rem] z-0 select-none"
      >
        01
      </div>

      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-5 gap-12 items-center w-full"
      >
        <div className="lg:col-span-3">
          <motion.div variants={child}>
            <Eyebrow>{HERO_COPY.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="font-display mt-4 text-[var(--color-ink)]">
            <motion.span
              variants={child}
              className="block text-[clamp(3.5rem,9vw,8rem)] leading-[0.9]"
            >
              {HERO_COPY.headlineLine1}
            </motion.span>
            <motion.span
              variants={child}
              className="block text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] text-[var(--color-accent)]"
            >
              {HERO_COPY.headlineLine2}
            </motion.span>
          </h1>

          <motion.p
            variants={child}
            className="mt-6 max-w-[52ch] text-[var(--color-ink-muted)] text-lg"
          >
            {HERO_COPY.sub}
          </motion.p>

          <motion.div variants={child} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={SITE.phoneHref} size="lg">
              <Phone size={18} />
              Call {SITE.phone}
            </Button>
            <Button href={SITE.mapsUrl} variant="secondary" size="lg">
              <MapPin size={18} />
              Get Directions
            </Button>
          </motion.div>

          <motion.ul
            variants={child}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-ink-muted)]"
          >
            <li className="flex items-center gap-2">
              <span className="flex text-[var(--color-accent)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span>{SITE.reviewCount}+ reviews</span>
            </li>
            <Dot />
            <li>Walk-ins welcome</li>
            <Dot />
            <li>{getTodayHours()}</li>
          </motion.ul>
        </div>

        <motion.div
          variants={child}
          className="lg:col-span-2 relative"
        >
          <VintageFrame className="bg-[var(--color-surface)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80&auto=format&fit=crop"
                alt="Vintage leather barber chair in front of a brick wall"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </VintageFrame>

          <a
            href={SITE.phoneHref}
            className="absolute -bottom-6 -left-6 sm:-left-10 max-w-xs block bg-[var(--color-surface)] border border-[var(--color-accent)] p-5 transition-colors hover:bg-[var(--color-surface-2)]"
          >
            <p className="eyebrow mb-1">Walk in or call</p>
            <p className="font-display text-2xl text-[var(--color-ink)] leading-tight">
              Stop by the shop.<br />
              Or give us a ring.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--color-accent)]">
              <Phone size={14} /> {SITE.phone}
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Dot() {
  return <li aria-hidden="true" className="text-[var(--color-accent)]">·</li>;
}
