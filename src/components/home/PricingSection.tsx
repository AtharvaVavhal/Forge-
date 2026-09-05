import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import { websiteTiers } from "@/lib/content/pricing";

export default function PricingSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow number="07">Pricing</Eyebrow>
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-[1.08] text-ink md:text-5xl">
              Enough clarity to start the right conversation.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-ink/70 md:text-right">
              Clear website starting points. Custom software is scoped around the work it needs to do.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-steel/25 bg-paper-elev shadow-[0_18px_45px_-36px_rgba(23,20,15,0.45)]">
            {websiteTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`group flex items-center justify-between px-6 py-6 transition-colors duration-[var(--duration-standard)] hover:bg-ink hover:text-paper ${
                  index !== 0 ? "border-t border-steel/15" : ""
                }`}
              >
                <span className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-paper">
                  {tier.name}
                </span>
                <span className="mono text-base font-medium text-ink/80 transition-colors group-hover:text-paper/70">
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
            className="font-display group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-[var(--duration-fast)] hover:text-ember-deep"
          >
            See full pricing
            <HoverArrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
