# Greg's Cuts

Marketing site for Greg's Cuts hair salon. Built per `DESIGN.md` by Grady Digital.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- React Hook Form + Zod for the contact form
- GoHighLevel calendar embed for booking

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL` — production URL
- `GHL_CONTACT_WEBHOOK_URL` — GoHighLevel inbound webhook for contact form leads
- `NEXT_PUBLIC_GA_ID` — GA4 measurement ID
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta pixel ID

## Content

All copy lives in `lib/`. Real values for `{{PLACEHOLDERS}}` come from Greg in discovery — see `DESIGN.md` §11.

- `lib/content.ts` — site-wide constants (address, hours, hero copy)
- `lib/services.ts` — service menu
- `lib/barbers.ts` — team
- `lib/reviews.ts` — testimonials (must be real and approved before launch)
- `lib/gallery.ts` — gallery items

## Images

See `public/images/README.md` for the expected file paths.

## Booking

The booking page embeds a GoHighLevel calendar via iframe. Set `SITE.ghlCalendarId` in `lib/content.ts` once Greg's GHL sub-account is configured.

## Deploy (Netlify)

The site is statically exported and hosted at https://gregscuts.com via Netlify, which auto-deploys on every push to `main`.

**How it works:**

- `next.config.ts` uses `output: "export"` (static HTML/CSS/JS only, no server) — Netlify serves the `out/` folder directly
- Images use `unoptimized: true` (no Next.js image optimizer at runtime)
- The contact form POSTs directly to the GHL webhook from the browser (no server route); set `NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL` in Netlify → Site settings → Environment variables
- `.github/workflows/deploy.yml` is a legacy GitHub Pages workflow kept around but not the active deploy path

**Local dev:**

`npm run dev` works as normal — site serves from `/`.
