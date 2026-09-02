import { Quote } from "lucide-react";
import { founderProfile, founderStory } from "@/lib/founder-content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function FounderStory() {
  return (
    <Section
      id="story"
      eyebrow={founderStory.eyebrow}
      heading={founderStory.heading}
      body={founderStory.body}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* --------------------------------------------------------- timeline */}
        <ol className="relative flex flex-col gap-10 pl-8">
          <span aria-hidden="true" className="absolute top-1.5 bottom-1.5 left-[0.3rem] w-px bg-line" />
          {founderStory.milestones.map((milestone, i) => (
            <Reveal as="li" key={milestone.tag} delay={i * 100} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-8 grid size-2.5 -translate-x-1/2 place-items-center rounded-full bg-brand-600 ring-4 ring-brand-100"
              />
              <span className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                {milestone.tag}
              </span>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink">{milestone.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{milestone.body}</p>
            </Reveal>
          ))}
        </ol>

        {/* ---------------------------------------------------- closing quote */}
        <Reveal delay={120}>
          <figure className="relative rounded-3xl border border-line bg-brand-50/50 p-8 shadow-[0_18px_50px_-30px_rgb(15_23_42/0.35)] lg:p-10">
            <Quote aria-hidden="true" className="absolute top-7 right-7 size-10 text-brand-200" />
            <blockquote className="font-display relative text-xl leading-relaxed font-medium text-balance text-ink lg:text-2xl">
              “{founderStory.closingQuote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-5 text-sm text-muted">
              Mr. {founderProfile.name}, {founderProfile.role}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
