import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { after12Hero, after12Streams } from "@/lib/after-12th";
import Button from "@/components/ui/Button";

/**
 * Dark opening panel, built on the same ambience stack as the courses index:
 * gradient wash, drifting circuit tile, grid overlay and two blurred blooms.
 */
export default function After12Hero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="after12-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-35" />
        <div className="grid-overlay absolute inset-0 opacity-35" />
        <div className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-brand-600/25 blur-[130px]" />
        <div className="absolute -right-32 -bottom-40 size-[32rem] rounded-full bg-accent/40 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
              <GraduationCap
                className="size-3.5 text-gold-300"
                aria-hidden="true"
              />
              {after12Hero.eyebrow}
            </span>

            <h1
              id="after12-heading"
              className="font-display mt-6 text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {after12Hero.headline}{" "}
              <span className="text-gold-300">{after12Hero.accent}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 lg:text-lg">
              {after12Hero.tagline}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {after12Hero.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/70"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href={after12Hero.primaryCta.href}
                variant="gradient"
                size="lg"
              >
                {after12Hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href={after12Hero.secondaryCta.href}
                variant="ghost"
                size="lg"
              >
                {after12Hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {after12Hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-ink/70 px-5 py-6 backdrop-blur-sm"
                >
                  <dt className="text-xs tracking-wide text-white/45">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-1.5 text-2xl font-semibold text-white lg:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[0.65rem] font-semibold tracking-[0.24em] text-brand-400 uppercase">
              Jump to a stream
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {after12Streams.map((stream) => (
                <li key={stream.id}>
                  <Link
                    href={`#${stream.id}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                  >
                    {stream.title}
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
