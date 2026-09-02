"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Briefcase,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  LineChart,
  MonitorPlay,
  Network,
  Rocket,
  Signal,
  UserRound,
  Workflow,
} from "lucide-react";
import type { Course } from "@/lib/courses";
import type { AiCourseView, AiIcon } from "@/lib/ai-course";
import { site } from "@/lib/content";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiIconTile from "./AiIconTile";
import AiLogoMark from "./AiLogoMark";

const CHIP_ICON: Record<AiIcon, typeof Rocket> = {
  live: Rocket,
  mentor: UserRound,
  certificate: BadgeCheck,
  placement: Briefcase,
};

/** The five capability tiles that sit around the logo mark. */
const SHOWCASE_TILES = [
  { Icon: Database, label: "Data" },
  { Icon: LineChart, label: "Models" },
  { Icon: Bot, label: "Agents" },
  { Icon: Network, label: "Serving" },
  { Icon: Workflow, label: "Pipelines" },
  { Icon: Cpu, label: "Compute" },
];

/**
 * The hero showcase: the animated logo mark set into a bento of capability
 * tiles.
 *
 * Deliberately not a radial diagram — the tiles read as a product surface
 * rather than a chart, and each names a real part of the syllabus. The block
 * is aria-hidden because every label in it is stated as real text elsewhere on
 * the page.
 */
function AiShowcase({ course }: { course: Course }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md lg:max-w-lg"
    >
      <div className="grid grid-cols-3 gap-3">
        {/* The mark anchors the top-left two thirds of the bento. */}
        <div className="col-span-2 aspect-[4/3]">
          <AiLogoMark caption={course.category} />
        </div>

        <div className="flex flex-col gap-3">
          {SHOWCASE_TILES.slice(0, 2).map((tile, i) => (
            <AiIconTile
              key={tile.label}
              Icon={tile.Icon}
              label={tile.label}
              index={i}
              dark
              className="flex-1"
            />
          ))}
        </div>

        {SHOWCASE_TILES.slice(2).map((tile, i) => (
          <AiIconTile
            key={tile.label}
            Icon={tile.Icon}
            label={tile.label}
            index={i + 2}
            dark
          />
        ))}
      </div>

      <div className="absolute inset-8 -z-10 rounded-full bg-brand-500/20 blur-[80px]" />
    </div>
  );
}

/* -------------------------------------------------------------------- hero */

export default function AiHero({
  course,
  view,
}: {
  course: Course;
  view: AiCourseView;
}) {
  const meta = [
    { icon: Clock, label: course.spec[0].value },
    { icon: Signal, label: course.spec[1].value },
    { icon: MonitorPlay, label: course.spec[2].value },
  ];

  return (
    <section
      data-cursor="light"
      aria-labelledby="ai-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-24"
    >
      <AiBackdrop />
      <div
        aria-hidden="true"
        className="animate-beam absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-transparent via-brand-400/12 to-transparent opacity-0 will-change-transform"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* --------------------------------------------------------- copy */}
          <Stagger className="lg:col-span-7" gap={0.08}>
            <FadeUp>
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <li>
                    <Link
                      href="/courses"
                      className="transition-colors hover:text-white"
                    >
                      Courses
                    </Link>
                  </li>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <li aria-current="page" className="text-white/70">
                    {course.title}
                  </li>
                </ol>
              </nav>
            </FadeUp>

            <FadeUp className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                {view.hero.eyebrow}
              </span>
              {course.badge && (
                <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
                  {course.badge}
                </span>
              )}
            </FadeUp>

            <WordsUp
              as="h1"
              text={view.hero.headline}
              accent={view.hero.accent}
              className="mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.4rem]"
              delay={0.12}
            />
            <span id="ai-hero-heading" className="sr-only">
              {course.title} course in {site.city}
            </span>

            <FadeUp className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
              {view.hero.body}
            </FadeUp>

            {/* Delivery facts, then the promise chips — two different kinds of
                claim, so they are kept as two separate rails. */}
            <FadeUp className="mt-8 flex flex-wrap items-center gap-2.5">
              {meta.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/65"
                >
                  <Icon
                    className="size-3.5 text-brand-400"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </FadeUp>

            <FadeUp className="mt-3 flex flex-wrap items-center gap-2.5">
              {view.hero.chips.map((chip) => {
                const Icon = CHIP_ICON[chip.icon];
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-500/12 px-3.5 py-2 text-xs font-medium text-brand-100 ring-1 ring-brand-400/25 ring-inset"
                  >
                    <Icon
                      className="size-3.5 text-brand-300"
                      aria-hidden="true"
                    />
                    {chip.label}
                  </span>
                );
              })}
            </FadeUp>

            <FadeUp className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Book a free demo class
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#ai-curriculum"
                className="inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                See the curriculum
              </Link>
            </FadeUp>
          </Stagger>

          {/* ----------------------------------------------------- showcase */}
          <div className="lg:col-span-5">
            <AiShowcase course={course} />
          </div>
        </div>

        {/* -------------------------------------------------------- stat band */}
        <Stagger
          as="ul"
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-3"
          gap={0.08}
        >
          {view.hero.stats.map((stat) => (
            <FadeUp as="li" key={stat.label} className="bg-ink/70 px-6 py-7">
              <p className="font-display text-3xl font-semibold text-white lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-white/75">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-white/40">{stat.note}</p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
