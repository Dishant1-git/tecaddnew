import { howItWorks } from "@/lib/content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow={howItWorks.eyebrow}
      heading={howItWorks.heading}
      accent={howItWorks.accent}
      centered
    >
      <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        {/* Connector rail behind the step numbers, desktop only. */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
        />

        {howItWorks.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 90}
            className="relative flex flex-col items-start gap-4 lg:items-center lg:text-center"
          >
            <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-line bg-white font-display text-lg font-semibold text-brand-600 transition-colors duration-300">
              {step.n}
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted lg:max-w-[16rem]">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
