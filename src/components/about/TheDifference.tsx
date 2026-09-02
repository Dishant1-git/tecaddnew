import { Check, X } from "lucide-react";
import { theDifference } from "@/lib/about-content";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * A side-by-side comparison rather than a list of adjectives. Each row states
 * the ordinary version of a practice next to ours, so the claim is checkable.
 */
export default function TheDifference() {
  return (
    <section
      data-cursor="light"
      id="the-difference"
      aria-labelledby="the-difference-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="absolute top-0 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-700/25 blur-[150px]" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Eyebrow dark>{theDifference.eyebrow}</Eyebrow>
          <SplitHeading
            id="the-difference-heading"
            text={theDifference.heading}
            accent={theDifference.accent}
            className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-2xl text-base leading-relaxed text-white/60">
            {theDifference.body}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-14 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-sm"
        >
          {/* Column headers, desktop only — the mobile layout labels inline. */}
          <div className="hidden grid-cols-[1fr_1fr_1fr] gap-px border-b border-white/10 lg:grid">
            <span className="px-7 py-5 text-xs tracking-[0.16em] text-white/35 uppercase">
              The practice
            </span>
            <span className="px-7 py-5 text-xs tracking-[0.16em] text-white/35 uppercase">
              {theDifference.columns.typical}
            </span>
            <span className="bg-brand-600/15 px-7 py-5 text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
              {theDifference.columns.ours}
            </span>
          </div>

          <ul>
            {theDifference.rows.map((row, i) => (
              <Reveal
                as="li"
                key={row.point}
                delay={i * 60}
                className="grid gap-3 border-b border-white/8 px-6 py-6 last:border-b-0 lg:grid-cols-[1fr_1fr_1fr] lg:items-center lg:gap-0 lg:px-0 lg:py-0"
              >
                <h3 className="font-display text-base font-semibold text-white lg:px-7 lg:py-6">
                  {row.point}
                </h3>

                <p className="flex items-start gap-2.5 text-sm leading-relaxed text-white/40 lg:px-7 lg:py-6">
                  <X
                    className="mt-0.5 size-4 shrink-0 text-white/25"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="text-xs tracking-[0.12em] text-white/30 uppercase lg:hidden">
                      {theDifference.columns.typical}:{" "}
                    </span>
                    {row.typical}
                  </span>
                </p>

                <p className="flex items-start gap-2.5 rounded-xl bg-brand-600/10 p-4 text-sm leading-relaxed text-white/80 lg:h-full lg:items-center lg:rounded-none lg:bg-brand-600/[0.08] lg:px-7 lg:py-6">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-400 lg:mt-0"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="text-xs tracking-[0.12em] text-brand-300 uppercase lg:hidden">
                      {theDifference.columns.ours}:{" "}
                    </span>
                    {row.ours}
                  </span>
                </p>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-base leading-relaxed text-white/50">
            {theDifference.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
