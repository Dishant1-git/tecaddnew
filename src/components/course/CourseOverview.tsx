"use client";

import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock3,
  FlaskConical,
  Handshake,
  IndianRupee,
  Info,
  Layers,
  Lightbulb,
  MonitorPlay,
  ScrollText,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Course } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

type SpecRow = Course["spec"][number];

/**
 * Ledger rows are keyed by label rather than position, because the after-12th
 * builder hides some of them — an index-based icon list would slide onto the
 * wrong rows the moment a page drops one.
 */
const SPEC_ICONS: Record<string, LucideIcon> = {
  Duration: CalendarDays,
  Level: BarChart3,
  Mode: MonitorPlay,
  Eligibility: BadgeCheck,
  Batches: Clock3,
  "Fee range": IndianRupee,
  Certification: ScrollText,
  Internship: Briefcase,
  "Placement support": Handshake,
};

/**
 * The reference design tints every tile a different colour. The palette here
 * has only brand blue, gold and the deep accent, so the rhythm comes from
 * rotating those three plus a heavier blue rather than from importing hues the
 * rest of the site never uses.
 */
const TINTS = [
  { tile: "bg-brand-50 text-brand-600", rule: "bg-brand-500" },
  { tile: "bg-gold-100 text-gold-700", rule: "bg-gold-400" },
  { tile: "bg-accent/10 text-accent", rule: "bg-accent" },
  { tile: "bg-brand-100 text-brand-800", rule: "bg-brand-700" },
] as const;

const CHECK_ICONS = [ClipboardCheck, Lightbulb, Users, FlaskConical];

/**
 * Overview. The reference layouts put prose on the left and a media panel on
 * the right; this one inverts it — the hard facts sit in a sticky ledger on the
 * left where they stay readable while the prose scrolls past.
 *
 * `hideSpecLabels` drops rows from the ledger without touching `course.spec`
 * itself — the hero strip, CTA and fit copy all read that array positionally,
 * so a row that is wrong for one page still has to exist in the data.
 *
 * `variant` picks the treatment. `ledger` is the plain rule-separated list the
 * main course pages use and `cards` is the after-12th one, where a school
 * leaver is scanning for the two or three facts that decide whether they
 * qualify — both of them a heading-beside-facts split. `panel` breaks that
 * shape for the training pages: prose across the top, then the facts as one
 * full-width spec sheet, because a format is bought on its terms and those
 * deserve to be read across rather than skimmed down a rail.
 */
export default function CourseOverview({
  course,
  hideSpecLabels,
  variant = "ledger",
}: {
  course: Course;
  hideSpecLabels?: readonly string[];
  variant?: "ledger" | "cards" | "panel";
}) {
  const spec = hideSpecLabels
    ? course.spec.filter((row) => !hideSpecLabels.includes(row.label))
    : course.spec;

  if (variant === "cards") return <OverviewCards course={course} spec={spec} />;
  if (variant === "panel") return <OverviewPanel course={course} spec={spec} />;

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ------------------------------------------------------ ledger */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp standalone>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                  <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                  About the programme
                </span>
              </FadeUp>

              <Stagger as="ul" className="mt-7 border-t border-line" gap={0.06}>
                {spec.map((row) => (
                  <FadeUp
                    as="li"
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                  >
                    <span className="text-sm text-muted">{row.label}</span>
                    <span className="font-display text-right text-sm font-semibold text-ink">
                      {row.value}
                    </span>
                  </FadeUp>
                ))}
              </Stagger>

              <FadeUp
                standalone
                className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6"
              >
                <p className="font-display text-sm font-semibold text-ink">
                  Not sure this is the right track?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A counselling call maps your background against the syllabus
                  before you commit to anything. It takes about twenty minutes.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
                >
                  Book a counselling call
                </a>
              </FadeUp>
            </div>
          </div>

          {/* ------------------------------------------------------- prose */}
          <div className="lg:col-span-7">
            <WordsUp
              as="h2"
              text={course.overview.heading}
              className="max-w-xl text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
              accentClassName="text-gold-500"
            />
            <span id="overview-heading" className="sr-only">
              {course.overview.heading}
            </span>

            <Stagger className="mt-7 space-y-5" gap={0.09}>
              {course.overview.paragraphs.map((paragraph, i) => (
                <FadeUp
                  as="p"
                  key={i}
                  className={
                    i === 0
                      ? "border-l-2 border-brand-500 pl-5 text-lg leading-relaxed font-medium text-ink"
                      : "text-base leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </FadeUp>
              ))}
            </Stagger>

            <Stagger
              as="ul"
              className="mt-10 grid gap-3 sm:grid-cols-2"
              gap={0.07}
            >
              {course.overview.checks.map((check) => (
                <FadeUp
                  as="li"
                  key={check}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition-colors duration-300 hover:border-brand-200"
                >
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600"
                    aria-hidden="true"
                  >
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-mute">
                    {check}
                  </span>
                </FadeUp>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * `WordsUp` can only accent a trailing phrase, and this heading carries the
 * course name in the middle of the sentence, so the accent is spliced by hand
 * here. A title that somehow is not in the heading just renders unaccented.
 */
function AccentedHeading({ heading, title }: { heading: string; title: string }) {
  const at = heading.indexOf(title);

  return (
    <h2 className="font-display max-w-xl text-3xl leading-[1.14] font-semibold tracking-tight text-balance text-ink sm:text-4xl">
      {at < 0 ? (
        heading
      ) : (
        <>
          {heading.slice(0, at)}
          <span className="text-gold-500">{title}</span>
          {heading.slice(at + title.length)}
        </>
      )}
    </h2>
  );
}

/** The after-12th treatment: facts as an icon-led card, checks as tiles. */
function OverviewCards({ course, spec }: { course: Course; spec: SpecRow[] }) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="bg-brand-50/30 pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ------------------------------------------------- facts card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp
                standalone
                className="rounded-3xl border border-line bg-white p-6 shadow-[0_34px_64px_-44px_rgb(15_23_42/0.4)] sm:p-7"
              >
                <span className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 px-4 py-2.5 text-xs font-semibold tracking-[0.16em] text-white uppercase shadow-[0_12px_24px_-14px_rgb(37_99_235/0.9)]">
                  <Layers className="size-4" aria-hidden="true" />
                  Programme facts
                </span>

                <Stagger as="ul" className="mt-6" gap={0.06}>
                  {spec.map((row, i) => {
                    const Icon = SPEC_ICONS[row.label] ?? Info;
                    const tint = TINTS[i % TINTS.length];

                    return (
                      <FadeUp
                        as="li"
                        key={row.label}
                        className="flex items-center gap-4 border-b border-line/70 py-3.5 last:border-b-0 last:pb-0"
                      >
                        <span
                          className={`grid size-11 shrink-0 place-items-center rounded-xl ${tint.tile}`}
                          aria-hidden="true"
                        >
                          <Icon className="size-5" strokeWidth={2} />
                        </span>
                        <span className="w-[4.5rem] shrink-0 text-sm text-muted sm:w-24">
                          {row.label}
                        </span>
                        {/* Values wrap onto two lines often enough that ragged
                            right alignment reads badly — the divider gives the
                            column a left edge to sit against instead. */}
                        <span className="font-display min-w-0 flex-1 border-l border-line/70 pl-4 text-sm leading-snug font-semibold text-ink">
                          {row.value}
                        </span>
                      </FadeUp>
                    );
                  })}
                </Stagger>
              </FadeUp>

              <FadeUp
                standalone
                className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-6"
              >
                <p className="font-display text-sm font-semibold text-ink">
                  Not sure this is the right track?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A counselling call maps your background against the syllabus
                  before you commit to anything. It takes about twenty minutes.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-medium text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
                >
                  Book a counselling call
                </a>
              </FadeUp>
            </div>
          </div>

          {/* ------------------------------------------------------- prose */}
          <div className="lg:col-span-7">
            <FadeUp standalone>
              <AccentedHeading
                heading={course.overview.heading}
                title={course.title}
              />
            </FadeUp>
            <span id="overview-heading" className="sr-only">
              {course.overview.heading}
            </span>

            <FadeUp standalone>
              <span
                className="mt-5 flex items-center gap-2"
                aria-hidden="true"
              >
                <span className="h-1 w-12 rounded-full bg-gold-400" />
                <span className="h-1 w-2 rounded-full bg-brand-500" />
              </span>
            </FadeUp>

            <Stagger className="mt-7 space-y-5" gap={0.09}>
              {course.overview.paragraphs.map((paragraph, i) => (
                <FadeUp
                  as="p"
                  key={i}
                  className="text-base leading-relaxed text-ink-mute"
                >
                  {paragraph}
                </FadeUp>
              ))}
            </Stagger>

            <Stagger
              as="ul"
              className="mt-10 grid gap-4 sm:grid-cols-2"
              gap={0.07}
            >
              {course.overview.checks.map((check, i) => {
                const Icon = CHECK_ICONS[i % CHECK_ICONS.length];
                const tint = TINTS[i % TINTS.length];

                return (
                  <FadeUp
                    as="li"
                    key={check}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_20px_40px_-30px_rgb(15_23_42/0.5)]"
                  >
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-full ${tint.tile}`}
                      aria-hidden="true"
                    >
                      <Icon className="size-6" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="font-display block text-[0.95rem] leading-snug font-semibold text-ink">
                        {check}
                      </span>
                      <span
                        className={`mt-3 block h-0.5 w-8 rounded-full ${tint.rule}`}
                        aria-hidden="true"
                      />
                    </span>
                  </FadeUp>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}


/**
 * The training treatment: prose first, then the terms as one dark spec sheet.
 *
 * The cells are a `gap-px` grid over a light background, so the dividers are
 * the grid itself rather than borders that would double up at every join. A
 * `dl` rather than a `ul` — these are label/value pairs, and on a page whose
 * whole subject is "what are the terms" that distinction is worth making.
 */
function OverviewPanel({ course, spec }: { course: Course; spec: SpecRow[] }) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                The terms
              </span>
            </FadeUp>
            <FadeUp standalone>
              <AccentedHeading
                heading={course.overview.heading}
                title={course.title}
              />
            </FadeUp>
            <span id="overview-heading" className="sr-only">
              {course.overview.heading}
            </span>
          </div>

          <Stagger className="space-y-5 lg:col-span-7" gap={0.09}>
            {course.overview.paragraphs.map((paragraph, i) => (
              <FadeUp
                as="p"
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed font-medium text-ink"
                    : "text-base leading-relaxed text-muted"
                }
              >
                {paragraph}
              </FadeUp>
            ))}
          </Stagger>
        </div>

        <FadeUp
          standalone
          className="relative isolate mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 px-6 py-8 shadow-[0_40px_80px_-50px_rgb(15_23_42/0.7)] sm:rounded-[2rem] lg:mt-16 lg:px-10 lg:py-10"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink">
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-brand-900/55 to-ink" />
            <div className="animate-aurora-a absolute -top-40 -left-24 size-[30rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
            <div className="animate-aurora-b absolute -right-32 -bottom-40 size-[26rem] rounded-full bg-accent/40 blur-[130px] will-change-transform" />
            <div
              className="animate-grid-pan absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage:
                  "radial-gradient(120% 100% at 50% 0%, black 10%, transparent 76%)",
                WebkitMaskImage:
                  "radial-gradient(120% 100% at 50% 0%, black 10%, transparent 76%)",
              }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              <span className="h-px w-6 bg-gold-300/60" aria-hidden="true" />
              Programme facts
            </span>
            <span className="text-xs text-white/40">
              Confirmed in writing at counselling
            </span>
          </div>

          {/* gap-px over a light ground: the grid gaps are the hairlines. */}
          <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {spec.map((row) => (
              <div key={row.label} className="bg-ink/85 px-5 py-5 lg:px-6">
                <dt className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/45 uppercase">
                  {row.label}
                </dt>
                <dd className="font-display mt-2 text-base leading-snug font-semibold text-white">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {course.overview.checks.map((check) => (
              <li
                key={check}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
              >
                <span
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500"
                  aria-hidden="true"
                >
                  <Check className="size-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-white/70">
                  {check}
                </span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
