import { after12Journey } from "@/lib/after-12th";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Dark three-phase timeline: the shape every after-12th track runs on. */
export default function After12Journey() {
  return (
    <section
      data-cursor="light"
      id="how-it-runs"
      aria-labelledby="after12-journey-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="absolute -top-32 left-1/3 size-[34rem] rounded-full bg-brand-600/20 blur-[140px]" />
      </div>

      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow dark>{after12Journey.eyebrow}</Eyebrow>
          <SplitHeading
            id="after12-journey-heading"
            text={after12Journey.heading}
            accent={after12Journey.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-2xl text-base leading-relaxed text-white/60">
            {after12Journey.body}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {after12Journey.phases.map((phase, i) => (
            <Reveal as="li" key={phase.code} delay={i * 110}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]">
                {/* Connector between cards — desktop only. */}
                {i < after12Journey.phases.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-12 -right-3 hidden h-px w-6 bg-white/15 lg:block"
                  />
                )}

                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-400 uppercase">
                    {phase.code}
                  </span>
                  <span className="text-xs text-white/40">{phase.months}</span>
                </div>

                <h3 className="font-display mt-5 text-xl font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {phase.body}
                </p>

                <ul className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-white/70"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 shrink-0 rounded-full bg-gold-300"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
