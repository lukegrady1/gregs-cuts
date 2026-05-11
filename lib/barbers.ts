import { asset } from "@/lib/asset";

export type Barber = {
  slug: string;
  name: string;
  yearsInChair: string;
  specialty: string;
  image: string;
  instagram?: string;
};

export const BARBERS: Barber[] = [
  {
    slug: "greg",
    name: "Greg Weatherspoon",
    yearsInChair: "Cutting for years — owner since 2025",
    specialty: "Classic cuts, fades, beards & hot towel shaves",
    image: asset("/greg.png"),
    instagram: "{{INSTAGRAM_HANDLE}}",
  },
];
