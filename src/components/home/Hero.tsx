import Link from "next/link";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";
import Eyebrow from "@/components/Eyebrow";
import CornerMarks from "@/components/CornerMarks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,236,223,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(242,236,223,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <Eyebrow tone="paper" number="01">
          Web &amp; Software Development Studio
        </Eyebrow>

        <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]">
          Websites and software your business actually runs on.
        </h1>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-paper/75">
              FORGE is a web and software development studio. We design and
              build websites, web applications and business systems — for
              gyms, clinics, retailers and growing companies that need
              software they can actually use, not just look at.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="font-display rounded-full bg-ember-deep px-6 py-3 text-sm font-semibold text-paper transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="font-display group inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
              >
                See Our Work
                <span
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 md:justify-self-end lg:col-span-7">
            <div className="max-w-sm md:ml-auto">
              <p className="mono flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper/40">
                Flagship Build
                <span className="h-px flex-1 bg-paper/15" aria-hidden />
              </p>
              <div className="relative mt-4">
                <CornerMarks tone="paper" />
                <DeviceFramePlaceholder caption="Gym Retention & Operations Platform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
