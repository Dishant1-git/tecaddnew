import { ArrowRight } from "lucide-react";
import { founderLegacy } from "@/lib/founder-content";
import { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function FounderLegacy() {
  return (
    <section aria-label={founderLegacy.eyebrow} className="border-y border-line bg-brand-50/40 py-20 lg:py-24">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Eyebrow>{founderLegacy.eyebrow}</Eyebrow>
          <div className="font-display flex items-center gap-4 text-4xl font-bold text-ink sm:text-5xl">
            <span>{founderLegacy.fromYear}</span>
            <ArrowRight className="size-7 text-brand-400" aria-hidden="true" />
            <span className="text-brand-600">{founderLegacy.toLabel}</span>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted">{founderLegacy.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
