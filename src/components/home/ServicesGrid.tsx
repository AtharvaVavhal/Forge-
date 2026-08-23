import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { services } from "@/lib/content/services";

export default function ServicesGrid() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          What we do
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col rounded-2xl bg-paper-elev p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {service.homeWhat}
              </p>
              <p className="mono mt-3 text-xs text-steel">{service.homeWho}</p>
              {service.homeCta && (
                <Link
                  href={`/services#${service.slug}`}
                  className="font-display mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ember"
                >
                  {service.homeCta} <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
