"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Course } from "@/lib/courses";
import { site } from "@/lib/content";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * The "why now" band: the case for taking this format this intake, argued in
 * two lines rather than a paragraph.
 *
 * It sits between the overview and the calendar because that is where the
 * reader stops asking what the programme is and starts asking whether it is
 * worth the months — and the two claims made here are the ones the rest of the
 * page then has to evidence.
 *
 * The points are the overview's own checks rather than new copy: a claim that
 * appears here and nowhere else in the page is a claim nothing on the page
 * proves.
 */
export default function TrainingWhyNow({ course }: { course: Course }) {
  const points = course.overview.checks.slice(0, 2);

  return (
    <section
      id="why-now"
      aria-labelledby="why-now-heading"
      className="scroll-mt-28 bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* --------------------------------------------------- argument */}
          <div className="lg:col-span-6">
            <FadeUp standalone>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink-mute ring-1 ring-line ring-inset">
                Why now
              </span>
            </FadeUp>

            <WordsUp
              as="h2"
              text={`${course.title} is powering the next`}
              accent="generation of industry leaders"
              accentClassName="text-gold-500"
              className="mt-6 text-3xl leading-[1.12] font-semibold text-ink sm:text-4xl lg:text-[2.75rem]"
            />
            <span id="why-now-heading" className="sr-only">
              {course.title} is powering the next generation of industry leaders
            </span>

            <Stagger as="ul" className="mt-8 space-y-4" gap={0.08}>
              {points.map((point) => (
                <FadeUp
                  as="li"
                  key={point}
                  className="flex items-start gap-3 text-base leading-relaxed text-ink-mute"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200 ring-inset"
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {point}
                </FadeUp>
              ))}
            </Stagger>

            <FadeUp standalone className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center gap-2 rounded-full px-6 text-base font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:text-brand-600 hover:ring-brand-600"
              >
                Talk to a course advisor
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </FadeUp>
          </div>

          {/* ------------------------------------------------------- plate */}
          <FadeUp standalone className="lg:col-span-6">
            {/* Photography for the Amritsar centre has not landed yet, so this
                is a tinted plate at the right aspect ratio — swapping in a real
                <Image> later is a drop-in and the caption stays put. */}
            <figure className="relative isolate overflow-hidden rounded-3xl border border-line bg-ink">
              <div className="relative aspect-[4/3]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-900 to-ink"
                />
                <span
                  aria-hidden="true"
                  className="circuit-texture absolute inset-0 opacity-[0.35]"
                />
                <span
                  aria-hidden="true"
                  className="dot-matrix absolute inset-0 opacity-[0.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent"
                />
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
                  Reviewed by mentors · built for interviews
                </p>
                <p className="font-display mt-2 text-lg leading-snug font-semibold text-white">
                  Live client work from week one, at the {site.city} lab.
                </p>
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
