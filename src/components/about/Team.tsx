import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { team, type TeamMember } from "@/lib/content/team";

type Slot = {
  member: TeamMember;
  numeral: string;
  isFounder: boolean;
  position: string;
};

export default function Team() {
  const numeral = (index: number) => String(index + 1).padStart(2, "0");

  const withIndex = team.map((member, index) => ({ member, index }));
  const founderEntry =
    withIndex.find(({ member }) =>
      member.role.toLowerCase().includes("founder"),
    ) ?? withIndex[0];
  const [m1, m2, m3, m4] = withIndex.filter(
    ({ index }) => index !== founderEntry.index,
  );

  const founderSlot: Slot = {
    member: founderEntry.member,
    numeral: numeral(founderEntry.index),
    isFounder: true,
    position: "sm:col-start-2 sm:row-start-2",
  };
  const topSlot: Slot = {
    member: m1.member,
    numeral: numeral(m1.index),
    isFounder: false,
    position: "sm:col-start-2 sm:row-start-1",
  };
  const rightSlot: Slot = {
    member: m2.member,
    numeral: numeral(m2.index),
    isFounder: false,
    position: "sm:col-start-3 sm:row-start-2",
  };
  const bottomSlot: Slot = {
    member: m3.member,
    numeral: numeral(m3.index),
    isFounder: false,
    position: "sm:col-start-2 sm:row-start-3",
  };
  const leftSlot: Slot = {
    member: m4.member,
    numeral: numeral(m4.index),
    isFounder: false,
    position: "sm:col-start-1 sm:row-start-2",
  };

  // Mobile stacks these in order — founder stays visually centered either way.
  const slots = [topSlot, leftSlot, founderSlot, rightSlot, bottomSlot];

  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <Reveal variant="subtle">
        <Eyebrow>The People Behind Forge</Eyebrow>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
          Small team. Serious software.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
          Engineers and designers working closely from first idea to final
          deployment.
        </p>
      </Reveal>

      <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
        {slots.map((slot, position) => (
          <Reveal
            key={slot.member.name}
            as="li"
            variant="subtle"
            delay={80 + position * 70}
            className={`group flex flex-col items-center justify-between border bg-paper-elev p-5 text-center transition-transform duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] hover:-translate-y-0.5 sm:aspect-square sm:p-6 ${slot.position} ${
              slot.isFounder ? "border-ember" : "border-steel/20"
            }`}
          >
            <span className="mono text-[11px] text-steel transition-colors duration-[var(--duration-standard)] ease-[var(--ease-out-forge)] group-hover:text-ember-deep">
              {slot.numeral}
            </span>
            <div>
              <h3
                className={`font-display font-bold leading-tight text-ink ${
                  slot.isFounder ? "text-xl md:text-2xl" : "text-lg"
                }`}
              >
                {slot.member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-ink/80">
                {slot.member.role}
              </p>
            </div>
            <p className="text-[11px] leading-snug text-steel">
              {slot.member.education}
              <br />
              {slot.member.institution}
            </p>
            <p className="mono border-t border-steel/20 pt-3 text-[9px] uppercase leading-relaxed tracking-[0.14em] text-steel">
              {slot.member.focus}
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal variant="subtle" delay={80 + team.length * 70}>
        <div className="mt-12 border-t border-steel/15 pt-6">
          <p className="font-display text-base font-bold text-ink">
            Different disciplines. One standard.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink/70">
            We design, engineer, test and ship together.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
