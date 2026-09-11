import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { websiteTiers, scopeSteps } from "@/lib/content/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing — FORGE",
  description:
    "Website starting prices and how custom software is scoped and priced at FORGE.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
            What things cost
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Every project is scoped and priced individually. These ranges
            are a starting point, not a menu.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Websites
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-steel/20 bg-paper-elev">
            {websiteTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`flex items-center justify-between px-6 py-5 transition-colors duration-[var(--duration-standard)] hover:bg-ink/[0.02] ${
                  index !== 0 ? "border-t border-steel/15" : ""
                }`}
              >
                <span className="font-display text-base font-semibold text-ink">
                  {tier.name}
                </span>
                <span className="mono text-sm text-steel">{tier.price}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Custom Software &amp; Web Applications
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Custom software isn&apos;t priced from a menu — it&apos;s scoped
            around what your business actually needs. After a short
            discovery call, we send a fixed proposal with a milestone-based
            schedule, so you know the cost and the delivery plan before
            development starts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-4">
            {scopeSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-display rounded-full border border-steel/30 px-4 py-2 text-sm font-semibold text-ink">
                  {step}
                </span>
                {index < scopeSteps.length - 1 && (
                  <span className="text-steel" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 pb-24">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Maintenance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          Support plans are scoped monthly and agreed at project delivery.
        </p>

        <Link
          href="/contact"
          className="font-display mt-8 inline-flex rounded-full bg-ember-deep px-6 py-3 text-sm font-semibold text-paper transition-[transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out-forge)] hover:scale-[1.03] hover:shadow-[0_8px_20px_-8px_rgba(154,74,28,0.45)] active:scale-[0.98]"
        >
          Start a Project
        </Link>
      </section>
    </div>
  );
}
