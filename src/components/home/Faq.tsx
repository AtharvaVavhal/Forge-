import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { faqItems } from "@/lib/content/faq";

export default function Faq() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow number="08">FAQ</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-steel/15 border-t border-b border-steel/15">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} variant="subtle" delay={index * 40}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink transition-colors duration-[var(--duration-fast)] hover:text-ember-deep marker:content-none">
                  {item.question}
                  <span
                    className="mono shrink-0 text-lg text-steel transition-transform duration-[var(--duration-standard)] ease-[var(--ease-in-out-forge)] group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
