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
  { src: asset("/comic_strip4.webp"), alt: "Greg's comic strip #4", width: 1024, height: 1536 },
  { src: asset("/comic_strip5.webp"), alt: "Greg's comic strip #5", width: 1024, height: 1536 },
  { src: asset("/comic_strip6.webp"), alt: "Greg's comic strip #6", width: 1023, height: 1537 },
  { src: asset("/comic_strip1.webp"), alt: "Greg's comic strip #1", width: 1024, height: 1536 },
  { src: asset("/comic_strip2.webp"), alt: "Greg's comic strip #2", width: 1024, height: 1536 },
  { src: asset("/comic_strip3.webp"), alt: "Greg's comic strip #3", width: 1024, height: 1536 },
];
