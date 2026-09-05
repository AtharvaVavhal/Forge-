import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content/process";

export default function HowWeWork() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow number="06">How We Work</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-[1.08] text-ink md:text-5xl">
            A clear path from operating problem to working system.
          </h2>
        </Reveal>

        <div className="relative mt-16 overflow-x-auto pb-3">
          <span
            className="absolute left-3 top-3 bottom-3 w-px bg-steel/25 md:hidden"
            aria-hidden
          />
          <span
            className="absolute left-3 right-3 top-3 hidden h-px bg-steel/25 md:block"
            aria-hidden
          />

          <div className="flex min-w-[42rem] flex-col gap-8 md:flex-row md:justify-between md:gap-4">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.label}
                variant="sequence"
                delay={index * 70}
                className="relative flex items-center gap-4 md:w-24 md:flex-col md:items-start md:gap-0 lg:w-28"
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
