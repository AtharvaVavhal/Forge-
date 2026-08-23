import SectionLabel from "./SectionLabel";

export default function Problem() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <SectionLabel number="02" label="Problem" tone="paper" />
        <p className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">
          Gyms lose members quietly — inactivity goes unnoticed until the
          member has already cancelled.
        </p>
      </div>
    </section>
  );
}
