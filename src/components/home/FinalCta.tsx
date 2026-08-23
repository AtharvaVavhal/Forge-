import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="font-display max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          Websites and software your business actually runs on.
        </h2>
        <p className="max-w-xl text-base text-paper/70">
          Tell us what your business needs, and we&apos;ll scope it properly
          before we build anything.
        </p>
        <Link
          href="/contact"
          className="font-display mt-2 rounded-full bg-ember px-8 py-3.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}
