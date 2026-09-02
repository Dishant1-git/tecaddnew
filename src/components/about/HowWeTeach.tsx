import { howWeTeach } from "@/lib/about-content";
import AboutImage from "./AboutImage";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * The teaching method as a vertical timeline. Dark, so it reads as the spine
 * of the page between the two light domain sections either side of it.
 */
export default function HowWeTeach() {
  return (
    <section
      data-cursor="light"
      id="how-we-teach"
      aria-labelledby="how-we-teach-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="absolute top-1/4 left-1/4 size-[36rem] rounded-full bg-brand-700/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 size-[28rem] rounded-full bg-accent/25 blur-[130px]" />
      </div>

      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow dark>{howWeTeach.eyebrow}</Eyebrow>
          <SplitHeading
            id="how-we-teach-heading"
            text={howWeTeach.heading}
            accent={howWeTeach.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-2xl text-base leading-relaxed text-white/60">
            {howWeTeach.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* --------------------------------------------------- timeline */}
          <ol className="relative flex flex-col gap-8">
            {/* Rail behind the step markers. */}
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[1.4rem] w-px bg-gradient-to-b from-brand-500/60 via-white/15 to-transparent"
            />

            {howWeTeach.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 80}
                className="group relative flex gap-6"
              >
                <span className="font-display relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-ink text-sm font-semibold text-brand-400 transition-colors duration-300 group-hover:border-brand-500/60 group-hover:bg-brand-600 group-hover:text-white">
                  {step.n}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* ------------------------------------------------------ aside */}
          <Reveal
            delay={160}
            className="h-fit rounded-3xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm lg:sticky lg:top-28"
          >
            <AboutImage
              src={howWeTeach.aside.image}
              alt={howWeTeach.aside.alt}
              caption={howWeTeach.aside.caption}
              icon="presentation"
              tone="dark"
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="aspect-16/10 rounded-2xl"
            />

            <h3 className="font-display mt-6 text-xl font-semibold text-white">
              {howWeTeach.aside.title}
            </h3>

            <dl className="mt-6 flex flex-col">
              {howWeTeach.aside.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5 last:border-b-0"
                >
                  <dt className="text-xs tracking-[0.12em] text-white/40 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-white/85">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/20 to-accent/25 p-4">
              <p className="text-sm leading-relaxed text-white/70">
                Sit in on a live class before you enrol — ask the front desk for
                a demo session in the batch you are considering.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
