import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";
import { features } from "@/lib/content/caseStudy";

export default function Features() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal variant="subtle">
          <SectionLabel number="06" label="Features" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
            What the platform does
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal
              key={feature}
              as="li"
              variant="subtle"
              delay={index * 30}
              className="flex items-baseline gap-3 border-b border-steel/15 py-4 text-ink"
            >
              <span className="mono text-xs text-steel" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base">{feature}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
