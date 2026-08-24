import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";

export default function Outcome() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <SectionLabel number="09" label="Outcome" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
            What this solves
          </h2>

          <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-ink/80">
            <p>
              This case study describes what the platform does, not a set
              of results — there are no retention percentages, revenue
              figures or user counts to report here.
            </p>
            <p>
              What the system delivers is structural: attendance flows
              directly into inactivity detection, inactivity detection
              flows into follow-up, and every step is visible to the owner
              in one place — instead of living across a sign-in register, a
              spreadsheet, and someone&apos;s memory. That&apos;s the
              problem this project solves: replacing the blind spot where
              members used to disappear unnoticed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
