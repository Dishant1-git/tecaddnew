"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/**
 * The proof panel: what a hiring manager can actually check, set against a
 * strip of campus plates. Kept deliberately short — it is a claim about
 * evidence, so a long list would undercut it.
 */
export default function AiVerify({ view }: { view: AiCourseView }) {
  return (
    <section
      id="ai-verify"
      aria-labelledby="ai-verify-heading"
      className="relative isolate overflow-hidden border-y border-line bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -right-40 -bottom-40 size-[34rem] rounded-full bg-brand-100/45 blur-[130px]"
      />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <AiHead
              id="ai-verify-heading"
              eyebrow="Evidence over claims"
              heading={view.verify.heading}
              accent={view.verify.accent}
              body={view.verify.body}
            />

            <Stagger as="ul" className="mt-8 space-y-3" gap={0.07}>
              {view.verify.points.map((point) => (
                <FadeUp
                  as="li"
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-brand-50/60 px-4 py-3.5 text-sm leading-relaxed text-ink-mute"
                >
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  {point}
                </FadeUp>
              ))}
            </Stagger>

            <FadeUp standalone className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-600 px-8 text-base font-medium whitespace-nowrap text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Request the full syllabus
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </FadeUp>
          </div>

          {/* ------------------------------------------------- campus plates */}
          <FadeUp standalone className="lg:col-span-6">
            <div aria-hidden="true" className="grid grid-cols-3 gap-3">
              {[
                {
                  span: "col-span-3",
                  ratio: "aspect-[16/7]",
                  label: "Lab floor",
                },
                {
                  span: "col-span-2",
                  ratio: "aspect-[16/10]",
                  label: "Review desk",
                },
                {
                  span: "col-span-1",
                  ratio: "aspect-[16/10]",
                  label: "Demo day",
                },
              ].map((plate) => (
                <div
                  key={plate.label}
                  className={`${plate.span} ${plate.ratio} relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-brand-800 via-brand-600/70 to-accent shadow-[0_20px_50px_-40px_rgb(15_23_42/0.7)]`}
                >
                  <span className="circuit-texture absolute inset-0 opacity-35" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium tracking-wide text-white/75">
                    {plate.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
