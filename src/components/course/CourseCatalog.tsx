"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import {
  courseCategories,
  courseSummaries,
  type CourseSummary,
} from "@/lib/courses";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Stagger } from "@/components/ui/Motion";

function matches(course: CourseSummary, query: string) {
  if (!query) return true;
  const haystack = [
    course.title,
    course.category,
    course.tagline,
    course.level,
    ...course.tools,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase().trim());
}

function CourseCard({ course }: { course: CourseSummary }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_26px_56px_-38px_rgb(37_99_235/0.55)]",
        /* Most-enrolled programmes carry a brand edge so the eye lands on
           them first without needing a separate "featured" row. */
        course.featured
          ? "border-brand-200 shadow-[0_18px_44px_-34px_rgb(37_99_235/0.5)]"
          : "border-line",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg leading-snug font-semibold text-ink">
          {course.title}
        </h3>
        {course.badge && (
          <span className="shrink-0 rounded-full bg-brand-600 px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide text-white uppercase">
            {course.badge}
          </span>
        )}
      </div>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {course.tagline}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {course.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-md border border-line bg-brand-50/60 px-2 py-1 text-[0.7rem] font-medium text-ink-mute"
          >
            {tool}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
        <span>
          {course.duration} · {course.moduleCount} modules
        </span>
        <ArrowUpRight
          className="size-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export default function CourseCatalog() {
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const groups = useMemo(
    () =>
      courseCategories.map((category) => ({
        ...category,
        courses: courseSummaries.filter(
          (course) =>
            course.category === category.label && matches(course, query),
        ),
      })),
    [query],
  );

  const total = groups.reduce((sum, group) => sum + group.courses.length, 0);

  return (
    <>
      {/* ------------------------------------------------------ filter bar */}
      <div className="sticky top-20 z-30 border-b border-line bg-white/85 backdrop-blur-xl">
        <div className="container-page flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label="Course categories"
            className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 lg:pb-0"
          >
            {courseCategories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                {category.label}
              </a>
            ))}
          </nav>

          <div className="relative w-full lg:max-w-xs">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a course, tool or skill"
              className="h-11 w-full rounded-full border border-line bg-white pr-10 pl-11 text-sm text-ink placeholder:text-muted focus:border-brand-500 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-brand-50 hover:text-ink"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- results */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <p aria-live="polite" className="text-sm text-muted">
            {query
              ? `${total} course${total === 1 ? "" : "s"} matching “${query}”`
              : `${total} courses across ${courseCategories.length} tracks`}
          </p>

          {total === 0 && (
            <div className="mt-10 rounded-3xl border border-line bg-brand-50/50 p-10 text-center">
              <p className="font-display text-lg font-semibold text-ink">
                Nothing matches that search yet.
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                Try a broader term — a language, a tool or a job title. If we run
                the course you are looking for and it is not listed, the
                admissions desk will tell you.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-6 inline-flex h-11 items-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Show every course
              </button>
            </div>
          )}

          <div className="mt-4 space-y-16 lg:space-y-20">
            <AnimatePresence initial={false}>
              {groups
                .filter((group) => group.courses.length > 0)
                .map((group) => (
                  <motion.section
                    key={group.slug}
                    id={group.slug}
                    aria-labelledby={`${group.slug}-heading`}
                    layout={!reduce}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="scroll-mt-40"
                  >
                    <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h2
                          id={`${group.slug}-heading`}
                          className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
                        >
                          {group.label}
                        </h2>
                        <p className="mt-1.5 max-w-xl text-sm text-muted">
                          {group.blurb}
                        </p>
                      </div>
                      <span className="text-xs tracking-[0.16em] text-muted uppercase">
                        {group.courses.length} programmes
                      </span>
                    </div>

                    <Stagger
                      as="ul"
                      className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                      gap={0.06}
                    >
                      {group.courses.map((course) => (
                        <FadeUp as="li" key={course.slug}>
                          <CourseCard course={course} />
                        </FadeUp>
                      ))}
                    </Stagger>
                  </motion.section>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
