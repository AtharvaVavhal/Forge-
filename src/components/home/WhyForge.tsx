import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const reasons = [
  ["Business first", "We start with the operating problem, not a feature list."],
  ["Built to fit", "The work follows your business workflow instead of forcing it into a generic template."],
  ["Design + engineering", "The interface and the system beneath it are shaped together."],
  ["Direct communication", "The people defining the work stay close to the people building it."],
  ["Modern foundations", "Clear structure, maintainable code, and practical technology choices."],
  ["Room to improve", "Support after launch keeps useful software useful as the business changes."],
];

export default function WhyForge() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow tone="paper" number="05">Why Forge</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-[1.08] md:text-5xl">
            The work has to make sense before it can look good.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, detail], index) => (
            <Reveal
              key={title}
              as="li"
              variant="subtle"
              delay={index * 35}
              className="group min-h-48 bg-ink p-6 transition-colors duration-[var(--duration-standard)] hover:bg-paper hover:text-ink"
            >
              <span className="mono text-xs text-paper/45 transition-colors group-hover:text-ember-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65 transition-colors group-hover:text-ink/70">
                {detail}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
