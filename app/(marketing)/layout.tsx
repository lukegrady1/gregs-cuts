import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="pt-16 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
