import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { trainingCount, trainingSummaries } from "@/lib/training";
import TrainingTracks from "@/components/training/TrainingTracks";
import TrainingIncludes from "@/components/training/TrainingIncludes";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `Internship & Industrial Training in ${site.city} — ${site.name}`,
  description: `45 days, 6 weeks, 4 and 6 month training plus industrial training and internship placements at ${site.name} ${site.city} — live client briefs, daily trainer review, industry certificate and a documented internship letter.`,
  openGraph: {
    title: `Internship & Industrial Training in ${site.city} — ${site.name}`,
    description: `Fixed-duration training formats in ${site.city} built around live client work, ending in a certificate and a documented letter.`,
    type: "website",
  },
  alternates: { canonical: "/internship-training" },
};

export default function InternshipTrainingPage() {
  return (
    <>
      <section
        aria-labelledby="training-index-heading"
        className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-24"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
          <div className="animate-trace circuit-texture absolute inset-0 opacity-35" />
          <div className="grid-overlay absolute inset-0 opacity-35" />
          <div className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-brand-600/25 blur-[130px]" />
          <div className="absolute -right-32 -bottom-40 size-[32rem] rounded-full bg-accent/40 blur-[130px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-page">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {trainingCount} training formats · {site.name} {site.city}
          </span>

          <h1
            id="training-index-heading"
            className="font-display mt-6 max-w-3xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Training built around
            <span className="block text-white/35">a live client brief.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 lg:text-lg">
            Pick the length your college mandates or your schedule allows. Every
            format spends its first stretch on fundamentals and the rest on a
            real requirement with a real deadline — and ends in a certificate and
            a letter that names the work rather than the dates.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-white px-8 text-base font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Talk to a counsellor
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <Link
              href="#what-you-get"
              className="inline-flex h-13 items-center rounded-full px-8 text-base font-medium text-white/80 ring-1 ring-white/20 ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:ring-white/45"
            >
              What every format includes
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-gold-300 uppercase">
              Jump to a format
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {trainingSummaries.map((programme) => (
                <li key={programme.slug}>
                  <Link
                    href={`/internship-training/${programme.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                  >
                    {programme.title}
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrainingIncludes />
      <TrainingTracks />
      <FinalCta />
    </>
  );
}
