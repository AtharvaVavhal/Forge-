"use client";

import { useState, type CSSProperties } from "react";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/content/team";

const CARD_POSITIONS = [
  { x: "-190%", rotate: "-15deg", scale: "0.82", z: "-150px", opacity: "0.58" },
  { x: "-100%", rotate: "-7deg", scale: "0.9", z: "-70px", opacity: "0.82" },
  { x: "0%", rotate: "0deg", scale: "1", z: "0px", opacity: "1" },
  { x: "100%", rotate: "7deg", scale: "0.9", z: "-70px", opacity: "0.82" },
  { x: "190%", rotate: "15deg", scale: "0.82", z: "-150px", opacity: "0.58" },
] as const;

function getRelativePosition(index: number, activeIndex: number) {
  const distance = (index - activeIndex + team.length) % team.length;
  return distance <= Math.floor(team.length / 2) ? distance : distance - team.length;
}

function getCardStyle(relativePosition: number): CSSProperties {
  const position = CARD_POSITIONS[relativePosition + 2];
  return {
    "--card-x": position?.x ?? "0%",
    "--card-rotate": position?.rotate ?? "0deg",
    "--card-scale": position?.scale ?? "0.72",
    "--card-z": position?.z ?? "-220px",
    "--card-opacity": position?.opacity ?? "0.25",
    zIndex: 5 - Math.abs(relativePosition),
  } as CSSProperties;
}

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function selectMember(index: number) {
    setActiveIndex(index);
    setFlipped(false);
  }

  function moveActive(direction: -1 | 1) {
    selectMember((activeIndex + direction + team.length) % team.length);
  }

  function handleCardKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      moveActive(event.key === "ArrowLeft" ? -1 : 1);
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      selectMember(event.key === "Home" ? 0 : team.length - 1);
    }
    if (event.key === "Escape" && index === activeIndex && flipped) {
      setFlipped(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
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

      <div className="team-carousel mt-10">
        <div
          className="team-carousel__stage"
          role="list"
          aria-label="Forge team members"
        >
          {team.map((member, index) => {
            const relativePosition = getRelativePosition(index, activeIndex);
            const isActive = relativePosition === 0;
            const isVisible = Math.abs(relativePosition) <= 2;

            return (
              <div
                key={member.name}
                role="listitem"
                className={`team-card-wrap ${isActive ? "is-active" : ""} ${
                  isVisible ? "is-visible" : ""
                }`}
                style={getCardStyle(relativePosition)}
                aria-hidden={!isVisible}
              >
                <button
                  type="button"
                  className="team-card"
                  aria-label={`${member.name}, ${member.role}${
                    isActive ? ". View details." : ". Select member."
                  }`}
                  aria-pressed={isActive && flipped}
                  tabIndex={isVisible ? 0 : -1}
                  onKeyDown={(event) => handleCardKeyDown(event, index)}
                  onClick={() => {
                    if (!isActive) {
                      selectMember(index);
                    } else {
                      setFlipped((value) => !value);
                    }
                  }}
                >
                  <span className={`team-card__flipper ${flipped && isActive ? "is-flipped" : ""}`}>
                    <span className="team-card__face team-card__front" aria-hidden={flipped && isActive}>
                      <span className="team-card__topline">
                        <span className="mono">FORGE / PEOPLE</span>
                        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                      </span>
                      <span className="team-card__portrait" aria-hidden>
                        <span className="team-card__portrait-grid" />
                        <span className="team-card__portrait-ring" />
                        <span className="team-card__initials">
                          {member.name.split(" ").map((part) => part[0]).join("")}
                        </span>
                        <span className="team-card__portrait-label mono">PROFILE STUDY</span>
                      </span>
                      <span className="team-card__front-footer">
                        <span>
                          <strong>{member.name}</strong>
                          <small>{member.role}</small>
                        </span>
                        <span className="team-card__cue mono">VIEW PROFILE ↗</span>
                      </span>
                    </span>

                    <span className="team-card__face team-card__back" aria-hidden={!(flipped && isActive)}>
                      <span className="team-card__topline">
                        <span className="mono">FORGE / PROFILE</span>
                        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                      </span>
                      <span className="team-card__details">
                        <span className="mono team-card__label">MEMBER DETAIL</span>
                        <strong>{member.name}</strong>
                        <span className="team-card__role">{member.role}</span>
                        <span className="team-card__rule" />
                        <span className="team-card__detail-block">
                          <small className="mono">EDUCATION</small>
                          <span>{member.education}</span>
                          <span>{member.institution}</span>
                        </span>
                        <span className="team-card__detail-block">
                          <small className="mono">FOCUS</small>
                          <span>{member.focus}</span>
                        </span>
                      </span>
                      <span className="team-card__cue mono">TAP TO TURN ↗</span>
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

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
