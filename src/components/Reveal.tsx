"use client";

import type { CSSProperties, ReactNode, Ref } from "react";
import { useReveal } from "@/lib/useReveal";

type Variant = "up" | "subtle" | "emphasis" | "fade" | "clip" | "sequence";

const VARIANTS: Record<
  Variant,
  {
    duration: string;
    hidden: string;
    visible: string;
    hiddenStyle?: CSSProperties;
    visibleStyle?: CSSProperties;
  }
> = {
  // Default — general content blocks.
  up: {
    duration: "var(--duration-emphasis)",
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  // Section headings and small text — a lighter touch than "up".
  subtle: {
    duration: "var(--duration-standard)",
    hidden: "opacity-0 translate-y-2.5",
    visible: "opacity-100 translate-y-0",
  },
  // Final CTAs — strong but still restrained.
  emphasis: {
    duration: "700ms",
    hidden: "opacity-0 translate-y-8 scale-[0.98]",
    visible: "opacity-100 translate-y-0 scale-100",
  },
  // Footer and other calm, low-priority reveals — opacity only.
  fade: {
    duration: "var(--duration-standard)",
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  // Large project visuals — clip-path + scale, like a frame settling into place.
  clip: {
    duration: "var(--duration-emphasis)",
    hidden: "opacity-0 scale-[1.04]",
    visible: "opacity-100 scale-100",
    hiddenStyle: { clipPath: "inset(6% round 1rem)" },
    visibleStyle: { clipPath: "inset(0% round 1rem)" },
  },
  // Directional/sequenced content (e.g. a process timeline) — reveals
  // left-to-right instead of upward, so it reads as being assembled in order.
  sequence: {
    duration: "var(--duration-standard)",
    hidden: "opacity-0 -translate-x-3",
    visible: "opacity-100 translate-x-0",
  },
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  /** Wrapper element — use "li" inside a <ul>/<ol> to keep list semantics valid. */
  as?: "div" | "li";
  className?: string;
}) {
  const { ref, visible, animatable } = useReveal<HTMLElement>();
  const cfg = VARIANTS[variant];

  return (
    <Tag
      ref={ref as Ref<never>}
      className={`motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:translate-x-0 motion-reduce:scale-100 ${
        visible ? `is-in ${cfg.visible}` : cfg.hidden
      } ${className}`}
      style={{
        transitionProperty: animatable
          ? "opacity, transform, clip-path"
          : "none",
        transitionDuration: cfg.duration,
        transitionTimingFunction: "var(--ease-out-forge)",
        transitionDelay: visible ? `${delay}ms` : "0ms",
        ...(visible ? cfg.visibleStyle : cfg.hiddenStyle),
      }}
    >
      {children}
    </Tag>
  );
}
