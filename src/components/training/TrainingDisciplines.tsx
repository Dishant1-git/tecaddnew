import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courseCategories, summariesByCategory } from "@/lib/courses";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import ToolMark from "@/components/course/ToolMark";

/** Four courses per category is enough to show the shape without a wall. */
const PER_CATEGORY = 4;

/**
 * Which subject you take inside the format.
 *
 * This replaces `ToolStack` on these pages. A course page can list a real
 * toolchain because the subject is fixed; a format page cannot — the discipline
 * is chosen at counselling, so every training page would otherwise show the
 * same eight generic tools. The useful answer to "what will I actually learn"
 * is the catalogue, so that is what this section shows.
 */
export default function TrainingDisciplines({ title }: { title: string }) {
  return (
    <section
      id="disciplines"
      aria-labelledby="disciplines-heading"
      className="scroll-mt-28 overflow-hidden border-y border-line bg-brand-50/40 py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp standalone>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                  <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                  Pick your discipline
                </span>
              </FadeUp>
              <WordsUp
                as="h2"
                text="The format is fixed."
                accent="The subject is yours"
                accentClassName="text-gold-500"
                className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
              />
              <span id="disciplines-heading" className="sr-only">
                Disciplines available in this format
              </span>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                {title} sets the length, the review loop and the paperwork. What
                you build inside it is a decision you make at counselling — any
                track below runs in this format.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                Each course page lists its full module breakdown, its real
                toolchain and the roles it leads to, so you can compare before
                you commit to one.
              </p>
              <Link
                href="/courses"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors duration-300 hover:text-brand-700"
              >
                Browse the full catalogue
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <Stagger className="space-y-8 lg:col-span-7" gap={0.1}>
            {courseCategories.map((category) => (
              <FadeUp key={category.slug}>
                <div className="flex items-center gap-4">
                  <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted uppercase">
                    {category.label}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {summariesByCategory(category.label)
                    .slice(0, PER_CATEGORY)
                    .map((course) => (
                      <li key={course.slug}>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="group inline-flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-[0_12px_26px_-18px_rgb(37_99_235/0.6)]"
                        >
                          {/* A discipline has no logo of its own, so the chip
                              carries the mark of the tool that track leads on —
                              which is the more useful signal anyway. */}
                          <ToolMark tool={course.tools[0]} />
                          {course.title}
                          <ArrowRight
                            className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                </ul>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
