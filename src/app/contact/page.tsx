import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact FORGE — Start a Project",
  description:
    "Tell us what you're building. We reply with next steps, not a sales pitch.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-2xl px-6 py-20">
        <Reveal variant="subtle">
          <Eyebrow>Start a Project</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
            Tell us what you&apos;re building
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            We reply with next steps, not a sales pitch.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
