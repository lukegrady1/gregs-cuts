import { asset } from "@/lib/asset";

export type BeforeAfterImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BeforeAfterPair = {
  /** Short caption describing the transformation. */
  label: string;
  before: BeforeAfterImage;
  after: BeforeAfterImage;
};

// Each entry is one before/after transformation, shown side-by-side on the gallery page.
// Add a new pair by dropping the images into /public and adding an entry below.
export const BEFORE_AFTER: BeforeAfterPair[] = [
  {
    label: "Long hair and a bushy beard to a sharp cut and tidy beard",
    before: {
      src: asset("/mens-long-hair-beard-before.webp"),
      alt: "Before: long, wavy hair and a full, bushy beard in profile",
      width: 1179,
      height: 1572,
    },
    after: {
      src: asset("/mens-short-haircut-beard-trim-after.webp"),
      alt: "After: a short, clean haircut with a neatly trimmed beard in profile",
      width: 1179,
      height: 1572,
    },
  },
  {
    label: "Grown-out length to a clean cut with a shaped beard",
    before: {
      src: asset("/mens-long-hair-beard-side-before.webp"),
      alt: "Before: long, grown-out hair and a heavy beard from the side",
      width: 1179,
      height: 1572,
    },
    after: {
      src: asset("/mens-tapered-haircut-beard-after.webp"),
      alt: "After: a tapered cut with a clean neckline and a shaped beard",
      width: 1179,
      height: 1572,
    },
  },
  {
    label: "Frizzy, grown-out hair to a neat finish",
    before: {
      src: asset("/mens-long-frizzy-hair-before.webp"),
      alt: "Before: long, frizzy hair grown well past the collar, seen from behind",
      width: 1179,
      height: 1572,
    },
    after: {
      src: asset("/mens-clean-cut-back-after.webp"),
      alt: "After: a neat, freshly cut back and neckline",
      width: 1179,
      height: 1572,
    },
  },
  {
    label: "Grown-out curls to a clean taper fade",
    before: {
      src: asset("/mens-curly-hair-before.webp"),
      alt: "Before: a client's grown-out, curly hair seen from behind",
      width: 1179,
      height: 1547,
    },
    after: {
      src: asset("/mens-taper-fade-after.webp"),
      alt: "After: a clean men's taper fade with a sharp neckline",
      width: 1179,
      height: 1514,
    },
  },
  {
    label: "Curly mop to a fresh curly fade",
    before: {
      src: asset("/mens-curly-hair-before-2.webp"),
      alt: "Before: thick, curly hair before the cut",
      width: 1179,
      height: 1505,
    },
    after: {
      src: asset("/mens-curly-fade-after.webp"),
      alt: "After: a curly top finished with a low fade",
      width: 1179,
      height: 1497,
    },
  },
  {
    label: "Dry, uneven ends to a smooth layered cut",
    before: {
      src: asset("/long-hair-before.webp"),
      alt: "Before: long hair with dry, uneven ends",
      width: 1179,
      height: 1533,
    },
    after: {
      src: asset("/long-layered-cut-after.webp"),
      alt: "After: a long layered cut with smooth shape and volume",
      width: 1179,
      height: 1533,
    },
  },
  {
    label: "Frizzy ends to glossy, face-framing layers",
    before: {
      src: asset("/long-hair-dry-ends-before.webp"),
      alt: "Before: long, frizzy hair with split, dry ends",
      width: 1179,
      height: 1543,
    },
    after: {
      src: asset("/womens-long-layers-after.webp"),
      alt: "After: long hair with glossy, face-framing layers",
      width: 1179,
      height: 1269,
    },
  },
];
