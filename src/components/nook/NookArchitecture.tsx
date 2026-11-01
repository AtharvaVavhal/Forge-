import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/case-study/SectionLabel";

const archPillars = [
  {
    title: "NestJS Modular Backend",
    summary:
      "Structured domain boundaries with strict dependency injection, DTO validation, and centralized exception handling.",
    tech: "NestJS · TypeScript · Express",
    points: [
      "Decoupled modules: AuthModule, TenancyModule, PropertyModule, InventoryModule",
      "Request validation pipelines using class-validator and class-transformer",
      "Consistent API response envelopes and structured logging",
    ],
  },
  {
    title: "PostgreSQL & Prisma ORM",
    summary:
      "A normalized relational schema with full ACID compliance, foreign key cascades, and compile-time type safety.",
    tech: "PostgreSQL 16 · Prisma ORM",
    points: [
      "Hierarchical entity model: Organization → Property → Floor → Room → Bed",
      "Type-safe database queries generated automatically from Prisma schema",
      "Explicit transaction boundaries around inventory status changes to prevent race conditions",
    ],
  },
  {
    title: "Session-based Authentication",
    summary:
      "Secure, stateful HTTP-only session management designed for web consoles without fragile client-side token storage.",
    tech: "HTTP-only Cookies · Argon2 · NestJS Guards",
    points: [
      "Cryptographically signed session identifiers stored in HTTP-only, SameSite cookies",
      "Role-Based Access Control (RBAC) protecting property and inventory mutations",
      "Defense against XSS and CSRF token extraction attacks",
    ],
  },
  {
    title: "Tenant Isolation Security",
    summary:
      "Rigid multi-tenant data segmentation ensuring every hostel organization operates in a completely isolated silo.",
    tech: "Tenant Scoping Middleware · Context Guards",
    points: [
      "Every request is resolved and validated against the authenticated tenant context",
      "All Prisma read/write queries are strictly filtered by tenantId",
      "Zero cross-tenant data leakage verified by automated isolation test suites",
    ],
  },
  {
    title: "Hierarchical Inventory APIs",
    summary:
      "High-concurrency REST endpoints governing physical rooms, bed allocations, and dynamic occupancy states.",
    tech: "REST Endpoints · Atomic Mutations",
    points: [
      "Atomic status transitions: Available → Reserved → Occupied → Maintenance",
      "Real-time capacity and occupancy metrics calculated at building and floor levels",
      "Comprehensive test coverage validating concurrent bed booking attempts",
    ],
  },
  {
    title: "React & TypeScript Frontend",
    summary:
      "Fast, lightweight operator console engineered for daily administrative workflows and high data density.",
    tech: "React 18 · Vite · TypeScript · Tailwind CSS",
    points: [
      "Component-driven design system tailored to high-density tabular and room-grid views",
      "Type-safe API contracts mirroring backend TypeScript interfaces",
      "Zero UI bloat: lightning-fast hot reloads and optimized production bundle",
    ],
  },
];

export default function NookArchitecture() {
  return (
    <section className="border-t border-paper/10 bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <Reveal variant="subtle">
          <SectionLabel number="04" label="Engineering & Architecture" />
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            The implemented foundation: multi-tenant, type-safe, and modular.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80 md:text-lg">
            Nook is engineered on an industrial-grade foundation. Rather than shipping a brittle
            monolith or premature microservices, we built a modular architecture where core
            domain models—security, multi-tenancy, and inventory—are fully implemented,
            benchmarked, and tested before building upper-level workflow modules.
          </p>
        </Reveal>

        {/* Architectural Flow Diagram */}
        <Reveal variant="clip" delay={60} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-steel/20 bg-[#171338] p-6 text-white md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="mono text-xs uppercase tracking-wider text-[#A58FFF]">
                  System Architecture
                </span>
                <h3 className="font-display text-lg font-bold text-white md:text-xl">
                  Nook Core Runtime Pipeline
                </h3>
              </div>
              <span className="mono rounded bg-[#7657F6]/20 px-2.5 py-1 text-xs text-[#F4F1FF]">
                Production Pattern
              </span>
            </div>

            {/* Diagram Layers */}
            <div className="mt-8 grid gap-4 text-xs md:grid-cols-4">
              {/* Layer 1: Client */}
              <div className="rounded-xl border border-white/10 bg-[#26233D]/70 p-4">
                <span className="mono text-[10px] uppercase tracking-wider text-[#A58FFF]">
                  01 · Client
                </span>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  React + Vite Console
                </p>
                <p className="mt-2 text-white/70">
                  Type-safe management console with responsive room grid and floor-level view.
                </p>
              </div>

              {/* Layer 2: Security & Gateway */}
              <div className="rounded-xl border border-white/10 bg-[#26233D]/70 p-4">
                <span className="mono text-[10px] uppercase tracking-wider text-[#A58FFF]">
                  02 · Gateway
                </span>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  NestJS Security
                </p>
                <p className="mt-2 text-white/70">
                  HTTP-only session cookie guard, CSRF protection, and tenant context interceptor.
                </p>
              </div>

              {/* Layer 3: Modular Domain */}
              <div className="rounded-xl border border-white/10 bg-[#26233D]/70 p-4">
                <span className="mono text-[10px] uppercase tracking-wider text-[#A58FFF]">
                  03 · Domain
                </span>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  Modular Services
                </p>
                <p className="mt-2 text-white/70">
                  Auth, Tenancy, and Inventory business logic executing in isolated service scopes.
                </p>
              </div>

              {/* Layer 4: Persistence */}
              <div className="rounded-xl border border-white/10 bg-[#26233D]/70 p-4">
                <span className="mono text-[10px] uppercase tracking-wider text-[#A58FFF]">
                  04 · Data
                </span>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  Prisma &amp; Postgres
                </p>
                <p className="mt-2 text-white/70">
                  Tenant-scoped transactional queries, foreign key cascading, and ACID integrity.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/60">
              <span className="mono">
                DATA FLOW: Secure HTTPS → Scoped Session → Scoped Prisma Query → PostgreSQL
              </span>
              <span className="mono text-[#A58FFF]">
                Tested via Jest &amp; Supertest
              </span>
            </div>
          </div>
        </Reveal>

        {/* Deep Dive Pillars Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {archPillars.map((p, idx) => (
            <Reveal
              key={p.title}
              variant="subtle"
              delay={idx * 40}
              className="rounded-2xl border border-steel/20 bg-paper-elev p-6 transition-all hover:border-steel/40"
            >
              <div className="flex items-center justify-between">
                <span className="mono rounded bg-paper px-2 py-0.5 text-xs font-semibold text-steel">
                  {p.tech}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink md:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {p.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-ink/10 pt-3 text-xs text-ink/75">
                {p.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-steel" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
