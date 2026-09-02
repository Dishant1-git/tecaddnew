import { after12Eligibility } from "@/lib/after-12th";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Six starting points a student can arrive from. */
export default function After12Eligibility() {
  return (
    <section
      id="eligibility"
      aria-labelledby="after12-eligibility-heading"
      className="py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{after12Eligibility.eyebrow}</Eyebrow>
          <SplitHeading
            id="after12-eligibility-heading"
            text={after12Eligibility.heading}
            accent={after12Eligibility.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-600"
          />
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {after12Eligibility.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {after12Eligibility.personas.map((persona, i) => (
            <Reveal as="li" key={persona.title} delay={(i % 3) * 80}>
              <Card className="h-full p-6">
                <span className="inline-flex rounded-full bg-gold-100 px-2.5 py-1 text-[0.7rem] font-medium text-gold-700">
                  {persona.tag}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {persona.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {persona.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
