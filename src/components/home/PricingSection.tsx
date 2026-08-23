import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { websiteTiers } from "@/lib/content/pricing";

export default function PricingSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Pricing
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-steel/20 bg-paper-elev">
          {websiteTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`flex items-center justify-between px-6 py-5 ${
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

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
          Custom applications are priced by scope, not a fixed menu — after a
          short discovery call we send a fixed proposal with a
          milestone-based schedule.
        </p>

        <Link
          href="/pricing"
          className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ember"
        >
          See full pricing <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
