"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { courseTracks } from "@/lib/course-tracks";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * Duration tracks: the same syllabus read at two or three paces.
 *
 * Two questions are answered in one section because they are the same question
 * asked twice — "how long is it?" on the cards, and "what do I give up by
 * taking the short one?" in the table underneath. The table is a real
 * `<table>`: the tick that matters is the one where a module meets a duration,
 * and that relationship only survives in tabular markup.
 *
 * Three things make a table this long readable rather than exhausting:
 *
 *  - **Collapsible stages.** Each stage is an accordion group, so a reader
 *    deciding between six and nine months can fold away the modules they have
 *    already accepted and compare only the ones in dispute.
 *  - **A duration filter.** Selecting a track card dims every module that
 *    track does not reach, which turns the comparison into a single answer.
 *  - **A pinned module column.** Below `lg` the table scrolls sideways; the
 *    module name stays put so a tick is never orphaned from its row.
 *
 * Everything is derived in `course-tracks.ts`, which returns null for a course
 * whose span will not divide — the section then simply does not render rather
 * than inventing a track the centre does not run.
 */
export default function CourseTracks({ course }: { course: Course }) {
  const plan = courseTracks(course);

  /* Collapsed stages by index, and the track the reader is filtering by.
     Both are declared before the early return so the hook order never varies
     between a course that has tracks and one that does not. */
  const [collapsed, setCollapsed] = useState<ReadonlySet<number>>(
    new Set<number>(),
  );
  const [picked, setPicked] = useState<number | null>(null);

  /** Modules each track reaches — the "covers 10 of 34" line on every card. */
  const coverage = useMemo(() => {
    if (!plan) return [];
    return plan.tracks.map((_, i) =>
      plan.stages
        .filter((stage) => stage.from <= i)
        .reduce((total, stage) => total + stage.modules.length, 0),
    );
  }, [plan]);

  if (!plan) return null;

  const { tracks, stages } = plan;
  const total = coverage[coverage.length - 1] ?? 0;
  const allOpen = collapsed.size === 0;

  function toggleStage(index: number) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (!next.delete(index)) next.add(index);
      return next;
    });
  }

  function toggleAll() {
    setCollapsed((prev) =>
      prev.size === 0 ? new Set(stages.map((_, i) => i)) : new Set(),
    );
  }

  return (
    <section
      data-cursor="light"
      id="tracks"
      aria-labelledby="tracks-heading"
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
        <div className="max-w-2xl">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              <span className="h-px w-6 bg-brand-400/60" aria-hidden="true" />
              Find your pace
            </span>
          </FadeUp>

          <WordsUp
            as="h2"
            text="Choose the right duration"
            accent="for you"
            accentClassName="text-gold-300"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-white sm:text-4xl"
          />
          <span id="tracks-heading" className="sr-only">
            Choose the right duration for you
          </span>

          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-white/55"
          >
            {plan.intro}
          </FadeUp>
        </div>

        {/* ------------------------------------------------------- the cards */}
        <Stagger
          as="ul"
          className={cn(
            "mt-12 grid gap-5",
            tracks.length === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2",
          )}
          gap={0.08}
        >
          {tracks.map((track, i) => {
            const active = picked === i;

            return (
              <FadeUp as="li" key={track.name} className="relative">
                {track.popular && (
                  <span className="absolute -top-3 right-7 z-10 rounded-full bg-gold-300 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.16em] text-ink uppercase">
                    Most popular
                  </span>
                )}

                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setPicked(active ? null : i)}
                  className={cn(
                    "flex h-full w-full flex-col rounded-3xl border p-7 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
                    active
                      ? "border-gold-300/60 bg-brand-500/15 shadow-[0_28px_60px_-34px_rgb(250_204_21/0.55)]"
                      : track.popular
                        ? "border-brand-400/40 bg-brand-500/10 shadow-[0_28px_60px_-38px_rgb(59_130_246/0.9)] hover:border-brand-400/70"
                        : "border-white/10 bg-white/[0.035] hover:border-brand-400/40 hover:bg-white/[0.06]",
                  )}
                >
                  <span className="font-display flex items-baseline gap-1.5 text-white">
                    <span className="text-4xl leading-none font-semibold">
                      {track.value}
                    </span>
                    <span className="text-sm font-medium text-white/50">
                      {track.unit}
                    </span>
                  </span>

                  <span className="mt-5 block text-[0.65rem] font-semibold tracking-[0.24em] text-brand-200 uppercase">
                    {track.name}
                  </span>
                  <span className="mt-1.5 block text-xs text-white/40">
                    {track.range}
                  </span>

                  <span className="mt-4 block text-sm leading-relaxed text-white/60">
                    {track.blurb}
                  </span>

                  <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-medium text-white/45">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full transition-colors duration-300",
                        active ? "bg-gold-300" : "bg-brand-400",
                      )}
                    />
                    Covers {coverage[i]} of {total} modules
                    <span className="ml-auto text-white/35">
                      {active ? "Clear" : "Highlight"}
                    </span>
                  </span>
                </button>
              </FadeUp>
            );
          })}
        </Stagger>

        {/* --------------------------------------------------- table toolbar */}
        <FadeUp
          standalone
          className="mt-12 flex flex-wrap items-center justify-between gap-3"
        >
          <p className="text-sm text-white/45">
            {picked === null
              ? "Select a duration above to see exactly how far it reaches."
              : `Showing what the ${tracks[picked].label} track covers — everything dimmed sits beyond it.`}
          </p>

          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-white/70 uppercase transition-colors duration-300 hover:border-brand-400/50 hover:text-white"
          >
            {allOpen ? "Collapse all" : "Expand all"}
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-3.5 transition-transform duration-300",
                allOpen && "rotate-180",
              )}
            />
          </button>
        </FadeUp>

        {/* ------------------------------------------------------- the table */}
        <FadeUp standalone className="mt-5">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[46rem] table-fixed border-collapse text-left">
                <caption className="sr-only">
                  Which modules of the {course.title} course each duration
                  covers
                </caption>

                <colgroup>
                  <col />
                  {tracks.map((track) => (
                    <col key={track.label} className="w-[7.5rem]" />
                  ))}
                </colgroup>

                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.06]">
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-ink px-6 py-4 text-[0.65rem] font-semibold tracking-[0.2em] text-white/45 uppercase lg:static lg:bg-transparent"
                    >
                      Module
                    </th>

                    {tracks.map((track, i) => (
                      <th
                        key={track.label}
                        scope="col"
                        className={cn(
                          "px-4 py-4 text-center align-middle transition-colors duration-300",
                          picked === i
                            ? "bg-gold-300/10"
                            : track.popular && "bg-brand-500/15",
                        )}
                      >
                        <span
                          className={cn(
                            "font-display block text-sm leading-none font-semibold transition-colors duration-300",
                            picked === i ? "text-gold-300" : "text-white",
                          )}
                        >
                          {track.value}
                        </span>
                        <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.16em] text-white/45 uppercase">
                          {track.unit}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                {stages.map((stage, s) => {
                  const open = !collapsed.has(s);
                  const beyond = picked !== null && stage.from > picked;

                  return (
                    <tbody
                      key={stage.heading}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      {/* --------------------------------- stage accordion */}
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={tracks.length + 1}
                          className="p-0 text-left font-normal"
                        >
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() => toggleStage(s)}
                            className={cn(
                              "flex w-full items-center gap-4 px-6 py-3.5 text-left transition-colors duration-300",
                              open
                                ? "bg-brand-500/10 ring-1 ring-brand-400/40 ring-inset"
                                : "bg-white/[0.04] hover:bg-white/[0.07]",
                            )}
                          >
                            <span
                              className={cn(
                                "text-[0.6rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-300",
                                beyond ? "text-white/35" : "text-brand-200",
                              )}
                            >
                              {stage.heading}
                            </span>

                            <ChevronDown
                              aria-hidden="true"
                              className={cn(
                                "ml-auto size-4 shrink-0 text-white/45 transition-transform duration-300",
                                open && "rotate-180",
                              )}
                            />
                            <span className="sr-only">
                              {open ? "Collapse" : "Expand"} this stage
                            </span>
                          </button>
                        </th>
                      </tr>

                      {/* ------------------------------------ module rows */}
                      {open &&
                        stage.modules.map((module) => (
                          <tr
                            key={module.code}
                            className={cn(
                              "border-t border-white/8 transition-all duration-300 odd:bg-white/[0.015] hover:bg-white/[0.05]",
                              beyond && "opacity-40",
                            )}
                          >
                            <th
                              scope="row"
                              className="sticky left-0 z-10 bg-ink px-6 py-4 text-left align-top font-normal lg:static lg:bg-transparent"
                            >
                              <span className="font-display flex items-baseline gap-2.5 text-sm leading-snug font-semibold text-brand-200">
                                <span className="text-[0.65rem] tracking-[0.14em] text-white/35 tabular-nums">
                                  {module.code}
                                </span>
                                {module.title}
                              </span>
                              <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-white/45">
                                {module.blurb}
                              </span>
                            </th>

                            {tracks.map((track, i) => {
                              const included = i >= stage.from;

                              return (
                                <td
                                  key={track.label}
                                  className={cn(
                                    "px-4 py-4 text-center align-middle transition-colors duration-300",
                                    picked === i
                                      ? "bg-gold-300/[0.07]"
                                      : track.popular && "bg-brand-500/10",
                                  )}
                                >
                                  {included ? (
                                    <Check
                                      aria-hidden="true"
                                      strokeWidth={3}
                                      className={cn(
                                        "inline-block size-4 transition-colors duration-300",
                                        picked === i
                                          ? "text-gold-300"
                                          : "text-brand-400",
                                      )}
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="inline-block h-0.5 w-3.5 rounded-full bg-white/15"
                                    />
                                  )}
                                  <span className="sr-only">
                                    {included
                                      ? "Included in"
                                      : "Not included in"}{" "}
                                    the {track.label} track
                                  </span>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </FadeUp>

        <FadeUp
          standalone
          as="p"
          className="mt-3 text-xs text-white/40 lg:hidden"
        >
          Scroll the table sideways to compare all durations.
        </FadeUp>

        <FadeUp
          standalone
          as="p"
          className="mt-5 max-w-3xl text-sm leading-relaxed text-white/45"
        >
          {plan.note}
        </FadeUp>
      </div>
    </section>
  );
}
