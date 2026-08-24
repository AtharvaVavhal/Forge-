"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Short fade + settle on route change (`.page-transition` in globals.css).
 * Keyed by pathname so React remounts the subtree per navigation — content
 * renders immediately either way; only the visual entrance is animated, and
 * `prefers-reduced-motion` collapses it via the global motion catch-all.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
