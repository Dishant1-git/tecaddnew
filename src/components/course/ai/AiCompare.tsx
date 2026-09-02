"use client";

import { Check, X } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { site } from "@/lib/content";
import { FadeUp } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiHead from "./AiHead";

/**
 * Side-by-side comparison against the generic regional institute.
 *
 * A real <table> rather than a grid of divs — this is tabular data, and the
 * row/column relationship is what makes it readable with a screen reader. The
 * wrapper scrolls horizontally so narrow screens never force the page body to.
 */
export default function AiCompare({ view }: { view: AiCourseView }) {
  const [askCol, oursCol, theirsCol] = view.comparison.columns;

  return (
    <section
      data-cursor="light"
      id="ai-compare"
      aria-labelledby="ai-compare-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop intensity="soft" />

      <div className="container-page">
        <AiHead
          id="ai-compare-heading"
          eyebrow="Due diligence"
          heading={view.comparison.heading}
          accent={view.comparison.accent}
          body={view.comparison.body}
          dark
          centered
          className="mx-auto"
        />

        <FadeUp standalone className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                {site.name} {site.city} compared with a typical training
                institute in the region
              </caption>

              <thead>
                <tr className="bg-white/[0.06]">
                  <th
                    scope="col"
                    className="px-6 py-5 text-sm font-semibold tracking-wide text-white"
                  >
                    {askCol}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-sm font-semibold tracking-wide text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-brand-400"
                      />
                      {oursCol}
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-sm font-semibold tracking-wide text-white/45"
                  >
                    {theirsCol}
                  </th>
                </tr>
              </thead>

              <tbody>
                {view.comparison.rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 1 ? "bg-white/[0.02]" : undefined}
                  >
                    <th
                      scope="row"
                      className="border-t border-white/8 px-6 py-4 text-sm font-medium text-white/85"
                    >
                      {row.label}
                    </th>

                    <td className="border-t border-white/8 px-6 py-4 text-sm text-white/70">
                      <span className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                          <Check
                            className="size-3"
                            strokeWidth={3.5}
                            aria-hidden="true"
                          />
                        </span>
                        {row.ours}
                      </span>
                    </td>

                    <td className="border-t border-white/8 px-6 py-4 text-sm text-white/40">
                      <span className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/10 text-white/40">
                          <X
                            className="size-3"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>
                        {row.theirs}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        <FadeUp
          standalone
          as="p"
          className="mt-5 text-center text-xs text-white/35"
        >
          &ldquo;Typical institute&rdquo; describes the common pattern we hear
          about from students who transfer in — not any single named centre.
        </FadeUp>
      </div>
    </section>
  );
}
