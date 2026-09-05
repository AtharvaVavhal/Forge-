"use client";

import { useEffect, useRef, type PointerEvent } from "react";

/**
 * An illustrative composition, not a client product or a Forge SaaS UI.
 * It uses ordinary DOM layers so the full visual is available before JS;
 * pointer depth is an optional enhancement on fine-pointer devices.
 */
export default function ForgeProductShowcase() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const currentDepth = useRef({ x: 0, y: 0 });
  const targetDepth = useRef({ x: 0, y: 0 });

  function supportsDepth(pointerType?: string) {
    return (
      pointerType === "mouse" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function animateDepth() {
    if (frameRef.current !== null) return;

    const tick = () => {
      const current = currentDepth.current;
      const target = targetDepth.current;
      const nextX = current.x + (target.x - current.x) * 0.12;
      const nextY = current.y + (target.y - current.y) * 0.12;

      currentDepth.current = { x: nextX, y: nextY };
      sceneRef.current?.style.setProperty("--scene-x", nextX.toFixed(3));
      sceneRef.current?.style.setProperty("--scene-y", nextY.toFixed(3));

      if (Math.abs(target.x - nextX) + Math.abs(target.y - nextY) > 0.002) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        currentDepth.current = { ...target };
        sceneRef.current?.style.setProperty("--scene-x", target.x.toFixed(3));
        sceneRef.current?.style.setProperty("--scene-y", target.y.toFixed(3));
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  function setDepth(event: PointerEvent<HTMLDivElement>) {
    if (!supportsDepth(event.pointerType)) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    targetDepth.current = {
      x: Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)),
      y: Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)),
    };
    animateDepth();
  }

  function resetDepth(event: PointerEvent<HTMLDivElement>) {
    if (!supportsDepth(event.pointerType)) return;
    targetDepth.current = { x: 0, y: 0 };
    animateDepth();
  }

  function setLayerHover(layer: "dashboard" | "phone", active: boolean) {
    sceneRef.current?.style.setProperty(`--${layer}-hover`, active ? "1" : "0");
  }

  return (
    <div
      ref={sceneRef}
      className="forge-scene"
      onPointerMove={setDepth}
      onPointerLeave={resetDepth}
      aria-label="Illustrative interface studies showing the kinds of digital systems Forge can build"
      role="img"
    >
      <div className="forge-scene__grid" aria-hidden />
      <div className="forge-scene__orbit forge-scene__orbit--one" aria-hidden />
      <div className="forge-scene__orbit forge-scene__orbit--two" aria-hidden />

      <div
        className="forge-browser forge-scene__browser"
        onPointerEnter={(event) => {
          if (supportsDepth(event.pointerType)) setLayerHover("dashboard", true);
        }}
        onPointerLeave={(event) => {
          if (supportsDepth(event.pointerType)) setLayerHover("dashboard", false);
        }}
      >
        <div className="forge-browser__topbar">
          <span className="forge-dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className="forge-browser__address">studio / operations</span>
          <span className="forge-browser__mode">LIVE</span>
        </div>
        <div className="forge-browser__body">
          <aside className="forge-browser__sidebar">
            <span className="forge-mark">F</span>
            <span className="forge-browser__nav-label">OVR</span>
            <span />
            <span />
            <span />
            <span />
          </aside>
          <div className="forge-browser__main">
            <div className="forge-browser__title-row">
              <div>
                <span className="forge-ui-label">WORKSPACE / TODAY</span>
                <strong>Keep the work moving.</strong>
              </div>
              <span className="forge-ui-action">+ New task</span>
            </div>
            <div className="forge-metric-row">
              <div>
                <span>Open work</span>
                <strong>12 items</strong>
              </div>
              <div>
                <span>At review</span>
                <strong>04 items</strong>
              </div>
              <div>
                <span>Checkpoint</span>
                <strong>14:30</strong>
              </div>
            </div>
            <div className="forge-browser__workspace">
              <div className="forge-chart-panel">
                <div className="forge-panel-heading">
                  <span>WORKLOAD / 7 DAYS</span>
                  <strong>ACTIVE</strong>
                </div>
                <div className="forge-chart" aria-hidden>
                  <span style={{ height: "26%" }} />
                  <span style={{ height: "48%" }} />
                  <span style={{ height: "39%" }} />
                  <span style={{ height: "70%" }} />
                  <span style={{ height: "54%" }} />
                  <span style={{ height: "84%" }} />
                  <span style={{ height: "67%" }} />
                </div>
              </div>
              <div className="forge-task-panel">
                <div className="forge-panel-heading">
                  <span>NEXT UP</span>
                  <strong>03</strong>
                </div>
                <div className="forge-task-list">
                  <div><i /><span>Review brief</span><small>10:00</small></div>
                  <div><i /><span>Assign build</span><small>11:30</small></div>
                  <div><i /><span>Send update</span><small>14:30</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="forge-mobile forge-scene__mobile"
        onPointerEnter={(event) => {
          if (supportsDepth(event.pointerType)) setLayerHover("phone", true);
        }}
        onPointerLeave={(event) => {
          if (supportsDepth(event.pointerType)) setLayerHover("phone", false);
        }}
      >
        <div className="forge-mobile__speaker" aria-hidden />
        <span className="forge-ui-label">FIELD CHECK-IN</span>
        <strong>Ready when they are.</strong>
        <div className="forge-mobile__code" aria-hidden>
          {Array.from({ length: 25 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
        <span className="forge-mobile__status">Scan complete</span>
      </div>

      <div className="forge-float-card forge-scene__float-card">
        <span className="forge-ui-label">AUTOMATION</span>
        <div className="forge-flow-line">
          <i />
          <span />
          <i />
          <span />
          <i />
        </div>
        <p>Trigger → assign → notify</p>
      </div>

      <div className="forge-scene__caption mono">
        <span>ILLUSTRATIVE INTERFACE STUDIES</span>
        <span>01—04</span>
      </div>
    </div>
  );
}
