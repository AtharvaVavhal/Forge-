/**
 * The single arrow micro-interaction used across every button and link on
 * the site — nudges right on hover of the nearest `group`. Centralizing it
 * keeps timing/easing consistent instead of the transition being retyped
 * (and drifting) at every call site.
 */
export default function HoverArrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block transition-transform group-hover:translate-x-1 ${className}`}
      style={{
        transitionDuration: "var(--duration-fast)",
        transitionTimingFunction: "var(--ease-out-forge)",
      }}
      aria-hidden
    >
      →
    </span>
  );
}
