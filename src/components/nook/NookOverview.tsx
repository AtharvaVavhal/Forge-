import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

export default function NookOverview() {
  return (
    <section className="border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Reveal variant="subtle">
          <SectionLabel number="01" label="Overview" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            An in-house SaaS platform engineered to modernize hostel and PG operations.
          </h2>
        </Reveal>

        <Reveal variant="subtle" delay={60}>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-paper/80 md:text-lg">
            <p>
              Nook is an in-house software product being actively designed, engineered, and
              incubated by the Forge team. Unlike client engagements where we build for an
              external stakeholder&apos;s brief, Nook represents our own commitment to solving
              a pervasive, high-friction operational problem from first principles.
            </p>
            <p>
              Across India—and specifically in major student and technology corridors like
              Pune—hostels and paying-guest (PG) accommodations manage hundreds of beds,
              frequent tenant churn, monthly rent collections, and daily maintenance requests.
              Yet the vast majority still rely on paper registers, fragmented WhatsApp chats,
              and ad-hoc UPI screenshots.
            </p>
            <p>
              Nook replaces that operational sprawl with a single unified platform. It connects
              physical inventory (campus, building, floor, room, and bed) directly to resident
              lifecycles, booking workflows, and financial reconciliations. We are currently
              building and validating Nook with hostel operators in Pune, establishing a rock-solid
              operational engine before scaling broader distribution.
            </p>
          </div>
        </Reveal>

        <Reveal variant="subtle" delay={120}>
          <div className="mt-10 rounded-2xl border border-paper/15 bg-paper/5 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mono text-xs uppercase tracking-[0.16em] text-[#C4B5FD]">
                  Development Status Notice
                </p>
                <p className="mt-1 font-display text-base font-bold text-paper">
                  Active In-House Engineering · Phase 2 Complete
                </p>
                <p className="mt-1 text-sm text-paper/70">
                  Nook is presented here as an active product under development. Foundational
                  architecture and inventory APIs are complete; resident lifecycle and billing
                  modules are actively in development.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
