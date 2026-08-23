import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project — FORGE",
  description:
    "Tell us what you're building. We reply with next steps, not a sales pitch.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-2xl px-6 py-20">
        <Eyebrow>Start a Project</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Start a project
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Tell us what you&apos;re building. We reply with next steps, not a
          sales pitch.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <ContactForm />
      </section>
    </div>
  );
}
