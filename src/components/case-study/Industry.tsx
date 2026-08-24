import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";

export default function Industry() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <Reveal variant="subtle">
          <SectionLabel number="01" label="Industry" tone="paper" />
          <p className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">
            Gym &amp; fitness — member-based, retention-driven business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
