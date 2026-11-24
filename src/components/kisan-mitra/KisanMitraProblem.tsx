import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const constraints = [
  {
    title: "Timing",
    body: "Spray, irrigation and pruning decisions depend on crop stage, variety and weather. Generic advice arrives at the wrong point in the cycle.",
  },
  {
    title: "Trust",
    body: "An invented chemical dose does real damage. Answers have to come from approved sources, and the system has to say so when it has none.",
  },
  {
    title: "Access",
    body: "The app has to work in Marathi, hold up on weak rural networks, and let a grower speak instead of type.",
  },
];

export default function KisanMitraProblem() {
  return (
    <section className="border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-4 md:pb-24">
        <Reveal variant="subtle">
          <SectionLabel number="02" label="Problem" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            Crop decisions follow the calendar, and wrong advice is expensive.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-paper/75 md:text-lg">
            Advice reaches growers through shops, consultants and chat
            messages. Kisan Mitra is designed around three constraints.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {constraints.map((c, idx) => (
            <Reveal
              key={c.title}
              variant="subtle"
              delay={idx * 50}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
            >
              <h3 className="mono text-xs uppercase tracking-wider text-[#C5A451]">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/80">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
