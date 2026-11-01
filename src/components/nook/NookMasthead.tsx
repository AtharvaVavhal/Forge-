import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function NookMasthead() {
  return (
    <section className="border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:pb-16 md:pt-24">
        {/* Breadcrumb / Back link */}
        <Reveal variant="subtle">
          <Link
            href="/work"
            className="mono mb-6 inline-flex items-center gap-2 text-xs text-paper/60 transition-colors duration-[var(--duration-fast)] hover:text-paper"
          >
            <span aria-hidden>←</span> Back to all work
          </Link>
        </Reveal>

        {/* Brand Lockup & Category */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow tone="paper">In-House Product</Eyebrow>
            <span className="text-paper/20">·</span>
            <span className="mono inline-flex items-center gap-1.5 rounded-full border border-[#7657F6]/40 bg-[#7657F6]/15 px-3 py-0.5 text-xs font-medium text-[#C4B5FD]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7657F6] animate-pulse" />
              In Development
            </span>
          </div>

          <a
            href="https://trynook.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mono inline-flex items-center gap-1.5 rounded-lg border border-paper/20 px-3 py-1 text-xs text-paper/80 transition-colors hover:border-[#7657F6] hover:text-[#C4B5FD]"
          >
            <span>trynook.in</span>
            <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Nook Official Logo display */}
        <Reveal variant="subtle" delay={60} className="mt-8 flex items-center gap-4">
          <div className="relative h-10 w-28 md:h-12 md:w-36">
            <Image
              src="/nook/nook-logo-white.svg"
              alt="nook"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          <span className="mono text-xs uppercase tracking-[0.2em] text-paper/40">
            Platform Dossier
          </span>
        </Reveal>

        {/* Title */}
        <Reveal variant="subtle" delay={100}>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Nook — Hostel &amp; PG Management Platform
          </h1>
        </Reveal>

        {/* Lead Summary */}
        <Reveal variant="subtle" delay={140}>
          <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-paper/80 md:text-xl">
            A modern hostel and PG management platform designed to simplify resident
            management, admissions, bookings, bed allocation and financial operations
            through one unified system.
          </p>
        </Reveal>

        {/* Metadata Ledger */}
        <Reveal variant="subtle" delay={180}>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-4">
            <div>
              <dt className="mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                Nature
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-paper">
                In-House SaaS Product
              </dd>
            </div>
            <div>
              <dt className="mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                Launch Region
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-paper">
                Pune, Maharashtra
              </dd>
            </div>
            <div>
              <dt className="mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                Current Status
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-[#C4B5FD]">
                Phase 2 Completed
              </dd>
            </div>
            <div>
              <dt className="mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                Domain
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-paper">
                trynook.in
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
