import Link from "next/link";
import { Check, Download } from "lucide-react";
import { FadeUp, Stagger } from "@/components/ui/Motion";
import TrainingPlates from "./TrainingPlates";

/**
 * What you walk out with, as the documents themselves.
 *
 * This replaces `CourseReviews` on the training pages: the review section draws
 * its quotes from a template pool shared site-wide, and on a format bought
 * largely *for* its paperwork the letter is the thing a visitor is actually
 * trying to verify.
 *
 * The plates themselves live in `TrainingPlates`, which is a client component
 * because they track the pointer; everything else here stays on the server.
 */

export default function TrainingPaperwork({
  title,
  credential,
}: {
  title: string;
  credential: string;
}) {
  /* The letter is named from the seed, so a university-format training letter
     and an internship letter each announce themselves correctly. */
  const isTrainingLetter = credential.toLowerCase().includes("training letter");
  const letterName = isTrainingLetter
    ? "Industrial Training Letter"
    : "Internship Letter";

  const points = [
    {
      title: "Industry Certificate",
      body: "Recognised by employers across Punjab and beyond",
    },
    {
      title: letterName,
      body: "Based on real client work, not a simulation",
    },
    {
      title: "Portfolio of Projects",
      body: "Live work you can show in any interview",
    },
    {
      title: "Placement Support",
      body: "CV review, mock interviews and hiring drives — support, not a guarantee",
    },
  ];

  return (
    <section
      id="paperwork"
      aria-labelledby="paperwork-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Light-ground ambience. `grid-overlay` draws white rules for dark
            sections and would be invisible here, so this uses the ink-drawn
            twin, and the blooms drop to tints a white page can carry. */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-white to-white" />
        <div className="animate-aurora-a absolute -top-40 left-1/4 size-[34rem] rounded-full bg-brand-200/45 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-32 -bottom-40 size-[30rem] rounded-full bg-gold-200/35 blur-[130px] will-change-transform" />
        <div
          className="dot-matrix-ink absolute inset-0 opacity-[0.35]"
          style={{
            maskImage:
              "radial-gradient(110% 80% at 50% 0%, black 5%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(110% 80% at 50% 0%, black 5%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ------------------------------------------------------- panel */}
          <div className="lg:col-span-5">
            <FadeUp standalone>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink-mute ring-1 ring-line ring-inset">
                Certification
              </span>
            </FadeUp>

            <FadeUp standalone>
              <h2
                id="paperwork-heading"
                className="font-display mt-6 text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                Get Certified in
                <span className="block">{title}</span>
              </h2>
            </FadeUp>

            <FadeUp
              standalone
              as="p"
              className="mt-5 max-w-md text-base leading-relaxed text-muted"
            >
              Complete the programme with a portfolio of live projects and
              receive an industry-recognised certificate, plus a documented
              {isTrainingLetter ? " training " : " internship "}
              letter accepted by Punjab universities.
            </FadeUp>

            <Stagger
              as="ul"
              className="mt-9 grid gap-3 sm:grid-cols-2"
              gap={0.07}
            >
              {points.map((point) => (
                <FadeUp
                  as="li"
                  key={point.title}
                  className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_22px_46px_-36px_rgb(15_23_42/0.45)]"
                >
                  <span
                    className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200 ring-inset"
                    aria-hidden="true"
                  >
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <p className="font-display mt-3.5 text-sm font-semibold text-ink">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </FadeUp>
              ))}
            </Stagger>

            <FadeUp standalone className="mt-9">
              {/* The enquiry block further down this page, not `/contact` —
                  that route is linked from a dozen components but does not
                  exist yet, and this button should not be the next one. */}
              <Link
                href="#enquire"
                className="group inline-flex h-13 items-center gap-2 rounded-full bg-brand-600 px-8 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Brochure
              </Link>
            </FadeUp>
          </div>

          {/* ------------------------------------------------------ plates */}
          <div className="lg:col-span-7">
            <TrainingPlates title={title} />

            <FadeUp
              standalone
              as="p"
              className="mt-4 text-center text-sm leading-relaxed text-muted"
            >
              Two documents on completion — the course certificate, and a
              separate {letterName.toLowerCase()} describing the live work you
              did.
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
