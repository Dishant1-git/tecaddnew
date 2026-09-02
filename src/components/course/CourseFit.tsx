"use client";

import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * A card that lights up under the pointer. The glow is a radial gradient
 * positioned from two motion values, so it tracks the cursor without a single
 * React re-render.
 */
function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgb(59 130 246 / 0.16), transparent 72%)`;

  return (
    <div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-colors duration-300 hover:border-white/25",
        className,
      )}
    >
      <motion.span
        aria-hidden="true"
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** The original persona-card treatment — four spotlight cards on why you fit. */
function PersonasBlock({ course }: { course: Course }) {
  return (
    <>
      <div className="max-w-2xl">
        <FadeUp standalone>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
            <span className="h-px w-6 bg-brand-400/60" aria-hidden="true" />
            Eligibility
          </span>
        </FadeUp>
        <WordsUp
          as="h2"
          text="Four kinds of people join this batch."
          accent="You are probably one of them."
          className="mt-4 text-3xl leading-[1.14] font-semibold sm:text-4xl"
        />
        <span id="fit-heading" className="sr-only">
          Who this course is for
        </span>
        <FadeUp
          standalone
          as="p"
          className="mt-5 text-base leading-relaxed text-white/55"
        >
          There is no entrance test and no prerequisite degree. What the
          programme does assume is that you will show up for the full{" "}
          {course.spec[0].value.toLowerCase()} and do the project work.
        </FadeUp>
      </div>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" gap={0.09}>
        {course.audience.map((persona, i) => (
          <FadeUp
            key={persona.title}
            className={cn(i % 2 === 1 && "sm:mt-10")}
          >
            <SpotlightCard className="h-full">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-4xl font-semibold text-white/12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-brand-500/30 bg-brand-600/15 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-brand-200 uppercase">
                  {persona.tag}
                </span>
              </div>
              <h3 className="font-display mt-4 text-xl leading-snug font-semibold">
                {persona.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {persona.body}
              </p>
            </SpotlightCard>
          </FadeUp>
        ))}
      </Stagger>
    </>
  );
}

/**
 * The eligibility checklist treatment: straight criteria instead of persona
 * copy — what the programme actually checks for, read at a glance rather than
 * argued for across four cards.
 */
function ChecklistBlock({ course }: { course: Course }) {
  const { eligibility } = course;

  return (
    <>
      <div className="max-w-2xl">
        <FadeUp standalone>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
            <span className="h-px w-6 bg-brand-400/60" aria-hidden="true" />
            Eligibility
          </span>
        </FadeUp>
        <WordsUp
          as="h2"
          text={eligibility.heading}
          className="mt-4 text-3xl leading-[1.14] font-semibold sm:text-4xl"
        />
        <span id="fit-heading" className="sr-only">
          {eligibility.heading}
        </span>
        <FadeUp
          standalone
          as="p"
          className="mt-5 text-base leading-relaxed text-white/55"
        >
          {eligibility.intro}
        </FadeUp>
      </div>

      <Stagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-2" gap={0.08}>
        {eligibility.criteria.map((item) => (
          <FadeUp
            as="li"
            key={item.label}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-white/25"
          >
            <span
              className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-600/20 text-brand-300 ring-1 ring-brand-400/30 ring-inset"
              aria-hidden="true"
            >
              <CheckCircle2 className="size-5" strokeWidth={2} />
            </span>
            <span>
              <span className="font-display block text-base font-semibold text-white">
                {item.label}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-white/55">
                {item.detail}
              </span>
            </span>
          </FadeUp>
        ))}
      </Stagger>
    </>
  );
}

/**
 * `variant` picks the top block: `personas` (default) is the original four
 * spotlight cards; `checklist` swaps in the straight eligibility criteria
 * above instead. The outcomes panel below is unaffected either way.
 */
export default function CourseFit({
  course,
  variant = "personas",
}: {
  course: Course;
  variant?: "personas" | "checklist";
}) {
  const [openRole, setOpenRole] = useState(0);

  return (
    <section
      data-cursor="light"
      id="who-its-for"
      aria-labelledby="fit-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-brand-900/45 to-ink" />
        <div className="animate-trace-slow circuit-texture absolute inset-0 opacity-25" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="animate-aurora-a absolute -top-40 left-1/4 size-[34rem] rounded-full bg-brand-600/20 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-32 bottom-0 size-[30rem] rounded-full bg-accent/35 blur-[130px] will-change-transform" />
      </div>

      <div className="container-page">
        {/* ------------------------------------------------------ audience */}
        {variant === "checklist" ? (
          <ChecklistBlock course={course} />
        ) : (
          <PersonasBlock course={course} />
        )}

        {/* ------------------------------------------------------ outcomes */}
        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp standalone>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
                  <span
                    className="h-px w-6 bg-brand-400/60"
                    aria-hidden="true"
                  />
                  Where it leads
                </span>
              </FadeUp>
              <WordsUp
                as="h2"
                text="The roles this"
                accent="portfolio opens"
                className="mt-4 text-3xl leading-[1.14] font-semibold sm:text-4xl"
              />
              <FadeUp
                standalone
                as="p"
                className="mt-5 max-w-md text-base leading-relaxed text-white/55"
              >
                Job titles vary by company, but the underlying expectations do
                not. Each destination below maps to work you will have already
                done during the programme.
              </FadeUp>
            </div>
          </div>

          <Stagger as="ul" className="lg:col-span-7" gap={0.07}>
            {course.outcomes.map((outcome, i) => {
              const open = openRole === i;
              return (
                <FadeUp as="li" key={outcome.role}>
                  <button
                    type="button"
                    onClick={() => setOpenRole(i)}
                    aria-expanded={open}
                    className={cn(
                      "group flex w-full items-center gap-5 border-b border-white/10 py-5 text-left transition-colors duration-300",
                      open ? "text-white" : "text-white/60 hover:text-white/85",
                    )}
                  >
                    <span className="font-display w-8 shrink-0 text-xs font-semibold text-brand-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-display block text-lg font-semibold sm:text-xl">
                        {outcome.role}
                      </span>
                      <motion.span
                        initial={false}
                        animate={{
                          height: open ? "auto" : 0,
                          opacity: open ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-2 text-sm leading-relaxed text-white/50">
                          {outcome.blurb}
                        </span>
                      </motion.span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 transition-all duration-300",
                        open
                          ? "text-brand-400"
                          : "text-white/25 group-hover:translate-x-0.5 group-hover:text-white/60",
                      )}
                    />
                  </button>
                </FadeUp>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
