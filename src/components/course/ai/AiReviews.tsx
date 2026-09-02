"use client";

import { Star } from "lucide-react";
import type { Course } from "@/lib/courses";
import type { AiCourseView } from "@/lib/ai-course";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={cn(
            "size-3.5",
            star <= rating ? "fill-amber-400 text-amber-400" : "text-line",
          )}
        />
      ))}
    </span>
  );
}

/**
 * Student reviews: the aggregate rail on the left — average, count and the
 * star distribution — with the individual quotes beside it.
 *
 * The distribution bars and the headline average come from the same source in
 * `courses.ts`, so the two can never contradict each other.
 */
export default function AiReviews({
  course,
  view,
}: {
  course: Course;
  view: AiCourseView;
}) {
  const { reviews } = course;

  return (
    <section
      id="ai-reviews"
      aria-labelledby="ai-reviews-heading"
      className="border-t border-line bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <AiHead
          id="ai-reviews-heading"
          eyebrow="Student reviews"
          heading={view.reviewsHeading.heading}
          accent={view.reviewsHeading.accent}
          body={view.reviewsHeading.body}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ---------------------------------------------------- aggregate */}
          <FadeUp standalone className="lg:col-span-4">
            <div className="rounded-3xl border border-line bg-white p-7 lg:sticky lg:top-28">
              <p className="font-display text-5xl font-semibold text-ink">
                {reviews.average}
                <span className="text-2xl text-muted">/5</span>
              </p>
              <div className="mt-3">
                <Stars rating={Math.round(Number(reviews.average))} />
              </div>
              <p className="mt-2 text-sm text-muted">
                {reviews.total} verified reviews
              </p>

              <ul className="mt-6 space-y-2.5">
                {reviews.distribution.map((row) => (
                  <li key={row.stars} className="flex items-center gap-3">
                    <span className="w-10 shrink-0 text-xs text-muted">
                      {row.stars} star
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1.5 flex-1 overflow-hidden rounded-full bg-line"
                    >
                      <span
                        className="block h-full rounded-full bg-brand-600"
                        style={{ width: `${row.percent}%` }}
                      />
                    </span>
                    <span className="w-9 shrink-0 text-right text-xs text-muted">
                      {row.percent}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* ------------------------------------------------------ quotes */}
          <Stagger
            as="ul"
            className="grid gap-4 sm:grid-cols-2 lg:col-span-8"
            gap={0.06}
          >
            {reviews.items.map((review) => (
              <FadeUp
                as="li"
                key={review.name + review.meta}
                className="flex flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-45px_rgb(15_23_42/0.55)]"
              >
                <Stars rating={review.rating} />

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-mute">
                  {review.quote}
                </blockquote>

                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden="true"
                    className="font-display grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white"
                  >
                    {review.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="font-display block truncate text-sm font-semibold text-ink">
                      {review.name}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {review.role} · {review.meta}
                    </span>
                  </span>
                </div>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
