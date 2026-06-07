import Script from "next/script";

/**
 * Loads Google Analytics 4 (gtag.js). The measurement ID can be overridden with
 * the NEXT_PUBLIC_GA_ID env var; it falls back to the production property.
 * Renders nothing when no ID is configured (e.g. local dev without the env var).
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-3VWFTQNLFT";
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
