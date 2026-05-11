# Greg's Cuts

Marketing site for Greg's Cuts barbershop. Built per `DESIGN.md` by Grady Digital.

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

## Deploy (GitHub Pages)

The site is statically exported and hosted at https://lukegrady1.github.io/gregs-cuts/ via GitHub Actions.

**One-time setup:**

1. Repo → **Settings → Pages → Source: GitHub Actions**
2. Repo → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL`
   - Value: the GHL inbound webhook URL for the contact form
3. Push to `main` — `.github/workflows/deploy.yml` runs the build and publishes `out/` to Pages

**How it works:**

- `next.config.ts` uses `output: "export"` (static HTML/CSS/JS only, no server)
- `basePath` and `assetPrefix` are set to `/gregs-cuts` in CI so links resolve under the project subpath
- Images use `unoptimized: true` (no Next.js image optimizer at runtime)
- `public/.nojekyll` keeps GH Pages from filtering out the `_next/` folder
- The contact form POSTs directly to the GHL webhook from the browser (no server route)

**Local dev:**

`npm run dev` works as normal — `basePath` is unset locally so the site serves from `/`.

**Custom domain (later):**

If you point a custom domain (e.g. `gregscuts.com`) at the Pages site, remove `NEXT_PUBLIC_BASE_PATH` from the workflow env block and update `NEXT_PUBLIC_SITE_URL` to the new domain. Add a `public/CNAME` file containing the domain.
