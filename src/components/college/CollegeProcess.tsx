import { howItWorks } from "@/lib/college-content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Four steps in a row, tied together by one hairline. On a phone the line
 * runs down the left edge instead of across the top — `sm:` flips the axis.
 */
export default function CollegeProcess() {
  return (
    <Section
      id="how-it-works"
      eyebrow={howItWorks.eyebrow}
      heading={howItWorks.heading}
      centered
    >
      <ol className="relative mt-16 grid gap-10 sm:grid-cols-4 sm:gap-6">
        <span
          aria-hidden="true"
          className="absolute top-5 right-0 left-0 hidden h-px bg-line sm:block"
        />

        {howItWorks.steps.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 90} className="relative flex flex-col items-center text-center">
            <span className="font-display relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
              {step.number}
            </span>
            <h3 className="font-display mt-5 text-base font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
