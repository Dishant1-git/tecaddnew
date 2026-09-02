"use client";

import { Fragment, useState } from "react";
import { Play } from "lucide-react";
import type { Course } from "@/lib/courses";
import type { AiCourseView } from "@/lib/ai-course";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/* --------------------------------------------------------------- highlight */

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Renders a paragraph with the course's own key terms — its title, city,
 * duration, target role and lead tools — lifted into the accent colour.
 *
 * Terms are matched longest-first so "Artificial Intelligence" wins over a
 * bare "Intelligence", and the split keeps the original casing from the copy
 * rather than the casing of the term.
 */
function Highlighted({ text, terms }: { text: string; terms: string[] }) {
  const unique = Array.from(new Set(terms.filter(Boolean))).sort(
    (a, b) => b.length - a.length,
  );

  if (unique.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${unique.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        /* split() with one capture group puts matches at every odd index. */
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-brand-700">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/* ------------------------------------------------------------------- media */

/**
 * Placeholder for the campus walkthrough clip. Until a real file lands in
 * /public it renders as a poster plate; clicking it flips to a caption rather
 * than pretending to play something that does not exist yet.
 *
 * The plate itself stays dark even on this light panel — a video poster reads
 * as a screen, and a white rectangle would not.
 */
function MediaPanel({ caption }: { caption: string }) {
  const [armed, setArmed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_70px_-50px_rgb(15_23_42/0.55)]">
      <button
        type="button"
        onClick={() => setArmed(true)}
        aria-label={armed ? caption : `Play: ${caption}`}
        className="group relative block aspect-video w-full overflow-hidden bg-black"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-brand-900/70 via-black to-ink"
        />
        <span
          aria-hidden="true"
          className="circuit-texture absolute inset-0 opacity-25"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(37_99_235/0.28),transparent_65%)]"
        />

        <span className="relative grid size-full place-items-center">
          <span className="grid size-16 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
            <Play
              className="size-6 translate-x-0.5 fill-white text-white"
              aria-hidden="true"
            />
          </span>
        </span>

        {armed && (
          <span className="absolute inset-x-0 bottom-0 bg-ink/85 px-5 py-3 text-left text-xs text-white/70 backdrop-blur-md">
            Walkthrough video coming soon — drop the file into /public and point
            this panel at it.
          </span>
        )}
      </button>

      <figcaption className="border-t border-line px-5 py-4 text-sm text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiOverview({
  course,
  view,
}: {
  course: Course;
  view: AiCourseView;
}) {
  return (
    <section
      id="ai-overview"
      aria-labelledby="ai-overview-heading"
      className="relative isolate overflow-hidden border-y border-line bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 -right-40 size-[34rem] rounded-full bg-brand-100/45 blur-[130px]"
      />

      <div className="container-page">
        <AiHead
          id="ai-overview-heading"
          eyebrow="About the programme"
          heading={view.overview.heading}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Stagger className="lg:col-span-7" gap={0.09}>
            {view.overview.paragraphs.map((paragraph, i) => (
              <FadeUp
                as="p"
                key={paragraph.slice(0, 32)}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-ink-mute"
                    : "mt-5 text-base leading-relaxed text-muted"
                }
              >
                <Highlighted
                  text={paragraph}
                  terms={view.overview.highlights}
                />
              </FadeUp>
            ))}

            <FadeUp className="mt-8 grid gap-3 sm:grid-cols-2">
              {course.overview.checks.map((check) => (
                <span
                  key={check}
                  className="flex items-start gap-2.5 rounded-2xl border border-line bg-brand-50/60 px-4 py-3.5 text-sm leading-snug text-ink-mute"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-600"
                  />
                  {check}
                </span>
              ))}
            </FadeUp>
          </Stagger>

          <FadeUp standalone className="lg:col-span-5">
            <MediaPanel caption={view.overview.caption} />

            <dl className="mt-4 grid grid-cols-2 gap-3">
              {course.spec.slice(0, 4).map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-line bg-white px-4 py-3"
                >
                  <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted uppercase">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug font-medium text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
