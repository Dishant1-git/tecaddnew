import { ourApproach } from "@/lib/about-content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Six principles on a hairline grid — the numbers do the ordering work, so the
 * cards stay quiet next to the busier sections either side.
 */
export default function OurApproach() {
  return (
    <Section
      id="our-approach"
      eyebrow={ourApproach.eyebrow}
      heading={ourApproach.heading}
      accent={ourApproach.accent}
      body={ourApproach.body}
      className="border-y border-line bg-brand-50/40"
    >
      {/* Hairlines come from a 1px grid gap over a line-coloured background. */}
      <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {ourApproach.principles.map((principle, i) => (
          <Reveal
            as="li"
            key={principle.n}
            delay={(i % 3) * 80}
            className="group flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-brand-50/60"
          >
            <span className="font-display text-4xl font-bold text-brand-100 transition-colors duration-300 group-hover:text-brand-300">
              {principle.n}
            </span>
            <h3 className="font-display mt-4 text-lg font-semibold text-ink">
              {principle.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              {principle.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
