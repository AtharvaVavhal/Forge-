import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work — FORGE",
  description:
    "Case studies from FORGE, a web and software development studio in Pune.",
};

export default function WorkPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Our work
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <Reveal>
          <Link
            href="/work/gym-retention-platform"
            className="group grid gap-8 rounded-2xl bg-paper-elev p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg md:grid-cols-2 md:items-center md:p-10"
          >
            <div>
              <p className="mono text-xs uppercase tracking-[0.2em] text-steel">
                Case Study
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                Gym Retention &amp; Operations Platform
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                A retention-and-operations system built around one core
                workflow — attendance, inactivity detection, and follow-up —
                so gyms can act before a member quietly disappears.
              </p>
              <span className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-ember-deep">
                Read the case study
                <span
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </div>

            <DeviceFramePlaceholder caption="Gym Retention & Operations Platform" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="mono text-sm text-steel">More work in progress.</p>
      </section>
    </div>
  );
}
