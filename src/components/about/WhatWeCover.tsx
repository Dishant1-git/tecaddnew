import { whatWeCover } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function WhatWeCover() {
  return (
    <Section
      id="what-we-cover"
      eyebrow={whatWeCover.eyebrow}
      heading={whatWeCover.heading}
      accent={whatWeCover.accent}
      body={whatWeCover.body}
      centered
    >
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whatWeCover.domains.map((domain, i) => {
          const Icon = aboutIcon(domain.icon);
          return (
            <Reveal
              as="li"
              key={domain.title}
              delay={(i % 3) * 90}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
            >
              {/* Hairline that fills in from the left on hover. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full"
              />

              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>

              <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                {domain.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {domain.body}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {domain.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-brand-50/60 px-2 py-1 text-[0.7rem] font-medium text-ink-mute"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
