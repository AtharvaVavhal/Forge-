import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

export default function NookProductDirection() {
  return (
    <section className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="08" label="Product Direction" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            Initial focus on Pune hostel operations, scalable multi-hostel architecture.
          </h2>
        </Reveal>

        <Reveal variant="subtle" delay={60}>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-paper/80 md:text-lg">
            <p>
              Pune represents one of India&apos;s most active student and young-professional
              ecosystems. With major academic hubs like Kothrud, Karve Nagar, and Viman Nagar
              alongside IT corridors in Hinjawadi and Kharadi, the city hosts thousands of
              privately run hostels and paying-guest accommodations.
            </p>
            <p>
              By focusing initial validation on Pune operators, the Forge team can observe
              real-world friction firsthand: how wardens manage night curfews, how desk managers
              handle admissions surges during college admission cycles in July and August, and
              how owners track overdue rent across multiple properties.
            </p>
            <p>
              While initial workflows are grounded in Pune&apos;s daily operational reality, the
              software architecture is strictly cloud-native and multi-tenant. The underlying
              relational schema and tenant-isolation boundaries allow Nook to scale from an
              independent 30-bed hostel to institutional student-living operators managing
              thousands of beds across multiple cities.
            </p>
          </div>
        </Reveal>

        <Reveal variant="subtle" delay={120}>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-paper/15 bg-paper/5 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <p className="mono text-xs uppercase tracking-wider text-[#C4B5FD]">
                Official Product Domain
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-paper">
                trynook.in
              </h3>
              <p className="mt-1 text-sm text-paper/70">
                Official web presence and future tenant onboarding portal for Nook.
              </p>
            </div>
            <a
              href="https://trynook.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex shrink-0 items-center gap-2 rounded-full border border-[#7657F6] bg-[#7657F6] px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-[#876BF8]"
            >
              <span>Visit trynook.in</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
