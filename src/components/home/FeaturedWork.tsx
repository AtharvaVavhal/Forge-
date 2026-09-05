import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import CornerMarks from "@/components/CornerMarks";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import { technology } from "@/lib/content/caseStudy";

export default function FeaturedWork() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal variant="subtle">
          <Eyebrow number="03">Selected Work</Eyebrow>

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

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal variant="subtle" delay={120} className="order-2 lg:order-1">
            <p className="mono max-w-sm text-xs leading-relaxed tracking-[0.14em] text-steel">
              A case study about the system design—not claimed performance
              outcomes. Product screens remain representative until approved
              project imagery is available.
            </p>
            <Link
              href="/work/gym-retention-platform"
              className="font-display group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-[var(--duration-fast)] hover:text-ember-deep"
            >
              Explore the case study
              <HoverArrow />
            </Link>
          </Reveal>

          <Reveal variant="clip" delay={80} className="relative order-1 lg:order-2">
            <CornerMarks tone="ink" />
            <div className="forge-work-preview">
              <div className="forge-work-preview__top">
                <span className="mono">RETENTION LOOP / SYSTEM MAP</span>
                <span className="forge-work-preview__status">WORKFLOW</span>
              </div>
              <div className="forge-work-preview__body">
                <div className="forge-work-preview__rail" aria-hidden>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="forge-work-preview__canvas">
                  <div className="forge-work-preview__headline">
                    <span>Member activity</span>
                    <strong>See the next action, not just the last check-in.</strong>
                  </div>
                  <div className="forge-work-preview__nodes" aria-hidden>
                    <div><span>01</span>Attendance</div>
                    <div><span>02</span>Inactivity</div>
                    <div><span>03</span>Follow-up</div>
                    <div><span>04</span>Renewal</div>
                  </div>
                  <div className="forge-work-preview__owner">
                    <span className="mono">OWNER VISIBILITY</span>
                    <div><i /><i /><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <p className="forge-work-preview__caption mono">ILLUSTRATIVE CASE-STUDY SYSTEM MODEL</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
