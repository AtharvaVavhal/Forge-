import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const techCategories = [
  {
    category: "Backend Services",
    items: [
      { name: "NestJS", role: "Modular application framework & dependency injection" },
      { name: "TypeScript", role: "End-to-end type safety across domain models" },
      { name: "Node.js (LTS)", role: "High-throughput asynchronous runtime engine" },
    ],
  },
  {
    category: "Database & ORM",
    items: [
      { name: "PostgreSQL 16", role: "ACID-compliant relational database with foreign key cascades" },
      { name: "Prisma ORM", role: "Schema migrations, type-safe query builder, and relational client" },
      { name: "Multi-Tenant Context", role: "Isolated schema-level scoping for each hostel operator" },
    ],
  },
  {
    category: "Frontend Console",
    items: [
      { name: "React 18", role: "Component-driven single page application" },
      { name: "Vite", role: "Optimized build pipeline and sub-second developer tooling" },
      { name: "Tailwind CSS", role: "High-density editorial operator interface styling" },
    ],
  },
  {
    category: "Security & Testing",
    items: [
      { name: "Session Auth", role: "Stateful HTTP-only encrypted session cookies with CSRF defense" },
      { name: "Argon2 / Bcrypt", role: "Resilient cryptographic password hashing" },
      { name: "Jest & Supertest", role: "Automated unit, integration, and isolation test suites" },
    ],
  },
];

export default function NookTechStack() {
  return (
    <section className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="07" label="Technology Stack" tone="paper" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            Selected for resilience, developer ergonomics, and strict typing.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-paper/70 md:text-lg">
            We avoid experimental frameworks and hype-driven dependencies. Every technology
            powering Nook was chosen for long-term operational stability and predictable maintenance.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {techCategories.map((cat, idx) => (
            <Reveal
              key={cat.category}
              variant="subtle"
              delay={idx * 50}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
            >
              <h3 className="mono text-xs uppercase tracking-wider text-[#C4B5FD]">
                {cat.category}
              </h3>
              <div className="mt-4 space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-1 rounded-lg border border-paper/10 bg-paper/[0.03] p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold text-paper">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-paper/65">{item.role}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
