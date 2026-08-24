import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import HoverArrow from "@/components/HoverArrow";
import { services } from "@/lib/content/services";

export default function ServicesGrid() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal variant="subtle">
          <Eyebrow number="03">Services</Eyebrow>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            What we do
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-steel/20">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 50}>
              <div className="group -mx-4 grid gap-x-8 gap-y-3 border-b border-l-2 border-steel/20 border-l-transparent px-4 py-7 transition-[background-color,border-color] duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:border-l-ember-deep hover:bg-ink/[0.025] md:grid-cols-12 md:items-baseline md:gap-y-0">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="mono shrink-0 text-xs text-steel transition-colors duration-[var(--duration-standard)] group-hover:text-ember-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink transition-colors duration-[var(--duration-standard)] group-hover:text-ember-deep">
                    {service.name}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-ink/70 md:col-span-5">
                  {service.homeWhat}
                </p>

                <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end md:text-right">
                  <p className="mono text-xs leading-relaxed text-steel">
                    {service.homeWho}
                  </p>
                </div>

                {service.homeCta && (
                  <Link
                    href={`/services#${service.slug}`}
                    className="font-display mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors duration-[var(--duration-standard)] group-hover:text-ember-deep md:col-span-4 md:col-start-1"
                  >
                    {service.homeCta}
                    <HoverArrow />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
