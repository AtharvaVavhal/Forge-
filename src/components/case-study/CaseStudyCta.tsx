import Link from "next/link";
import SectionLabel from "./SectionLabel";
import Reveal from "@/components/Reveal";

export default function CaseStudyCta() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-8">
        <Reveal variant="emphasis">
          <SectionLabel number="11" label="Start a Project" tone="paper" />
          <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display max-w-md text-2xl font-bold leading-snug md:text-3xl">
              Building something similar?
            </h2>
            <Link
              href="/contact"
              className="font-display shrink-0 rounded-full bg-ember-deep px-8 py-3.5 text-sm font-semibold text-paper transition-[transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out-forge)] hover:scale-[1.03] hover:shadow-[0_10px_28px_-10px_rgba(224,130,74,0.55)] active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
