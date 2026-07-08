import { Hero } from "@/components/home/Hero";
import { PromoReel } from "@/components/home/PromoReel";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { WhyGregs } from "@/components/home/WhyGregs";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { DailyUpdates } from "@/components/home/DailyUpdates";
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
      <DailyUpdates />
      <PromoReel />
      <Reviews />
      <BookingBand />
      <LocationPreview />
      <BarberPoleDivider />
    </>
  );
}
