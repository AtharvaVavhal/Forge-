import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";

export default function TechnicalImplementation() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal variant="subtle">
          <SectionLabel number="08" label="Technical Implementation" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
            How it works
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/80">
            <p>
              Attendance is logged through QR check-in, giving each member an
              accurate, timestamped attendance history instead of a manual
              sign-in register.
            </p>
            <p>
              Inactivity detection runs off that same attendance data: the
              system tracks each member&apos;s most recent check-in and flags
              anyone who crosses a configurable inactivity threshold. Flagged
              members populate the red list automatically, without staff
              having to review attendance manually to notice who&apos;s gone
              quiet.
            </p>
            <p>
              The red list feeds directly into follow-up tracking, so staff
              can see who needs to be contacted and log the outcome — closing
              the loop between a member going inactive and a member being
              followed up with.
            </p>
            <p>
              Renewals and payment integration are tied to membership status:
              a renewal updates the member&apos;s active period, and payment
              integration confirms the transaction that triggers it. Add-ons
              — personal training, diet plans, supplements — sit on top of
              the core membership record rather than as separate,
              disconnected systems.
            </p>
            <p>
              Every action that changes a member&apos;s status — check-in,
              follow-up, renewal, add-on — is captured through audit
              logging, and the retention KPIs on the owner dashboard are
              calculated from that same underlying data rather than a
              separate reporting layer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
