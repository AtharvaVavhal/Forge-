import SectionLabel from "./SectionLabel";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";
import CornerMarks from "@/components/CornerMarks";
import Reveal from "@/components/Reveal";
import { screens } from "@/lib/content/caseStudy";

export default function ProductScreens() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal variant="subtle">
          <SectionLabel number="07" label="Product Screens" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
            Product screens
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70">
            Real screenshots aren&apos;t in yet — these are placeholders for
            where they&apos;ll go.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {screens.map((screen, index) => (
            <Reveal
              key={screen.heading}
              variant="clip"
              delay={index * 90}
              className="relative"
            >
              <CornerMarks tone="paper" />
              <DeviceFramePlaceholder
                heading={screen.heading}
                caption="Image pending"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
