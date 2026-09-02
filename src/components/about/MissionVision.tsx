import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { missionVision } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Two facing statements, summarising `/about/mission-vision` — the long form
 * lives there and this block links on to it. Keep the wording of the two in
 * step; `about-content.ts` and `mission-content.ts` hold the copy.
 */
export default function MissionVision() {
  return (
    <Section
      id="mission-vision"
      eyebrow={missionVision.eyebrow}
      heading={missionVision.heading}
      accent={missionVision.accent}
      centered
      className="border-y border-line bg-brand-50/40"
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {missionVision.cards.map((card, i) => {
          const Icon = aboutIcon(card.icon);
          return (
            <Reveal
              key={card.kind}
              delay={i * 110}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_60px_-28px_rgb(37_99_235/0.4)] lg:p-10"
            >
              {/* Gradient wash that warms on hover. */}
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 size-56 rounded-full bg-brand-100/70 blur-3xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-60"
              />

              <div className="relative flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_26px_-10px_rgb(37_99_235/1)]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brand-600 uppercase">
                  {card.kind}
                </span>
              </div>

              <h3 className="font-display relative mt-6 text-2xl leading-snug font-semibold text-ink lg:text-[1.7rem]">
                {card.title}
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-muted">
                {card.body}
              </p>

              <ul className="relative mt-7 flex flex-col gap-3 border-t border-line pt-6">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-ink-mute"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={220} className="mt-8 flex justify-center">
        <Link
          href="/about/mission-vision"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
        >
          Read the full mission and vision
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    </Section>
  );
}
