import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const challenges = [
  {
    num: "01",
    title: "Fragmented resident records",
    description:
      "Identity proofs, permanent addresses, college/work details, parent contacts, and emergency information are scattered across paper registers, Google Forms, and local folders. When an urgent situation occurs, locating verified information takes minutes of frantic searching.",
  },
  {
    num: "02",
    title: "Manual booking & bed allocation",
    description:
      "Bed assignments are managed on notebooks or informal memory. Double-booking rooms during peak admission seasons, accidental promises of the same bed to two incoming residents, and unrecorded room swaps create frequent disputes and confusion.",
  },
  {
    num: "03",
    title: "Difficulty tracking occupancy",
    description:
      "Hostel owners operating multiple floors or separate buildings cannot see live, reliable vacancy figures at a glance. They cannot distinguish between occupied beds, reserved beds awaiting check-in, and beds out of service for maintenance.",
  },
  {
    num: "04",
    title: "Disorganized rent & payment records",
    description:
      "Payments arrive through multiple channels—cash, bank transfers, and direct UPI—without centralized matching. Security deposits, utility deductions, and overdue dues are tracked on spreadsheets, leading to lost revenue and tense arguments during check-out.",
  },
  {
    num: "05",
    title: "Lack of centralized hostel operations",
    description:
      "Wardens, facility managers, and owners work in operational silos. Maintenance complaints (water, Wi-Fi, electrical) get lost in messaging group noise, leaving residents frustrated and owners blind to recurring operational costs.",
  },
];

export default function NookProblem() {
  return (
    <section className="border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="02" label="The Problem" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold leading-snug md:text-3xl lg:text-4xl">
            Hostels run multi-lakh monthly turnover on memory, paper registers, and WhatsApp.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-paper/70 md:text-lg">
            Operational bottlenecks compound as soon as a property scales beyond a single
            floor. Without a single source of truth, daily administration consumes time that
            should go toward student safety, facility maintenance, and business growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {challenges.map((c, i) => (
            <Reveal
              key={c.num}
              variant="subtle"
              delay={i * 60}
              className={`rounded-2xl border border-paper/15 bg-paper/5 p-6 transition-colors hover:border-paper/30 ${
                i === challenges.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="mono text-xs text-[#C4B5FD]">{c.num}</span>
                <span className="mono text-xs uppercase tracking-wider text-paper/40">
                  Challenge
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-paper md:text-xl">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/75">
                {c.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
