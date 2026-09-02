import Link from "next/link";
import { site } from "@/lib/content";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import { trainingBasePath } from "@/lib/training";

/**
 * Why this institute rather than the one down the road.
 *
 * Every figure here is one the site already claims elsewhere — "since 2007"
 * from the footer, "15,000+ students" from the about-page timeline — so this
 * section cannot drift away from the rest of the site. The placement line is
 * deliberately about persistence rather than a rate, because a guaranteed
 * outcome is not something we say anywhere else either.
 */
const REASONS = [
  {
    title: "Trainers who still do the work",
    body: `Your trainer is not a full-time lecturer. They deliver client projects for the ${site.name} services arm, so the examples in class are current rather than a case study from five years ago.`,
  },
  {
    title: "Live projects, real consequences",
    body: "You work on genuine client requirements under supervision. That is where a portfolio comes from, and it is the first thing an interviewer asks to see.",
  },
  {
    title: "Small batches and open lab hours",
    body: "Batches stay small enough that a trainer sees your screen daily. Lab time runs outside class hours, and doubt sessions continue until the concept lands.",
  },
  {
    title: "Internship letter and certificate",
    body: (
      <>
        Every student finishes with an industry-recognised certificate and a
        documented internship on real work, accepted for university{" "}
        <Link
          href={`${trainingBasePath}/industrial-training`}
          className="font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
        >
          industrial training
        </Link>{" "}
        requirements.
      </>
    ),
  },
  {
    title: "A placement cell that persists",
    body: `Mock interviews, CV reviews and drives with hiring partners across ${site.city} and Punjab — repeated after a rejection, not abandoned.`,
  },
  {
    title: "Since 2007, 15,000+ students",
    body: `Nearly two decades of hiring relationships in Punjab is why a call from our placement cell gets answered, and why local employers know what a ${site.name} certificate means.`,
  },
];

export default function TrainingWhy({
  title,
  intro,
  reasons,
}: {
  title: string;
  /** Replaces the generic lead paragraph, for a programme with its own copy. */
  intro?: string;
  /** Replaces the six generic reasons. Any count lays out on the grid. */
  reasons?: Array<{ title: string; body: string }>;
}) {
  const cards = reasons ?? REASONS;

  return (
    <section
      id="why"
      data-cursor="light"
      aria-labelledby="why-heading"
      /* The same dark ground as the course hero at the top of this page, so
         the "why us" argument lands as a deliberate band rather than more
         white page. Background recipe is the hero's, at a calmer intensity. */
      className="relative isolate scroll-mt-28 overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-[0.28]" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute -top-40 left-1/4 size-[34rem] rounded-full bg-brand-600/20 blur-[130px]" />
        <div className="absolute -right-32 -bottom-40 size-[32rem] rounded-full bg-accent/40 blur-[130px]" />
        <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-page">
        <FadeUp standalone>
          <span className="inline-flex items-center rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white/70 ring-1 ring-white/15 ring-inset backdrop-blur-md">
            Why {site.name.toLowerCase()}
          </span>
        </FadeUp>

        <FadeUp standalone>
          <h2
            id="why-heading"
            className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-white sm:text-5xl"
          >
            Why students choose {site.name.toLowerCase()}
          </h2>
        </FadeUp>

        <FadeUp
          standalone
          as="p"
          className="mt-7 max-w-3xl text-base leading-relaxed text-white/55 lg:text-lg"
        >
          {intro ?? (
            <>
              There are many places to learn this in {site.city}, and the
              brochure syllabus looks similar at all of them. What differs is
              who teaches, whether you ever touch real work, and whether anyone
              picks up the phone after you have paid. {site.name} has trained
              students across Punjab since 2007 on the same model: small
              batches, working practitioners as trainers, client projects as
              coursework — and {title} runs on exactly that model.
            </>
          )}
        </FadeUp>

        <Stagger
          as="ul"
          className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-14"
          gap={0.07}
        >
          {cards.map((reason) => (
            <FadeUp
              as="li"
              key={reason.title}
              className="border-t border-white/15 pt-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {reason.body}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
