"use client";

import { Globe2, Layers, TrendingUp, Wrench, type LucideIcon } from "lucide-react";
import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

const DRIVER_ICONS: LucideIcon[] = [TrendingUp, Layers, Wrench, Globe2];

const TINTS = [
  "bg-brand-50 text-brand-600",
  "bg-gold-100 text-gold-700",
  "bg-accent/10 text-accent",
  "bg-brand-100 text-brand-800",
] as const;

/**
 * Splits the closing note into its opening sentence and the rest.
 *
 * The two halves do different jobs — one states the promise, the other itemises
 * what backs it — so they are set at different weights rather than run together
 * as one grey paragraph. If the copy is ever rewritten as a single sentence,
 * `rest` comes back empty and only the lead renders.
 */
function splitLead(text: string): [string, string] {
  /* `[\s\S]` rather than the `s` flag, which this tsconfig target predates. */
  const match = /^(.*?[.!?])\s+([\s\S]*)$/.exec(text);
  return match ? [match[1], match[2]] : [text, ""];
}

/**
 * Future scope. Sits after the careers/outcomes panel on every course page —
 * the "where does this actually go" answer, framed as durability rather than a
 * number. It closes on what the student walks away holding; "markets move" is
 * still said out loud, but as the reason the foundation matters rather than as
 * a disclaimer.
 */
export default function CourseFutureScope({ course }: { course: Course }) {
  const { futureScope } = course;
  const [lead, rest] = splitLead(futureScope.horizon);

  return (
    <section
      id="future-scope"
      aria-labelledby="future-scope-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              Future scope
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text={futureScope.heading}
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="future-scope-heading" className="sr-only">
            {futureScope.heading}
          </span>
          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-muted"
          >
            {futureScope.intro}
          </FadeUp>
        </div>

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16"
          gap={0.08}
        >
          {futureScope.drivers.map((driver, i) => {
            const Icon = DRIVER_ICONS[i % DRIVER_ICONS.length];
            const tint = TINTS[i % TINTS.length];

            return (
              <FadeUp
                as="li"
                key={driver.title}
                className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_20px_40px_-30px_rgb(15_23_42/0.5)]"
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl ${tint}`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="font-display block text-base leading-snug font-semibold text-ink">
                    {driver.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
                    {driver.body}
                  </span>
                </span>
              </FadeUp>
            );
          })}
        </Stagger>

        <FadeUp standalone className="mt-12 lg:mt-16">
          <figure
            data-cursor="light"
            className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-3xl bg-ink px-7 py-10 text-white sm:px-12 sm:py-14"
          >
            {/* Deep ground, the same recipe as the page's hero at a quieter
                intensity — so the closing promise lands as the section's full
                stop rather than one more white card in the stack. */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
              <div className="dot-matrix absolute inset-0 opacity-[0.06]" />
              <div className="absolute -top-24 -right-16 size-72 rounded-full bg-brand-600/25 blur-[110px]" />
              <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-accent/45 blur-[110px]" />
              <div className="tech-noise absolute inset-0 opacity-[0.04] mix-blend-overlay" />
            </div>

            <figcaption className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              <span className="h-px w-6 bg-gold-300/50" aria-hidden="true" />
              What you walk away with
            </figcaption>

            <blockquote className="mt-6">
              <p className="font-display text-xl leading-[1.4] font-medium text-balance text-white sm:text-2xl">
                {lead}
              </p>
              {rest ? (
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/60">
                  {rest}
                </p>
              ) : null}
            </blockquote>
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}
