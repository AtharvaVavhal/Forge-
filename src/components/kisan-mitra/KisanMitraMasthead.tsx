import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const ledger = [
  { label: "Nature", value: "In-House Agri-Tech Product" },
  { label: "Region", value: "Maharashtra" },
  { label: "Status", value: "In Development" },
  { label: "Language", value: "Marathi-first" },
];

export default function KisanMitraMasthead() {
  return (
    <section className="border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-12 pt-20 md:pb-16 md:pt-24">
        <Reveal variant="subtle">
          <Link
            href="/work"
            className="mono mb-6 inline-flex items-center gap-2 text-xs text-paper/60 transition-colors duration-[var(--duration-fast)] hover:text-paper"
          >
            <span aria-hidden>←</span> Back to all work
          </Link>
        </Reveal>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow tone="paper">In-House Product</Eyebrow>
            <span className="text-paper/20">·</span>
            <span className="mono inline-flex items-center gap-1.5 rounded-full border border-[#34785A]/60 bg-[#34785A]/20 px-3 py-0.5 text-xs font-medium text-paper">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34785A] animate-pulse" />
              In Development
            </span>
          </div>
          <span className="mono rounded-lg border border-paper/20 px-3 py-1 text-xs text-paper/70">
            Not yet released
          </span>
        </div>

        <Reveal variant="subtle" delay={60} className="mt-8">
          <div className="relative h-14 w-48 md:h-16 md:w-56">
            <Image
              src="/kisan-mitra/kisan-mitra-reverse-dark-transparent.svg"
              alt="Kisan Mitra"
              fill
              fetchPriority="high"
              className="object-contain object-left"
            />
          </div>
        </Reveal>

        <Reveal variant="subtle" delay={100}>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Kisan Mitra — A Farming Companion for Grape Growers
          </h1>
        </Reveal>

        <Reveal variant="subtle" delay={140}>
          <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-paper/80 md:text-xl">
            A Marathi-first agronomy platform: day-by-day crop schedules, answers
            grounded in verified knowledge, photo diagnosis, and a direct line to
            the shop and consultant who already advise the grower.
          </p>
        </Reveal>

        <Reveal variant="subtle" delay={180}>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-4">
            {ledger.map((item) => (
              <div key={item.label}>
                <dt className="mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-paper">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
