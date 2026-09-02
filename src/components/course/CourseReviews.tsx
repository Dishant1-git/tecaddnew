"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Quote, Star } from "lucide-react";
import type { Course, CourseReview } from "@/lib/courses";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";
import { EASE, FadeUp, WordsUp } from "@/components/ui/Motion";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span
      className={cn("flex gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < rating ? "fill-amber-400 text-amber-400" : "fill-line text-line",
          )}
        />
      ))}
    </span>
  );
}

function ReviewCard(review: CourseReview) {
  return (
    <article className="flex h-full w-[19rem] flex-col rounded-3xl border border-line bg-white p-7 transition-colors duration-300 hover:border-brand-200 sm:w-[23rem]">
      <div className="flex items-start justify-between gap-4">
        <Stars rating={review.rating} />
        <Quote className="size-5 shrink-0 text-brand-200" aria-hidden="true" />
      </div>

      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-mute">
        {review.quote}
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className="font-display grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700"
        >
          {review.initials}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="flex items-center gap-1.5">
            <span className="truncate text-sm font-semibold text-ink">
              {review.name}
            </span>
            <BadgeCheck
              className="size-3.5 shrink-0 text-brand-600"
              aria-label="Verified student"
            />
          </span>
          <span className="truncate text-xs text-muted">{review.role}</span>
        </span>
        <span className="ml-auto hidden shrink-0 text-right text-[0.7rem] leading-tight text-muted sm:block">
          {review.meta}
        </span>
      </footer>
    </article>
  );
}

/** Fraction of full speed a hovered row eases down to under "slow". */
const HOVER_SLOW_FACTOR = 0.2;

/**
 * Student reviews for a single course.
 *
 * Sits between the project section and the FAQ: by that point the reader knows
 * what they would build, so the next question is whether anyone who did it
 * thought it was worth the money.
 *
 * The cards ride two counter-scrolling marquees rather than sitting in a grid —
 * deliberately slower than the homepage testimonial rows, because these are
 * longer, course-specific quotes people are meant to read rather than skim.
 * Reduced motion stops both rows (globals.css).
 *
 * `hoverBehavior` decides what a pointer over a row does: "pause" stops it dead
 * (the /courses default), "slow" eases it down to a crawl and keeps it moving,
 * which is what the after-12th pages use.
 */
export default function CourseReviews({
  course,
  hoverBehavior = "pause",
}: {
  course: Course;
  hoverBehavior?: "pause" | "slow";
}) {
  const { reviews } = course;
  const reduce = useReducedMotion();
  const slowFactor = hoverBehavior === "slow" ? HOVER_SLOW_FACTOR : undefined;

  const half = Math.ceil(reviews.items.length / 2);
  const rowOne = reviews.items.slice(0, half);
  const rowTwo = reviews.items.slice(half);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="overflow-hidden border-t border-line bg-gradient-to-b from-brand-50/60 to-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          {/* ------------------------------------------------------- copy */}
          <div className="lg:max-w-xl">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                Student reviews
              </span>
            </FadeUp>

            <WordsUp
              as="h2"
              text="What the last few batches"
              accent="actually said"
              accentClassName="text-gold-500"
              className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
            />
            <span id="reviews-heading" className="sr-only">
              {course.title} course reviews
            </span>

            <FadeUp
              standalone
              as="p"
              className="mt-5 text-base leading-relaxed text-muted"
            >
              Collected from students who completed the{" "}
              {course.title.toLowerCase()} programme at the {site.city} campus,
              across morning, evening and weekend batches.{" "}
              {hoverBehavior === "slow"
                ? "Hover a card to slow the row right down and read it."
                : "Hover a card to stop the row and read it."}
            </FadeUp>
          </div>

          {/* --------------------------------------------- rating summary */}
          <FadeUp
            standalone
            className="w-full shrink-0 rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-48px_rgb(15_23_42/0.5)] lg:w-[22rem]"
          >
            <div className="flex items-end gap-3">
              <p className="font-display text-5xl leading-none font-semibold text-ink">
                {reviews.average}
              </p>
              <p className="pb-1 text-sm text-muted">out of 5</p>
              <Stars rating={5} className="mb-1.5 ml-auto" />
            </div>
            <p className="mt-2 text-sm text-muted">
              {reviews.total} verified reviews from {site.city} students
            </p>

            <dl className="mt-6 space-y-2">
              {reviews.distribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <dt className="w-8 shrink-0 text-xs text-muted tabular-nums">
                    {row.stars}★
                  </dt>
                  <dd className="flex flex-1 items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-1.5 flex-1 overflow-hidden rounded-full bg-line"
                    >
                      <motion.span
                        className="block h-full rounded-full bg-amber-400"
                        initial={reduce ? false : { width: 0 }}
                        whileInView={{ width: `${row.percent}%` }}
                        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                        transition={{ duration: 0.9, ease: EASE }}
                      />
                    </span>
                    <span className="w-9 shrink-0 text-right text-xs text-muted tabular-nums">
                      {row.percent}%
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </div>

      {/* Full-bleed rows — deliberately outside the page container. */}
      <div className="mt-14 flex flex-col gap-5">
        <Marquee
          items={rowOne}
          duration={110}
          hoverSlowFactor={slowFactor}
          renderItem={(review) => <ReviewCard {...review} />}
        />
        <Marquee
          items={rowTwo}
          duration={130}
          reverse
          hoverSlowFactor={slowFactor}
          renderItem={(review) => <ReviewCard {...review} />}
        />
      </div>
    </section>
  );
}
