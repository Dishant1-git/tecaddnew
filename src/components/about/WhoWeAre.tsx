import { whoWeAre } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import AboutImage from "./AboutImage";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="bg-gradient-to-b from-white via-white to-brand-50/50 py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ------------------------------------------------------- copy */}
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
            <SplitHeading
              id="who-we-are-heading"
              text={whoWeAre.heading}
              accent={whoWeAre.accent}
              className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-[2.75rem]"
            />
            <p className="text-lg leading-relaxed text-ink-mute">
              {whoWeAre.lead}
            </p>
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <AboutImage
              src={whoWeAre.feature.image}
              alt={whoWeAre.feature.alt}
              caption={whoWeAre.feature.caption}
              icon={whoWeAre.feature.icon}
              gradient={whoWeAre.feature.gradient}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="mt-3 aspect-16/9 rounded-3xl"
            />
          </Reveal>

          {/* --------------------------------------------------- pillars */}
          <ul className="flex flex-col gap-4 lg:pt-4">
            {whoWeAre.pillars.map((pillar, i) => {
              const Icon = aboutIcon(pillar.icon);
              return (
                <Reveal
                  as="li"
                  key={pillar.title}
                  delay={i * 90}
                  className="group flex gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
