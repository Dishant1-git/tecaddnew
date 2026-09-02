"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Minus, Plus, Target } from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Stagger } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiHead from "./AiHead";

/**
 * The curriculum, driven from a numbered spine on the left with the selected
 * module expanded on the right.
 *
 * One module is always open — a curriculum that starts fully collapsed reads
 * as a list of titles, which is exactly what this section exists to avoid. The
 * spine is a roving-tabindex group so arrow keys walk it, matching the pattern
 * used by the site's other explorers.
 */
export default function AiCurriculum({ course }: { course: Course }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const baseId = useId();
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const modules = course.modules;
  const current = modules[active];

  function focusRow(index: number) {
    const next = (index + modules.length) % modules.length;
    setActive(next);
    rowRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusRow(active + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusRow(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusRow(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusRow(modules.length - 1);
    }
  }

  return (
    <section
      data-cursor="light"
      id="ai-curriculum"
      aria-labelledby="ai-curriculum-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop intensity="soft" />

      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <AiHead
            id="ai-curriculum-heading"
            eyebrow="Curriculum"
            heading="What you will"
            accent="actually build"
            dark
          />
          <FadeUp
            standalone
            as="p"
            className="max-w-xs text-sm leading-relaxed text-white/50 lg:text-right"
          >
            {modules.length} modules, each closing in something reviewable that
            goes straight into your portfolio.
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* -------------------------------------------------------- spine */}
          <div
            role="group"
            aria-label={`${course.title} modules`}
            onKeyDown={onKeyDown}
            className="lg:col-span-6"
          >
            <Stagger className="flex flex-col gap-2" gap={0.05}>
              {modules.map((module, i) => {
                const open = i === active;
                return (
                  <FadeUp key={module.code}>
                    <button
                      ref={(node) => {
                        rowRefs.current[i] = node;
                      }}
                      type="button"
                      id={`${baseId}-row-${i}`}
                      aria-expanded={open}
                      aria-controls={`${baseId}-panel`}
                      onClick={() => setActive(i)}
                      className={cn(
                        "group flex w-full items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300",
                        open
                          ? "border-brand-400/50 bg-brand-600/25 shadow-[0_18px_40px_-24px_rgb(37_99_235/0.9)] backdrop-blur-sm"
                          : "border-white/10 bg-white/[0.035] hover:border-brand-400/30 hover:bg-white/[0.07]",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-8 shrink-0 place-items-center rounded-lg text-xs font-semibold transition-colors duration-300",
                          open
                            ? "bg-brand-500 text-white"
                            : "bg-white/8 text-white/60 group-hover:bg-white/12",
                        )}
                      >
                        {module.code}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "font-display block truncate text-sm font-semibold sm:text-base",
                            open ? "text-white" : "text-white/80",
                          )}
                        >
                          {module.title}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 block truncate text-xs",
                            open ? "text-white/60" : "text-white/40",
                          )}
                        >
                          {module.skills.slice(0, 2).join(" · ")}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                          open
                            ? "border-white/30 bg-white/15 text-white"
                            : "border-white/15 text-white/40 group-hover:border-brand-400/40",
                        )}
                      >
                        {open ? (
                          <Minus className="size-3.5" strokeWidth={2.5} />
                        ) : (
                          <Plus className="size-3.5" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>
                  </FadeUp>
                );
              })}
            </Stagger>
          </div>

          {/* -------------------------------------------------------- panel */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.code}
                  id={`${baseId}-panel`}
                  role="region"
                  aria-labelledby={`${baseId}-row-${active}`}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: EASE }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-[0.65rem] font-semibold tracking-[0.22em] text-brand-400 uppercase">
                      Module {current.code} of{" "}
                      {String(modules.length).padStart(2, "0")}
                    </span>
                    <span className="text-[0.65rem] tracking-[0.16em] text-white/35 uppercase">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="font-display mt-3 text-2xl leading-tight font-semibold text-white sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/55">
                    {current.blurb}
                  </p>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/[0.05] p-5">
                      <h4 className="text-[0.68rem] font-semibold tracking-[0.16em] text-white uppercase">
                        Skills you build
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {current.skills.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-2.5 text-sm text-white/65"
                          >
                            <Check
                              className="mt-0.5 size-3.5 shrink-0 text-brand-400"
                              strokeWidth={3}
                              aria-hidden="true"
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-5">
                      <h4 className="text-[0.68rem] font-semibold tracking-[0.16em] text-white uppercase">
                        Tools in this module
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {current.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg bg-white/8 px-2.5 py-1.5 text-xs font-medium text-white/60 ring-1 ring-white/10 ring-inset"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-400/25 bg-brand-600/15 p-5">
                    <Target
                      className="mt-0.5 size-4 shrink-0 text-brand-300"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-300 uppercase">
                        You finish with
                      </span>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                        {current.deliverable}
                      </p>
                    </div>
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
