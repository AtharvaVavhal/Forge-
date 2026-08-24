import Eyebrow from "@/components/Eyebrow";
import TextReveal from "@/components/TextReveal";

export default function CaseStudyMasthead() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 pb-6 pt-20 md:pt-24">
        <div className="hero-anim" style={{ animationDelay: "0ms" }}>
          <Eyebrow tone="paper">Case Study</Eyebrow>
        </div>
        <TextReveal
          as="h1"
          text="Gym Retention & Operations Platform"
          startDelay={100}
          wordDelay={50}
          className="mt-3 block font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
        />
      </div>
    </section>
  );
}
