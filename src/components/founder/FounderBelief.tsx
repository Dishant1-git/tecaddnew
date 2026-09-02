import { founderBelief } from "@/lib/founder-content";
import { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/** A single line, given the whole section to breathe in. */
export default function FounderBelief() {
  return (
    <section
      aria-label={founderBelief.eyebrow}
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-brand-900/60 to-ink" />
        <div className="animate-aurora-a absolute top-1/2 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[140px] will-change-transform" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow dark>{founderBelief.eyebrow}</Eyebrow>
          <figure>
            <blockquote className="font-display text-2xl leading-[1.4] font-semibold text-balance sm:text-3xl lg:text-4xl">
              “{founderBelief.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-white/50">
              {founderBelief.name}, {founderBelief.role}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
