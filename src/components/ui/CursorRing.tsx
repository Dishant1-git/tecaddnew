"use client";

import { useEffect, useRef } from "react";

/** How much of the remaining distance the ring closes each frame. */
const EASE = 0.18;
/** Scale while over something clickable. */
const HOVER_SCALE = 1.7;

const INTERACTIVE =
  'a, button, [role="button"], input, select, textarea, label, summary, [data-cursor-hover]';

/**
 * A ring that trails the pointer, growing over anything clickable and
 * inverting to white inside sections marked `data-cursor="light"`.
 *
 * Position is written straight to the element's transform from a rAF loop —
 * never through React state — so pointer movement never triggers a render.
 * It renders nothing on touch devices or under prefers-reduced-motion, both
 * checked at runtime rather than in CSS so the loop itself never starts.
 */
export default function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    /* Target follows the pointer; current chases the target each frame. */
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let targetScale = 1;
    let scale = 1;
    let frame = 0;

    function onPointerMove(event: PointerEvent) {
      targetX = event.clientX;
      targetY = event.clientY;
      ring!.classList.add("is-active");

      const target = event.target as Element | null;
      targetScale = target?.closest(INTERACTIVE) ? HOVER_SCALE : 1;
      ring!.classList.toggle("is-hovering", targetScale !== 1);
      ring!.classList.toggle(
        "is-light",
        target?.closest('[data-cursor="light"]') != null,
      );
    }

    function onLeave() {
      ring!.classList.remove("is-active");
    }

    function tick() {
      x += (targetX - x) * EASE;
      y += (targetY - y) * EASE;
      scale += (targetScale - scale) * EASE;
      ring!.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return <div ref={ringRef} aria-hidden="true" className="cursor-ring" />;
}
