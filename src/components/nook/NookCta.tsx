import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

export default function NookCta() {
  return (
    <section className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:pb-32 md:pt-20">
        <Reveal variant="emphasis">
          <SectionLabel number="09" label="Get in Touch" tone="paper" />
          <div className="mt-8 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl lg:text-4xl">
                Building websites and software your business actually runs on.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-paper/75">
                Whether you are building custom internal software, a high-converting web
                presence, or a scalable multi-tenant SaaS product like Nook—the Forge team
                delivers production-grade software engineered to last.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/contact"
                className="font-display inline-flex items-center justify-center rounded-full bg-ember-deep px-8 py-3.5 text-sm font-semibold text-paper transition-[transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out-forge)] hover:scale-[1.03] hover:shadow-[0_10px_28px_-10px_rgba(224,130,74,0.55)] active:scale-[0.98]"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="mono inline-flex items-center justify-center rounded-full border border-paper/20 px-6 py-3 text-xs text-paper/80 transition-colors hover:border-paper/40 hover:text-paper"
              >
                View all case studies
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
