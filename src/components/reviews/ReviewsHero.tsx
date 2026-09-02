import Link from "next/link";
import { ArrowRight, ChevronRight, Phone, ShieldCheck } from "lucide-react";
import {
  ratingBreakdown,
  reviewStats,
  reviewsHero,
} from "@/lib/reviews-content";
import Reveal from "@/components/ui/Reveal";
import Stars from "./Stars";

/**
 * Dark opener with the rating summary pinned beside it: the average, the
 * count, and the full star distribution rather than only the flattering half.
 *
 * Every figure is derived in `reviews-content.ts` from the same list the wall
 * below renders, so the summary and the reviews can never disagree.
 */
export default function ReviewsHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="reviews-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-24 text-white lg:pt-40 lg:pb-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-[0.24]" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="animate-aurora-a absolute -top-[26%] -left-40 size-[40rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-40 bottom-[-30%] size-[34rem] rounded-full bg-accent/40 blur-[130px] will-change-transform" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3" aria-hidden="true" />
              <li aria-current="page" className="text-white/70">
                Reviews
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={60} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ring-1 ring-white/15 ring-inset backdrop-blur-md">
                <span
                  className="size-1.5 rounded-full bg-brand-400"
                  aria-hidden="true"
                />
                {reviewsHero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="reviews-hero-heading"
                className="font-display mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                {reviewsHero.headingLead}
                <span className="block text-white/35">
                  {reviewsHero.headingMuted}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {reviewsHero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={reviewsHero.primaryCta.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {reviewsHero.primaryCta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={reviewsHero.secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {reviewsHero.secondaryCta.label}
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-6 inline-flex items-start gap-2 text-xs leading-relaxed text-white/40">
                <ShieldCheck
                  className="mt-px size-4 shrink-0 text-brand-400"
                  aria-hidden="true"
                />
                {reviewsHero.note}
              </p>
            </Reveal>
          </div>

          {/* ---------------------------------------------- rating summary */}
          <Reveal delay={200} className="lg:col-span-5 lg:mt-6">
            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-5xl leading-none font-semibold">
                      {reviewStats.average.toFixed(1)}
                    </span>
                    <span className="pb-1 text-sm text-white/40">out of 5</span>
                  </div>
                  <Stars
                    rating={reviewStats.average}
                    tone="dark"
                    className="mt-3"
                    size="size-4.5"
                  />
                  <p className="mt-2 text-xs text-white/50">
                    {reviewStats.count} published reviews across{" "}
                    {reviewStats.tracks} tracks
                  </p>
                </div>

                <span className="rounded-full bg-brand-600/20 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-brand-300 uppercase ring-1 ring-brand-400/30 ring-inset">
                  Verified
                </span>
              </div>

              <dl className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <dt className="w-10 shrink-0 text-xs text-white/50">
                      {row.stars} star
                    </dt>
                    <div
                      className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                      aria-hidden="true"
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                    <dd className="w-11 shrink-0 text-right text-xs tabular-nums text-white/40">
                      {row.percent}%
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                <div className="rounded-2xl bg-white/[0.05] px-4 py-3">
                  <span className="font-display block text-xl font-semibold">
                    {reviewStats.placed}
                  </span>
                  <span className="text-xs text-white/45">
                    named where they work now
                  </span>
                </div>
                <div className="rounded-2xl bg-white/[0.05] px-4 py-3">
                  <span className="font-display block text-xl font-semibold">
                    15K+
                  </span>
                  <span className="text-xs text-white/45">alumni network</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
