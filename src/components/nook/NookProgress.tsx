import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const phase2Items = [
  {
    title: "Authentication foundation",
    detail: "Stateful session-based auth with HTTP-only cookies, password hashing, and role checks.",
  },
  {
    title: "Multi-tenant security foundation",
    detail: "Organization context resolution, scoped Prisma queries, and data boundary validation.",
  },
  {
    title: "Property and inventory management foundation",
    detail: "Hierarchical entity model (Campus → Building → Floor → Room → Bed) with atomic availability transitions.",
  },
  {
    title: "Integration and isolation testing",
    detail: "Automated test suites validating concurrent allocations and cross-tenant data isolation.",
  },
];

const phase3Items = [
  {
    title: "Resident management",
    detail: "Digital dossiers, KYC identification files, parent contact registry, and emergency profiles.",
  },
  {
    title: "Enquiry and sales",
    detail: "Lead pipeline, intake inquiry tracking, and automated prospect response workflows.",
  },
  {
    title: "Booking and admissions",
    detail: "Time-bounded reservation holds, token collection, and digital admission agreements.",
  },
  {
    title: "Check-in and check-out",
    detail: "Room condition handovers, asset inspection checklists, and deposit settlement clearance.",
  },
  {
    title: "Finance and billing",
    detail: "Automated recurring rent invoices, utility charges, payment logs, and overdue alerts.",
  },
  {
    title: "Operations and reporting",
    detail: "Maintenance ticket routing, warden shift logs, and multi-property occupancy dashboards.",
  },
];

export default function NookProgress() {
  return (
    <section className="border-t border-paper/10 bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="06" label="Development Progress" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            Phased engineering: verified foundations before feature expansion.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            Rather than releasing half-baked prototypes, we track development against verified
            architectural milestones. In accordance with Forge engineering standards, we do not
            fabricate completion percentages or customer numbers—here is the exact, honest state
            of the Nook codebase today.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Phase 2: Completed */}
          <Reveal variant="subtle" delay={40} className="flex flex-col rounded-2xl border border-[#7657F6]/40 bg-[#F4F1FF] p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#7657F6]/20 pb-4">
              <div>
                <span className="mono text-xs uppercase tracking-wider text-[#7657F6] font-semibold">
                  Milestone 02
                </span>
                <h3 className="font-display text-xl font-bold text-[#171338]">
                  Phase 2 — Completed
                </h3>
              </div>
              <span className="mono rounded-full bg-[#7657F6] px-3 py-1 text-xs font-semibold text-white">
                Completed
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-4">
              {phase2Items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7657F6] text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#171338]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#26233D]/80">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[#7657F6]/20 pt-4 text-[11px] mono text-[#171338]/70">
              Scope: Core infrastructure, relational models, APIs, and security tests.
            </div>
          </Reveal>

          {/* Phase 3: Planned / In Development */}
          <Reveal variant="subtle" delay={80} className="flex flex-col rounded-2xl border border-steel/20 bg-paper-elev p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-steel/15 pb-4">
              <div>
                <span className="mono text-xs uppercase tracking-wider text-steel">
                  Milestone 03
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  Phase 3 — Planned / In Dev
                </h3>
              </div>
              <span className="mono inline-flex items-center gap-1.5 rounded-full border border-steel/30 bg-paper px-3 py-1 text-xs font-semibold text-steel">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7657F6] animate-pulse" />
                Active
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-4">
              {phase3Items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-steel/40 bg-paper text-[11px] text-steel">
                    ○
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/70">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-steel/15 pt-4 text-[11px] mono text-steel">
              Scope: High-touch operator workflows, resident portal, and automated billing.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
