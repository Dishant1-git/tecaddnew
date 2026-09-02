"use client";

import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Phasing: the same modules regrouped into the three stages a batch actually
 * moves through. The spine fills as the section scrolls, so progress down the
 * page maps onto progress through the programme — the one place on this page
 * where a numbered sequence carries real information.
 *
 * `variant` picks how the stages sit on the page. `flow` lays them out one
 * after another; `stack` pins each stage card and lets the next one ride up
 * over it, so the stages literally stack in the order they are taken. The
 * stacking is `lg:` only — on a phone a stage card is most of the viewport,
 * and pinning it would leave nothing to scroll.
 */
/**
 * The closing statement, as the section's payoff rather than a grey box of
 * small print. It borrows the dark treatment the course pages already use for
 * their immersive sections — ink ground, drifting aurora blooms, a panning
 * grid — so the stages resolve into something that reads as a conclusion.
 *
 * The blooms and the grid are the shared `animate-*` ambience tokens, which
 * `globals.css` already switches off under `prefers-reduced-motion`.
 */
function ClosingPanel({ text }: { text: string }) {
  return (
    <FadeUp
      standalone
      className="relative isolate mt-16 overflow-hidden rounded-[1.75rem] border border-white/10 px-7 py-14 text-center shadow-[0_40px_80px_-50px_rgb(15_23_42/0.7)] sm:rounded-[2rem] lg:px-14 lg:py-16"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-brand-900/55 to-ink" />
        <div className="animate-aurora-a absolute -top-48 left-1/4 size-[32rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-40 -bottom-48 size-[28rem] rounded-full bg-accent/40 blur-[130px] will-change-transform" />
        <div
          className="animate-grid-pan absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.055) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(120% 100% at 50% 0%, black 10%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(120% 100% at 50% 0%, black 10%, transparent 72%)",
          }}
        />
      </div>

      <span
        aria-hidden="true"
        className="mx-auto grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-sm"
      >
        <GraduationCap className="size-6 text-gold-300" strokeWidth={1.6} />
      </span>

      <p className="font-display mx-auto mt-7 max-w-3xl text-lg leading-relaxed font-medium text-pretty text-white/85 sm:text-xl lg:text-[1.375rem] lg:leading-[1.55]">
        {text}
      </p>

      <span
        aria-hidden="true"
        className="mx-auto mt-8 flex w-fit items-center gap-2.5"
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
        <span className="size-1.5 rounded-full bg-gold-400" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
      </span>
    </FadeUp>
  );
}

/**
 * Wraps one stage. In `stack` mode the sticky wrapper has to be a plain
 * element and the reveal has to be `standalone`: Framer propagates variants
 * down the motion tree, so a non-motion div between the `Stagger` and its
 * child would strand the card in its hidden state forever.
 */
function PhaseBlock({
  index,
  stacked,
  children,
}: {
  index: number;
  stacked: boolean;
  children: React.ReactNode;
}) {
  if (!stacked) return <FadeUp className="relative">{children}</FadeUp>;

  return (
    <div
      className="lg:sticky"
      /* Each card parks a little lower than the one before it, so the stack
         keeps showing the top edge of every stage already completed. */
      style={{ top: `${6 + index * 0.85}rem`, zIndex: index + 1 }}
    >
      <FadeUp standalone className="relative">
        {children}
      </FadeUp>
    </div>
  );
}

export default function CoursePhases({
  course,
  variant = "flow",
}: {
  course: Course;
  variant?: "flow" | "stack";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const stacked = variant === "stack";
  const modules = course.modules;
  const cut = Math.ceil(modules.length / 3);

  const phases = [
    {
      label: "Stage one",
      title: "Foundations",
      body: "Fundamentals, vocabulary and the first working artefacts. Nothing is assumed; everything is implemented.",
      modules: modules.slice(0, cut),
    },
    {
      label: "Stage two",
      title: "Core practice",
      body: "The professional middle of the course. Real tooling, realistic inputs, and mentor review on every submission.",
      modules: modules.slice(cut, cut * 2),
    },
    {
      label: "Stage three",
      title: "Advanced & capstone",
      body: "Depth, deployment and the capstone build that becomes the centre of your portfolio and your interview answers.",
      modules: modules.slice(cut * 2),
    },
  ].filter((phase) => phase.modules.length > 0);

  /* Stacked cards only read as a stack if the one on top hides the ones
     beneath it, so every card is floored at the height of the fullest stage.
     4.625rem is one module row plus its gap, 4rem the card's own padding, and
     19rem the left-hand column, which is taller than a two-module list. */
  const rows = Math.max(...phases.map((phase) => phase.modules.length));

  return (
    <section
      id="phases"
      aria-labelledby="phases-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              How the programme is paced
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text="Three stages, in the order"
            accent="a working practitioner learns them"
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="phases-heading" className="sr-only">
            Programme stages
          </span>
        </div>

        <div
          ref={ref}
          className="relative mt-14 pl-10 sm:pl-16"
          style={stacked ? ({ "--rows": rows } as React.CSSProperties) : undefined}
        >
          {/* Spine: a static hairline with a scroll-driven brand fill on top. */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.6rem] w-px bg-line sm:left-[1.6rem]"
          />
          <motion.span
            aria-hidden="true"
            style={reduce ? { scaleY: 1 } : { scaleY: fill }}
            className="absolute top-2 bottom-2 left-[0.6rem] w-px origin-top bg-gradient-to-b from-brand-500 via-brand-600 to-accent sm:left-[1.6rem]"
          />

          <Stagger
            className={stacked ? "space-y-14" : "space-y-12 lg:space-y-16"}
            gap={0.12}
          >
            {phases.map((phase, i) => (
              <PhaseBlock key={phase.title} index={i} stacked={stacked}>
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-10 grid size-5 place-items-center rounded-full border-2 border-white bg-brand-600 shadow-[0_0_0_4px_rgb(219_234_254/0.9)] sm:-left-16"
                >
                  <span className="size-1.5 rounded-full bg-white" />
                </span>

                <div
                  className={
                    stacked
                      ? "grid gap-6 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_28px_60px_-40px_rgb(15_23_42/0.45)] lg:min-h-[max(19rem,calc(var(--rows)*4.625rem+4rem))] lg:grid-cols-12 lg:gap-10 lg:p-8"
                      : "grid gap-6 lg:grid-cols-12 lg:gap-10"
                  }
                >
                  <div className="min-w-0 lg:col-span-5">
                    <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-gold-500 uppercase">
                      {phase.label}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
                      {phase.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                      {phase.body}
                    </p>
                    <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
                      Modules {phase.modules[0].code} –{" "}
                      {phase.modules[phase.modules.length - 1].code}
                    </p>
                  </div>

                  <ul
                    /* The card is floored to the tallest stage, so rows in a
                       shorter one must hold their natural height instead of
                       stretching to fill it. */
                    className={
                      stacked
                        ? "grid min-w-0 gap-2.5 lg:col-span-7 lg:content-start"
                        : "grid min-w-0 gap-2.5 lg:col-span-7"
                    }
                  >
                    {phase.modules.map((module) => (
                      <li
                        key={module.code}
                        className="group flex min-w-0 items-center gap-4 rounded-xl border border-line bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_16px_36px_-24px_rgb(37_99_235/0.45)]"
                      >
                        <span className="font-display text-xs font-semibold text-brand-600">
                          {module.code}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-ink">
                            {module.title}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-muted">
                            {module.skills.join(" · ")}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PhaseBlock>
            ))}
            {/* Sticky range is bounded by the container's own content, and
                padding on it does not extend that range — the last stage only
                reaches its pin if a real element gives the group runway. */}
            {stacked ? (
              <div aria-hidden="true" className="hidden lg:block lg:h-[35vh]" />
            ) : null}
          </Stagger>
        </div>

        {stacked ? (
          <ClosingPanel text={course.closing} />
        ) : (
          <FadeUp
            standalone
            className="mt-16 rounded-3xl border border-line bg-brand-50/50 px-7 py-8 text-center lg:px-12"
          >
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-mute">
              {course.closing}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
