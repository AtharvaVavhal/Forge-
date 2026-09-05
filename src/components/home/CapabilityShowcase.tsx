import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const capabilities = [
  {
    number: "01",
    label: "Customer-facing",
    title: "Websites that make the first impression do real work.",
    detail: "Clear information, fast paths to action, and a foundation your team can keep using after launch.",
  },
  {
    number: "02",
    label: "Operational",
    title: "Systems that turn a messy workflow into a clear one.",
    detail: "Dashboards, internal tools, automation and integrations shaped around how the business already operates.",
  },
  {
    number: "03",
    label: "Connected",
    title: "Interfaces where design and engineering meet.",
    detail: "Thoughtful product decisions translated into resilient, maintainable software—not a polished surface over a weak system.",
  },
];

export default function CapabilityShowcase() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="forge-capability-rule" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal variant="subtle">
            <Eyebrow number="02">Digital systems, made useful</Eyebrow>
            <h2 className="mt-4 max-w-md font-display text-3xl font-bold leading-[1.08] text-ink md:text-5xl">
              Built for the work behind the screen.
            </h2>
          </Reveal>

          <div className="border-t border-steel/25">
            {capabilities.map((capability, index) => (
              <Reveal
                key={capability.number}
                delay={index * 70}
                className="forge-capability-row group"
              >
                <span className="mono text-xs text-steel">{capability.number}</span>
                <div>
                  <p className="mono text-xs uppercase tracking-[0.18em] text-ember-deep">
                    {capability.label}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink md:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">
                    {capability.detail}
                  </p>
                </div>
                <span className="forge-capability-row__index" aria-hidden>
                  0{index + 1}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
