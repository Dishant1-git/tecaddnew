import { learningToPractice } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import AboutImage from "./AboutImage";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * The practical-experience ladder: four rungs, each showing when it happens,
 * what you do, and what you are left holding afterwards.
 */
export default function LearningToPractice() {
  return (
    <Section
      id="learning-to-practice"
      eyebrow={learningToPractice.eyebrow}
      heading={learningToPractice.heading}
      accent={learningToPractice.accent}
      body={learningToPractice.body}
    >
      <ol className="mt-14 flex flex-col gap-4">
        {learningToPractice.ladder.map((rung, i) => (
          <Reveal
            as="li"
            key={rung.title}
            delay={i * 80}
            className="group grid items-center gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)] lg:grid-cols-[auto_10rem_1fr_14rem] lg:gap-8 lg:p-7"
          >
            <span className="font-display grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              {`0${i + 1}`}
            </span>

            <span className="text-[0.65rem] font-bold tracking-[0.18em] text-gold-500 uppercase">
              {rung.stage}
            </span>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {rung.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {rung.body}
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-brand-50/60 px-3.5 py-2 text-xs font-medium text-ink-mute lg:justify-self-end">
              <span className="size-1.5 rounded-full bg-brand-600" aria-hidden="true" />
              {rung.output}
            </span>
          </Reveal>
        ))}
      </ol>

      {/* The work itself, beside what it leaves you able to show. */}
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <Reveal>
          <AboutImage
            src={learningToPractice.media.image}
            alt={learningToPractice.media.alt}
            caption={learningToPractice.media.caption}
            icon={learningToPractice.media.icon}
            gradient={learningToPractice.media.gradient}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="h-full min-h-64 rounded-3xl"
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {learningToPractice.proofs.map((proof, i) => {
            const Icon = aboutIcon(proof.icon);
            return (
              <Reveal
                as="li"
                key={proof.label}
                delay={i * 90}
                className="flex gap-4 rounded-2xl border border-line bg-gradient-to-br from-brand-50/70 to-white p-6"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-line">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {proof.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {proof.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
