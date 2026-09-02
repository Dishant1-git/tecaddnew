import { Briefcase, Building2 } from "lucide-react";
import { after12Careers } from "@/lib/after-12th";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Salary bands, job titles and the sectors that hire locally. */
export default function After12Careers() {
  return (
    <section
      id="careers"
      aria-labelledby="after12-careers-heading"
      className="border-y border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{after12Careers.eyebrow}</Eyebrow>
          <SplitHeading
            id="after12-careers-heading"
            text={after12Careers.heading}
            accent={after12Careers.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-600"
          />
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {after12Careers.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {after12Careers.bands.map((band, i) => (
            <Reveal as="li" key={band.stage} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]">
                <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-600 uppercase">
                  {band.stage}
                </p>
                <p className="font-display mt-4 text-2xl font-semibold text-ink lg:text-[1.75rem]">
                  {band.range}
                </p>
                <p className="mt-1 text-xs text-muted">{band.unit}</p>
                <p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                  {band.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <div className="flex items-center gap-2.5">
                <Briefcase className="size-4 text-brand-600" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-ink">
                  Titles students are hired into
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {after12Careers.roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-line bg-brand-50/60 px-3.5 py-1.5 text-sm text-ink-mute"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <div className="flex items-center gap-2.5">
                <Building2 className="size-4 text-brand-600" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-ink">
                  Who hires around Amritsar
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {after12Careers.industries.map((industry) => (
                  <li
                    key={industry}
                    className="rounded-full border border-line bg-brand-50/60 px-3.5 py-1.5 text-sm text-ink-mute"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
