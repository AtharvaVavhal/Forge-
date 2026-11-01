import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const modules = [
  {
    num: "01",
    title: "Property & Inventory Management",
    status: "Implemented",
    statusType: "completed",
    summary:
      "A complete structural model of physical properties: Organization → Campus → Building → Floor → Room → Bed unit.",
    details: [
      "Room categorizations (single, double, triple, 4-sharing) with custom amenity tags",
      "Granular bed-level status tracking: Available, Reserved, Occupied, Maintenance",
      "Real-time capacity calculations and multi-floor occupancy visibility",
      "Atomic inventory operations preventing double-assignment or inconsistent state",
    ],
  },
  {
    num: "02",
    title: "Resident Management",
    status: "Planned / In Development",
    statusType: "planned",
    summary:
      "A centralized digital dossier for every resident, replacing loose paper forms and unverified phone contacts.",
    details: [
      "KYC document storage (Aadhaar, student ID, employment verification)",
      "Structured parent, guardian, and emergency contact registry",
      "Resident stay history, room change logs, and disciplinary notes",
      "Communication logs and critical announcements",
    ],
  },
  {
    num: "03",
    title: "Booking & Admissions",
    status: "Planned / In Development",
    statusType: "planned",
    summary:
      "A structured admission pipeline designed to handle high-velocity student and seasonal intake.",
    details: [
      "Lead and enquiry management for prospective students and professionals",
      "Time-bounded bed reservation holds with advance token tracking",
      "Digital admission agreements with clear rules and terms acceptance",
      "Automated conversion from prospective enquiry to confirmed admission",
    ],
  },
  {
    num: "04",
    title: "Check-in & Check-out",
    status: "Planned / In Development",
    statusType: "planned",
    summary:
      "Formal digital protocols for the beginning and conclusion of every resident stay.",
    details: [
      "Digital check-in inspection checklists (room condition, key handover, inventory)",
      "Security deposit receipting and condition logging at move-in",
      "Exit clearance workflows ensuring all pending dues and assets are cleared",
      "Deposit refund processing and structured departure documentation",
    ],
  },
  {
    num: "05",
    title: "Finance & Billing",
    status: "Planned / In Development",
    statusType: "planned",
    summary:
      "Transparent ledger and automated billing designed for recurring hostel rent cycles.",
    details: [
      "Automated monthly rent invoice generation tailored to contract start dates",
      "Variable utility and food/mess charge additions",
      "Multi-mode payment logging (UPI, bank transfer, cash) with ledger reconciliation",
      "Automated payment receipts and overdue reminder notifications",
    ],
  },
  {
    num: "06",
    title: "Hostel Operations & Maintenance",
    status: "Planned / In Development",
    statusType: "planned",
    summary:
      "Everyday operational control for wardens, property managers, and facility owners.",
    details: [
      "Resident maintenance issue ticketing (Wi-Fi, plumbing, electrical, cleaning)",
      "Ticket assignment, vendor tracking, and resolution timestamps",
      "Staff duty shifts and warden night-check logging",
      "Multi-property owner executive dashboard with operational health metrics",
    ],
  },
];

export default function NookSolution() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="03" label="The Solution" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            A unified operating system for hostel and PG operations.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            Nook consolidates physical property management, resident lifecycles, and financial
            records into one coherent software ecosystem. To maintain complete technical
            integrity, we clearly demarcate what is already built from what is currently on the
            development roadmap.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {modules.map((m, idx) => {
            const isCompleted = m.statusType === "completed";
            return (
              <Reveal
                key={m.num}
                variant="subtle"
                delay={idx * 50}
                className={`rounded-2xl border p-6 md:p-8 transition-all ${
                  isCompleted
                    ? "border-[#7657F6]/40 bg-[#F4F1FF] shadow-sm"
                    : "border-steel/20 bg-paper-elev"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs font-bold text-steel">{m.num}</span>
                    <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                      {m.title}
                    </h3>
                  </div>

                  <span
                    className={`mono self-start rounded-full px-3 py-1 text-xs font-semibold sm:self-auto ${
                      isCompleted
                        ? "border border-[#7657F6]/40 bg-[#7657F6] text-white"
                        : "border border-steel/30 bg-paper text-steel"
                    }`}
                  >
                    {isCompleted ? "Phase 2 · Implemented" : "Phase 3 · In Development"}
                  </span>
                </div>

                <p className="mt-3 text-base font-medium text-ink/90">
                  {m.summary}
                </p>

                <div className="mt-5 border-t border-ink/10 pt-4">
                  <p className="mono text-xs uppercase tracking-wider text-steel">
                    {isCompleted ? "Implemented Capabilities:" : "Planned Capabilities:"}
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-ink/80">
                    {m.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span
                          className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isCompleted ? "bg-[#7657F6]" : "bg-steel/50"
                          }`}
                          aria-hidden
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
