import {
  BadgeCheck,
  Briefcase,
  CalendarClock,
  FileText,
  Users,
  Wrench,
} from "lucide-react";
import { site } from "@/lib/content";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/**
 * What holds across every format, so the track grid above does not have to
 * repeat it on six cards. Deliberately states the placement position plainly —
 * a support commitment, not a guarantee.
 */
const INCLUDED = [
  {
    icon: Briefcase,
    title: "A live client brief",
    body: `Briefs come out of the ${site.name} delivery pipeline — a real requirement with a real deadline, not a demo built for the classroom.`,
  },
  {
    icon: Users,
    title: "Daily trainer review",
    body: "Batches stay small enough that someone looks at your work every day. The trainers are the people delivering client projects.",
  },
  {
    icon: BadgeCheck,
    title: "Industry certificate",
    body: "Issued against the blocks you completed and the projects you submitted, so it says something a hiring manager can check.",
  },
  {
    icon: FileText,
    title: "Documented letter",
    body: "An internship or industrial-training letter that names the projects and the supervisor — in your department's format if it has one.",
  },
  {
    icon: CalendarClock,
    title: "Batch that fits",
    body: "Weekday, evening, weekend and one-on-one all run in parallel, classroom or live online, on two-hour classes.",
  },
  {
    icon: Wrench,
    title: "Placement support",
    body: "CV reviews, mock interview rounds and hiring-partner drives, continuing after your batch ends. Support, not a guarantee.",
  },
];

export default function TrainingIncludes() {
  return (
    <section
      id="what-you-get"
      aria-labelledby="what-you-get-heading"
      className="scroll-mt-28 border-b border-line bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeUp standalone>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
              <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
              Same in every format
            </span>
          </FadeUp>
          <WordsUp
            as="h2"
            text="Whichever length you pick,"
            accent="this part does not change"
            accentClassName="text-gold-500"
            className="mt-4 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl"
          />
          <span id="what-you-get-heading" className="sr-only">
            What every training format includes
          </span>
          <FadeUp
            standalone
            as="p"
            className="mt-5 text-base leading-relaxed text-muted"
          >
            The duration decides how much you build. It does not decide whether
            the work is real, whether anyone reviews it, or what you walk out
            holding.
          </FadeUp>
        </div>

        <Stagger
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5"
          gap={0.07}
        >
          {INCLUDED.map(({ icon: Icon, title, body }) => (
            <FadeUp
              as="li"
              key={title}
              className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_22px_46px_-36px_rgb(15_23_42/0.45)]"
            >
              <span
                aria-hidden="true"
                className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600"
              >
                <Icon className="size-5" strokeWidth={1.9} />
              </span>
              <h3 className="font-display mt-4 text-base font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
