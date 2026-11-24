import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const stack = [
  {
    category: "Backend",
    items: [
      { name: "Python 3.12 · FastAPI", role: "One API for the mobile app and the owner dashboard" },
      { name: "Server-side entitlements", role: "The app never decides who is Pro or how much is left" },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "PostgreSQL 16 + pgvector", role: "Relational data and knowledge-base search in one database" },
      { name: "Row Level Security", role: "Shops and consultants only see the growers linked to them" },
    ],
  },
  {
    category: "Clients",
    items: [
      { name: "React Native (Expo) · TypeScript", role: "One codebase for Android and iOS" },
      { name: "Next.js", role: "Owner dashboard for access, leads and knowledge content" },
    ],
  },
  {
    category: "AI and voice",
    items: [
      { name: "Free-tier Gemini behind a router", role: "Called only when the knowledge base cannot answer" },
      { name: "On-device Marathi speech", role: "No cloud speech service, no per-call cost" },
    ],
  },
];

function Node({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-xl border border-paper/15 bg-paper/5 p-4 text-center">
      <p className="font-display text-sm font-bold text-paper">{title}</p>
      <p className="mono mt-1 text-[11px] text-paper/60">{sub}</p>
    </div>
  );
}

export default function KisanMitraArchitecture() {
  return (
    <section className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="07" label="Architecture and Stack" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            One backend, two clients, and the rules enforced on the server.
          </h2>
          <p className="mt-4 max-w-3xl text-base text-paper/70 md:text-lg">
            Nothing that controls access or cost lives in the app. The backend
            decides entitlements, quotas and what an AI model may be asked.
          </p>
        </Reveal>

        <Reveal variant="subtle" delay={40} className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2">
            <Node title="Mobile app" sub="Farmers · shops · consultants" />
            <Node title="Owner dashboard" sub="Web" />
          </div>
          <p aria-hidden className="mono py-2 text-center text-paper/40">↓</p>
          <Node title="FastAPI backend" sub="Entitlements · quotas · AI router" />
          <p aria-hidden className="mono py-2 text-center text-paper/40">↓</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <Node title="PostgreSQL + pgvector" sub="Data and knowledge base" />
            <Node title="Redis" sub="Entitlement cache" />
            <Node title="Free-tier Gemini" sub="Fallback only" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {stack.map((cat, idx) => (
            <Reveal
              key={cat.category}
              variant="subtle"
              delay={idx * 50}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
            >
              <h3 className="mono text-xs uppercase tracking-wider text-[#C5A451]">
                {cat.category}
              </h3>
              <div className="mt-4 space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-1 rounded-lg border border-paper/10 bg-paper/[0.03] p-3"
                  >
                    <span className="font-display text-sm font-bold text-paper">
                      {item.name}
                    </span>
                    <span className="text-xs text-paper/65">{item.role}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
