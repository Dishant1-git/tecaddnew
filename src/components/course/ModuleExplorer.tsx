"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import ToolMark from "@/components/course/ToolMark";

/**
 * Module explorer: the curriculum as a driveable index rather than a wall of
 * cards. Selecting a module on the spine swaps the detail panel; the active
 * marker is a shared `layoutId` element, so it slides between rows instead of
 * cutting.
 *
 * Implemented as an ARIA vertical tablist — roving tabindex, arrow keys, and
 * Home/End — matching the pattern already used by the site's TabGroup.
 */
/**
 * `withMarks` prefixes each module's tool chips with the vendor's brand mark.
 * On the training pages this is the only place a real toolchain is named, so
 * the logos do the work the removed `ToolStack` section used to.
 */
export default function ModuleExplorer({
  course,
  withMarks = false,
}: {
  course: Course;
  withMarks?: boolean;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const modules = course.modules;
  const current = modules[active];

  function focusTab(index: number) {
    const next = (index + modules.length) % modules.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(active + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(modules.length - 1);
    }
  }

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="relative overflow-hidden bg-brand-50/50 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"
      />

      <div className="container-page">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                Module by module
              </span>
            </FadeUp>
            <WordsUp
              as="h2"
              text="Open any module and see"
              accent="exactly what happens inside it"
              accentClassName="text-gold-500"
              className="mt-4 max-w-2xl text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
            />
            <span id="curriculum-heading" className="sr-only">
              Module by module curriculum
            </span>
          </div>
          <FadeUp standalone className="text-sm text-muted lg:max-w-xs lg:text-right">
            {course.curriculumNote ??
              `${modules.length} modules, each ending in something reviewable that goes into your portfolio.`}
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ------------------------------------------------------- spine */}
          <div
            role="group"
            aria-label="Course modules"
            onKeyDown={onKeyDown}
            className="lg:col-span-5"
          >
            <Stagger className="relative flex flex-col" gap={0.05}>
              {/* The rail the marker travels along. */}
              <span
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-[1.4rem] w-px bg-line"
              />

              {modules.map((module, i) => {
                const selected = i === active;
                return (
                  <FadeUp key={module.code}>
                    <button
                      ref={(node) => {
                        tabRefs.current[i] = node;
                      }}
                      type="button"
                      id={`${baseId}-tab-${i}`}
                      aria-current={selected ? "true" : undefined}
                      aria-controls={`${baseId}-panel`}
                      aria-expanded={selected}
                      onClick={() => setActive(i)}
                      className="group relative flex w-full items-center gap-4 rounded-2xl py-3.5 pr-4 pl-0 text-left transition-colors duration-300"
                    >
                      {selected && (
                        <motion.span
                          layoutId={`${baseId}-marker`}
                          aria-hidden="true"
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 34 }
                          }
                          className="absolute inset-0 rounded-2xl border border-brand-200 bg-white shadow-[0_16px_36px_-22px_rgb(37_99_235/0.5)]"
                        />
                      )}

                      <span
                        className={cn(
                          "relative z-10 ml-2 grid size-9 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors duration-300",
                          selected
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-line bg-white text-muted group-hover:border-brand-300 group-hover:text-brand-600",
                        )}
                      >
                        {module.code}
                      </span>

                      <span className="relative z-10 min-w-0 flex-1">
                        <span
                          className={cn(
                            "font-display block truncate text-sm font-semibold transition-colors duration-300",
                            selected ? "text-ink" : "text-ink-mute",
                          )}
                        >
                          {module.title}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-muted">
                          {module.skills.slice(0, 2).join(" · ")}
                        </span>
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className={cn(
                          "relative z-10 size-4 shrink-0 transition-all duration-300",
                          selected
                            ? "text-brand-600 opacity-100"
                            : "text-muted opacity-0 group-hover:opacity-60",
                        )}
                      />
                    </button>
                  </FadeUp>
                );
              })}
            </Stagger>
          </div>

          {/* ------------------------------------------------------- panel */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.code}
                  id={`${baseId}-panel`}
                  role="region"
                  aria-labelledby={`${baseId}-tab-${active}`}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="rounded-3xl border border-line bg-white p-7 shadow-[0_30px_70px_-45px_rgb(15_23_42/0.4)] lg:p-9"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-gold-500 uppercase">
                      Module {current.code} of{" "}
                      {String(modules.length).padStart(2, "0")}
                    </span>
                    <span className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="font-display mt-3 text-2xl leading-tight font-semibold text-ink sm:text-3xl">
                    {current.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {current.blurb}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase">
                        Skills you build
                      </h4>
                      <ul className="mt-3.5 space-y-2.5">
                        {current.skills.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-2.5 text-sm text-ink-mute"
                          >
                            <Check
                              className="mt-0.5 size-3.5 shrink-0 text-brand-600"
                              strokeWidth={3}
                              aria-hidden="true"
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase">
                        Tools in this module
                      </h4>
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {current.tools.map((tool) => (
                          <span
                            key={tool}
                            className={cn(
                              "rounded-lg border border-line bg-brand-50/60 px-2.5 py-1.5 text-xs font-medium text-ink-mute",
                              withMarks && "inline-flex items-center gap-2",
                            )}
                          >
                            {withMarks ? (
                              <ToolMark tool={tool} className="size-3.5" />
                            ) : null}
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-5">
                    <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-600 uppercase">
                      You finish with
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">
                      {current.deliverable}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
