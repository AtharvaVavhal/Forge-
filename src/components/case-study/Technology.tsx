import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";
import { technology } from "@/lib/content/caseStudy";

export default function Technology() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-8 pt-20 md:pt-24">
        <Reveal variant="subtle">
          <SectionLabel number="10" label="Technology" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
            Stack
          </h2>
        </Reveal>

        <ul className="mt-6 flex flex-wrap gap-3">
          {technology.map((tech, index) => (
            <Reveal
              key={tech}
              as="li"
              variant="subtle"
              delay={index * 50}
              className="mono rounded-full border border-paper/25 px-4 py-2 text-sm text-paper/80"
            >
              {tech}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
