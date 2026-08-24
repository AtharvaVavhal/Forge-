import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

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
        <Reveal variant="subtle">
          <Eyebrow number="04">Who We Build For</Eyebrow>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            Businesses that need software they can run on
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal key={audience.name} delay={index * 70}>
              <div className="border-t-2 border-ink pt-6">
                <span className="mono text-xs text-steel">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {audience.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {audience.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
