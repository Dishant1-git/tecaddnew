import { industryConnection } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import AboutImage from "./AboutImage";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function IndustryConnection() {
  return (
    <Section
      id="industrial-connection"
      eyebrow={industryConnection.eyebrow}
      heading={industryConnection.heading}
      accent={industryConnection.accent}
      body={industryConnection.body}
      centered
    >
      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {industryConnection.pillars.map((pillar, i) => {
          const Icon = aboutIcon(pillar.icon);
          return (
            <Reveal
              as="li"
              key={pillar.title}
              delay={i * 90}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
            >
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 size-48 rounded-full bg-brand-50 blur-3xl"
              />

              <div className="relative flex items-center justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-ink">
                    {pillar.stat}
                  </p>
                  <p className="text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                    {pillar.statLabel}
                  </p>
                </div>
              </div>

              <h3 className="font-display relative mt-5 text-lg font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
                {pillar.body}
              </p>
            </Reveal>
          );
        })}
      </ul>

      {/* Where alumni actually land. */}
      <Reveal
        delay={150}
        className="mt-8 rounded-3xl border border-line bg-gradient-to-br from-brand-50/80 via-white to-brand-50/60 p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <AboutImage
            src={industryConnection.media.image}
            alt={industryConnection.media.alt}
            caption={industryConnection.media.caption}
            icon={industryConnection.media.icon}
            gradient={industryConnection.media.gradient}
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="aspect-4/3 rounded-2xl"
          />

          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              The roles our alumni are hired into
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {industryConnection.note}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {industryConnection.hiresIn.map((role) => (
                <li
                  key={role}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                >
                  <span
                    className="size-1.5 rounded-full bg-brand-500"
                    aria-hidden="true"
                  />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
