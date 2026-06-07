"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a `call_click` analytics event whenever any phone link
 * (an `<a href="tel:...">`) on the site is clicked. Uses a single delegated
 * listener so every current and future phone CTA is tracked automatically.
 */
export function CallTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      const phoneNumber = link.getAttribute("href")?.replace(/^tel:/, "") ?? "";

      trackEvent("call_click", {
        phone_number: phoneNumber,
        link_text: link.textContent?.trim() || undefined,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
