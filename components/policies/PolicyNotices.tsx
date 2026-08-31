const TIME_TIERS = [
  { label: "Up to 30 min", price: "$35" },
  { label: "31–45 min", price: "$45" },
  { label: "46–60 min", price: "$55" },
  { label: "61–75 min", price: "$65" },
];

export function PolicyNotices({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-12 ${className}`}>
      <section
        id="haircut-time-policy"
        aria-labelledby="haircut-time-policy-heading"
        className="scroll-mt-24 border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 md:p-8"
      >
        <h2
          id="haircut-time-policy-heading"
          className="font-display text-2xl md:text-3xl text-[var(--color-ink)] text-center uppercase tracking-wide"
        >
          Haircut Time Policy
        </h2>
        <p className="mt-3 text-center text-[var(--color-ink-muted)]">
          $35 includes up to 30 minutes in the chair.
        </p>

        <ul className="mt-8 grid gap-px bg-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {TIME_TIERS.map((tier) => (
            <li
              key={tier.label}
              className="bg-[var(--color-surface)] px-4 py-5 text-center"
            >
              <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                {tier.label}
              </span>
              <span className="mt-2 block font-display text-3xl text-[var(--color-accent)]">
                {tier.price}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-center text-[var(--color-ink-muted)]">
          Additional time needed because of length, density, transformation work, or complexity is
          charged at $10 per additional 15 minutes.
        </p>
      </section>

      <section
        id="group-policy"
        aria-labelledby="group-policy-heading"
        className="scroll-mt-24 border border-[var(--color-line)]"
      >
        <h2
          id="group-policy-heading"
          className="bg-[var(--color-accent)] px-6 py-4 font-display text-2xl md:text-3xl text-center text-black uppercase tracking-wide"
        >
          New Group Policy
        </h2>

        <div className="grid gap-px bg-[var(--color-line)] sm:grid-cols-2">
          <p className="bg-[var(--color-surface)] px-6 py-6 text-center font-display text-xl text-[var(--color-ink)]">
            1–2 guests: <span className="text-[var(--color-accent)]">Walk-ins welcome</span>
          </p>
          <p className="bg-[var(--color-surface)] px-6 py-6 text-center font-display text-xl text-[var(--color-ink)]">
            3 or more guests:{" "}
            <span className="text-[var(--color-accent)]">Appointment required</span>
          </p>
        </div>

        <div className="px-6 py-8 space-y-4 text-center">
          <p className="text-[var(--color-ink-muted)]">
            Parties of three or more must schedule in advance so we can reserve enough time for the
            entire group and keep wait times comfortable for our walk-in guests.
          </p>
          <p className="text-[var(--color-ink)]">
            Thank you for your continued support and for helping Greg&rsquo;s Cuts provide the best
            experience for everyone.
          </p>
        </div>
      </section>
    </div>
  );
}
