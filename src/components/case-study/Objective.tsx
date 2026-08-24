import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";

export default function Objective() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-8 md:pb-24">
        <Reveal variant="subtle">
          <SectionLabel number="03" label="Objective" tone="paper" />
          <p className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">
            Build a system that surfaces at-risk members before they churn,
            and gives the owner visibility into retention, not just
            attendance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
