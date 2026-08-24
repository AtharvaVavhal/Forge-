import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content/process";

export default function HowWeWork() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow number="05">How We Work</Eyebrow>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            Seven steps, no surprises
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mt-16">
            <span
              className="absolute left-3 top-3 bottom-3 w-px bg-steel/25 md:hidden"
              aria-hidden
            />
            <span
              className="absolute left-3 right-3 top-3 hidden h-px bg-steel/25 md:block"
              aria-hidden
            />

            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="relative flex items-center gap-4 md:flex-col md:items-start md:gap-0"
                >
                  <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                  </span>
                  <div className="md:mt-4">
                    <p className="mono text-xs text-steel">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="font-display text-base font-semibold text-ink">
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
