import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services — FORGE",
  description:
    "Websites, web applications, e-commerce, business automation, mobile apps and maintenance — built around how your business actually operates.",
};

export default function ServicesPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
          What we do
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
          Six categories, no jargon. If your business needs something that
          doesn&apos;t fit neatly into one, tell us what you&apos;re trying
          to solve and we&apos;ll work out where it belongs.
        </p>
      </section>

      <div className="mx-auto max-w-4xl divide-y divide-steel/20 px-6 pb-24">
        {services.map((service) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 py-14"
          >
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              {service.name}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-ink/80">
              {service.what}
            </p>

            <div className="mt-6">
              <p className="mono text-xs uppercase tracking-[0.2em] text-steel">
                Who needs it
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {service.who}
              </p>
            </div>

            <div className="mt-6">
              <p className="mono text-xs uppercase tracking-[0.2em] text-steel">
                Typical use cases
              </p>
              <ul className="mt-2 space-y-1.5">
                {service.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-baseline gap-2 text-base leading-relaxed text-ink/80"
                  >
                    <span className="text-steel" aria-hidden>
                      —
                    </span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="mono text-xs uppercase tracking-[0.2em] text-steel">
                What FORGE delivers
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {service.deliverables}
              </p>
            </div>

            {service.homeCta && (
              <Link
                href="/contact"
                className="font-display mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ember"
              >
                {service.homeCta} <span aria-hidden>→</span>
              </Link>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
