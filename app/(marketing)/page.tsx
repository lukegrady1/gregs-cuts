import { Hero } from "@/components/home/Hero";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { WhyGregs } from "@/components/home/WhyGregs";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Reviews } from "@/components/home/Reviews";
import { BookingBand } from "@/components/home/BookingBand";
import { LocationPreview } from "@/components/home/LocationPreview";
import { BarberPoleDivider } from "@/components/layout/BarberPoleDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BarberPoleDivider />
      <ServicesSnapshot />
      <WhyGregs />
      <GalleryPreview />
      <Reviews />
      <BookingBand />
      <LocationPreview />
      <BarberPoleDivider />
    </>
  );
}
