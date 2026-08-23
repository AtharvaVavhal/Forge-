import Eyebrow from "@/components/Eyebrow";

const audiences = [
  {
    name: "Local Businesses",
    description:
      "Professional websites and digital systems for businesses that need to look credible and operate better online.",
  },
  {
    name: "Growing Businesses",
    description:
      "Custom systems that replace repetitive WhatsApp, Excel and manual workflows.",
  },
  {
    name: "Founders & Startups",
    description:
      "Web products, MVPs and custom software built around a real business idea.",
  },
];

export default function WhoWeBuildFor() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Who We Build For</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Who we build for
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.name}
              className="rounded-2xl border border-steel/20 p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {audience.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
