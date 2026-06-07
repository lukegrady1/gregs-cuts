import type { Metadata } from "next";
import { Bebas_Neue, Inter_Tight, Caveat } from "next/font/google";
import { SITE, HOURS_LIST } from "@/lib/content";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CallTracking } from "@/components/analytics/CallTracking";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-google",
  display: "swap",
});

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body-google",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-accent-google",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} Hair Salon in ${SITE.city}, ${SITE.state}`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} is a neighborhood hair salon in ${SITE.city}, ${SITE.state}. Sharp cuts, hot towel shaves, walk-ins welcome. Call to book.`,
  keywords: [
    `${SITE.city} hair salon`,
    `haircuts ${SITE.city}`,
    "Greg's Cuts",
    "fades",
    "beard trim",
    "hot towel shave",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [`${SITE.domain}/gregs_cuts_logo.jpeg`],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SITE.name,
    image: `${SITE.domain}/gregs_cuts_logo.jpeg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
    },
    telephone: SITE.phone,
    url: SITE.domain,
    priceRange: "$$",
    openingHoursSpecification: HOURS_LIST.filter((d) => !d.closed).map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: d.label,
      opens: d.hours.split("–")[0]?.trim(),
      closes: d.hours.split("–")[1]?.trim(),
    })),
    sameAs: [SITE.facebookUrl, SITE.instagramUrl].filter(Boolean),
  };

  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <CallTracking />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--color-accent)] focus:text-black focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
