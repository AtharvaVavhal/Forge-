import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const reasons = [
  "A small, focused team",
  "Direct communication",
  "Proper scope, agreed before we build",
  "Milestone-based delivery",
  "Production-ready software",
  "Support after launch",
];

export default function WhyForge() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow number="06">Why FORGE</Eyebrow>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            What working with us looks like
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-x-8 gap-y-0 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <li
              key={reason}
              className="flex items-baseline gap-3 border-b border-steel/15 py-4 text-ink"
            >
              <span className="mono text-xs text-steel">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
