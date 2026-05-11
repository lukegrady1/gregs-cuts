"use client";

import Script from "next/script";
import { SITE } from "@/lib/content";

export function GhlCalendarEmbed() {
  return (
    <div className="vintage-frame vintage-frame--gold bg-[var(--color-surface)]">
      <iframe
        src={SITE.bookingUrl}
        title="Book an appointment at Greg's Cuts"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "800px" }}
        scrolling="no"
        id="gregs-cuts-booking"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
