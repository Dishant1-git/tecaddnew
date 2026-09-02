"use client";

import { Layers } from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import ToolMark from "@/components/course/ToolMark";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * One tone for all three panels; the colour shift is the hover state instead of
 * a per-step tint. At rest a panel is a near-white brand tile with ink type.
 * Hovered, it fills with `ink` — the ground of the `CourseFit` section directly
 * above this one, so the hover reads as that section reaching down into this
 * one — and takes that section's accents with it: gold-300 eyebrow, white/55
 * body. Every layer inverts together: surface, heading, body, tag chips, the
 * tool marks, and the step badge, which is a sibling of the panel and so keys
 * off the same `group`.
 */
const TONE = {
  surface: "bg-brand-50 group-hover:bg-ink",
  badge: "bg-brand-600 text-white group-hover:bg-white group-hover:text-brand-700",
  title: "text-ink group-hover:text-white",
  body: "text-ink-mute group-hover:text-white/60",
  label: "text-brand-700 group-hover:text-gold-300",
  tag: "border-brand-600/15 bg-white/70 text-ink-mute group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/80",
};

/** Shared so every layer crosses over at the same rate. */
const TONE_TRANSITION = "transition-colors duration-400 ease-out";

/** Vertical stagger — each step starts lower than the one before it. */
const STEPS = ["lg:mt-0", "lg:mt-16", "lg:mt-32"];

/*
 * The step badge. This used to sit in a rectangular notch clipped out of the
 * panel, but the badge was centred on the cut's *inner* corner, which left a
 * strip of the cut bare at the corner itself — the panel read as broken rather
 * than notched. The badge now sits inside the panel, so there is no second
 * shape to keep in sync with it.
 */
const BADGE_SIZE = "3.25rem";

/**
 * `steps` variant: the projects as a stepped run of numbered blocks, each one
 * dropping a step lower across the row. Used by the after-12th pages, where the
 * three projects are meant to read as a sequence you climb through.
 */
function ProjectSteps({ course }: { course: Course }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Faint blueprint ruling behind the steps — decorative only. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(15 23 42 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.04) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, black 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 0%, black 20%, transparent 78%)",
        }}
      />

      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              What you build
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text="Projects that answer"
            accent="the interview question for you"
            accentClassName="text-gold-600"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-balance text-ink sm:text-4xl"
          />
          <span id="projects-heading" className="sr-only">
            Portfolio projects
          </span>
          <FadeUp standalone as="p" className="mt-5 max-w-xl text-sm text-muted">
            Each project is reviewed individually, and the review notes go into
            your portfolio documentation.
          </FadeUp>
        </div>

        <Stagger
          as="ul"
          className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7"
          gap={0.12}
        >
          {course.projects.map((project, i) => {
            const step = String(i + 1).padStart(2, "0");

            return (
              <FadeUp
                as="li"
                key={project.title}
                className={cn(
                  "group relative lg:self-start",
                  STEPS[i % STEPS.length],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-display absolute top-6 right-6 z-10 grid place-items-center rounded-full text-base font-semibold transition-transform duration-500 group-hover:-translate-y-1.5",
                    TONE_TRANSITION,
                    TONE.badge,
                  )}
                  style={{ width: BADGE_SIZE, height: BADGE_SIZE }}
                >
                  {step}
                </span>

                <article
                  className={cn(
                    "flex h-full min-h-84 flex-col rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-1.5",
                    TONE.surface,
                  )}
                >
                  {i === 0 && (
                    <span
                      className={cn(
                        "text-[0.65rem] font-semibold tracking-[0.24em] uppercase",
                        TONE_TRANSITION,
                        TONE.label,
                      )}
                    >
                      Flagship project
                    </span>
                  )}

                  <div className="mt-auto pt-8">
                    <h3
                      className={cn(
                        "font-display text-xl leading-snug font-semibold text-balance",
                        TONE_TRANSITION,
                        TONE.title,
                      )}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        TONE_TRANSITION,
                        TONE.body,
                      )}
                    >
                      {project.body}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className={cn(
                            "flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium",
                            TONE_TRANSITION,
                            TONE.tag,
                          )}
                        >
                          {/* Tags are drawn from the course's tool list, so
                              they key straight into the brand-mark set. The
                              glyph inherits the chip's colour, so it inverts
                              with the panel instead of needing its own rule. */}
                          <ToolMark
                            tool={tag}
                            tone="inherit"
                            className="size-3.5"
                          />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/**
 * Portfolio projects.
 *
 * `flagship` (the default, used by /courses) gives the first project the wide
 * dark card, because it is the one students are most often asked to walk
 * through in an interview. `steps` is the after-12th layout above.
 */
export default function CourseProjects({
  course,
  variant = "flagship",
}: {
  course: Course;
  variant?: "flagship" | "steps";
}) {
  const [lead, ...rest] = course.projects;

  if (variant === "steps") return <ProjectSteps course={course} />;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                What you build
              </span>
            </FadeUp>
            <WordsUp
              as="h2"
              text="Projects that answer"
              accent="the interview question for you"
              accentClassName="text-gold-500"
              className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
            />
            <span id="projects-heading" className="sr-only">
              Portfolio projects
            </span>
          </div>
          <FadeUp standalone className="text-sm text-muted lg:max-w-xs lg:text-right">
            Each project is reviewed individually, and the review notes go into
            your portfolio documentation.
          </FadeUp>
        </div>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-12" gap={0.1}>
          <FadeUp className="lg:col-span-12">
            <article className="group relative overflow-hidden rounded-3xl border border-line bg-ink p-8 text-white transition-all duration-500 hover:border-brand-500/40 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-70"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900/70 via-ink to-accent/45" />
                <div className="grid-overlay absolute inset-0 opacity-30" />
                <div className="absolute -top-24 -right-16 size-80 rounded-full bg-brand-600/30 blur-[100px] transition-transform duration-700 group-hover:scale-110" />
              </div>

              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 ring-inset">
                  <Layers className="size-4 text-brand-300" aria-hidden="true" />
                </span>
                <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-300 uppercase">
                  Flagship project
                </span>
              </div>

              <h3 className="font-display mt-6 max-w-2xl text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                {lead.body}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {lead.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>

          {rest.map((project, i) => (
            <FadeUp
              key={project.title}
              className={cn("lg:col-span-6", rest.length === 1 && "lg:col-span-12")}
            >
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-40px_rgb(37_99_235/0.5)]">
                <span className="font-display text-sm font-semibold text-brand-600">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl leading-snug font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-line bg-brand-50/60 px-2.5 py-1.5 text-xs font-medium text-ink-mute"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
