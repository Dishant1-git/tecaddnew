"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Seconds for one full pass. */
  duration?: number;
  reverse?: boolean;
  /** Hold the row still while the pointer is over it. */
  pauseOnHover?: boolean;
  /**
   * Fraction of full speed the row eases down to while the pointer is over it,
   * e.g. `0.2` for a fifth of the speed. Omit to keep the default behaviour,
   * which is governed by `pauseOnHover`.
   */
  hoverSlowFactor?: number;
  className?: string;
};

/** Track content is duplicated, so one full pass is exactly half its width. */
const LOOP_PERCENT = 50;

/** How fast the speed multiplier chases its target. Higher eases in sooner. */
const EASE_RATE = 3.5;

/** A long frame — after a tab switch, say — must not teleport the row. */
const MAX_FRAME_MS = 64;

function MarqueeTrack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      // Edges fade out so cards don't collide with the viewport boundary.
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Hover-slows instead of hover-pausing.
 *
 * A CSS animation cannot do this smoothly: `animation-duration` is not
 * transitionable, and changing it mid-run rescales the elapsed time, which
 * snaps the row backwards. So this variant drives the transform itself and
 * eases a speed multiplier toward its target each frame — the row visibly
 * decelerates into the slow speed and accelerates back out of it.
 */
function SlowingMarquee<T>({
  items,
  renderItem,
  duration,
  reverse,
  hoverSlowFactor,
  className,
}: Required<Pick<MarqueeProps<never>, "duration" | "reverse" | "hoverSlowFactor">> &
  Pick<MarqueeProps<T>, "items" | "renderItem" | "className">) {
  const reduce = useReducedMotion();

  /* Offset in percent of the track's own width, wrapped into one loop length
     so the seam is never reachable. */
  const offset = useMotionValue(0);
  const transform = useMotionTemplate`translateX(${offset}%)`;
  const speed = useRef(1);
  const target = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;

    const seconds = Math.min(delta, MAX_FRAME_MS) / 1000;

    speed.current +=
      (target.current - speed.current) * Math.min(1, seconds * EASE_RATE);

    const travel =
      (LOOP_PERCENT / duration) * speed.current * seconds * (reverse ? 1 : -1);

    let next = offset.get() + travel;
    if (next <= -LOOP_PERCENT) next += LOOP_PERCENT;
    if (next >= 0) next -= LOOP_PERCENT;

    offset.set(next);
  });

  return (
    <MarqueeTrack className={className}>
      <motion.div
        onPointerEnter={() => {
          target.current = hoverSlowFactor;
        }}
        onPointerLeave={() => {
          target.current = 1;
        }}
        className="flex w-max gap-5"
        style={{ transform }}
      >
        {items.map((item, i) => (
          <div key={`a-${i}`} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
        {items.map((item, i) => (
          <div key={`b-${i}`} className="shrink-0" aria-hidden="true">
            {renderItem(item, i)}
          </div>
        ))}
      </motion.div>
    </MarqueeTrack>
  );
}

/**
 * Seamless horizontal scroller. The track holds the items twice — the clone is
 * `aria-hidden` — and translates by exactly -50%, so the loop has no seam.
 * Pauses on hover unless `pauseOnHover` is off; disabled entirely under
 * prefers-reduced-motion (globals.css).
 *
 * Pass `hoverSlowFactor` to slow the row on hover instead of stopping it.
 */
export default function Marquee<T>({
  items,
  renderItem,
  duration = 60,
  reverse = false,
  pauseOnHover = true,
  hoverSlowFactor,
  className,
}: MarqueeProps<T>) {
  if (hoverSlowFactor !== undefined) {
    return (
      <SlowingMarquee
        items={items}
        renderItem={renderItem}
        duration={duration}
        reverse={reverse}
        hoverSlowFactor={hoverSlowFactor}
        className={className}
      />
    );
  }

  return (
    <MarqueeTrack className={className}>
      <div
        className={cn(
          "flex w-max gap-5",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {items.map((item, i) => (
          <div key={`a-${i}`} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
        {items.map((item, i) => (
          <div key={`b-${i}`} className="shrink-0" aria-hidden="true">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </MarqueeTrack>
  );
}
