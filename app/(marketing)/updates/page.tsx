"use client";

import { useEffect, useState } from "react";
import { fetchUpdates, formatDate, type Update } from "@/lib/contentful";
import { PageHero } from "@/components/ui/PageHero";
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
      {Array.from({ length: 6 }).map((_, i) => (
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

export default function UpdatesPage() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpdates()
      .then(setUpdates)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Updates"
        title="From the Chair."
        intro="Daily updates straight from the shop — what's in stock, what's new, and what's going on."
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 space-y-6">
          {loading ? (
            <Skeleton />
          ) : updates.length === 0 ? (
            <p className="text-center text-[var(--color-ink-muted)]">
              No updates yet. Check back soon.
            </p>
          ) : (
            updates.map((u) => <UpdateCard key={u.publishedAt} update={u} />)
          )}
        </div>
      </section>
    </>
  );
}
