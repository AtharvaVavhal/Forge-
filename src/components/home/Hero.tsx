import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";
import HoverArrow from "@/components/HoverArrow";
import ForgeProductShowcase from "@/components/home/ForgeProductShowcase";

export default function Hero() {
  return (
    <section className="forge-hero relative overflow-hidden bg-ink text-paper">
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

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(30rem,1.14fr)] lg:items-end lg:gap-10">
          <div>
            <div className="hero-anim" style={{ animationDelay: "0ms" }}>
              <Eyebrow tone="paper" number="01">
                Web &amp; Software Development Studio
              </Eyebrow>
            </div>

            <TextReveal
              as="h1"
              text="Websites and software your business actually runs on."
              startDelay={120}
              wordDelay={45}
              className="mt-6 block max-w-3xl font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.55rem]"
            />
            <p
              className="hero-anim mt-8 max-w-md text-lg leading-relaxed text-paper/75"
              style={{ animationDelay: "420ms" }}
            >
              FORGE is a web and software development studio. We design and
              build websites, web applications and business systems — for
              gyms, clinics, retailers and growing companies that need
              software they can actually use, not just look at.
            </p>
            <div
              className="hero-anim mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "520ms" }}
            >
              <Link
                href="/contact"
                className="font-display rounded-full bg-ember-deep px-6 py-3 text-sm font-semibold text-paper transition-[transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out-forge)] hover:scale-[1.03] hover:shadow-[0_10px_28px_-10px_rgba(224,130,74,0.55)] active:scale-[0.98]"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="font-display group inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors duration-[var(--duration-fast)] hover:border-paper/60"
              >
                See Our Work
                <HoverArrow />
              </Link>
            </div>
          </div>

          <div
            className="hero-anim lg:pb-1"
            style={{ animationDelay: "560ms" }}
          >
            <ForgeProductShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
