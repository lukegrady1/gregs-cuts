export function BarberPoleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="10" height="26" rx="5" fill="var(--color-ink)" />
      <path
        d="M3 6 L13 4 M3 11 L13 9 M3 16 L13 14 M3 21 L13 19 M3 26 L13 24"
        stroke="var(--color-danger)"
        strokeWidth="2"
      />
      <circle cx="8" cy="3" r="1.5" fill="var(--color-accent)" />
      <circle cx="8" cy="29" r="1.5" fill="var(--color-accent)" />
    </svg>
  );
}
