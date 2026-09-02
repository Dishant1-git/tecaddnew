import { X } from "lucide-react";
import { ourMission } from "@/lib/mission-content";
import { aboutIcon } from "@/components/about/icons";
import AboutImage from "@/components/about/AboutImage";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function OurMission() {
  return (
    <section
      id="our-mission"
      aria-labelledby="our-mission-heading"
      className="scroll-mt-28 bg-gradient-to-b from-white via-white to-brand-50/50 py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* ------------------------------------------------- statement */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>{ourMission.eyebrow}</Eyebrow>
              <SplitHeading
                id="our-mission-heading"
                text={ourMission.heading}
                accent={ourMission.accent}
                className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-[2.6rem]"
              />

              {/* The mission itself, set as a pull statement. */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-500 p-8 text-white shadow-[0_28px_60px_-30px_rgb(37_99_235/0.9)] lg:p-9">
                <div
                  aria-hidden="true"
                  className="circuit-texture absolute inset-0 opacity-25"
                />
                <p className="font-display relative text-xl leading-snug font-semibold text-balance lg:text-2xl lg:leading-snug">
                  {ourMission.statement}
                </p>
              </div>

              {ourMission.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={120}>
              <AboutImage
                src={ourMission.media.image}
                alt={ourMission.media.alt}
                caption={ourMission.media.caption}
                icon={ourMission.media.icon}
                gradient={ourMission.media.gradient}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="aspect-16/10 rounded-3xl"
              />
            </Reveal>
          </div>

          {/* ----------------------------------------------- commitments */}
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-4">
              {ourMission.commitments.map((commitment, i) => {
                const Icon = aboutIcon(commitment.icon);
                return (
                  <Reveal
                    as="li"
                    key={commitment.title}
                    delay={i * 80}
                    className="group flex gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {commitment.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {commitment.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            {/* The other half of a real mission: what it excludes. */}
            <Reveal
              delay={160}
              className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white"
            >
              <div
                aria-hidden="true"
                className="grid-overlay absolute inset-0 opacity-40"
              />
              <h3 className="font-display relative text-lg font-semibold">
                {ourMission.rulesOut.title}
              </h3>
              <ul className="relative mt-5 flex flex-col gap-3">
                {ourMission.rulesOut.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/8 text-white/70">
                      <X className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
