"use client";

import { Boxes } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiHead from "./AiHead";

/**
 * The portfolio grid. Each card names the build, what it does, the stage of the
 * course it belongs to, and the tools it is built with — the four things a
 * prospective student uses to judge whether the work is real.
 */
export default function AiProjects({ view }: { view: AiCourseView }) {
  return (
    <section
      data-cursor="light"
      id="ai-projects"
      aria-labelledby="ai-projects-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop />

      <div className="container-page">
        <AiHead
          id="ai-projects-heading"
          eyebrow="Portfolio"
          heading="Hands-on projects"
          accent="you will ship"
          body="Every one of these is built by you, reviewed line by line, and documented so a hiring manager can read it without you in the room."
          dark
        />

        <Stagger
          as="ul"
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {view.projects.map((project, i) => (
            <FadeUp
              as="li"
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/35 hover:bg-white/[0.06]"
            >
              <span
                aria-hidden="true"
                className="absolute -top-20 -right-20 size-40 rounded-full bg-brand-500/12 blur-3xl"
              />

              <div className="relative flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/12 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-brand-200 uppercase ring-1 ring-brand-400/25 ring-inset">
                  <Boxes className="size-3" aria-hidden="true" />
                  {project.level}
                </span>
                <span className="font-display text-xs text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display relative mt-5 text-lg leading-snug font-semibold text-white">
                {project.title}
              </h3>
              <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-white/55">
                {project.body}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-1.5 border-t border-white/8 pt-4">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/6 px-2 py-1 text-[0.7rem] text-white/50 ring-1 ring-white/10 ring-inset"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
