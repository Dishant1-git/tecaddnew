import { Check } from "lucide-react";
import { after12Overview } from "@/lib/after-12th";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Prose column plus the "at a glance" spec rail. */
export default function After12Overview() {
  return (
    <section
      id="overview"
      aria-labelledby="after12-overview-heading"
      className="border-b border-line py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow>{after12Overview.eyebrow}</Eyebrow>
              <SplitHeading
                id="after12-overview-heading"
                text={after12Overview.heading}
                accent={after12Overview.accent}
                className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-[2.75rem]"
                accentClassName="text-gold-600"
              />
            </Reveal>

            <div className="mt-7 flex flex-col gap-5">
              {after12Overview.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 24)} delay={i * 70}>
                  <p className="text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {after12Overview.checks.map((check) => (
                  <li key={check} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-mute">
                      {check}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-brand-50/40 p-6 lg:sticky lg:top-28 lg:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-600 uppercase">
                At a glance
              </p>
              <dl className="mt-5 divide-y divide-line">
                {after12Overview.spec.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 py-3.5"
                  >
                    <dt className="text-sm text-muted">{row.label}</dt>
                    <dd className="text-right text-sm font-medium text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
