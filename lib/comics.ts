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
  { src: asset("/comic_strip1.png"), alt: "Greg's comic strip #1", width: 1024, height: 1536 },
  { src: asset("/comic_strip2.png"), alt: "Greg's comic strip #2", width: 1024, height: 1536 },
  { src: asset("/comic_strip3.png"), alt: "Greg's comic strip #3", width: 1024, height: 1536 },
];
