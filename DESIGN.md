# Greg's Cuts — Website DESIGN.md

**Client:** Greg's Cuts (Barbershop)
**Source of truth:** https://www.facebook.com/p/Gregs-cuts-61580414766906/
**Agency:** Grady Digital
**Status:** Spec for Claude Code implementation

> ⚠️ **Placeholder values** are wrapped in `{{DOUBLE_BRACES}}`. Do not ship without confirming with Greg. Facebook blocks scraping, so address, phone, hours, barbers, and exact services must be pulled from the FB page manually or from a discovery call before launch.

---

## 1. Project Overview

A multi-page marketing site for Greg's Cuts, a neighborhood barbershop. The site's job is one thing: **get visitors to book a haircut online.** Every page funnels toward the booking calendar. Secondary goals are establishing trust (photos of the work, real reviews, real barbers) and reducing phone-call volume by answering common questions on-site.

**Primary KPI:** Online bookings per month (tracked via GHL calendar).
**Secondary KPIs:** Phone clicks, direction clicks, form submissions, time-on-page for /services and /gallery.

---

## 2. Tech Stack

Standard Grady Digital build:

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables for the theme
- **Animation:** Framer Motion (page transitions, scroll-reveals, hero motion)
- **Icons:** `lucide-react`
- **Fonts:** Self-hosted via `next/font/google`
  - Display: **Bebas Neue** (condensed, signage-style — feels like a vintage barber pole banner)
  - Body: **Inter Tight** (modern, legible, pairs with the bold display)
  - Accent: **Caveat** (handwritten, used sparingly for "since {{YEAR}}" type details)
- **Forms:** React Hook Form + Zod, posting to a Next.js route handler that forwards to GHL via webhook
- **Booking:** GoHighLevel calendar embed (`<iframe>`) on `/book`, with a deep-linked CTA on every page
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics + GA4 + Meta Pixel
- **CMS:** None — content is hardcoded in TypeScript constants in `/lib/content.ts` for v1. (Upgrade path: Sanity if Greg wants to self-edit later.)

---

## 3. Brand & Aesthetic Direction

**Concept:** *"Old-school chair, new-school polish."*

Greg's Cuts is a real neighborhood barbershop, not a hipster luxury concept. The design should feel like walking into a shop that's been there a while — leather chairs, checkerboard floor, the smell of aftershave — but executed with modern typography and clean web craft so it doesn't read as kitsch.

### 3.1 Color Palette

Define in `app/globals.css` as CSS variables:

```css
:root {
  --color-bg: #0E0E0E;             /* near-black, warm */
  --color-surface: #1A1715;         /* warm dark surface for cards */
  --color-surface-2: #25201C;       /* slightly lifted */
  --color-ink: #F4EFE6;             /* warm off-white text */
  --color-ink-muted: #B8AFA1;       /* muted body text */
  --color-accent: #C8322B;          /* classic barber-pole red — signage, CTAs */
  --color-accent-hover: #E04A40;
  --color-danger: #B23A2E;          /* deep red for error states */
  --color-line: #3A332D;            /* hairline borders */
}
```

The dominant theme is **warm dark**. Light surfaces (cream `#F4EFE6`) appear in inverted sections (e.g. testimonials, service detail cards) to break up the page and give visual rhythm. Avoid pure white anywhere.

### 3.2 Typography

```ts
// app/layout.tsx
import { Bebas_Neue, Inter_Tight, Caveat } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-body" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-accent" });
```

- **H1 (hero):** Bebas Neue, `clamp(3.5rem, 9vw, 8rem)`, `letter-spacing: -0.01em`, `line-height: 0.9`
- **H2 (section):** Bebas Neue, `clamp(2.5rem, 5vw, 4.5rem)`
- **H3:** Bebas Neue, `1.75rem`
- **Body:** Inter Tight, `1.0625rem`, `line-height: 1.65`
- **Eyebrow / overlines:** Inter Tight, uppercase, `0.75rem`, `letter-spacing: 0.18em`, color `var(--color-accent)`
- **Accent script:** Caveat, used **only** for the tagline under the logo and for "Since {{YEAR}}" type marks — never for body copy.

### 3.3 Visual Motifs (use throughout)

- **Barber-pole stripe:** A thin animated diagonal-stripe element in red/cream/gold. Used as a section divider (full-width, 8px tall). Subtle CSS `@keyframes` slide on the diagonal. **Don't overdo it** — use 2–3 times across the site max.
- **Vintage frame:** Cream-colored 1px borders with 8px outer offset (double-border effect) on photo cards, like an old framed photograph.
- **Grain overlay:** A subtle SVG noise texture (`opacity: 0.04`) over the dark hero background to add film-grain warmth. Implement as a fixed-position pseudo-element.
- **Numerals as decoration:** Bebas Neue numerals at huge sizes (e.g. "01 — Classic Cut") used as section markers in the services grid.

### 3.4 What to Avoid

- Generic Inter-on-white SaaS look
- Purple gradients, glassmorphism, neon
- Emoji icons (use `lucide-react` line icons in gold)
- Stock-photo "smiling barber" hero images — use real photos from Greg's FB (request these in discovery) or, if unavailable at launch, a single dark, atmospheric placeholder shot of a barber chair

---

## 4. Site Architecture

Five pages plus the booking embed:

```
/                       Home
/services               Services & Pricing
/about                  About / Meet the Barbers
/gallery                Photo gallery (work + shop)
/contact                Contact, hours, map
/book                   Booking calendar (GHL embed)
```

Footer-only utility pages: `/privacy`, `/terms` (boilerplate).

### 4.1 URL & Metadata

Each page exports `generateMetadata` with:
- `title` — page-specific, suffixed " | Greg's Cuts"
- `description` — 150–160 chars, includes "{{CITY}}" and "barbershop"
- `openGraph` — image at `/og/{page}.png` (1200×630, generated from `opengraph-image.tsx` per route)
- `alternates.canonical`

Root `metadata` includes:
- `metadataBase`
- Favicon set (`/icon.png`, `/apple-icon.png`)
- Default OG image
- `keywords` — modest, e.g. `["{{CITY}} barbershop", "haircuts {{CITY}}", "Greg's Cuts", "fades", "beard trim"]`

### 4.2 Schema.org (JSON-LD)

In `/app/layout.tsx`, inject `BarberShop` schema:

```ts
{
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "Greg's Cuts",
  "image": "{{OG_IMAGE_URL}}",
  "address": { "@type": "PostalAddress", "streetAddress": "{{STREET}}", "addressLocality": "{{CITY}}", "addressRegion": "{{STATE}}", "postalCode": "{{ZIP}}" },
  "telephone": "{{PHONE}}",
  "url": "{{DOMAIN}}",
  "priceRange": "$$",
  "openingHoursSpecification": [ /* one entry per day */ ],
  "sameAs": ["https://www.facebook.com/p/Gregs-cuts-61580414766906/"]
}
```

---

## 5. Global Components

### 5.1 Header / Navigation

- Fixed top, dark glass background (`backdrop-blur-md bg-[var(--color-bg)]/80`), `border-b border-[var(--color-line)]`
- **Left:** Wordmark "GREG'S CUTS" in Bebas Neue, with a tiny gold barber-pole SVG icon next to it
- **Center:** Nav links — `Services`, `About`, `Gallery`, `Contact`. Inter Tight, uppercase, `0.8rem`, `letter-spacing: 0.12em`. Active link gets a 2px gold underline that grows in on hover via CSS transition.
- **Right:** A primary `Book Now` button — solid gold (`var(--color-accent)`), black text, no rounded corners (sharp 2px radius only), Bebas Neue label
- **Mobile:** Hamburger that slides in a full-height dark drawer with stacked links and a giant `Book Now` button at the bottom

### 5.2 Footer

Three-column on desktop, stacked on mobile:
1. Brand block: wordmark + tagline ("{{TAGLINE}}") + "Since {{YEAR}}" in Caveat
2. Hours table (day | time, gold accents on the day labels)
3. Contact: address (clickable → Google Maps), phone (clickable `tel:`), email, social icons (Facebook, Instagram if applicable)

Bottom bar: copyright, "Built by Grady Digital" link, privacy/terms links.

### 5.3 Sticky Mobile CTA

On screens `<lg`, a fixed bottom bar (`position: fixed; bottom: 0`) with two equal-width buttons:
- **Call** (outline, gold border) → `tel:{{PHONE}}`
- **Book Now** (solid gold) → `/book`

This is the single most impactful mobile CTA pattern for service businesses — do not omit.

### 5.4 Section Divider

A reusable `<BarberPoleDivider />` component: 8px-tall full-width band of diagonal red/cream/gold stripes with a subtle `@keyframes` translate on the background-position. Used between major homepage sections.

---

## 6. Page-by-Page Specs

### 6.1 Home (`/`)

#### 6.1.1 Hero

This is the showpiece. Goal: communicate "real barbershop, book a chair," and drive a click on `Book Now` within 3 seconds.

**Layout:** Full-viewport-height (`min-h-[92vh]`), dark background, asymmetric two-column on desktop (60/40), stacked on mobile.

**Left column (60%):**
- Eyebrow: `EST. {{YEAR}} — {{CITY}}, {{STATE}}` (gold, uppercase, tracked)
- H1: A two-line headline, set in Bebas Neue at the largest scale. Line 1 cream, line 2 in gold to create emphasis.
  - Suggested: **"Sharp Cuts.\nNo Nonsense."** (confirm with Greg — alt: "Old-School Cuts. New-School Chair.")
- Sub-headline: One sentence, Inter Tight, `1.125rem`, `var(--color-ink-muted)`, max-width ~52ch. Suggested: *"Walk-ins welcome, but the chair fills fast. Book your seat in under 30 seconds."*
- **Primary CTA:** `Book Your Cut →` — solid gold, large (`px-8 py-4`), Bebas Neue label at `1.125rem`, links to `/book`
- **Secondary CTA:** `Call {{PHONE}}` — ghost button with gold border, links via `tel:`
- Trust strip below CTAs: small row with three items separated by gold dot dividers — `★★★★★ {{REVIEW_COUNT}}+ reviews` · `Walk-ins welcome` · `Open {{TODAY_HOURS}}` (today's hours pulled dynamically from a TS constant)

**Right column (40%):**
- A single editorial photograph of a barber chair, vintage clippers on a counter, or the shop interior — dark, moody, shot tight. Treat it inside the "vintage frame" double-border motif. Slight `Framer Motion` parallax on scroll (image translates Y by ~30px slower than viewport).
- Floating accent card overlapping the bottom-left of the photo: small dark card, gold border, contains today's next available appointment time pulled from a constant or hardcoded. E.g. *"Next opening: Today at 3:30 PM"* — with a `Grab it →` link to `/book`. (For v1 this can be a static, manually-updated string; mark as a known limitation.)

**Background details:**
- Grain overlay (SVG noise, `opacity: 0.04`)
- A massive faded `01` numeral in Bebas Neue, color `var(--color-line)`, `font-size: 32rem`, absolute-positioned bottom-right of the hero, behind everything (`z-index: 0`). Decorative only.

**Motion:**
- On mount: stagger reveal — eyebrow (delay 0), H1 line 1 (0.1s), H1 line 2 (0.2s), sub (0.35s), CTAs (0.5s), trust strip (0.65s), photo fades in from `opacity: 0, scale: 1.04` over 1.2s. Use Framer Motion `variants` on a parent with `staggerChildren`.

#### 6.1.2 Services snapshot

Below hero. H2: **"What You Came For."** Subhead: one line. Then a 3-up grid (1-up on mobile) of the top 3 services (Classic Cut, Beard Trim, Cut + Beard Combo — confirm with Greg). Each card:

- Big numeral "01" / "02" / "03" in faded gold
- Service name in Bebas Neue
- 2-line description
- Price in gold
- Subtle hover: card lifts 4px, gold border appears

Below grid: `View all services →` text link to `/services`.

#### 6.1.3 Why Greg's

Three-column trust band, dark surface. Each column: a `lucide-react` icon in gold (e.g. `Scissors`, `Clock`, `MapPin`), a short heading, two sentences. Suggested:
- *Real barbers, not a chain.* — short blurb about Greg/the team
- *In and out, on time.* — about respecting time, walk-ins, online booking
- *{{CITY}}'s chair.* — about being a neighborhood spot

#### 6.1.4 Gallery preview

H2: **"The Work."** A 4-column masonry-ish grid (2-col mobile) of 8 photos from the gallery, each in the vintage frame treatment. Hover: subtle zoom (`scale: 1.03`) and a gold ring. CTA below: `See the full gallery →` to `/gallery`.

#### 6.1.5 Reviews

H2: **"What Folks Say."** A horizontally-scrolling row of 4–6 review cards (snap scroll on mobile, static row on desktop). Each card: cream background, dark text, 5-gold-stars, 2–3 sentence review, name + date. Pull real reviews from Google/Facebook — do not fabricate. If insufficient reviews exist at launch, show 2 large featured reviews and a "Leave a review" link.

#### 6.1.6 Booking CTA band

Full-width, dark with grain, large centered Bebas Neue headline: **"Your Chair Is Waiting."** Sub: *"Pick a time. Show up. Walk out sharp."* Big gold `Book Now →` button. Below it: phone number as fallback.

#### 6.1.7 Location / map preview

Two-column: left has address, hours table, phone, directions link; right has an embedded Google Map (dark-styled if possible via Map ID). Below: `Get directions →` opens Google Maps in a new tab.

---

### 6.2 Services (`/services`)

- Hero strip (smaller — `min-h-[40vh]`): page title "Services & Pricing", short intro line.
- Services list as **alternating editorial rows** (image left/right alternating). Each row:
  - Big numeral
  - Service name (H2)
  - Description (2–3 sentences — what it includes, how long it takes)
  - Price (large, gold)
  - Duration (small, muted, with `Clock` icon)
  - Inline `Book this service →` link that deep-links to `/book?service={slug}` (GHL calendar accepts service preselection via URL params — confirm calendar setup)
  - Photo on the opposite side, framed
- Confirm full service list with Greg. Likely items: Classic Cut, Skin Fade, Beard Trim, Cut + Beard Combo, Kids Cut (under 12), Senior Cut, Hot Towel Shave, Line-Up. **Pricing must come from Greg directly — do not guess.**
- Bottom: Booking CTA band (reuse from home).

---

### 6.3 About (`/about`)

- Hero strip with title "Meet the Chair Behind the Cuts" (or similar)
- **The Story** section: 2–3 paragraphs about Greg, when the shop opened, the philosophy. Photo of Greg or the storefront alongside. Pulled from discovery call.
- **The Barbers** section: a card per barber. Each card:
  - Vintage-framed portrait
  - Name in Bebas Neue
  - Years cutting (Caveat accent: "12 years in the chair")
  - Specialty (e.g. "Skin fades & beard sculpting")
  - Optional: Instagram handle linked
- **The Shop** section: a 2x2 photo grid of the interior — chairs, products, signage, the front door. Builds trust by showing the real space.
- Booking CTA band at the bottom.

---

### 6.4 Gallery (`/gallery`)

- Hero strip with title "The Work"
- A masonry grid (CSS columns or a small library like `react-photo-album`) of 20–40 photos, all in the vintage frame motif. Categories filter pills at the top: `All`, `Fades`, `Beards`, `Classic`, `The Shop`. Filter is client-side, pure CSS/state.
- Lightbox on click (use `yet-another-react-lightbox` or build a simple Framer Motion modal).
- Each image must have meaningful `alt` text for accessibility/SEO.
- Booking CTA band at the bottom.

---

### 6.5 Contact (`/contact`)

- Hero strip with title "Find the Shop"
- Two-column layout:
  - **Left:** Address (large, clickable to Maps), phone (large, clickable to `tel:`), email, hours table with today's row highlighted in gold, social icons
  - **Right:** A short contact form (Name, Phone, Email, Message) — submits to a Next.js API route → GHL webhook. Confirmation: inline success state, no page reload. Use React Hook Form + Zod.
- Below: full-width embedded Google Map (taller — ~500px).
- Note in cream sub-card: *"For appointments, please use the booking page — it's faster than messaging."* with a link to `/book`.

---

### 6.6 Book (`/book`)

- Hero strip with title "Book Your Chair"
- One paragraph of instructions: *"Pick a service, pick a time, pop in your details. You'll get a text confirmation right after."*
- The **GoHighLevel calendar embed** in a centered container, max-width ~960px, with a soft shadow and the vintage double-border treatment around the iframe.
- Iframe code template (replace with actual calendar ID from Greg's GHL sub-account):

```tsx
<iframe
  src="https://api.leadconnectorhq.com/widget/booking/{{CALENDAR_ID}}"
  style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "800px" }}
  scrolling="no"
  id="gregs-cuts-booking"
/>
<script src="https://link.msgsndr.com/js/form_embed.js" />
```

- Below the calendar: a small "Need to reschedule or cancel?" block with phone + email.
- Trust strip: confirmation text, cancellation policy, walk-in note.
- Use `next/script` with `strategy="lazyOnload"` for the GHL embed script.

**GHL configuration checklist (for Grady Digital, not Claude Code):**
- Set up calendar in Greg's sub-account
- Configure services as appointment types with duration + price
- Set buffer times and barber availability
- Confirmation email + SMS templates
- Reminder workflow (24hr + 1hr before)
- Missed-appointment follow-up automation

---

## 7. CTAs — Hierarchy & Rules

This site has one job. CTAs must be obvious and consistent.

**Primary CTA:** `Book Now` / `Book Your Cut` — always solid gold (`var(--color-accent)`), black text, sharp 2px corners, Bebas Neue label. Always links to `/book` (or `/book?service={slug}` from a service row).

**Secondary CTA:** `Call {{PHONE}}` — ghost button, gold border, gold text on dark / dark text on cream sections. Always uses `tel:` link.

**CTA placement rules:**
- Header: primary CTA always visible
- Hero: both primary and secondary visible above the fold
- Every page ends with the booking CTA band before the footer
- Mobile: sticky bottom bar with both CTAs at all times
- Service rows on `/services`: each has its own deep-linked book button
- No CTA should appear more than ~600px away from the next one when scrolling

**Tracking:** Every CTA click fires a GA4 event (`book_click`, `call_click`) with the source page in the event params. Use a small `useTrackedCTA` hook.

---

## 8. Accessibility

- All interactive elements: visible focus ring in gold, min 3:1 contrast against background
- Color contrast: cream-on-dark and dark-on-cream pairings hit WCAG AA at minimum
- All images: real `alt` text, never empty unless purely decorative (decorative grain/numerals get `aria-hidden`)
- Form fields: real `<label>` elements, error messages linked via `aria-describedby`
- Skip-to-content link at the top of `<body>`
- Respect `prefers-reduced-motion`: disable parallax and stagger animations, keep simple fades
- Keyboard nav: lightbox closeable with Esc, drawer with Esc, focus trapped while open

---

## 9. Performance

- Lighthouse target: 95+ on all four scores, mobile
- All images via `next/image` with appropriate `sizes`
- Hero photo: priority load, served as AVIF/WebP, ~120KB max
- Fonts: `display: swap`, preloaded
- No client JS on pages that don't need it — keep service/about/contact mostly server components; only the gallery filter, contact form, mobile drawer, and booking page need `'use client'`
- GHL booking script: lazy-loaded only on `/book`
- Run `next/bundle-analyzer` before launch and confirm no surprise dependencies

---

## 10. SEO

- Site is local — every page mentions `{{CITY}}` naturally in copy
- Title tags front-load the keyword
- Schema: `BarberShop` on root, `Service` schema on services page, `Review` schema on the reviews section if reviews are real and approved by Greg
- Sitemap.xml + robots.txt via Next.js conventions (`app/sitemap.ts`, `app/robots.ts`)
- Internal linking: every page links to `/book`; services link to each other; about links to gallery
- Submit to Google Search Console + Bing Webmaster after launch
- Set up Google Business Profile separately (not in scope for the site itself but critical — Grady Digital handles)

---

## 11. Content Inputs Needed From Greg

Before this site can launch, gather in discovery:

1. Confirmed business name spelling (Greg's Cuts vs Gregs Cuts)
2. Full street address, ZIP
3. Phone number (the one to use on the site — not personal)
4. Email
5. Hours, all 7 days
6. Year established
7. Tagline (if any)
8. Full service list with prices and durations
9. Bios + photos of each barber
10. 15–40 high-res photos: cuts, the shop, exterior, signage
11. Real review screenshots or links (Google/Facebook)
12. Social media URLs (Facebook confirmed; Instagram?)
13. GoHighLevel calendar ID once configured
14. Domain confirmation
15. Any policies (cancellation, walk-ins, kids, payment methods)

---

## 12. Folder Structure

```
gregs-cuts/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Home
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── contact/page.tsx
│   │   └── book/page.tsx
│   ├── api/
│   │   └── contact/route.ts          # POST → GHL webhook
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileStickyCta.tsx
│   │   └── BarberPoleDivider.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesSnapshot.tsx
│   │   ├── WhyGregs.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── Reviews.tsx
│   │   ├── BookingBand.tsx
│   │   └── LocationPreview.tsx
│   ├── services/
│   │   └── ServiceRow.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   └── Lightbox.tsx
│   ├── about/
│   │   └── BarberCard.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── book/
│   │   └── GhlCalendarEmbed.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Eyebrow.tsx
│       ├── PageHero.tsx
│       └── VintageFrame.tsx
├── lib/
│   ├── content.ts                    # All site copy as typed constants
│   ├── services.ts                   # Service data (name, slug, price, duration, blurb)
│   ├── barbers.ts
│   ├── reviews.ts
│   └── analytics.ts
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── barbers/
│   │   └── shop/
│   ├── og/
│   └── noise.svg
└── tailwind.config.ts
```

---

## 13. Out of Scope (v1)

- Blog / articles
- E-commerce (selling products like pomade)
- Multi-language
- Customer accounts / login
- Loyalty program UI (track via GHL initially)
- Custom CMS — content lives in TypeScript constants

These are upgrade paths Grady Digital can quote separately once v1 is performing.

---

## 14. Launch Checklist

- [ ] All `{{PLACEHOLDERS}}` replaced
- [ ] Real photography in place (no stock)
- [ ] GHL calendar tested end-to-end (book → confirm → reminder → reschedule → cancel)
- [ ] Contact form tested → confirmed lead lands in GHL
- [ ] Phone and address links open correctly on iOS and Android
- [ ] Lighthouse mobile: 95+ across the board
- [ ] All pages have unique title + description
- [ ] Schema validated via Google Rich Results Test
- [ ] GA4 + Meta Pixel firing on all CTAs
- [ ] Sitemap submitted to Search Console
- [ ] 301s set up if there's an existing site to migrate from
- [ ] Greg has reviewed every page of copy and approved