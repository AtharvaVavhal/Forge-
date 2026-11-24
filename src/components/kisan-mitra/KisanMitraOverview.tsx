import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

export default function KisanMitraOverview() {
  return (
    <section className="border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Reveal variant="subtle">
          <SectionLabel number="01" label="Overview" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            Advice that starts from the farmer&apos;s own pruning date.
          </h2>
        </Reveal>

        <Reveal variant="subtle" delay={60}>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-paper/80 md:text-lg">
            <p>
              Kisan Mitra is a FORGE product for grape growers in Maharashtra. It
              turns one input, the date a vineyard was pruned, into a day-by-day
              view of the crop cycle, and answers questions in Marathi from
              verified viticulture material.
            </p>
            <p>
              It is built to support the shops and consultants growers already
              trust, not to replace them. Partners get their own tools inside the
              same app, and a grower&apos;s questions can reach the person who
              advises them.
            </p>
            <p>
              The product began as an experimental WhatsApp chatbot. It is now
              being rebuilt as a standalone mobile app with an owner dashboard,
              a backend of its own, and a strict rule that the knowledge base
              answers before any AI model does.
            </p>
          </div>
        </Reveal>

        <Reveal variant="subtle" delay={120}>
          <div className="mt-10 rounded-2xl border border-paper/15 bg-paper/5 p-6 md:p-8">
            <p className="mono text-xs uppercase tracking-[0.16em] text-[#C5A451]">
              Development Status Notice
            </p>
            <p className="mt-1 font-display text-base font-bold text-paper">
              Specification complete · Implementation started
            </p>
            <p className="mt-1 text-sm text-paper/70">
              Kisan Mitra is shown here as a product in development. It has not
              been released, and this page makes no claims about usage or
              results. The Development Progress section lists exactly what is
              built and what is not.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
