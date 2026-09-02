"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { technologies } from "@/lib/content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";
import { TECH_LOGO } from "./tech-logos";

/* ------------------------------------------------------------ arc geometry */

/**
 * The chips ride the crown of a circle, so the visible slice reads as a broad
 * semi-circle. Radius is in design pixels, scaled to the frame's width at
 * runtime; the span is wide enough that the arc climbs the full frame instead
 * of leaving dead space above it.
 */
const RADIUS = 780;
/** Half-width of the arc, in radians — how far a chip travels before vanishing. */
const SPAN = (46 * Math.PI) / 180;
/** Chips per side. Both sides drift outward from behind the centre badge. */
const PER_LANE = 8;
/** Fraction of the lane covered per second — one traverse takes ~30s. */
const SPEED = 0.033;

/** Fallback for the handful of tools with no brand mark available. */
function monogram(name: string) {
  return name.replace(/[^A-Za-z0-9+#.]/g, "").slice(0, 2);
}

/** The brand mark, or a monogram when simple-icons has no glyph for it. */
function ChipMark({ label }: { label: string }) {
  const path = TECH_LOGO[label];

  if (!path) {
    return <span className="text-sm font-semibold">{monogram(label)}</span>;
  }

  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

/**
 * Fade in leaving the badge, then dissolve across the whole outer half so a
 * chip is fully gone by the time it reaches the tip — never clipped mid-air
 * at the frame edge.
 */
function fade(t: number) {
  if (t < 0.08) return t / 0.08;
  if (t <= 0.35) return 1;
  const out = (t - 0.35) / 0.65;
  return Math.max(0, 1 - out * out); // eased, so the tail lingers then goes
}

function TechArc({ items }: { items: string[] }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [scale, setScale] = useState(1);

  /* Chips are positioned in design pixels, so the whole arc scales with the
     frame rather than overflowing on narrow screens. */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setScale(Math.min(1, Math.max(0.42, width / 1180)));
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let elapsed = 0;
    let last = performance.now();
    let raf = 0;

    /* Positions are written straight to each chip's style from the loop —
       never through state, so drifting never triggers a render. */
    function place() {
      chipRefs.current.forEach((chip, index) => {
        if (!chip) return;
        const lane = index < PER_LANE ? -1 : 1;
        const slot = index % PER_LANE;
        const t = (slot / PER_LANE + elapsed) % 1;

        const theta = t * SPAN * lane;
        const x = RADIUS * Math.sin(theta) * scale;
        const y = -RADIUS * (1 - Math.cos(theta)) * scale;

        chip.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${1 - 0.38 * t})`;
        chip.style.opacity = String(fade(t));
        /* Nearer the centre sits in front, so chips stack as they emerge. */
        chip.style.zIndex = String(10 - Math.round(t * 8));
      });
    }

    function tick(now: number) {
      /* Clamped so a backgrounded tab doesn't jump the arc on return. */
      const delta = Math.min((now - last) / 1000, 0.1);
      last = now;
      elapsed = (elapsed + delta * SPEED) % 1;
      place();
      raf = requestAnimationFrame(tick);
    }

    if (still) {
      place(); // Lay the arc out once and leave it there.
      return;
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scale, items]);

  return (
    <div
      ref={frameRef}
      className="relative h-[17rem] overflow-hidden sm:h-[19rem] lg:h-[21rem]"
    >
      {/* Dashed guide: a huge circle whose crown passes through the badge. */}
      <div
        aria-hidden="true"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
          transform: `translate(-50%, 0) scale(${scale})`,
          transformOrigin: "50% 0",
        }}
        className="pointer-events-none absolute top-[82%] left-1/2 rounded-full border border-dashed border-white/12"
      />

      {/* The chips. Decorative — the same list is exposed to assistive tech
          below, in reading order rather than as a moving jumble. */}
      <div aria-hidden="true">
        {Array.from({ length: PER_LANE * 2 }).map((_, index) => {
          const label = items[index % items.length];
          return (
            <div
              key={index}
              ref={(el) => {
                chipRefs.current[index] = el;
              }}
              className="absolute top-[82%] left-1/2 flex w-24 flex-col items-center opacity-0"
            >
              <span className="grid size-14 place-items-center rounded-full border border-white/12 bg-ink/80 text-white/80 shadow-[0_12px_30px_-12px_rgb(0_0_0/0.9)] backdrop-blur-sm">
                <ChipMark label={label} />
              </span>
              <span className="mt-2.5 w-full truncate text-center text-[0.7rem] text-white/45">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Caption centred in the bowl the arc encloses — it fills what would
          otherwise be dead space above the curve. */}
      <div className="absolute top-[34%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <span className="font-display block rounded-full border border-white/15 bg-ink/80 px-9 py-4 text-base font-semibold whitespace-nowrap text-white shadow-[0_24px_60px_-16px_rgb(0_0_0/1)] backdrop-blur-md lg:px-12 lg:py-5 lg:text-lg">
          Taught at TechCadd
        </span>
      </div>

      {/*
        The mark sits at the crown, where the chips start: they emerge from
        behind it and drift out to either tip. Opaque and wider than a chip, so
        logos appear from under it rather than popping in beside it.
      */}
      <div className="absolute top-[82%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <span className="relative grid size-24 place-items-center lg:size-28">
          {/* Concentric rings, widest first, plus a bloom behind the mark. */}
          <span
            aria-hidden="true"
            className="absolute inset-[-70%] rounded-full border border-white/[0.06]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-[-30%] rounded-full border border-white/[0.09]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-2 rounded-full bg-brand-500/30 blur-2xl"
          />
          <Image
            src="/favicons/android-chrome-192x192.png"
            alt=""
            width={192}
            height={192}
            className="relative size-20 rounded-full ring-1 ring-white/15 lg:size-24"
          />
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- section */

export default function Technologies() {
  const [active, setActive] = useState(0);
  const tab = technologies.tabs[active];

  return (
    <section
      data-cursor="light"
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-brand-900/35 to-ink" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute top-1/4 left-1/3 size-[36rem] rounded-full bg-brand-700/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 size-[30rem] rounded-full bg-accent/35 blur-[130px]" />
      </div>

      <div className="container-page">
        {/* ------------------------------------------------ centred header */}
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow dark>{technologies.eyebrow}</Eyebrow>
          <SplitHeading
            id="technologies-heading"
            text={technologies.heading}
            accent={technologies.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-2xl text-base leading-relaxed text-white/55">
            {technologies.body}
          </p>
        </Reveal>

        {/* ------------------------------------------------------- the arc */}
        <Reveal delay={120} className="mt-8">
          <TechArc items={tab.items} />
        </Reveal>

        {/* Category names under the arc; picking one swaps the chips. */}
        <Reveal delay={180}>
          <div
            role="group"
            aria-label="Technology categories"
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {technologies.tabs.map((entry, index) => (
              <button
                key={entry.label}
                type="button"
                aria-pressed={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  index === active
                    ? "bg-white text-ink shadow-lg shadow-black/25"
                    : "bg-white/8 text-white/60 ring-1 ring-white/15 ring-inset backdrop-blur-sm hover:bg-white/15 hover:text-white",
                )}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* The moving chips are aria-hidden, so the real list lives here. */}
        <ul className="sr-only">
          {tab.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Reveal
          delay={240}
          className="mt-14 flex flex-col items-center gap-5 border-t border-white/10 pt-10"
        >
          <p className="text-center">
            <span className="font-display bg-gradient-to-br from-white to-gold-300 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
              {technologies.footnote.value}
            </span>
            <span className="mt-1 block text-sm text-white/45">
              {technologies.footnote.label}
            </span>
          </p>

          <Link
            href={technologies.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-white/8 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
          >
            {technologies.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
