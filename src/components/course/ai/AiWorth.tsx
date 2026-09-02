"use client";

import { Quote } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { cn } from "@/lib/utils";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiHead from "./AiHead";

/**
 * A campus photo slot. Photography for the Amritsar centre has not landed yet,
 * so each frame renders a tinted circuit plate at the right aspect ratio —
 * swapping in a real <Image> later is a drop-in, and the caption stays.
 */
function PhotoFrame({
  caption,
  meta,
  tone,
}: {
  caption: string;
  meta: string;
  tone: string;
}) {
  return (
    <figure className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-white/[0.06]">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden bg-gradient-to-br",
          tone,
        )}
      >
        <span
          aria-hidden="true"
          className="circuit-texture absolute inset-0 opacity-40"
        />
        <span
          aria-hidden="true"
          className="dot-matrix absolute inset-0 opacity-[0.07]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
        />
        <Quote
          aria-hidden="true"
          className="absolute right-5 bottom-5 size-10 text-white/15"
        />
      </div>

      <figcaption className="p-5">
        <p className="font-display text-base leading-snug font-semibold text-white">
          {caption}
        </p>
        <p className="mt-1 text-sm text-white/50">{meta}</p>
      </figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiWorth({ view }: { view: AiCourseView }) {
  return (
    <section
      data-cursor="light"
      id="ai-worth"
      aria-labelledby="ai-worth-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop intensity="soft" />

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <AiHead
                id="ai-worth-heading"
                eyebrow="The honest pitch"
                heading={view.worth.heading}
                accent={view.worth.accent}
                dark
              />

              <Stagger className="mt-6" gap={0.08}>
                {view.worth.paragraphs.map((paragraph) => (
                  <FadeUp
                    as="p"
                    key={paragraph.slice(0, 32)}
                    className="mt-4 text-base leading-relaxed text-white/55"
                  >
                    {paragraph}
                  </FadeUp>
                ))}
              </Stagger>
            </div>
          </div>

          <Stagger
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
            gap={0.1}
          >
            {view.worth.frames.map((frame) => (
              <FadeUp key={frame.caption}>
                <PhotoFrame {...frame} />
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
