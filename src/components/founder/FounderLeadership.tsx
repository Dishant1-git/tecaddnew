import { Cpu, Handshake, Layers, Sparkles, TrendingUp } from "lucide-react";
import { founderLeadership, type LeadershipPillar } from "@/lib/founder-content";
import { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const PILLAR_ICONS: Record<LeadershipPillar["icon"], typeof Cpu> = {
  cpu: Cpu,
  layers: Layers,
  handshake: Handshake,
  growth: TrendingUp,
  spark: Sparkles,
};

export default function FounderLeadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="border-y border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        {/* -------------------------------------------------------- vision */}
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Eyebrow>{founderLeadership.visionEyebrow}</Eyebrow>
          <p className="font-display text-2xl leading-[1.3] font-semibold text-balance text-ink sm:text-3xl">
            {founderLeadership.visionStatement}
          </p>
        </Reveal>

        {/* ---------------------------------------------------- leadership */}
        <Reveal delay={100} className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <Eyebrow>{founderLeadership.eyebrow}</Eyebrow>
          <h2 id="leadership-heading" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {founderLeadership.heading}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {founderLeadership.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            return (
              <Reveal
                as="li"
                key={pillar.title}
                delay={(i % 3) * 90}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{pillar.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
