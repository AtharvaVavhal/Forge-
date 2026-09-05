import Reveal from "@/components/Reveal";
import { team } from "@/lib/content/team";

export default function Team() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <Reveal variant="subtle">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
          Small team. Serious software.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/80">
          Engineers and designers working closely from first idea to final
          deployment.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {team.map((member, index) => (
          <Reveal key={member.name} as="li" variant="subtle" delay={80 + index * 70}>
            <div className="group border-t-2 border-ink pt-6 transition-[border-color,transform] duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:-translate-y-1 hover:border-ember-deep">
              <span className="mono text-xs text-steel">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink transition-colors duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] group-hover:text-ember-deep md:text-2xl">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-ink/80">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-steel">
                {member.education}
                <br />
                {member.institution}
              </p>
              <p className="mono mt-4 text-[11px] uppercase leading-relaxed tracking-[0.15em] text-steel">
                {member.focus}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal variant="subtle" delay={80 + team.length * 70}>
        <div className="mt-12 border-t border-steel/15 pt-6">
          <p className="font-display text-base font-bold text-ink">
            Different disciplines. One standard.
          </p>
          <p className="mt-1 text-sm text-ink/70">
            We design, engineer, test and ship together.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
