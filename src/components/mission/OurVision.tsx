import { ourVision } from "@/lib/mission-content";
import { aboutIcon } from "@/components/about/icons";
import AboutImage from "@/components/about/AboutImage";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * The vision at three scales — student, city, field — rather than against a
 * timeline. Dark, so it sits opposite the light mission section as its pair.
 */
export default function OurVision() {
  return (
    <section
      data-cursor="light"
      id="our-vision"
      aria-labelledby="our-vision-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-[0.2]" />
        <div className="absolute top-0 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-700/25 blur-[150px]" />
        <div className="absolute right-0 bottom-0 size-[30rem] rounded-full bg-accent/30 blur-[130px]" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow dark>{ourVision.eyebrow}</Eyebrow>
          <SplitHeading
            id="our-vision-heading"
            text={ourVision.heading}
            accent={ourVision.accent}
            className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg">
            {ourVision.statement}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <Reveal className="lg:sticky lg:top-28 lg:h-fit">
            <AboutImage
              src={ourVision.media.image}
              alt={ourVision.media.alt}
              caption={ourVision.media.caption}
              icon={ourVision.media.icon}
              gradient={ourVision.media.gradient}
              tone="dark"
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="aspect-4/3 rounded-3xl"
            />
          </Reveal>

          <ol className="relative flex flex-col gap-5">
            {ourVision.horizons.map((horizon, i) => {
              const Icon = aboutIcon(horizon.icon);
              return (
                <Reveal
                  as="li"
                  key={horizon.scale}
                  delay={i * 90}
                  className="group rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/30 to-accent/40 text-brand-200 ring-1 ring-white/10 ring-inset transition-colors duration-300 group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brand-400 uppercase">
                      {horizon.scale}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-xl font-semibold text-white">
                    {horizon.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                    {horizon.body}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {horizon.points.map((point) => (
                      <li
                        key={point}
                        className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/65 ring-1 ring-white/10 ring-inset"
                      >
                        <span
                          className="size-1.5 rounded-full bg-brand-400"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
