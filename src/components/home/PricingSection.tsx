import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { websiteTiers } from "@/lib/content/pricing";

export default function PricingSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow number="07">Pricing</Eyebrow>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            What websites start at
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-steel/20 bg-paper-elev">
            {websiteTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`flex items-center justify-between px-6 py-6 transition-colors hover:bg-ink/[0.02] ${
                  index !== 0 ? "border-t border-steel/15" : ""
                }`}
              >
                <span className="font-display text-lg font-semibold text-ink">
                  {tier.name}
                </span>
                <span className="mono text-base font-medium text-ink/80">
                  {tier.price}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
            Custom applications are priced by scope, not a fixed menu — after
            a short discovery call we send a fixed proposal with a
            milestone-based schedule.
          </p>

          <Link
            href="/pricing"
            className="font-display group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ember-deep"
          >
            See full pricing
            <span
              className="transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
