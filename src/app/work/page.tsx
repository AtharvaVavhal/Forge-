import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";
import NookCardPreview from "@/components/nook/NookCardPreview";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work — FORGE",
  description:
    "Case studies from FORGE, a web and software development studio in Pune.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
            Our work
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <Reveal variant="clip">
          <Link
            href="/work/gym-retention-platform"
            className="group grid gap-8 rounded-2xl bg-paper-elev p-8 shadow-sm transition-[transform,box-shadow] duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:-translate-y-1 hover:shadow-lg md:grid-cols-2 md:items-center md:p-10"
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
              <span className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-[var(--duration-fast)] group-hover:text-ember-deep">
                Read the case study
                <HoverArrow />
              </span>
            </div>

            <DeviceFramePlaceholder caption="Gym Retention & Operations Platform" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <Reveal variant="clip">
          <div className="group grid gap-8 rounded-2xl bg-paper-elev p-8 shadow-sm transition-[transform,box-shadow] duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:-translate-y-1 hover:shadow-lg md:grid-cols-2 md:items-center md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="mono text-xs uppercase tracking-[0.2em] font-semibold text-[#7657F6]">
                  In-House Product
                </span>
                <span className="text-steel/40">·</span>
                <span className="mono inline-flex items-center gap-1.5 rounded-full border border-[#7657F6]/30 bg-[#F4F1FF] px-2.5 py-0.5 text-[10px] font-medium text-[#171338]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7657F6] animate-pulse" />
                  In Development
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                Nook — Hostel &amp; PG Management Platform
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                A modern hostel and PG management platform designed to simplify resident
                management, admissions, bookings, bed allocation and financial operations
                through one unified system.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "React", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="mono rounded bg-paper px-2 py-0.5 text-[11px] text-steel"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="/work/nook-hostel-pg-platform"
                  className="font-display inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-[var(--duration-fast)] group-hover:text-ember-deep"
                >
                  Read the case study
                  <HoverArrow />
                </Link>
                <a
                  href="https://trynook.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display inline-flex items-center gap-1.5 text-xs font-semibold text-steel transition-colors hover:text-[#7657F6]"
                >
                  trynook.in
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            <Link
              href="/work/nook-hostel-pg-platform"
              className="block focus:outline-none"
              aria-label="Read Nook case study"
            >
              <NookCardPreview />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <Reveal variant="clip">
          <Link
            href="https://rotimatic-next1.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-8 rounded-2xl bg-paper-elev p-8 shadow-sm transition-[transform,box-shadow] duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:-translate-y-1 hover:shadow-lg md:grid-cols-2 md:items-center md:p-10"
          >
            <div>
              <p className="mono text-xs uppercase tracking-[0.2em] text-steel">
                Case Study
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                Rotimatic NEXT — D2C Product &amp; Ordering Platform
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                A full D2C storefront for an automatic roti maker —
                product configurator, cart and checkout with Razorpay,
                order tracking dashboard, and a sales enquiry pipeline,
                built end to end.
              </p>
              <span className="font-display mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-[var(--duration-fast)] group-hover:text-ember-deep">
                View live site
                <HoverArrow />
              </span>
            </div>

            <DeviceFramePlaceholder caption="Rotimatic NEXT — Product & Ordering Platform" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="mono text-sm text-steel">More work in progress.</p>
      </section>
    </div>
  );
}