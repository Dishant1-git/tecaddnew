"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { TrainingSeed } from "@/lib/training-data";
import { EASE, FadeUp, WordsUp } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

type PlanStepData = TrainingSeed["plan"][number];
type Point = { x: number; y: number };

/** The two-column zigzag only exists from `lg` up. */
const WIDE = "(min-width: 64rem)";

/**
 * Offset of a descendant from a positioned ancestor, in layout pixels.
 *
 * `offsetLeft`/`offsetTop` are used rather than `getBoundingClientRect`
 * because the cards animate in on a `translateY`, and a rect would measure
 * them mid-flight. Layout offsets ignore transforms, so the curve is drawn
 * against where the markers finally settle.
 */
function offsetWithin(el: HTMLElement, root: HTMLElement): Point {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

/**
 * A serpentine through the markers.
 *
 * Each segment is a cubic whose control points sit directly above and below
 * its endpoints, so the curve leaves and enters every marker vertically —
 * that is what keeps the weave smooth instead of showing a kink at each dot.
 * A short vertical lead-in and tail carry it to the edges of the block.
 */
function serpentine(points: Point[], height: number): string {
  const first = points[0];
  const last = points[points.length - 1];

  let d = `M ${first.x} 0 L ${first.x} ${first.y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const pull = (b.y - a.y) * 0.5;
    d += ` C ${a.x} ${(a.y + pull).toFixed(1)}, ${b.x} ${(b.y - pull).toFixed(1)}, ${b.x} ${b.y.toFixed(1)}`;
  }
  return `${d} L ${last.x} ${height.toFixed(1)}`;
}

/**
 * One span on the timeline.
 *
 * Lives in its own component because each step reads the shared scroll
 * progress through its own `useTransform` — a hook, so it cannot be called
 * inside the `.map()` of the parent.
 *
 * From `lg` up the steps alternate sides of the weave; below that the zigzag
 * collapses to a single left-hand rail, because a two-sided timeline on a
 * phone leaves neither column wide enough to read.
 */
function PlanStep({
  step,
  index,
  total,
  fill,
  reduce,
  markerRef,
}: {
  step: PlanStepData;
  index: number;
  total: number;
  /** Shared 0–1 draw progress of the curve, driven by the section's scroll. */
  fill: MotionValue<number>;
  reduce: boolean | null;
  markerRef: (el: HTMLSpanElement | null) => void;
}) {
  const left = index % 2 === 0;

  /* Where this step sits along the curve, as a fraction of it. The marker
     lights just before the stroke arrives, so the line reads as being drawn
     *to* the card rather than past it. */
  const at = (index + 0.5) / total;
  const lit = useTransform(fill, [at - 0.07, at + 0.01], [0, 1]);
  const litScale = useTransform(fill, [at - 0.07, at + 0.01], [0.5, 1]);
  const litGlow = useTransform(fill, [at - 0.07, at + 0.01], [0, 0.55]);

  return (
    <motion.li
      className="relative lg:grid lg:grid-cols-2 lg:gap-x-24"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -14% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* Marker: a dim dot the travelling stroke switches on as it passes.
          From `lg` it sits off-centre, in the gutter beside its own card —
          those offsets are the points the curve is threaded through. */}
      <span
        ref={markerRef}
        aria-hidden="true"
        className={cn(
          "absolute top-7 -left-10 size-5 sm:-left-16 lg:left-1/2 lg:-translate-x-1/2",
          left ? "lg:-ml-8" : "lg:ml-8",
        )}
      >
        <motion.span
          style={reduce ? undefined : { opacity: litGlow, scale: litScale }}
          className="absolute -inset-2 rounded-full bg-brand-500/40 blur-md"
        />
        <span className="absolute inset-0 rounded-full border-2 border-white bg-line" />
        <motion.span
          style={reduce ? undefined : { opacity: lit, scale: litScale }}
          className="absolute inset-0 grid place-items-center rounded-full border-2 border-white bg-brand-600 shadow-[0_0_0_4px_rgb(219_234_254/0.9)]"
        >
          <span className="size-1.5 rounded-full bg-white" />
        </motion.span>
      </span>

      <div
        className={cn(
          "rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_24px_50px_-38px_rgb(15_23_42/0.45)] lg:p-7",
          left ? "lg:col-start-1" : "lg:col-start-2",
        )}
      >
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-display text-sm font-semibold text-brand-600">
            {step.span}
          </span>
          <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted uppercase">
            Step {String(index + 1).padStart(2, "0")} of{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-display mt-2 text-xl leading-snug font-semibold text-ink">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}

/**
 * How the duration is spent, span by span.
 *
 * This replaces the course pages' `CoursePhases`, which infers three stages
 * from the length of the module list. That inference is right for a subject and
 * wrong for a format: someone reading a 45-day page is buying a calendar, so
 * the spans are stated outright — and they are uneven on purpose, because a
 * six-month programme is not two weeks repeated twelve times.
 */
export default function TrainingPlan({
  title,
  duration,
  plan,
}: {
  title: string;
  duration: string;
  plan: TrainingSeed["plan"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const markers = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = useReducedMotion();

  /* The curve is measured from the DOM rather than assumed, so it stays
     threaded through the markers whatever the cards end up costing in
     height — different plans, wrapped headings, a font that lands late. */
  const [curve, setCurve] = useState<{
    d: string;
    width: number;
    height: number;
  } | null>(null);

  const measure = useCallback(() => {
    const root = ref.current;
    if (!root) return;

    if (!window.matchMedia(WIDE).matches) {
      setCurve(null);
      return;
    }

    const points = markers.current
      .filter((el): el is HTMLSpanElement => Boolean(el))
      .map((el) => {
        const { x, y } = offsetWithin(el, root);
        return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 };
      });

    if (points.length < 1) {
      setCurve(null);
      return;
    }

    const height = root.offsetHeight;
    setCurve({
      d: serpentine(points, height),
      width: root.offsetWidth,
      height,
    });
  }, []);

  useEffect(() => {
    const root = ref.current;

    /* No initial `measure()` call: observing delivers the current size
       immediately, so the first curve is drawn from that callback. */
    const observer = new ResizeObserver(measure);
    if (root) observer.observe(root);

    const wide = window.matchMedia(WIDE);
    wide.addEventListener("change", measure);

    return () => {
      observer.disconnect();
      wide.removeEventListener("change", measure);
    };
  }, [measure, plan.length]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="plan"
      aria-labelledby="plan-heading"
      className="scroll-mt-28 bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              Where the {duration.toLowerCase()} goes
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text="The calendar, spelled out"
            accent="before you enrol"
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="plan-heading" className="sr-only">
            {title} schedule
          </span>
          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-muted"
          >
            No block is padding and none of it is a lecture series. Each span
            below ends in something a trainer has signed off on.
          </FadeUp>
        </div>

        <div ref={ref} className="relative mt-14 pl-10 sm:pl-16 lg:pl-0">
          {/* Narrow screens keep the straight left rail — a weave needs two
              columns to weave between. */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.6rem] w-px bg-line sm:left-[1.6rem] lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            style={reduce ? { scaleY: 1 } : { scaleY: fill }}
            className="absolute top-2 bottom-2 left-[0.6rem] w-px origin-top bg-gradient-to-b from-brand-500 via-brand-600 to-accent sm:left-[1.6rem] lg:hidden"
          />

          {/* Wide screens: the curve itself. A faint full path underneath, and
              the brand stroke drawn along it by `pathLength` as you scroll. */}
          {curve && (
            <svg
              aria-hidden="true"
              width={curve.width}
              height={curve.height}
              viewBox={`0 0 ${curve.width} ${curve.height}`}
              fill="none"
              className="pointer-events-none absolute inset-0 hidden lg:block"
            >
              <defs>
                <linearGradient
                  id="plan-curve"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={curve.height}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="var(--color-brand-400)" />
                  <stop offset="45%" stopColor="var(--color-brand-600)" />
                  <stop offset="100%" stopColor="var(--color-accent)" />
                </linearGradient>
              </defs>

              <path
                d={curve.d}
                stroke="var(--color-line)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <motion.path
                d={curve.d}
                stroke="url(#plan-curve)"
                strokeWidth="2"
                strokeLinecap="round"
                style={reduce ? undefined : { pathLength: fill }}
              />
            </svg>
          )}

          <ol className="relative space-y-4 lg:space-y-10">
            {plan.map((step, i) => (
              <PlanStep
                key={step.span}
                step={step}
                index={i}
                total={plan.length}
                fill={fill}
                reduce={reduce}
                markerRef={(el) => {
                  markers.current[i] = el;
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
