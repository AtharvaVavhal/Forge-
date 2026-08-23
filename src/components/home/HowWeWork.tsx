import Eyebrow from "@/components/Eyebrow";
import { processSteps } from "@/lib/content/process";

export default function HowWeWork() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>How We Work</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          How we work
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-6">
          {processSteps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-3">
              <span className="font-display text-base font-semibold text-ink md:text-lg">
                {step.label}
              </span>
              {index < processSteps.length - 1 && (
                <span className="text-steel" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
