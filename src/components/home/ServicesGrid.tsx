import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content/services";

export default function ServicesGrid() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow number="03">Services</Eyebrow>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            What we do
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-steel/20">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 40}>
              <div className="group -mx-4 grid gap-x-8 gap-y-3 border-b border-steel/20 px-4 py-7 transition-colors duration-200 hover:bg-ink/[0.025] md:grid-cols-12 md:items-baseline md:gap-y-0">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="mono shrink-0 text-xs text-steel">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink transition-colors duration-200 group-hover:text-ember-deep">
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
                    className="font-display mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors duration-200 group-hover:text-ember-deep md:col-span-4 md:col-start-1"
                  >
                    {service.homeCta}
                    <span
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
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
