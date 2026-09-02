"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { site } from "@/lib/content";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/**
 * Two beats in one panel: the "learn it, build it, make it yours" statement
 * that closes the course argument, then the six concrete reasons underneath it.
 *
 * They are kept in a single section because the statement is a claim and the
 * grid is its evidence — splitting them puts a background seam between the two
 * halves of the same thought.
 */
export default function AiAdvantages({ view }: { view: AiCourseView }) {
  return (
    <section
      id="ai-advantages"
      aria-labelledby="ai-advantages-heading"
      className="relative isolate overflow-hidden border-y border-line bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-50 blur-[130px]"
      />

      {/* ------------------------------------------------------- statement */}
      <div className="container-page">
        <div className="flex flex-col items-center gap-7 border-b border-line pb-16 text-center lg:pb-20">
          <WordsUp
            as="h2"
            text="Learn it. Build it."
            accent="Make it yours."
            accentClassName="text-gold-500"
            className="max-w-3xl text-3xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-[3.25rem]"
          />
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            The certificate is the receipt. What you actually leave with is a
            portfolio you built, notes from people who reviewed it, and the
            habit of finishing what you start.
          </p>
          <Link
            href="/contact"
            className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-600 px-8 text-base font-medium whitespace-nowrap text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Book a free demo class
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* ------------------------------------------------------- reasons */}
        <div className="mt-16">
          <AiHead
            id="ai-advantages-heading"
            eyebrow={`The ${site.name.toLowerCase()} difference`}
            heading={view.advantages.heading}
            accent={view.advantages.accent}
            body={view.advantages.body}
          />

          <Stagger
            as="ul"
            className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
            gap={0.06}
          >
            {view.advantages.items.map((item, i) => (
              <FadeUp
                as="li"
                key={item.title}
                className="group relative bg-white p-7 transition-colors duration-300 hover:bg-brand-50/60"
              >
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-600/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-lg leading-snug font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
