import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainingBasePath, trainingTracks } from "@/lib/training";

/** Shown when a slug does not match anything in the training registry. */
export default function TrainingNotFound() {
  /* One suggestion from each track, so every route in is represented. */
  const suggestions = trainingTracks
    .map((track) => track.programmes[0])
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
          We don&apos;t run a training format at that address.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/55">
          The link may be out of date, or the programme may have been renamed.
          Start from the internship &amp; training hub, or pick one of the
          formats below.
        </p>

        <Link
          href={trainingBasePath}
          className="group mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-white px-8 text-base font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
        >
          Browse training formats
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {suggestions.map((programme) => (
            <li key={programme.slug}>
              <Link
                href={programme.href}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                {programme.title}
                <span className="text-xs text-white/40">
                  {programme.duration}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
