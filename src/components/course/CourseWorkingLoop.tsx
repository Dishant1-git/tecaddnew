"use client";

import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * The working loop — the three beats every project on the course moves through.
 *
 * It sits directly under the projects grid because it answers the question that
 * grid raises: those are the deliverables, this is how one gets made. Each step
 * is pinned to a real project from the same course so the loop reads as a
 * description of this batch rather than a generic teaching philosophy.
 */
const STEPS = [
  {
    title: "Understand",
    body: "Break a real requirement into a plan, the constraints it has to live inside, and the right tool for each part of it.",
  },
  {
    title: "Build",
    body: "Work hands-on with trainer feedback arriving while the decisions are still cheap to change.",
  },
  {
    title: "Present",
    body: "Turn the finished work into a portfolio story you can defend line by line in an interview.",
  },
];

export default function CourseWorkingLoop({ course }: { course: Course }) {
  return (
    <section
      id="working-loop"
      aria-labelledby="working-loop-heading"
      className="border-y border-line bg-brand-50/40 py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                <span aria-hidden="true" className="h-px w-6 bg-brand-600/40" />
                The working loop
              </span>
            </FadeUp>

            <WordsUp
              as="h2"
              text="Learn it. Build it."
              accent="Make it yours."
              accentClassName="text-gold-500"
              className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
            />
            <span id="working-loop-heading" className="sr-only">
              Learn it. Build it. Make it yours.
            </span>

            <FadeUp
              standalone
              as="p"
              className="mt-5 max-w-md text-base leading-relaxed text-muted"
            >
              Every project moves through the same loop: understand the brief,
              build it with guidance, then explain the decisions behind your
              work. The certificate is the receipt — the portfolio is the point.
            </FadeUp>
          </div>

          <Stagger
            as="ol"
            className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:col-span-7"
            gap={0.08}
          >
            {STEPS.map((step, i) => (
              <FadeUp
                as="li"
                key={step.title}
                className="bg-white p-7 transition-colors duration-300 hover:bg-brand-50/60"
              >
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-600/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-lg leading-snug font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>

                {course.projects[i] && (
                  <p className="mt-5 border-t border-line pt-4 text-xs font-semibold text-ink-mute">
                    {course.projects[i].title}
                  </p>
                )}
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
