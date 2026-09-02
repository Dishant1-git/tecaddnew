import { ArrowRight, RotateCcw } from "lucide-react";
import { outcomeLoop } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Teach → Build → Review → Place → Learn, drawn as an actual circuit: the
 * stages sit on a rail, and the closing strip carries the last stage back to
 * the first so the loop is visible rather than merely asserted.
 */
export default function OutcomeLoop() {
  return (
    <Section
      id="outcome-loop"
      eyebrow={outcomeLoop.eyebrow}
      heading={outcomeLoop.heading}
      accent={outcomeLoop.accent}
      body={outcomeLoop.body}
      centered
      className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="dot-matrix absolute inset-0 opacity-[0.35]" />
      </div>

      <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {/* Rail linking the stage markers, desktop only. */}
        <div
          aria-hidden="true"
          className="absolute top-8 right-8 left-8 hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block"
        />

        {outcomeLoop.stages.map((stage, i) => {
          const Icon = aboutIcon(stage.icon);
          return (
            <Reveal
              as="li"
              key={stage.label}
              delay={i * 90}
              className="group relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 grid size-16 place-items-center rounded-2xl border border-line bg-white text-brand-600 shadow-[0_10px_30px_-14px_rgb(37_99_235/0.6)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>

              {/* Arrow into the next stage. */}
              {i < outcomeLoop.stages.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute top-6 -right-2 hidden size-4 text-brand-400 lg:block"
                />
              )}

              <span className="mt-5 text-[0.65rem] font-bold tracking-[0.2em] text-brand-600 uppercase">
                {stage.label}
              </span>
              <h3 className="font-display mt-2 text-base font-semibold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted lg:max-w-[15rem]">
                {stage.body}
              </p>
            </Reveal>
          );
        })}
      </ol>

      {/* The return path: what the last stage feeds back into the first. */}
      <Reveal
        delay={200}
        className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-brand-300 bg-white/70 px-7 py-7 text-center sm:flex-row sm:text-left"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-[0_10px_26px_-10px_rgb(37_99_235/1)]">
          <RotateCcw className="size-5" aria-hidden="true" />
        </span>
        <p className="text-base leading-relaxed text-ink-mute">
          {outcomeLoop.note}
        </p>
      </Reveal>
    </Section>
  );
}
