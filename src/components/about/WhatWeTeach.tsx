import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatWeTeach } from "@/lib/about-content";
import { courseCategories, summariesByCategory } from "@/lib/courses";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/** Courses listed per category before the panel collapses into a "+N more". */
const SHOWN_PER_CATEGORY = 7;

/**
 * Reads the live course catalogue rather than repeating it in the About copy,
 * so a course added to `courses.ts` shows up here without an edit.
 */
export default function WhatWeTeach() {
  return (
    <Section
      id="what-we-teach"
      eyebrow={whatWeTeach.eyebrow}
      heading={whatWeTeach.heading}
      accent={whatWeTeach.accent}
      body={whatWeTeach.body}
      aside={
        <Button href={whatWeTeach.cta.href} variant="outline" size="md">
          {whatWeTeach.cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      }
    >
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {courseCategories.map((category, i) => {
          const courses = summariesByCategory(category.label);
          const shown = courses.slice(0, SHOWN_PER_CATEGORY);
          const remaining = courses.length - shown.length;

          return (
            <Reveal
              key={category.slug}
              delay={(i % 2) * 90}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 transition-colors duration-300 hover:border-brand-200"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {category.label}
                </h3>
                <span className="shrink-0 text-xs tracking-[0.12em] text-muted uppercase">
                  {courses.length} courses
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {category.blurb}
              </p>

              <ul className="mt-6 flex flex-1 flex-wrap gap-2">
                {shown.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center rounded-lg border border-line bg-brand-50/50 px-3 py-1.5 text-sm text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:text-brand-700"
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
                {remaining > 0 && (
                  <li>
                    <Link
                      href={`/courses#${category.slug}`}
                      className="inline-flex items-center rounded-lg border border-dashed border-brand-300 px-3 py-1.5 text-sm font-medium text-brand-600 transition-colors duration-300 hover:bg-brand-50"
                    >
                      +{remaining} more
                    </Link>
                  </li>
                )}
              </ul>
            </Reveal>
          );
        })}
      </div>

      {/* Formats that sit alongside the course catalogue. */}
      <ul className="mt-5 grid gap-5 sm:grid-cols-3">
        {whatWeTeach.tracks.map((track, i) => (
          <Reveal as="li" key={track.title} delay={i * 90}>
            <Link
              href={track.href}
              className="group flex h-full flex-col rounded-2xl border border-line bg-gradient-to-br from-brand-600 to-brand-500 p-6 text-white shadow-[0_20px_50px_-28px_rgb(37_99_235/0.9)] transition-all duration-300 hover:-translate-y-1 hover:from-brand-500 hover:to-brand-600"
            >
              <h3 className="font-display text-lg leading-snug font-semibold">
                {track.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/75">
                {track.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                View programmes
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
