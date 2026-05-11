# Image assets

All site photography lives in this folder. The site references the following paths — drop real `.jpg` (or `.webp`) files into them before launch.

- `public/images/hero/chair.jpg` — hero photo (4:5, dark/moody)
- `public/images/about/greg.jpg` — owner portrait (4:5)
- `public/images/services/{slug}.jpg` — one per service (4:3)
  - `classic-cut`, `skin-fade`, `beard-trim`, `cut-and-beard`, `kids-cut`, `senior-cut`, `hot-towel-shave`, `line-up`
- `public/images/barbers/{slug}.jpg` — one per barber (3:4)
- `public/images/gallery/01.jpg` … `12.jpg` — gallery grid (mixed ratios)
- `public/images/shop/01.jpg` … `04.jpg` — interior shots (4:3)
- `public/og/default.png` — 1200×630 OG default

Until real photos land, every `<Image>` will render the Next.js broken-image fallback at runtime — the build still succeeds.
