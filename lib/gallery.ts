import { asset } from "@/lib/asset";

export type GalleryCategory = "Fades" | "Beards" | "Classic" | "The Shop";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  type?: "image" | "video";
};

export const GALLERY: GalleryItem[] = [
  { src: asset("/greg_cutting_hair.webp"), alt: "Greg cutting a client's hair in the shop", category: "Classic", width: 1302, height: 1574 },
  { src: asset("/greg_cutting_hair2.jpg"), alt: "Greg using clippers on a client in the shop", category: "Classic", width: 1179, height: 1593 },
  { src: asset("/gregs_cuts_tattoo.jpg"), alt: "Fresh fade with a 'Greg's Cuts Established 2025' neck tattoo", category: "Fades", width: 1179, height: 1749 },
  { src: asset("/IMG_6304.webp"), alt: "Row of barber chairs lined up at the styling stations", category: "The Shop", width: 1179, height: 1538 },
  { src: asset("/IMG_6297.webp"), alt: "Styling stations with arched mirrors and vanity lighting", category: "The Shop", width: 1179, height: 1539 },
  { src: asset("/IMG_6298.webp"), alt: "Hair dryer chairs beneath the Greg's Cuts portrait poster", category: "The Shop", width: 1179, height: 1548 },
  { src: asset("/IMG_6299.webp"), alt: "Shampoo bowls and wash chairs with product shelf", category: "The Shop", width: 1179, height: 1531 },
  { src: asset("/IMG_6302.webp"), alt: "Waiting area with black-and-white portraits and seating", category: "The Shop", width: 1179, height: 1549 },
  { src: asset("/IMG_6303.webp"), alt: "Lobby with framed portraits, plants, and display shelves", category: "The Shop", width: 1179, height: 1541 },
  { src: asset("/IMG_6301.webp"), alt: "Front waiting area looking out toward the storefront", category: "The Shop", width: 1179, height: 1543 },
  { src: asset("/IMG_6300.webp"), alt: "Mortal Kombat arcade cabinet beside the water bottle rack", category: "The Shop", width: 1179, height: 1531 },
  { src: asset("/IMG_6294.webp"), alt: "Treatment room with vanity, mirror, and supply shelving", category: "The Shop", width: 1179, height: 867 },
  { src: asset("/IMG_6295.webp"), alt: "Private treatment cubicle with massage table and curtains", category: "The Shop", width: 1179, height: 1543 },
  { src: asset("/IMG_6296.webp"), alt: "Red wall clock above the framed restroom sign", category: "The Shop", width: 1179, height: 1538 },
];
