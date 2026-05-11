import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" />
      <section className="bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-3xl px-6 prose prose-invert text-[var(--color-ink-muted)] space-y-4">
          <p>
            {SITE.name} respects your privacy. We collect only the information needed to confirm your
            appointment (name, phone, email) and to respond to messages you send us through the contact form.
          </p>
          <p>
            We do not sell your information. Booking data is processed through our scheduling provider
            (GoHighLevel) under their privacy terms. Analytics (Google Analytics, Vercel Analytics) collect
            aggregated usage data to help us improve the site.
          </p>
          <p>
            Questions? Reach us by phone at{" "}
            <a className="text-[var(--color-accent)]" href={SITE.phoneHref}>
              {SITE.phone}
            </a>{" "}
            or through the contact form.
          </p>
        </div>
      </section>
    </>
  );
}
