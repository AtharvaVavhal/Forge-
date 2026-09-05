import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Team from "@/components/about/Team";
import { processSteps } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "About — FORGE",
  description:
    "FORGE is a small, focused web and software development studio based in Pune.",
};

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
            Who we are
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            FORGE is a small, focused web and software development studio
            based in Pune. We design and build websites, web applications
            and business systems for companies that need software they can
            actually run their operations on.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Why we exist
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          Too many business websites and systems get launched and then
          left — a site that looks fine on day one and stops being useful
          by month three, a &ldquo;custom system&rdquo; nobody on the team
          can actually use. FORGE exists to build the opposite: software
          that keeps working, keeps getting used, and keeps being supported
          after launch.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          What we believe
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          We work as a small, focused team, which means the person scoping
          your project is involved in building it — not handed off to a
          different department. We communicate directly, scope properly
          before we write a line of code, and deliver in agreed milestones
          so you always know what&apos;s built and what&apos;s next. What we
          hand over is meant to run in production, not get demoed once and
          forgotten — and every project includes support after launch,
          because our work isn&apos;t finished the day it goes live.
        </p>
      </section>

      <Team />

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          How we work
        </h2>
        <div className="mt-8 space-y-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.label} delay={index * 40}>
              <div className="flex gap-5 border-t border-steel/15 pt-6 first:border-t-0 first:pt-0">
                <span className="mono shrink-0 pt-1 text-sm text-steel">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-ink/80">
                    {step.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 pb-24">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Who we work with
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          FORGE works best with businesses that have a real operational
          problem to solve — not just a website to check off a list. If
          you&apos;re running part of your business on WhatsApp, Excel, or
          memory, or your current site doesn&apos;t reflect what your
          business actually does, that&apos;s the kind of project we want.
        </p>
      </section>
    </div>
  );
}
