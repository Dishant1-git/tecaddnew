"use client";

import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Cpu,
  Database,
  LineChart,
  Network,
  Workflow,
} from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiIconTile from "./AiIconTile";
import AiHead from "./AiHead";
import AiLogoMark from "./AiLogoMark";

/** The six disciplines the programme covers end to end. */
const DISCIPLINES = [
  { Icon: Database, label: "Data", meta: "Clean, label, split" },
  { Icon: Braces, label: "Code", meta: "Python, notebooks, Git" },
  { Icon: LineChart, label: "Models", meta: "Train and evaluate" },
  { Icon: Network, label: "Serving", meta: "APIs and inference" },
  { Icon: Workflow, label: "Pipelines", meta: "Reproducible runs" },
  { Icon: Cpu, label: "Compute", meta: "GPUs and cost" },
];

/**
 * The discipline board: the logo mark above a grid of animated capability
 * tiles.
 *
 * Replaces the radial diagram this section used to carry — a grid states the
 * same six disciplines without implying a hub-and-spoke relationship that the
 * curriculum does not actually have.
 */
function AiDisciplineBoard() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <div className="mb-3 aspect-[16/7]">
        <AiLogoMark caption="end to end" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {DISCIPLINES.map((item, i) => (
          <AiIconTile
            key={item.label}
            Icon={item.Icon}
            label={item.label}
            meta={item.meta}
            index={i}
            dark
          />
        ))}
      </div>

      <div className="absolute inset-10 -z-10 rounded-full bg-brand-500/20 blur-[80px]" />
    </div>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiReadiness({ view }: { view: AiCourseView }) {
  return (
    <section
      data-cursor="light"
      id="ai-readiness"
      aria-labelledby="ai-readiness-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeUp standalone className="lg:col-span-5">
            <AiDisciplineBoard />
          </FadeUp>

          <div className="lg:col-span-7">
            <AiHead
              id="ai-readiness-heading"
              eyebrow="Built for hiring, not for marks"
              heading={view.readiness.heading}
              accent={view.readiness.accent}
              body={view.readiness.body}
              dark
            />

            {/* A numbered ladder rather than a tick list — these are sequential
                commitments about how the course runs, not interchangeable
                feature bullets. */}
            <Stagger as="ol" className="mt-8 space-y-3" gap={0.07}>
              {view.readiness.points.map((point, i) => (
                <FadeUp
                  as="li"
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 transition-colors duration-300 hover:border-brand-400/30 hover:bg-white/[0.06]"
                >
                  <span className="font-display mt-px grid size-6 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-[0.7rem] font-semibold text-brand-300 ring-1 ring-brand-400/25 ring-inset">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-white/65">
                    {point}
                  </span>
                </FadeUp>
              ))}
            </Stagger>

            <div className="mt-9 flex flex-wrap items-stretch gap-3">
              {view.readiness.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs text-white/45">{metric.label}</p>
                </div>
              ))}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-medium text-white ring-1 ring-white/25 ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Talk to a counsellor
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
