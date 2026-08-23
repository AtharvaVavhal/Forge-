import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function CaseStudyCta() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-8">
        <SectionLabel number="11" label="Start a Project" tone="paper" />
        <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display max-w-md text-2xl font-bold leading-snug md:text-3xl">
            Building something similar?
          </h2>
          <Link
            href="/contact"
            className="font-display shrink-0 rounded-full bg-ember px-8 py-3.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
