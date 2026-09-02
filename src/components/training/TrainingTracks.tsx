import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { trainingTracks } from "@/lib/training";
import { FadeUp, Stagger } from "@/components/ui/Motion";

/**
 * The hub grid: every training format, grouped into the three tracks in
 * mega-menu order. Track ids are the section anchors, so the dropdown's
 * `#short-term` / `#long-term` / `#programmes` links all land somewhere.
 */
export default function TrainingTracks() {
  return (
    <div className="bg-white">
      {trainingTracks.map((track, i) => (
        <section
          key={track.id}
          id={track.id}
          aria-labelledby={`${track.id}-heading`}
          className={
            i % 2 === 0
              ? "scroll-mt-28 border-b border-line py-20 lg:py-24"
              : "scroll-mt-28 border-b border-line bg-brand-50/40 py-20 lg:py-24"
          }
        >
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <FadeUp standalone>
                    <span className="font-display text-sm font-semibold text-brand-600">
                      {track.index}
                    </span>
                    <h2
                      id={`${track.id}-heading`}
                      className="font-display mt-3 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
                    >
                      {track.title}
                    </h2>
                    <p className="mt-3 text-base font-medium text-gold-600">
                      {track.tagline}
                    </p>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                      {track.blurb}
                    </p>
                  </FadeUp>
                </div>
              </div>

              <Stagger
                as="ul"
                className="grid content-start gap-4 lg:col-span-8 lg:gap-5"
                gap={0.08}
              >
                {track.programmes.map((programme) => (
                  <FadeUp as="li" key={programme.slug}>
                    <Link
                      href={programme.href}
                      className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_26px_54px_-38px_rgb(15_23_42/0.45)] sm:flex-row sm:items-start sm:gap-6 lg:p-7"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-brand-700 sm:text-xl">
                            {programme.title}
                          </h3>
                          {programme.badge ? (
                            <span className="rounded-full bg-gold-100 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-gold-700 uppercase">
                              {programme.badge}
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                          <Clock className="size-3.5" aria-hidden="true" />
                          {programme.duration}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                          {programme.blurb}
                        </p>

                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {programme.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="rounded-lg border border-brand-600/15 bg-brand-50/70 px-2.5 py-1.5 text-xs font-medium text-ink-mute"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white"
                      >
                        <ArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </FadeUp>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
