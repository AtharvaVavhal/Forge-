import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const steps = [
  {
    n: "1",
    title: "Validate and compress",
    body: "Photos are checked by file signature and shrunk before any of them is sent to an AI model.",
  },
  {
    n: "2",
    title: "Ask the knowledge base",
    body: "If verified material matches with enough confidence, the answer comes from it directly.",
  },
  {
    n: "3",
    title: "Controlled fallback",
    body: "Pro growers only, on a free-tier model, with guardrails that forbid inventing a dose.",
  },
  {
    n: "4",
    title: "Escalate or say so",
    body: "Uncertain cases go to a consultant, or the app says it cannot answer, in Marathi.",
  },
];

const rules = [
  "The design forbids generated chemical dosages. A dose is either sourced or left out.",
  "The client is free-tier only, so hitting a limit cannot trigger paid usage.",
  "A single switch turns off every external AI call and leaves the rest of the app running.",
];

export default function KisanMitraGrounding() {
  return (
    <section className="border-t border-steel/15 bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="04" label="Grounded Answers" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            The knowledge base answers first. The model is the last resort.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            Every question and photo goes through one router. The routing layer
            is built and tested. The knowledge base it queries is not built yet.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s, idx) => (
            <Reveal
              key={s.n}
              variant="subtle"
              delay={idx * 50}
              className="rounded-xl border border-steel/20 bg-paper-elev p-5 shadow-sm"
            >
              <span className="mono text-xs text-steel">{s.n}</span>
              <h3 className="mt-2 font-display text-sm font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/70">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="subtle" delay={100} className="mt-8">
          <ul className="space-y-3 rounded-2xl border border-[#174C38]/25 bg-[#F7F7F2] p-6 md:p-8">
            {rules.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-[#202923]">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#174C38] text-[11px] font-bold text-[#F7F7F2]"
                >
                  ✓
                </span>
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
