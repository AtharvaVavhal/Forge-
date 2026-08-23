import Eyebrow from "@/components/Eyebrow";

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
        <Eyebrow>Why FORGE</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Why FORGE
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex items-baseline gap-3 border-b border-steel/15 pb-4 text-ink"
            >
              <span className="mono text-xs text-steel">—</span>
              <span className="text-base">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
