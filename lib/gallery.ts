import { asset } from "@/lib/asset";

export type GalleryCategory = "Fades" | "Beards" | "Classic" | "The Shop";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=80&auto=format&fit=crop`;

/**
 * Stock placeholders from Unsplash until Greg supplies real photos.
 */
export const GALLERY: GalleryItem[] = [
  { src: asset("/greg_cutting_hair.webp"), alt: "Greg cutting a client's hair in the shop", category: "Classic", width: 1302, height: 1574 },
  { src: U("1647140655214-e4a2d914971f"), alt: "Scissor work on a fade in progress", category: "Fades", width: 800, height: 1000 },
  { src: U("1503951914875-452162b0f3f1"), alt: "Client mid-cut in the barber chair", category: "Classic", width: 800, height: 1000 },
  { src: U("1517832606299-7ae9b720a186"), alt: "Beard trim with scissors, grayscale", category: "Beards", width: 800, height: 800 },
  { src: U("1599351431202-1e0f0137899a"), alt: "Full cut and beard combo in progress", category: "Fades", width: 800, height: 1100 },
  { src: U("1621645582931-d1d3e6564943"), alt: "Black and silver barber chair detail", category: "The Shop", width: 800, height: 800 },
  { src: U("1621605815971-fbc98d665033"), alt: "Straight razor and barbering tools on counter", category: "Beards", width: 800, height: 1000 },
  { src: U("1605497788044-5a32c7078486"), alt: "Line-up and fresh trim, back view", category: "Fades", width: 800, height: 900 },
  { src: U("1592647420148-bfcc177e2117"), alt: "Red and white leather barber chair", category: "Classic", width: 800, height: 1100 },
  { src: U("1678356164573-9a534fe43958"), alt: "Front of the shop", category: "The Shop", width: 800, height: 800 },
  { src: U("1576168056582-0a851a87ab8e"), alt: "Brown leather chairs lined up inside the shop", category: "The Shop", width: 800, height: 1000 },
  { src: U("1549271568-e87e07c5406b"), alt: "Scissors resting on a folded towel", category: "Classic", width: 800, height: 1000 },
  { src: U("1675599193990-33d71150902b"), alt: "Brick wall and wooden floor inside the shop", category: "The Shop", width: 800, height: 900 },
];
