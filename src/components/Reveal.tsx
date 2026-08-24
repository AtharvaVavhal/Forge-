"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Content is visible by default — matches SSR output, so it never depends on
// JS running to be seen. Only after mount do we synchronously (pre-paint)
// hide elements that start below the fold, then reveal them on scroll.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        animatable ? "transition-[opacity,transform] duration-700 ease-out" : ""
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
