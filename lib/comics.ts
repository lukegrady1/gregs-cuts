import { asset } from "@/lib/asset";

export type ComicStrip = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Add comic strips here — newest first.
// Drop the image into /public and add an entry below.
export const COMICS: ComicStrip[] = [
  // Example:
  // { src: asset("/comics/strip-01.webp"), alt: "Greg's first comic strip", width: 1080, height: 1920 },
];
