import Link from "next/link";
import DeviceFramePlaceholder from "@/components/DeviceFramePlaceholder";

export default function Hero() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            Websites and software your business actually runs on.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
            FORGE is a web and software development studio. We design and
            build websites, web applications and business systems — for
            gyms, clinics, retailers and growing companies that need
            software they can actually use, not just look at.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="font-display rounded-full bg-ember px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="font-display rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
            >
              See Our Work
            </Link>
          </div>
        </div>

        <DeviceFramePlaceholder caption="Gym Retention & Operations Platform" />
      </div>
    </section>
  );
}
