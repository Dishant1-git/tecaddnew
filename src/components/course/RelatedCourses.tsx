"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CourseSummary } from "@/lib/courses";
import { FadeUp, Stagger } from "@/components/ui/Motion";

export default function RelatedCourses({
  courses,
  /** Route the cards link into — the after-12th pages pass their own hub. */
  basePath = "/courses",
  allLabel = "Browse all courses",
}: {
  courses: CourseSummary[];
  basePath?: string;
  allLabel?: string;
}) {
  if (courses.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="border-t border-line bg-white py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="related-heading"
            className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            Keep exploring
          </h2>
          <Link
            href={basePath}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            {allLabel}
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-3" gap={0.09}>
          {courses.map((course) => (
            <FadeUp as="li" key={course.slug}>
              <Link
                href={`${basePath}/${course.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-34px_rgb(37_99_235/0.5)]"
              >
                <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-600 uppercase">
                  {course.category}
                </span>
                <h3 className="font-display mt-3 text-lg leading-snug font-semibold text-ink">
                  {course.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {course.tagline}
                </p>
                <span className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                  {course.duration}
                  <ArrowUpRight
                    className="size-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
