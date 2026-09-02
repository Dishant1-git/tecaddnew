import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courseSummaries } from "@/lib/courses";
import { site } from "@/lib/content";
import CourseCatalog from "@/components/course/CourseCatalog";

export const metadata: Metadata = {
  title: `Courses in ${site.city} — ${site.name}`,
  description: `Every programming, AI, data, marketing, cyber and cloud programme running at ${site.name} ${site.city}, with full syllabus, tools and project detail.`,
  alternates: { canonical: "/courses" },
};

export default function CoursesIndexPage() {
  const featured = courseSummaries.filter((course) => course.featured).slice(0, 5);

  return (
    <>
      <section
        aria-labelledby="courses-index-heading"
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
            {courseSummaries.length} programmes · TechCadd {site.city}
          </span>

          <h1
            id="courses-index-heading"
            className="font-display mt-6 max-w-3xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Every course we run,
            <span className="block text-white/35">with the full syllabus.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 lg:text-lg">
            No hidden module lists and no “contact us for details”. Open any
            course to see its modules, tools, projects and the roles it leads to
            before you speak to anyone.
          </p>

          <div className="mt-10">
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-gold-300 uppercase">
              Most enrolled this intake
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {featured.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                  >
                    {course.title}
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

      <CourseCatalog />
    </>
  );
}
