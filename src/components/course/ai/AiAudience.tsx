"use client";

import type { AiCourseView } from "@/lib/ai-course";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/**
 * "Who can do this course" — one card per persona.
 *
 * The list is seven long, which leaves a hole in a three-column grid, so the
 * last card is widened to fill the row rather than leaving a gap that reads as
 * a layout bug.
 */
export default function AiAudience({ view }: { view: AiCourseView }) {
  const last = view.audience.length - 1;

  return (
    <section
      id="ai-audience"
      aria-labelledby="ai-audience-heading"
      className="relative isolate overflow-hidden bg-brand-50/40 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 -left-40 size-[32rem] rounded-full bg-brand-100/50 blur-[130px]"
      />

      <div className="container-page">
        <AiHead
          id="ai-audience-heading"
          eyebrow="Eligibility"
          heading="Who can do"
          accent="this course"
          body="No entrance test and no prior coding requirement — the track opens at fundamentals. What it does need is consistency across the full programme."
        />

        <Stagger
          as="ul"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {view.audience.map((persona, i) => (
            <FadeUp
              as="li"
              key={persona.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_28px_60px_-45px_rgb(15_23_42/0.5)]",
                /* Widen the odd card out so the last row is never half empty. */
                i === last && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute -top-16 -right-16 size-32 rounded-full bg-brand-100/60 blur-3xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0"
              />

              <div className="relative flex items-center justify-between gap-3">
                <span className="font-display text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
                  {persona.tag}
                </span>
                <span className="font-display text-xs text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display relative mt-4 text-lg leading-snug font-semibold text-ink">
                {persona.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
                {persona.body}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
