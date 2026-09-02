import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { after12Streams } from "@/lib/after-12th";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * The catalogue. One anchored block per stream — the ids match the After 12th
 * mega menu hrefs, so header links land on the right group.
 */
export default function After12Streams() {
  return (
    <section
      id="programmes"
      aria-labelledby="after12-streams-heading"
      className="bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>The catalogue</Eyebrow>
          <SplitHeading
            id="after12-streams-heading"
            text="Four streams, nineteen ways in"
            accent={["nineteen", "ways", "in"]}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-600"
          />
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            Pick by the work you want to be doing in a year, not by what sounds
            most impressive. Counselling exists to argue you out of the wrong
            one.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 lg:gap-20">
          {after12Streams.map((stream) => (
            <div key={stream.id} id={stream.id} className="scroll-mt-28">
              <Reveal className="flex flex-col gap-4 border-b border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-brand-600/50"
                  >
                    {stream.index}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                      {stream.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-gold-600">
                      {stream.tagline}
                    </p>
                  </div>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-muted lg:text-right">
                  {stream.blurb}
                </p>
              </Reveal>

              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stream.courses.map((course, i) => (
                  <Reveal as="li" key={course.title} delay={(i % 3) * 80}>
                    <Card className="group h-full">
                      <Link
                        href={course.href}
                        className="flex h-full flex-col p-6"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.7rem] font-medium text-brand-700">
                            {course.duration}
                          </span>
                          {course.badge && (
                            <span className="rounded-full bg-gold-100 px-2.5 py-1 text-[0.7rem] font-medium text-gold-700">
                              {course.badge}
                            </span>
                          )}
                        </div>

                        <h4 className="font-display mt-4 text-lg leading-snug font-semibold text-ink transition-colors duration-300 group-hover:text-brand-700">
                          {course.title}
                        </h4>
                        <p className="mt-2.5 text-sm leading-relaxed text-muted">
                          {course.blurb}
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {course.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="rounded-md border border-line px-2 py-1 text-[0.7rem] text-ink-mute"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-brand-600">
                          View syllabus
                          <ArrowUpRight
                            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </Card>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
