import Link from "next/link";
import { ArrowRight, Check, PenLine, Phone } from "lucide-react";
import { shareStory } from "@/lib/reviews-content";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * The ask, kept on a light panel so the page does not run two dark sections
 * into each other before the closing CTA.
 */
export default function ShareStory() {
  return (
    <section
      id="share-your-story"
      aria-labelledby="share-your-story-heading"
      className="scroll-mt-28 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-brand-50/60 p-8 sm:p-12 lg:p-16">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute -top-24 -right-24 size-[26rem] rounded-full bg-brand-200/40 blur-[110px]" />
              <div className="absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-brand-100/60 blur-[110px]" />
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-5">
                <Eyebrow>{shareStory.eyebrow}</Eyebrow>
                <SplitHeading
                  id="share-your-story-heading"
                  text={shareStory.heading}
                  accent={shareStory.accent}
                  className="text-3xl leading-[1.12] text-ink sm:text-4xl"
                />
                <p className="max-w-lg text-base leading-relaxed text-muted">
                  {shareStory.body}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={shareStory.cta.href}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25"
                  >
                    <PenLine className="size-4" aria-hidden="true" />
                    {shareStory.cta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <a
                    href={shareStory.secondary.href}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {shareStory.secondary.label}
                  </a>
                </div>
              </div>

              {/* --------------------------------------- what makes it useful */}
              <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_24px_60px_-40px_rgb(15_23_42/0.5)] sm:p-8">
                <span className="font-display text-[0.65rem] font-semibold tracking-[0.24em] text-gold-500 uppercase">
                  What makes a review useful
                </span>

                <ul className="mt-6 flex flex-col gap-5">
                  {shareStory.points.map((point, i) => (
                    <li key={point} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-600 text-white"
                      >
                        <Check className="size-4" strokeWidth={2.5} />
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="font-display text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed text-ink-mute">
                          {point}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
