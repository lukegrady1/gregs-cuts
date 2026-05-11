"use client";

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      action: string,
      params?: GtagEventParams,
    ) => void;
    fbq?: (command: string, event: string, params?: GtagEventParams) => void;
  }
}

export function trackEvent(name: string, params: GtagEventParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  window.fbq?.("trackCustom", name, params);
}

export function useTrackedCTA(name: "book_click" | "call_click", source: string) {
  return () => trackEvent(name, { source });
}
