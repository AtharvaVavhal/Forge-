"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Technical corner brackets — a restrained "viewfinder" mark used to frame
 * key visual elements (hero, featured work, case-study screens). Part of
 * Forge's editorial-engineering visual language. Parent must be `relative`.
 *
 * Signature motion: when the frame enters, the brackets snap inward from a
 * slight outward scale — a "precision lock," like a viewfinder finding
 * focus. Content-first: brackets are visible by default (SSR-safe) and only
 * animate once JS has confirmed a trigger (scroll-into-view, or mount for
 * above-the-fold placements via `playOnMount`).
 */
export default function CornerMarks({
  tone = "paper",
  playOnMount = false,
}: {
  tone?: "paper" | "ink";
  /** Play the lock-in once on mount instead of waiting for scroll — use for
   * above-the-fold placements (e.g. inside Hero) where there's no scroll to wait for. */
  playOnMount?: boolean;
}) {
  const { ref, visible, animatable } = useReveal<HTMLDivElement>();
  const color = tone === "paper" ? "border-paper/25" : "border-ink/15";
  const base = "absolute h-4 w-4 sm:h-5 sm:w-5";

  const shouldAnimate = playOnMount || (animatable && visible);
  const shouldHide = !playOnMount && !visible;

  const markClass = `${base} motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
    shouldAnimate ? "corner-mark" : shouldHide ? "opacity-0 scale-[1.3]" : ""
  }`;

  return (
    <div
      ref={playOnMount ? undefined : ref}
      className="absolute inset-0"
      aria-hidden
    >
      <span
        className={`${markClass} -left-2 -top-2 border-l border-t ${color}`}
        style={{ animationDelay: "0ms" }}
      />
      <span
        className={`${markClass} -right-2 -top-2 border-r border-t ${color}`}
        style={{ animationDelay: "60ms" }}
      />
      <span
        className={`${markClass} -bottom-2 -left-2 border-b border-l ${color}`}
        style={{ animationDelay: "60ms" }}
      />
      <span
        className={`${markClass} -bottom-2 -right-2 border-b border-r ${color}`}
        style={{ animationDelay: "120ms" }}
      />
    </div>
  );
}
