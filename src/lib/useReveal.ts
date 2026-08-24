"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Content is visible by default — matches SSR output, so it never depends on
// JS running to be seen. Only after mount do we synchronously (pre-paint)
// hide elements that start below the fold, then reveal them on scroll.
// Shared by Reveal and CornerMarks so this safety property lives in one
// place rather than being re-implemented (and possibly re-broken) per component.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useReveal<T extends HTMLElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);
  const [animatable, setAnimatable] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (!alreadyInView) {
      setVisible(false);
      setAnimatable(true);
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -80px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, options?.threshold, options?.rootMargin]);

  return { ref, visible, animatable };
}
