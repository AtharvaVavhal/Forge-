import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";
import { workflowSteps } from "@/lib/content/caseStudy";

export default function Workflow() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <SectionLabel number="05" label="Workflow" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
            The retention loop
          </h2>

          <div className="mt-10 -mx-6 overflow-x-auto px-6">
            <div className="flex min-w-max items-stretch gap-3">
              {workflowSteps.map((step, index) => (
                <div key={step} className="flex items-stretch gap-3">
                  <div className="flex w-40 flex-col justify-between rounded-xl border border-steel/25 bg-paper-elev p-4 transition-colors duration-200 hover:border-steel/40">
                    <span className="mono text-xs text-steel">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display mt-4 text-sm font-semibold leading-snug text-ink">
                      {step}
                    </span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <span
                      className="flex items-center text-steel"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="mono mt-4 text-xs text-steel md:hidden">
            Scroll to see the full workflow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
