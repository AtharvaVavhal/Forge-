import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const built = [
  {
    title: "AI router",
    detail: "Knowledge base first, free-tier model second, consultant escalation last, with a kill switch.",
  },
  {
    title: "Usage monitor",
    detail: "Per-user and platform limits, rate limiting, and Marathi messages when a limit is hit.",
  },
  {
    title: "Image pipeline",
    detail: "Signature validation, resizing, compression and hashing so repeat photos can be cached.",
  },
  {
    title: "On-device Marathi speech",
    detail: "Speech-to-text and text-to-speech through the phone itself, with a typed fallback.",
  },
  {
    title: "Automated tests",
    detail: "The AI layer ships with unit tests covering routing, limits and image handling.",
  },
];

const notStarted = [
  "Login and role management",
  "Subscriptions and the free allowance",
  "Schedule search and crop-stage engine",
  "Owner dashboard",
  "Knowledge-base ingestion",
  "Plots, schedules and personalisation",
  "Shop and consultant portals",
  "Direct messaging",
  "Automated Marathi calls",
  "Security audit and field testing",
];

export default function KisanMitraProgress() {
  return (
    <section className="border-t border-steel/15 bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="06" label="Development Progress" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            The specification is done. The build has just started.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            The product requirements, architecture, security model, screen
            specification and engineering tickets are written. In code, the AI
            layer comes first because it carries the cost and safety rules.
            There are no completion percentages here, because any number would
            be invented.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal
            variant="subtle"
            delay={40}
            className="flex flex-col rounded-2xl border border-[#174C38]/40 bg-[#F7F7F2] p-6 shadow-sm md:p-8"
          >
            <div className="flex items-center justify-between border-b border-[#174C38]/20 pb-4">
              <h3 className="font-display text-xl font-bold text-[#174C38]">
                Built so far
              </h3>
              <span className="mono rounded-full bg-[#174C38] px-3 py-1 text-xs font-semibold text-[#F7F7F2]">
                In progress
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {built.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#174C38] text-[11px] font-bold text-[#F7F7F2]"
                  >
                    ✓
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#174C38]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#202923]/80">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            variant="subtle"
            delay={80}
            className="flex flex-col rounded-2xl border border-steel/20 bg-paper-elev p-6 shadow-sm md:p-8"
          >
            <div className="flex items-center justify-between border-b border-steel/15 pb-4">
              <h3 className="font-display text-xl font-bold text-ink">
                Not started yet
              </h3>
              <span className="mono rounded-full border border-steel/30 bg-paper px-3 py-1 text-xs font-semibold text-steel">
                Planned
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {notStarted.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-steel/40 bg-paper text-[11px] text-steel"
                  >
                    ○
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
