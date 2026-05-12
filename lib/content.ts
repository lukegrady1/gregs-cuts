/**
 * Site-wide content constants. Placeholders wrapped in {{DOUBLE_BRACES}}
 * must be confirmed with Greg before launch.
 */

export const SITE = {
  name: "Greg's Cuts",
  tagline: "Walk in. Walk out sharp.",
  yearEstablished: "2025",
  city: "Gardner",
  state: "MA",
  zip: "01440",
  street: "10 Pearson Boulevard",
  phone: "(351) 356-3551",
  phoneHref: "tel:+13513563551",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lukegrady1.github.io/gregs-cuts",
  facebookUrl: "https://www.facebook.com/p/Gregs-cuts-61580414766906/",
  instagramUrl: "https://www.instagram.com/gregscutsofficial/",
  bookingUrl: "https://api.gradydigital.com/widget/service-menu/6a039af60acbb9479546c649",
  mapsUrl: "https://maps.app.goo.gl/NgPzGuStMCeefDsk9",
  ghlContactWebhook: process.env.GHL_CONTACT_WEBHOOK_URL ?? "",
  reviewCount: "8",
} as const;

export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export const HOURS: Record<DayKey, { label: string; hours: string; closed?: boolean }> = {
  monday: { label: "Mon", hours: "Closed", closed: true },
  tuesday: { label: "Tue", hours: "10:00 AM – 6:00 PM" },
  wednesday: { label: "Wed", hours: "10:00 AM – 6:00 PM" },
  thursday: { label: "Thu", hours: "2:00 PM – 8:00 PM" },
  friday: { label: "Fri", hours: "10:00 AM – 6:00 PM" },
  saturday: { label: "Sat", hours: "10:00 AM – 5:00 PM" },
  sunday: { label: "Sun", hours: "9:00 AM – 3:00 PM" },
};

const DAY_ORDER: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const HOURS_LIST = DAY_ORDER.map((key) => ({ key, ...HOURS[key] }));

export function getTodayKey(): DayKey {
  const idx = new Date().getDay();
  // JS: Sunday = 0; map to our keys
  const map: DayKey[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return map[idx];
}

export function getTodayHours(): string {
  const today = HOURS[getTodayKey()];
  return today.closed ? "Closed today" : `Open ${today.hours}`;
}

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const HERO_COPY = {
  eyebrow: `EST. ${SITE.yearEstablished} — ${SITE.city}, ${SITE.state}`,
  headlineLine1: "Sharp Cuts.",
  headlineLine2: "No Nonsense.",
  sub: "Walk-ins welcome, but the chair fills fast. Book your seat in under 30 seconds.",
};

export const WHY_GREGS = [
  {
    icon: "Scissors" as const,
    heading: "Real barber, not a chain.",
    body:
      "Greg's been cutting hair for years — and in 2025 he opened his own shop right here in Gardner. Same hands you'd want, finally under his own sign.",
  },
  {
    icon: "Clock" as const,
    heading: "In and out, on time.",
    body:
      "Book online, show up, walk out sharp. We respect your time — and the schedule we set.",
  },
  {
    icon: "MapPin" as const,
    heading: `${SITE.city}'s chair.`,
    body:
      "A neighborhood spot, not a concept. Coffee on, conversation easy, the cut is what people come back for.",
  },
];

export const ABOUT_STORY = [
  "Greg's been cutting hair longer than he's owned a shop. Years behind chairs that weren't his, building a regular list one cut at a time, learning every clipper guard and every kind of hairline along the way.",
  `In ${SITE.yearEstablished}, he took the leap. Found a spot on Pearson Boulevard in ${SITE.city}, hung the sign, and opened the doors of his own place. Same hands. Same standard. Finally under his own name.`,
  "What you get now is the version of Greg's work he's been building toward — the chair he wanted, the schedule he picked, the standards he runs. Online booking, text reminders, and a hot towel finish on every cut.",
];
