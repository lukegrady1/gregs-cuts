import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PolicyNotices } from "@/components/policies/PolicyNotices";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop Policies",
  description: `Shop policies for ${SITE.name}.`,
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero title="Shop Policies" />
      <section className="bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-3xl px-6 prose prose-invert text-[var(--color-ink-muted)] space-y-6">
          <p>
            Welcome to Greg&apos;s Cuts. My goal is to provide every client with a clean, professional,
            relaxing, and respectful experience. These policies help keep the schedule running smoothly and
            ensure quality service for everyone.
          </p>

          <PolicyNotices className="!mt-10" />

          <h2 className="text-[var(--color-ink)]">Appointments</h2>
          <ul>
            <li>Appointments are strongly recommended.</li>
            <li>Walk-ins are welcome for 1–2 guests when availability allows.</li>
            <li>Parties of three or more guests must book an appointment in advance.</li>
            <li>Please arrive on time for your appointment.</li>
            <li>
              If you are more than 5 minutes late, your appointment may need to be shortened, rescheduled, or
              canceled.
            </li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Cancellations &amp; No-Shows</h2>
          <ul>
            <li>Please provide at least 24 hours notice for cancellations or rescheduling when possible.</li>
            <li>
              Repeated no-shows or last-minute cancellations may require prepayment for future appointments.
            </li>
            <li>
              Respect for time goes both ways — late cancellations affect the schedule and other clients
              waiting for appointments.
            </li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Head Lice &amp; Health Policy</h2>
          <ul>
            <li>For the safety of all clients, services cannot be performed on anyone with active head lice.</li>
            <li>
              If lice or nits are discovered during service, the appointment will be stopped immediately and
              the client will need to seek treatment before rebooking.
            </li>
            <li>If you are feeling sick, please reschedule your appointment.</li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Sanitation &amp; Cleanliness</h2>
          <ul>
            <li>All tools, clippers, combs, and surfaces are sanitized between every client.</li>
            <li>Cleanliness and hygiene are a top priority at Greg&apos;s Cuts.</li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Children&apos;s Appointments</h2>
          <ul>
            <li>Children must be supervised at all times when not in the chair.</li>
            <li>
              For safety reasons, excessive movement during services may result in the appointment being
              paused or rescheduled.
            </li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Guests &amp; Respect</h2>
          <ul>
            <li>Please respect the shop environment, staff, and other clients.</li>
            <li>Disruptive, disrespectful, or aggressive behavior will not be tolerated.</li>
            <li>
              Greg&apos;s Cuts is a welcoming space focused on professionalism, good energy, and quality
              grooming.
            </li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Service Satisfaction</h2>
          <ul>
            <li>
              If you have concerns about your haircut or service, please communicate them within a few days of
              your appointment so we can make it right.
            </li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Payments</h2>
          <ul>
            <li>Payment is due at the time services are completed.</li>
            <li>Tips are always appreciated but never expected.</li>
          </ul>

          <h2 className="text-[var(--color-ink)]">Thank You</h2>
          <p>
            Thank you for supporting Greg&apos;s Cuts. Your loyalty, respect, and trust are deeply
            appreciated.
          </p>
        </div>
      </section>
    </>
  );
}
