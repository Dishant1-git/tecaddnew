import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { after12BasePath, after12Streams } from "@/lib/after-12th-courses";

/** Shown when a slug does not match anything in the after-12th registry. */
export default function After12CourseNotFound() {
  /* One suggestion from each stream, so every route in is represented. */
  const suggestions = after12Streams
    .map((stream) => stream.courses[0])
    .filter(Boolean);

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-36 pb-24 text-white lg:pt-44 lg:pb-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute -top-40 left-1/4 size-[32rem] rounded-full bg-brand-600/25 blur-[130px]" />
      </div>

      <div className="container-page max-w-3xl">
        <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-brand-400 uppercase">
          404 — programme not found
        </span>
        <h1 className="font-display mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          We don&apos;t run an After 12th course at that address.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/55">
          The link may be out of date, or the programme may have been renamed.
          Start from the After 12th hub, or pick one of the tracks below.
        </p>

        <Link
          href={after12BasePath}
          className="group mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-white px-8 text-base font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
        >
          Browse After 12th courses
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {suggestions.map((course) => (
            <li key={course.slug}>
              <Link
                href={course.href}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                {course.title}
                <span className="text-xs text-white/40">{course.duration}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
