"use client";

import { useEffect, useState } from "react";
import { fetchUpdates, formatDate, type Update } from "@/lib/contentful";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";

function UpdateCard({ update }: { update: Update }) {
  return (
    <article className="bg-[var(--color-surface)] p-6 md:p-8 border border-[var(--color-line)]">
      <time className="block text-xs uppercase tracking-[0.12em] text-[var(--color-accent)] mb-3">
        {formatDate(update.publishedAt)}
      </time>
      <div className="text-[var(--color-ink)] leading-relaxed">
        <RichText content={update.body} />
      </div>
    </article>
  );
}

function Skeleton() {
  return (
    <div className="space-y-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="bg-[var(--color-surface)] border border-[var(--color-line)] p-6 md:p-8 animate-pulse"
        >
          <div className="h-3 w-32 bg-[var(--color-line)] rounded mb-4" />
          <div className="space-y-2">
            <div className="h-4 bg-[var(--color-line)] rounded w-full" />
            <div className="h-4 bg-[var(--color-line)] rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DailyUpdates() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpdates(3)
      .then(setUpdates)
      .finally(() => setLoading(false));
  }, []);

  if (!loading && updates.length === 0) return null;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Updates" title="From the Chair." />

        <div className="mt-12 space-y-6">
          {loading ? <Skeleton /> : updates.map((u) => <UpdateCard key={u.publishedAt} update={u} />)}
        </div>

        <div className="mt-12 text-center">
          <Button href="/updates" variant="secondary">
            See all updates
          </Button>
        </div>
      </div>
    </section>
  );
}
