import { Bot, Boxes, GraduationCap } from "lucide-react";
import { about } from "@/lib/content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";

const mediaIcons = {
  boxes: Boxes,
  graduation: GraduationCap,
  bot: Bot,
} as const;

const chipPositions = {
  "bottom-left": "bottom-4 left-4",
  "top-right": "right-4 top-4",
} as const;

/** Distinct fills so the overlapping circles read as separate people. */
const avatarTints = ["bg-brand-600", "bg-accent", "bg-brand-400"];

type Media = (typeof about.media)[number];

/**
 * One media tile. The gradient plus grid overlay stands in for a photograph;
 * swap the inner block for next/image once real assets exist — the chip and
 * rounding are positioned against the tile, so nothing else has to change.
 */
function MediaTile({ item, tall }: { item: Media; tall: boolean }) {
  const Icon = mediaIcons[item.icon as keyof typeof mediaIcons];
  const avatars = "avatars" in item.chip ? item.chip.avatars : undefined;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-[0_18px_40px_-24px_rgb(15_23_42/0.45)]",
        item.gradient,
        tall ? "h-64 sm:h-72 lg:h-[21rem]" : "h-56 sm:h-60 lg:h-[17rem]",
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 grid-overlay opacity-60" />
      <Icon
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white/15 transition-transform duration-500 group-hover:scale-110"
      />

      <div
        className={cn(
          "absolute inline-flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-2 pr-3.5 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm",
          chipPositions[item.chip.at],
        )}
      >
        {avatars && (
          <span className="flex -space-x-1.5" aria-hidden="true">
            {avatars.map((initial, i) => (
              <span
                key={initial}
                className={cn(
                  "grid size-6 place-items-center rounded-full text-[0.6rem] font-bold text-white ring-2 ring-white",
                  avatarTints[i % avatarTints.length],
                )}
              >
                {initial}
              </span>
            ))}
          </span>
        )}
        {!avatars && <span className="ml-1.5 size-1.5 rounded-full bg-brand-600" />}
        {item.chip.label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-gradient-to-b from-brand-50/60 via-white to-white py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SplitHeading
            id="about-heading"
            text={about.heading}
            accent={about.accent}
            className="text-3xl leading-[1.14] text-ink sm:text-4xl lg:text-[2.75rem]"
          />
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            {about.intro}
          </p>
        </Reveal>

        {/* Staggered trio — the middle tile is taller, the row centres on it. */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-center">
          {about.media.map((item, i) => (
            <Reveal key={item.chip.label} delay={i * 100}>
              <MediaTile item={item} tall={i === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted lg:text-xl lg:leading-relaxed">
            {about.mission.map((part, i) =>
              part.strong ? (
                <strong key={i} className="font-semibold text-ink">
                  {part.text}
                </strong>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        </Reveal>

        {/*
          Hairlines come from a 1px grid gap over a line-coloured background, so
          the dividers land correctly in both the 2-up and 4-up arrangements.
        */}
        <Reveal className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-line bg-line">
          <dl className="grid grid-cols-2 gap-px sm:grid-cols-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse bg-white px-5 py-7 text-center"
              >
                <dt className="mt-2 text-xs leading-snug text-muted">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl font-bold text-ink lg:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
