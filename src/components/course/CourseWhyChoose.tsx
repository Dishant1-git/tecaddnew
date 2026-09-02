"use client";

import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Why choose. Six concrete reasons to enrol here, laid out as the same
 * numbered-tile grid the AI mega-menu pages use for the equivalent argument —
 * kept as its own component because the standard and after-12th page shapes
 * have no analogue for it otherwise.
 *
 * `tone` picks the ground. `dark` carries the exact treatment `CourseFit` uses
 * for its eligibility block — same ink base, gradient, circuit and grid
 * textures and bloom pair — so the two read as one family rather than two
 * near-misses.
 *
 * `panel` picks which argument to draw. Courses whose copy makes the case for
 * the programme and the case for the institute separately carry both, and the
 * page renders this component twice — `alt` reads the second panel and takes
 * its own ids so the two sections stay individually addressable.
 */
export default function CourseWhyChoose({
  course,
  tone = "light",
  panel = "primary",
}: {
  course: Course;
  tone?: "light" | "dark";
  panel?: "primary" | "alt";
}) {
  const alt = panel === "alt";
  const whyChoose = (alt ? course.whyChooseAlt : course.whyChoose) ?? course.whyChoose;
  const dark = tone === "dark";
  const sectionId = alt ? "why-techcadd" : "why-choose";
  const headingId = `${sectionId}-heading`;

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      data-cursor={dark ? "light" : undefined}
      className={cn(
        "py-20 lg:py-28",
        dark
          ? "relative isolate overflow-hidden bg-ink text-white"
          : "border-y border-line bg-white",
      )}
    >
      {dark && (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-brand-900/45 to-ink" />
          <div className="animate-trace-slow circuit-texture absolute inset-0 opacity-25" />
          <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
          <div className="animate-aurora-a absolute -top-40 left-1/4 size-[34rem] rounded-full bg-brand-600/20 blur-[130px] will-change-transform" />
          <div className="animate-aurora-b absolute -right-32 bottom-0 size-[30rem] rounded-full bg-accent/35 blur-[130px] will-change-transform" />
        </div>
      )}

      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeUp standalone>
            <span
              className={cn(
                "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
                dark ? "text-gold-300" : "text-gold-500",
              )}
            >
              <span
                className={cn(
                  "h-px w-6",
                  dark ? "bg-brand-400/60" : "bg-brand-600/40",
                )}
                aria-hidden="true"
              />
              {alt ? "Why techcadd" : `Why choose ${course.title}`}
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text={whyChoose.heading}
            accent={whyChoose.accent}
            accentClassName={dark ? "text-gold-300" : "text-gold-500"}
            className={cn(
              "mt-4 text-3xl leading-[1.14] font-semibold sm:text-4xl",
              !dark && "text-ink",
            )}
          />
          <span id={headingId} className="sr-only">
            {whyChoose.heading} {whyChoose.accent}
          </span>
          <FadeUp
            standalone
            as="p"
            className={cn(
              "mt-5 text-base leading-relaxed",
              dark ? "text-white/55" : "text-muted",
            )}
          >
            {whyChoose.body}
          </FadeUp>
        </div>

        <Stagger
          as="ul"
          className={cn(
            "mt-14 grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:mt-16 lg:grid-cols-3",
            dark ? "border-white/12 bg-white/12" : "border-line bg-line",
          )}
          gap={0.06}
        >
          {whyChoose.reasons.map((reason, i) => (
            <FadeUp
              as="li"
              key={reason.title}
              className={cn(
                "group relative p-7 transition-colors duration-300",
                dark
                  ? "bg-ink/80 hover:bg-white/[0.06]"
                  : "bg-white hover:bg-brand-50/60",
              )}
            >
              <span
                className={cn(
                  "font-display text-xs font-semibold tracking-[0.2em]",
                  dark ? "text-brand-300" : "text-brand-600/70",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={cn(
                  "font-display mt-4 text-lg leading-snug font-semibold",
                  !dark && "text-ink",
                )}
              >
                {reason.title}
              </h3>
              <p
                className={cn(
                  "mt-2.5 text-sm leading-relaxed",
                  dark ? "text-white/55" : "text-muted",
                )}
              >
                {reason.body}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
