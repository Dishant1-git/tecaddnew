import { Quote } from "lucide-react";
import { founder } from "@/lib/about-content";
import AboutImage from "./AboutImage";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Founder profile. The anchor id matches the About mega menu link
 * (`/about#founder`). The portrait runs through `AboutImage`, so dropping a
 * real photograph at `/public/about/founder.svg`'s path replaces the
 * placeholder plate without touching this file.
 */
export default function Founder() {
  return (
    <Section
      id="founder"
      eyebrow={founder.eyebrow}
      heading={founder.heading}
      accent={founder.accent}
      className="border-y border-line bg-brand-50/40"
    >
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        {/* --------------------------------------------------- portrait */}
        <Reveal className="flex flex-col gap-5">
          <div className="relative">
            <AboutImage
              src={founder.photo.image}
              alt={founder.photo.alt}
              icon={founder.photo.icon}
              gradient={founder.photo.gradient}
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="aspect-4/5 rounded-3xl"
            />

            {/* Name plate over the portrait. */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold text-ink">
                {founder.name}
              </p>
              <p className="mt-0.5 text-xs text-muted">{founder.role}</p>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {founder.facts.map((fact) => (
              <div key={fact.label} className="bg-white px-4 py-4 text-center">
                <dt className="text-[0.6rem] tracking-[0.14em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="font-display mt-1 text-sm font-semibold text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* ------------------------------------------------------- words */}
        <Reveal delay={120} className="flex flex-col justify-center gap-6">
          <figure className="relative rounded-3xl border border-line bg-white p-8 shadow-[0_18px_50px_-30px_rgb(15_23_42/0.4)] lg:p-10">
            <Quote
              aria-hidden="true"
              className="absolute top-7 right-7 size-10 text-brand-100"
            />
            <blockquote className="font-display relative text-xl leading-relaxed font-medium text-ink text-balance lg:text-2xl lg:leading-relaxed">
              “{founder.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-6">
              <span className="font-display grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                {founder.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  {founder.name}
                </span>
                <span className="block text-xs text-muted">{founder.role}</span>
              </span>
            </figcaption>
          </figure>

          {founder.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-base leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
