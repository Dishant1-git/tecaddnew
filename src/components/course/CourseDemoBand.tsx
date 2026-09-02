"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/content";
import type { Course } from "@/lib/courses";
import { FadeUp } from "@/components/ui/Motion";

/**
 * The counsellor nudge, placed directly under the duration table.
 *
 * That table is the page's one genuine decision point — three durations, the
 * same syllabus, no obviously right answer — so the offer here is a phone call
 * rather than an enrolment button. The full enquiry form still closes the page;
 * this is the shortcut for the reader who only has one question left.
 *
 * A course carrying its own `demo` copy replaces every string below with it;
 * everything else keeps the generic counsellor nudge.
 */
export default function CourseDemoBand({ course }: { course: Course }) {
  const demo = course.demo;

  return (
    <section
      aria-labelledby="demo-band-heading"
      className="border-t border-line bg-brand-50/40 py-14 lg:py-16"
    >
      <div className="container-page">
        <FadeUp
          standalone
          className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-900 via-ink to-brand-800 p-8 text-white sm:p-10 lg:p-12"
        >
          <span
            aria-hidden="true"
            className="absolute -top-24 -right-16 size-72 rounded-full bg-brand-500/25 blur-[120px]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-gold-300/40 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                {demo?.eyebrow ?? "Get started today"}
              </span>

              <h2
                id="demo-band-heading"
                className="font-display mt-5 text-2xl leading-[1.2] font-semibold text-balance sm:text-3xl"
              >
                {demo?.heading ?? `Not sure if ${course.title} is the right fit?`}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {demo?.body ??
                  `One call with a counsellor is usually enough to find out. Book a free demo class and see the ${site.city} lab before you decide.`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={site.phoneHref}
                className="group inline-flex h-13 items-center gap-3 rounded-full bg-white px-6 text-base font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
                <span className="grid size-7 place-items-center rounded-full bg-gold-300 text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </a>

              {/* A course with its own copy is asking for a call back, and the
                  form that takes one is further down this same page. */}
              <Link
                href={demo ? "#enquire" : "/contact"}
                className="inline-flex h-13 items-center rounded-full px-6 text-base font-medium text-white ring-1 ring-white/25 ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/50"
              >
                {demo?.action ?? "Book a free demo"}
              </Link>
            </div>
          </div>

          {demo?.note && (
            <p className="relative mt-8 text-sm leading-relaxed text-white/55">
              {demo.note}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
