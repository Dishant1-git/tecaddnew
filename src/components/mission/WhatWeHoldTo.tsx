import { whatWeHoldTo } from "@/lib/mission-content";
import { aboutIcon } from "@/components/about/icons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function WhatWeHoldTo() {
  return (
    <Section
      id="what-we-hold-to"
      eyebrow={whatWeHoldTo.eyebrow}
      heading={whatWeHoldTo.heading}
      accent={whatWeHoldTo.accent}
      body={whatWeHoldTo.body}
      centered
      className="scroll-mt-28 border-y border-line bg-brand-50/40"
    >
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whatWeHoldTo.tenets.map((tenet, i) => {
          const Icon = aboutIcon(tenet.icon);
          return (
            <Reveal
              as="li"
              key={tenet.n}
              delay={(i % 3) * 90}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
            >
              {/* Accent bar that fills across on hover. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-3xl font-bold text-brand-100 transition-colors duration-300 group-hover:text-brand-300">
                  {tenet.n}
                </span>
              </div>

              <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                {tenet.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {tenet.body}
              </p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
