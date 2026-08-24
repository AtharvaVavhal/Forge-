import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center md:py-32">
        <Reveal className="flex flex-col items-center gap-6">
          <Eyebrow tone="paper" number="09">
            Start a Project
          </Eyebrow>
          <h2 className="font-display max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            Websites and software your business actually runs on.
          </h2>
          <p className="max-w-xl text-base text-paper/70">
            Tell us what your business needs, and we&apos;ll scope it
            properly before we build anything.
          </p>
          <Link
            href="/contact"
            className="font-display mt-2 rounded-full bg-ember-deep px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]"
          >
            Start a Project
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
