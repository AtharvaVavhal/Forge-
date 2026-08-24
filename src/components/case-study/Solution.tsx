import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";

export default function Solution() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal variant="subtle">
          <SectionLabel number="04" label="Solution" />
          <p className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
            A retention-and-operations platform built around one core
            workflow.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
            Instead of treating attendance, follow-up and renewals as
            separate tools, the platform connects them into a single
            workflow — so what a member does at check-in shows up directly
            in what the owner sees on the dashboard.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
