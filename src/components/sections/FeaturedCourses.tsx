import Link from "next/link";
import { ArrowRight, Bell, Check, Sparkles, TrendingUp } from "lucide-react";
import { featured } from "@/lib/content";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl font-semibold leading-snug text-ink">
      {children}
    </h3>
  );
}

function CardLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group/link mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
    >
      {label}
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function FeaturedCourses() {
  const { cybersecurity, dataScience, aiml, fullStack, digitalMarketing } = featured;

  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-2xl">
            <Eyebrow>{featured.eyebrow}</Eyebrow>
            <SplitHeading
              id="courses-heading"
              text={featured.heading}
              accent={featured.accent}
              className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            />
            <p className="max-w-xl text-base leading-relaxed text-muted">
              {featured.body}
            </p>
          </div>
          <Button href={featured.cta.href} variant="outline" size="md">
            {featured.cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* ------------------------------------------------ cybersecurity */}
          <Reveal className="lg:col-span-4">
            <Card className="group h-full">
              <div className="flex h-full flex-col p-6">
                <CardTitle>{cybersecurity.title}</CardTitle>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {cybersecurity.body}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {cybersecurity.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-sm text-ink-mute"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <CardLink href={cybersecurity.href} label="View course" />
              </div>
            </Card>
          </Reveal>

          {/* -------------------------------------------------- data science */}
          <Reveal delay={80} className="lg:col-span-4">
            <Card className="group h-full">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{dataScience.title}</CardTitle>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-700">
                    <span className="size-1.5 animate-pulse rounded-full bg-brand-600" />
                    {dataScience.liveLabel}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {dataScience.body}
                </p>

                {/* CSS bar chart — decorative trend, no real data behind it. */}
                <div className="mt-6">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    <TrendingUp className="size-4" aria-hidden="true" />
                    {dataScience.delta}
                  </div>
                  {/*
                    Bars are direct children of the h-24 row so their percentage
                    heights resolve against a definite height; the year labels
                    sit in a matching row underneath rather than inside a column.
                  */}
                  <div
                    className="mt-3 flex h-24 items-end gap-2"
                    role="img"
                    aria-label={`Enrolment trend ${dataScience.delta} from ${dataScience.years[0]} to ${dataScience.years[dataScience.years.length - 1]}`}
                  >
                    {dataScience.bars.map((height, i) => (
                      <div
                        key={dataScience.years[i]}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-200 to-brand-600 transition-all duration-500 group-hover:from-brand-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2" aria-hidden="true">
                    {dataScience.years.map((year) => (
                      <span
                        key={year}
                        className="flex-1 text-center text-[0.6rem] text-muted"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
                <CardLink href={dataScience.href} label="View course" />
              </div>
            </Card>
          </Reveal>

          {/* --------------------------------------------------------- ai/ml */}
          <Reveal delay={160} className="lg:col-span-4">
            <Card tone="ink" className="group h-full">
              <div className="relative flex h-full flex-col p-6">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-600/30 blur-3xl"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold leading-snug text-white">
                    {aiml.title}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-600 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide">
                    <Sparkles className="size-3" aria-hidden="true" />
                    {aiml.badge}
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">
                  {aiml.body}
                </p>
                <Link
                  href={aiml.href}
                  className="group/link relative mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-brand-400 transition-colors hover:text-white"
                >
                  View course
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Card>
          </Reveal>

          {/* ---------------------------------------------------- full-stack */}
          <Reveal delay={80} className="lg:col-span-8">
            <Card className="group h-full">
              {/*
                The link lives outside the two-column wrapper so it stays at the
                bottom of the card once the columns stack on small screens.
              */}
              <div className="flex h-full flex-col p-6">
                <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-start md:gap-8">
                  <div className="flex flex-1 flex-col">
                    <CardTitle>{fullStack.title}</CardTitle>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {fullStack.body}
                    </p>
                    <div className="mt-6 flex items-baseline gap-2.5">
                      <span className="font-display text-4xl font-bold text-brand-600">
                        {fullStack.stat.value}
                      </span>
                      <span className="text-sm text-muted">
                        {fullStack.stat.label}
                      </span>
                    </div>
                  </div>

                  <ul className="flex w-full flex-col gap-px overflow-hidden rounded-xl bg-line md:w-72">
                    {fullStack.rows.map((row) => (
                      <li
                        key={row.name}
                        className="flex items-center justify-between gap-3 bg-white px-4 py-3.5"
                      >
                        <span className="flex flex-col">
                          <span className="text-sm font-medium text-ink">
                            {row.name}
                          </span>
                          <span className="text-xs text-muted">{row.role}</span>
                        </span>
                        <span className="shrink-0 rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">
                          {row.delta}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <CardLink href={fullStack.href} label="View course" />
              </div>
            </Card>
          </Reveal>

          {/* ---------------------------------------------- digital marketing */}
          <Reveal delay={160} className="lg:col-span-4">
            <Card className="group h-full">
              <div className="flex h-full flex-col p-6">
                <CardTitle>{digitalMarketing.title}</CardTitle>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {digitalMarketing.body}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {digitalMarketing.alerts.map((alert) => (
                    <li
                      key={alert.label}
                      className="flex items-start gap-3 rounded-xl border border-line bg-brand-50/50 px-4 py-3"
                    >
                      <Bell
                        className="mt-0.5 size-4 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                          {alert.label}
                        </span>
                        <span className="mt-0.5 text-sm text-ink-mute">
                          {alert.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <CardLink href={digitalMarketing.href} label="View course" />
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
