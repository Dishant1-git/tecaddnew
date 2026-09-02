import { Play } from "lucide-react";
import type { Course } from "@/lib/courses";
import { site } from "@/lib/content";
import { FadeUp } from "@/components/ui/Motion";

/**
 * The paragraph that sits directly under the hero: what this programme is, in
 * one pass, before the reader commits to the module breakdown further down.
 *
 * The prose is composed from the course model rather than written per course,
 * so it can never contradict the curriculum, tool stack or roles listed below
 * it. Tool names are emitted as `<strong>` from `course.tools` directly rather
 * than found by scanning the sentence, so a tool whose name happens to appear
 * inside another word is never half-bolded.
 */

/** Joins a list the way a sentence does: "a, b and c". */
function sentenceList(items: string[]) {
  if (items.length < 2) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/** The same, but each item is bold — for the tool run mid-sentence. */
function boldList(items: string[]) {
  return items.map((item, i) => (
    <span key={item}>
      {i > 0 && (i === items.length - 1 ? " and " : ", ")}
      <strong className="font-semibold text-ink">{item}</strong>
    </span>
  ));
}

export default function CourseIntro({
  course,
  /** Who the opening sentence names. Differs by registry. */
  audience = "students, graduates and working professionals",
  /**
   * A real video turns the panel into a player. Without one the panel renders
   * as a titled plate — deliberately with no play control, because an affordance
   * that does nothing when clicked is worse than no affordance.
   */
  video,
}: {
  course: Course;
  audience?: string;
  video?: { src: string; poster?: string };
}) {
  const early = course.modules.slice(0, 3).map((m) => m.title);
  const mid = course.modules.slice(3, 5).map((m) => m.title);
  const tools = course.tools.slice(0, 6);
  const roles = course.outcomes.slice(0, 3).map((o) => o.role);

  return (
    <section
      id="course-overview"
      aria-labelledby="course-overview-heading"
      className="scroll-mt-28 bg-white pt-20 pb-16 lg:pt-24 lg:pb-20"
    >
      <div className="container-page">
        <FadeUp standalone>
          <h2
            id="course-overview-heading"
            className="font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Course Overview
          </h2>
        </FadeUp>

        <FadeUp standalone>
          <p className="mt-8 max-w-5xl text-base leading-[1.9] text-muted lg:text-lg">
            {site.name}&apos;s {course.title} in {site.city} is aimed at{" "}
            {audience} — whatever they have or have not done before. The early
            modules cover {sentenceList(early)}, so nothing later assumes
            knowledge you were never given.
            {mid.length > 0 && <> From there you take on {sentenceList(mid)}.</>}{" "}
            The second half is where it turns practical: you work in{" "}
            {boldList(tools)} the way a team actually does, against briefs that
            carry a real deadline. Each module ends in something you have built
            and a trainer has reviewed, so you finish with a portfolio, a CV
            built around it and interview practice for{" "}
            {sentenceList(roles)} roles.
          </p>
        </FadeUp>

        <FadeUp standalone className="mt-12 lg:mt-14">
          <div className="rounded-3xl border border-line bg-brand-50/50 p-2.5 shadow-[0_40px_90px_-60px_rgb(15_23_42/0.5)] sm:p-3">
            {video ? (
              <video
                controls
                preload="none"
                poster={video.poster}
                className="aspect-video w-full rounded-2xl bg-ink"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            ) : (
              <div
                aria-hidden="true"
                className="relative isolate flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-ink to-accent"
              >
                <div className="absolute inset-0 -z-10">
                  <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-25" />
                  <div className="animate-aurora-a absolute -top-24 left-1/4 size-[28rem] rounded-full bg-brand-600/25 blur-[120px] will-change-transform" />
                </div>

                <div className="px-6 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 ring-inset backdrop-blur-sm sm:size-20">
                    <Play className="ml-1 size-7 text-white/70 sm:size-8" />
                  </span>
                </div>

                <p className="absolute bottom-5 left-0 w-full px-6 text-center text-xs tracking-[0.2em] text-white/40 uppercase sm:text-sm">
                  {course.title} · {site.name} {site.city}
                </p>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
