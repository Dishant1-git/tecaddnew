import { ArrowRight, Phone } from "lucide-react";
import { belief } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

/**
 * Closing statement. Dark and centred so the page lands on the belief rather
 * than trailing off into another card grid.
 */
export default function OurBelief() {
  return (
    <section
      data-cursor="light"
      id="our-belief"
      aria-labelledby="our-belief-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="animate-aurora-a absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[140px] will-change-transform" />
        <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow dark>{belief.eyebrow}</Eyebrow>
          <h2
            id="our-belief-heading"
            className="font-display text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {belief.headingLead}
            <span className="block text-brand-400">{belief.headingMuted}</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg">
            {belief.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {belief.values.map((value, i) => {
            const Icon = aboutIcon(value.icon);
            return (
              <Reveal
                as="li"
                key={value.title}
                delay={i * 80}
                className="group rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.07]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-white/8 text-brand-300 ring-1 ring-white/10 ring-inset transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-base font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {value.body}
                </p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal
          delay={160}
          className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <p className="font-display text-xl leading-snug font-medium text-white/85 text-balance lg:text-2xl">
            {belief.closing}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={belief.primaryCta.href} variant="light" size="lg">
              {belief.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={belief.secondaryCta.href} variant="ghost" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              {belief.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
