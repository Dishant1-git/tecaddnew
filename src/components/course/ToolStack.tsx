"use client";

import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";
import ToolMark from "@/components/course/ToolMark";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * The tool stack, grouped by when you meet it rather than dumped as one cloud
 * of logos — core tools first, then the daily working set, then what you use to
 * ship. The marquee underneath restates the full list as ambient texture.
 *
 * `withMarks` prefixes every tool with its brand logo. It is on for the
 * after-12th programmes, where the audience recognises the logos long before
 * it recognises the product names.
 */
export default function ToolStack({
  course,
  withMarks = false,
}: {
  course: Course;
  withMarks?: boolean;
}) {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="overflow-hidden border-y border-line bg-brand-50/40 py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp standalone>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                Tools you will actually use
              </span>
            </FadeUp>
            <WordsUp
              as="h2"
              text="The working stack for"
              accent={course.title}
              accentClassName="text-gold-500"
              className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
            />
            <span id="tools-heading" className="sr-only">
              Tools and technologies covered
            </span>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Every tool below is installed, configured and used by you during
              the course — not demonstrated on a slide. You leave able to set up
              your own environment from scratch.
            </p>
            <p className="font-display mt-8 text-4xl font-semibold text-ink">
              {course.tools.length}
              <span className="ml-2 align-middle text-sm font-medium tracking-wide text-muted uppercase">
                tools covered
              </span>
            </p>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="space-y-8" gap={0.1}>
              {course.toolGroups.map((group) => (
                <FadeUp key={group.label}>
                  <div className="flex items-center gap-4">
                    <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted uppercase">
                      {group.label}
                    </span>
                    <span
                      className="h-px flex-1 bg-line"
                      aria-hidden="true"
                    />
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((tool) => (
                      <li
                        key={tool}
                        className={cn(
                          "rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-[0_12px_26px_-18px_rgb(37_99_235/0.6)]",
                          withMarks && "flex items-center gap-2.5",
                        )}
                      >
                        {withMarks ? <ToolMark tool={tool} /> : null}
                        {tool}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              ))}
            </Stagger>
          </div>
        </div>
      </div>

      <div className="mt-16" aria-hidden="true">
        <Marquee
          items={course.tools}
          duration={42}
          renderItem={(tool) => (
            <span
              className={cn(
                "font-display rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-medium text-muted",
                withMarks && "inline-flex items-center gap-2.5",
              )}
            >
              {withMarks ? <ToolMark tool={tool} /> : null}
              {tool}
            </span>
          )}
        />
      </div>
    </section>
  );
}
