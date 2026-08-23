import Link from "next/link";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";
import Eyebrow from "@/components/Eyebrow";

export default function FeaturedWork() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>Featured Work</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Gym Retention &amp; Operations Platform
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            FORGE&apos;s flagship project is a retention and operations
            platform built for gyms — covering attendance, membership
            management, and the workflow gyms actually run day to day. It
            tracks attendance, flags members who&apos;ve gone inactive, and
            manages the follow-up, renewals and add-on services that keep a
            gym running, with a dashboard that gives the owner visibility
            into all of it.
          </p>
          <Link
            href="/work/gym-retention-platform"
            className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ember"
          >
            Read the case study <span aria-hidden>→</span>
          </Link>
        </div>

        <DeviceFramePlaceholder caption="Gym Retention & Operations Platform" />
      </div>
    </section>
  );
}
