"use client";

import { ArrowUpRight, Briefcase, TrendingUp } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/**
 * Career outcomes: one spotlight card for the headline role with its indicative
 * bands, then every adjacent destination as a card of its own.
 *
 * The bands are labelled as observed market quotes rather than as a guarantee —
 * the copy in `ai-course.ts` says so explicitly, and this component keeps that
 * caveat visible instead of burying it.
 */
export default function AiCareers({ view }: { view: AiCourseView }) {
  const { spotlight } = view.careers;

  return (
    <section
      id="ai-careers"
      aria-labelledby="ai-careers-heading"
      className="relative isolate overflow-hidden bg-brand-50/40 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 -right-40 size-[34rem] rounded-full bg-brand-100/50 blur-[130px]"
      />

      <div className="container-page">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <AiHead
              id="ai-careers-heading"
              eyebrow="Career outcomes"
              heading={view.careers.heading}
              accent={view.careers.accent}
              body={view.careers.body}
            />
          </div>

          {/* ----------------------------------------------- spotlight card */}
          <FadeUp standalone className="lg:col-span-6">
            {/* The one dark card on a light panel — it is the headline number,
                and the contrast is what makes it read as the headline. */}
            <div className="relative isolate overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-[0_35px_80px_-45px_rgb(15_23_42/0.8)]">
              <span
                aria-hidden="true"
                className="circuit-texture absolute inset-0 opacity-20"
              />
              <span
                aria-hidden="true"
                className="absolute -top-24 -right-24 size-56 rounded-full bg-brand-500/25 blur-3xl"
              />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
                  <Briefcase
                    className="size-4 text-brand-300"
                    aria-hidden="true"
                  />
                  Most direct destination
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/25 ring-inset">
                  <TrendingUp className="size-3.5" aria-hidden="true" />
                  {spotlight.demand} demand
                </span>
              </div>

              <h3 className="font-display relative mt-5 text-2xl font-semibold text-white sm:text-3xl">
                {spotlight.role}
              </h3>

              <dl className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4">
                  <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-white/40 uppercase">
                    Entry level
                  </dt>
                  <dd className="font-display mt-1.5 text-xl font-semibold text-white">
                    {spotlight.entry}
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4">
                  <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-white/40 uppercase">
                    3 – 5 years in
                  </dt>
                  <dd className="font-display mt-1.5 text-xl font-semibold text-brand-300">
                    {spotlight.senior}
                  </dd>
                </div>
              </dl>

              <p className="relative mt-4 text-xs text-white/45">
                {spotlight.openings}
              </p>
            </div>
          </FadeUp>
        </div>

        {/* ------------------------------------------------------ role grid */}
        <Stagger
          as="ul"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {view.careers.roles.map((role) => (
            <FadeUp
              as="li"
              key={role.role}
              className="group rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_28px_60px_-45px_rgb(15_23_42/0.5)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base leading-snug font-semibold text-ink">
                  {role.role}
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-line transition-all duration-300 group-hover:text-brand-600"
                />
              </div>

              <p className="font-display mt-3 text-sm font-semibold text-brand-700">
                {role.band}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {role.blurb}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
