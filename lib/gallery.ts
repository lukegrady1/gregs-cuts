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
  { src: asset("/greg_cutting_hair2.webp"), alt: "Greg using clippers on a client in the shop", category: "Classic", width: 1179, height: 1593 },
  { src: asset("/gregs_cuts_tattoo.webp"), alt: "Fresh fade with a 'Greg's Cuts Established 2025' neck tattoo", category: "Fades", width: 1179, height: 1749 },
  { src: asset("/mens-haircut-beard-trim.webp"), alt: "Fresh men's haircut with a neatly trimmed beard in profile", category: "Beards", width: 1179, height: 1570 },
  { src: asset("/gregs-cuts-barber-chairs.webp"), alt: "Row of barber chairs lined up at the styling stations", category: "The Shop", width: 1179, height: 1538 },
  { src: asset("/barber-styling-stations.webp"), alt: "Styling stations with arched mirrors and vanity lighting", category: "The Shop", width: 1179, height: 1539 },
  { src: asset("/hair-dryer-chairs.webp"), alt: "Hair dryer chairs beneath the Greg's Cuts portrait poster", category: "The Shop", width: 1179, height: 1548 },
  { src: asset("/shampoo-wash-station.webp"), alt: "Shampoo bowls and wash chairs with product shelf", category: "The Shop", width: 1179, height: 1531 },
  { src: asset("/barbershop-waiting-area.webp"), alt: "Waiting area with black-and-white portraits and seating", category: "The Shop", width: 1179, height: 1549 },
  { src: asset("/gregs-cuts-lobby.webp"), alt: "Lobby with framed portraits, plants, and display shelves", category: "The Shop", width: 1179, height: 1541 },
  { src: asset("/front-waiting-area.webp"), alt: "Front waiting area looking out toward the storefront", category: "The Shop", width: 1179, height: 1543 },
  { src: asset("/arcade-cabinet.webp"), alt: "Mortal Kombat arcade cabinet beside the water bottle rack", category: "The Shop", width: 1179, height: 1531 },
  { src: asset("/treatment-room.webp"), alt: "Treatment room with vanity, mirror, and supply shelving", category: "The Shop", width: 1179, height: 867 },
  { src: asset("/private-treatment-room.webp"), alt: "Private treatment cubicle with massage table and curtains", category: "The Shop", width: 1179, height: 1543 },
  { src: asset("/restroom-wall-clock.webp"), alt: "Red wall clock above the framed restroom sign", category: "The Shop", width: 1179, height: 1538 },
];
