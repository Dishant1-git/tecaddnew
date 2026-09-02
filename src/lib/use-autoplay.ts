"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type AutoplayOptions = {
  /** Milliseconds between ticks. */
  interval?: number;
  /**
   * The carousel's root. Autoplay pauses while the pointer is over it, while
   * focus is inside it, and whenever it is scrolled out of view.
   */
  ref: React.RefObject<HTMLElement | null>;
};

/**
 * Drives a carousel forward on a timer, and knows when to stop.
 *
 * It halts on hover, on focus inside the carousel, when the carousel leaves
 * the viewport, and when the tab is hidden — a carousel that keeps advancing
 * under a reader's cursor, or while nobody is looking, is worse than none.
 * Under `prefers-reduced-motion` it never runs at all.
 *
 * Callers must still render a visible pause control: content that moves for
 * more than five seconds needs one (WCAG 2.2.2). `toggle` is that control,
 * and `running` is what it should display.
 */
export function useAutoplay(
  onTick: () => void,
  { interval = 6000, ref }: AutoplayOptions,
) {
  /** The reader's explicit choice, changed only by the pause button. */
  const [wanted, setWanted] = useState(true);
  /** Any of the automatic reasons to hold: hover, focus, off-screen, hidden tab. */
  const [held, setHeld] = useState(false);
  const reduce = useReducedMotion();

  // The callback is read through a ref so a new closure each render does not
  // restart the timer — which would otherwise reset the interval on every tick.
  const tick = useRef(onTick);
  useEffect(() => {
    tick.current = onTick;
  }, [onTick]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let hovered = false;
    let focused = false;
    let onScreen = true;

    const update = () =>
      setHeld(hovered || focused || !onScreen || document.hidden);

    const onEnter = () => {
      hovered = true;
      update();
    };
    const onLeave = () => {
      hovered = false;
      update();
    };
    const onFocusIn = () => {
      focused = true;
      update();
    };
    const onFocusOut = () => {
      focused = false;
      update();
    };

    node.addEventListener("pointerenter", onEnter);
    node.addEventListener("pointerleave", onLeave);
    node.addEventListener("focusin", onFocusIn);
    node.addEventListener("focusout", onFocusOut);
    document.addEventListener("visibilitychange", update);

    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              onScreen = entry.isIntersecting;
              update();
            },
            { threshold: 0.2 },
          );
    observer?.observe(node);

    return () => {
      node.removeEventListener("pointerenter", onEnter);
      node.removeEventListener("pointerleave", onLeave);
      node.removeEventListener("focusin", onFocusIn);
      node.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("visibilitychange", update);
      observer?.disconnect();
    };
  }, [ref]);

  const running = wanted && !held && !reduce;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => tick.current(), interval);
    return () => window.clearInterval(id);
  }, [running, interval]);

  const toggle = useCallback(() => setWanted((current) => !current), []);

  return {
    /** What the pause button should show — the reader's choice, not the hold state. */
    playing: wanted && !reduce,
    /** True only while the timer is actually ticking. */
    running,
    toggle,
    /** Autoplay is unavailable; hide the control entirely. */
    disabled: Boolean(reduce),
  };
}
