import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const freeFeatures = [
  "Schedule search from a pruning date",
  "Marathi questions answered from the verified knowledge base",
  "A small monthly allowance, enforced on the server",
];

const proFeatures = [
  "Marathi AI chat with a controlled fallback",
  "Crop photo diagnosis",
  "Ask by voice, using on-device Marathi speech",
  "Multiple vineyard plots with a primary plot",
  "Personalised schedules and a medicine directory",
  "One automated Marathi call per day",
  "Weather and rain alerts",
  "Direct chat with the grower's shop or consultant",
];

const roles = [
  { name: "Farmer", surface: "Mobile app", note: "Schedules, questions, photos" },
  { name: "Shop partner", surface: "Mobile app", note: "Linked growers and chat" },
  { name: "Consultant", surface: "Mobile app", note: "Own knowledge and schedules" },
  { name: "Owner", surface: "Web dashboard", note: "Access, leads, knowledge base" },
];

export default function KisanMitraSolution() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="03" label="Solution" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            One app for growers and partners, one dashboard for the owner.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            A grower starts free and upgrades to Pro. Shops and consultants work
            inside the same mobile app, each walled off from the others&apos;
            data. The owner runs access and content from a web dashboard.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal
            variant="subtle"
            delay={40}
            className="rounded-2xl border border-steel/20 bg-paper-elev p-6 shadow-sm md:p-8"
          >
            <span className="mono text-xs uppercase tracking-wider text-steel">
              Free
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-ink">
              Enough to see the value
            </h3>
            <ul className="mt-5 space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#34785A]" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            variant="subtle"
            delay={80}
            className="rounded-2xl border border-[#174C38] bg-[#174C38] p-6 text-[#F7F7F2] shadow-sm md:p-8"
          >
            <span className="mono text-xs uppercase tracking-wider text-[#F7F7F2]/70">
              Pro · one calendar year
            </span>
            <h3 className="mt-1 font-display text-xl font-bold">
              The full crop-cycle companion
            </h3>
            <ul className="mt-5 space-y-3">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#F7F7F2]/90">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A451]" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="subtle" delay={120} className="mt-10">
          <h3 className="mono text-xs uppercase tracking-wider text-steel">
            Who uses it
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {roles.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-steel/20 bg-paper-elev p-4 shadow-sm"
              >
                <p className="font-display text-sm font-bold text-ink">{r.name}</p>
                <p className="mono mt-1 text-[11px] text-steel">{r.surface}</p>
                <p className="mt-2 text-xs leading-snug text-ink/70">{r.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
