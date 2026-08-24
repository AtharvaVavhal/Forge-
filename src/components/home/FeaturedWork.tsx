import Link from "next/link";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";
import Eyebrow from "@/components/Eyebrow";
import CornerMarks from "@/components/CornerMarks";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import { technology } from "@/lib/content/caseStudy";

export default function FeaturedWork() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal variant="subtle">
          <Eyebrow number="02">Featured Work</Eyebrow>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
              Gym Retention &amp; Operations Platform
            </h2>

            <dl className="flex shrink-0 gap-8">
              <div>
                <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
                  Industry
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">
                  Gym &amp; Fitness
                </dd>
              </div>
              <div>
                <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
                  Stack
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">
                  {technology.join(" · ")}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal variant="subtle" delay={60}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
            FORGE&apos;s flagship project is a retention and operations
            platform built for gyms — covering attendance, membership
            management, and the workflow gyms actually run day to day. It
            tracks attendance, flags members who&apos;ve gone inactive, and
            manages the follow-up, renewals and add-on services that keep a
            gym running, with a dashboard that gives the owner visibility
            into all of it.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal variant="subtle" delay={120} className="order-2 lg:order-1">
            <Link
              href="/work/gym-retention-platform"
              className="font-display group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-[var(--duration-fast)] hover:text-ember-deep"
            >
              Read the case study
              <HoverArrow />
            </Link>
          </Reveal>

          <Reveal variant="clip" delay={80} className="relative order-1 lg:order-2">
            <CornerMarks tone="ink" />
            <DeviceFramePlaceholder caption="Gym Retention & Operations Platform" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
