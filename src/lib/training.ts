/**
 * Builds the page model for /internship-training/[slug].
 *
 * These pages render the same components as /courses/[slug], so the model is
 * the same `Course` object — built by the shared `buildCourse` and then
 * re-pointed at someone choosing a *duration* rather than a subject. Only the
 * fields whose framing differs are overridden here; modules, tools, projects
 * and reviews come through the shared builder untouched.
 *
 * The hub page at /internship-training reads `trainingTracks` from this module
 * too, so the grid and the detail pages can never drift apart.
 */

import {
  buildCourse,
  type Course,
  type CourseReviews,
  type CourseSummary,
} from "./courses";
import {
  trainingSeeds,
  trainingTrackMeta,
  type TrainingSeed,
  type TrainingTrackId,
} from "./training-data";
import { site } from "./content";

export type { TrainingTrackId };

/** One card on the hub grid. */
export type TrainingCard = {
  slug: string;
  title: string;
  href: string;
  duration: string;
  blurb: string;
  highlights: string[];
  badge?: string;
};

export type TrainingTrack = {
  id: TrainingTrackId;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
  programmes: TrainingCard[];
};

export const trainingBasePath = "/internship-training";

/* ------------------------------------------------------------------- build */

const TRACK_LABELS: Record<TrainingTrackId, string> = {
  "short-term": "Short Term",
  "long-term": "Long Term",
  programmes: "Programme",
};

/**
 * The people who walk in asking for a duration rather than a subject. The
 * shared builder's personas are written for someone choosing a discipline,
 * which is the wrong question on these pages.
 */
function audienceFor(seed: TrainingSeed): Course["audience"] {
  const length = seed.duration.toLowerCase();

  return [
    {
      title: "Students after 12th",
      tag: "No experience needed",
      body: `Nothing is assumed beyond a 12th pass and comfort with a computer. ${seed.title} is often the first thing on an otherwise empty CV, which is exactly why it ends in a reviewed project rather than a certificate alone.`,
    },
    {
      title: "Graduates & final-year students",
      tag: "Counts for college",
      body: `If your syllabus mandates training, this satisfies it — and unlike a signature on a form, you leave with work you can show. Most of each intake is in their final year or just out of it.`,
    },
    {
      title: "Working professionals",
      tag: "Evening & weekend",
      body: `Two-hour classes either side of a working day, or a weekend batch across ${length}. You are not asked to resign to retrain, and the project work is scheduled around the batch you pick.`,
    },
    {
      title: "Freelancers & business owners",
      tag: "Immediately usable",
      body: `You are here for the specific thing you keep paying someone else to do. The live brief can usually be your own requirement rather than ours, so the training pays for itself once.`,
    },
    {
      title: "Career restarters",
      tag: "Gap explained",
      body: `A gap on a CV is only a problem if there is nothing to put in it. ${seed.projects.length} reviewed projects and a documented letter turn ${length} into an answer rather than a question.`,
    },
    {
      title: "Self-taught learners",
      tag: "Fills the gaps",
      body: `You can already build something; what is missing is the review, the conventions and the evidence. You skip the early blocks fast and spend the time saved on the live brief.`,
    },
  ];
}

/**
 * `credential` is written for the spec panel, where "Certificate + internship
 * letter" is right. Spliced into a sentence the "+" reads as a typo, so prose
 * uses this form instead.
 */
function credentialProse(seed: TrainingSeed) {
  return seed.credential.toLowerCase().replace(" + ", " and ");
}

function faqsFor(seed: TrainingSeed): Course["faqs"] {
  const first = seed.projects[0].title.toLowerCase();

  return [
    {
      q: `What exactly do I get at the end of ${seed.title}?`,
      a: `${seed.credential}. The certificate is issued against the modules you completed and the projects you submitted; the letter names those projects, the duration and the supervising reviewer. Both are drafted from your submissions, not from your attendance.`,
    },
    {
      q: "Which subject do I learn — is the discipline fixed?",
      a: `No. ${seed.title} is a format, not a syllabus. You pick the discipline at counselling — programming, data and AI, digital marketing, cyber and cloud, design or CAD — and the ${seed.duration.toLowerCase()} structure runs the same way whichever you choose.`,
    },
    {
      q: "Who is eligible, and is there an entrance test?",
      a: `${seed.eligibility}. There is no entrance test. The programme opens at ${seed.level
        .split(" to ")[0]
        .toLowerCase()} level, and anyone arriving with prior exposure moves through the early blocks faster and spends the saved time on project work.`,
    },
    {
      q: "Is the project work real, or a demo built for the classroom?",
      a: `Real. Briefs come out of the ${site.name} delivery pipeline, which means a genuine requirement, a genuine deadline and review notes you have to act on. You start on ${first} and build from there.`,
    },
    {
      q: "What will the fee be, and can I pay in instalments?",
      a: `${seed.title} sits in the ${seed.fee} range depending on batch type and mode. Instalment plans are available on every format and are agreed in writing at counselling, before you enrol.`,
    },
    {
      q: "What are the batch timings?",
      a: `Weekday, evening and weekend batches all run, plus one-on-one if you need it. Classes are two hours. Anything you miss is re-explained in the doubt slot rather than skipped.`,
    },
    {
      q: "Will this letter be accepted by my university?",
      a: `Yes — the letter names the projects, the duration and the supervisor, which is what departments in Punjab ask for. If your college has its own report format, tell us at the start and the documentation is produced in that format alongside the work.`,
    },
    {
      q: "Do you guarantee a job at the end?",
      a: `No, and nobody honestly can. What is committed is the placement cell: CV and portfolio reviews, mock interview rounds and drives with hiring partners, which continue after your batch finishes rather than stopping on your last day.`,
    },
    {
      q: `What can I realistically earn after ${seed.title}?`,
      a: `Freshers in ${site.city} with a portfolio and a documented letter typically start between ₹15,000 and ₹28,000 a month, moving up quickly once there is delivery history behind them. Anyone quoting you a guaranteed figure before seeing your work is guessing.`,
    },
    {
      q: "Can I take this remotely?",
      a: `Yes. Every batch runs classroom and live online in parallel, and the review loop is the same either way — the brief, the deadline and the trainer sign-off do not change because you are on a call.`,
    },
  ];
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Rebuilds the review rail from a programme's own written reviews.
 *
 * The shared builder derives its ratings from a hash of the slug, which is
 * right for generated quotes and wrong for real ones — so the average, the
 * total and the star distribution are all counted off the actual items here.
 * The bars underneath can then never disagree with the quotes above them.
 */
function reviewsFrom(
  items: NonNullable<TrainingSeed["copy"]>["reviews"],
): CourseReviews | undefined {
  if (!items || items.length === 0) return undefined;

  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    percent: Math.round(
      (items.filter((item) => item.rating === stars).length / items.length) *
        100,
    ),
  }));

  const average = (
    items.reduce((sum, item) => sum + item.rating, 0) / items.length
  ).toFixed(1);

  return {
    average,
    total: items.length,
    distribution,
    items: items.map((item) => ({ ...item, initials: initialsOf(item.name) })),
  };
}

function buildTrainingCourse(seed: TrainingSeed): Course {
  const base = buildCourse(seed);
  const trackLabel = TRACK_LABELS[seed.track];
  /* Written copy wins wherever a programme has any; everything it leaves out
     falls through to the generators above. */
  const copy = seed.copy ?? {};
  const reviews = reviewsFrom(copy.reviews);

  return {
    ...base,
    /* `buildCourse` rewrites the slug into the /courses URL form
       ("<name>-course-in-amritsar"); these formats keep their own short slugs,
       which is what the mega menu and the hub grid link to. */
    slug: seed.slug,
    /* Points the category rail at the hub anchor rather than a /courses one. */
    categorySlug: seed.track,

    hero: {
      ...base.hero,
      eyebrow: `Internship & Training · ${trackLabel} · ${site.name} ${site.city}`,
      headline: `${seed.title} in`,
      accent: site.city,
      chips: [seed.duration, "Live client brief", "Classroom & live online"],
    },

    /* The first three rows feed the hero meta strip in that order — duration,
       level, mode — so they stay put; the training rows follow. */
    spec: [
      { label: "Duration", value: seed.duration },
      { label: "Level", value: seed.level },
      { label: "Mode", value: "Classroom & live online" },
      { label: "Open to", value: seed.eligibility },
      { label: "Batches", value: "Weekday, evening, weekend & 1-on-1" },
      { label: "You leave with", value: seed.credential },
    ],

    /* No "student rating" here, unlike a course page: the detail pages drop the
       templated review section, so the rail leads on the fact a format page is
       actually bought for. */
    stats: [
      { value: seed.duration.split(" · ")[0], label: "Duration" },
      { value: String(base.modules.length), label: "Structured blocks" },
      { value: `${seed.projects.length}`, label: "Live projects" },
      { value: "Included", label: "Internship letter" },
    ],

    overview: {
      ...base.overview,
      heading: `What ${seed.title} actually involves`,
      paragraphs: [
        seed.focus,
        ...(copy.overview ?? [
          `${seed.title} runs across ${seed.duration.toLowerCase()} at ${site.name} ${site.city} as a fixed format rather than a fixed subject: you choose the discipline at counselling, and the structure — fundamentals, then a live brief, then documentation and placement prep — stays the same whichever you pick.`,
          `Batches are small enough that a trainer looks at your work individually every day, and the trainers are the people delivering client projects rather than career trainers repeating last year's case study. You finish with ${seed.projects.length} reviewed projects, plus a ${credentialProse(seed)}.`,
        ]),
      ],
      checks: copy.checks ?? [
        `${seed.eligibility} — no entrance test`,
        "Live briefs from a real delivery pipeline",
        "Daily trainer review, not weekly check-ins",
        "Placement cell continues after the batch ends",
      ],
    },

    audience: copy.audience ?? audienceFor(seed),
    faqs: copy.faqs ?? faqsFor(seed),
    reviews: reviews ?? base.reviews,

    closing: `Finish ${seed.title} and you leave ${site.city} with the two things a first employer actually looks for: ${seed.projects.length} projects someone reviewed and signed off, plus a ${credentialProse(seed)} that names the work rather than just the dates.`,
  };
}

/* --------------------------------------------------------------- accessors */

const built: Course[] = trainingSeeds.map(buildTrainingCourse);

const bySlug = new Map(built.map((course) => [course.slug, course]));

export const trainingCourses = built;

export const trainingSlugs = built.map((course) => course.slug);

export function getTrainingCourse(slug: string): Course | undefined {
  return bySlug.get(slug);
}

const seedBySlug = new Map(trainingSeeds.map((seed) => [seed.slug, seed]));

/**
 * The raw seed, for the sections that need fields the shared `Course` model has
 * no room for — the delivery plan and the credential wording.
 */
export function getTrainingSeed(slug: string): TrainingSeed | undefined {
  return seedBySlug.get(slug);
}

/** Hub-page grid, grouped into the three tracks in mega-menu order. */
export const trainingTracks: TrainingTrack[] = trainingTrackMeta.map((meta) => ({
  ...meta,
  programmes: trainingSeeds
    .filter((seed) => seed.track === meta.id)
    .map((seed) => ({
      slug: seed.slug,
      title: seed.title,
      href: `${trainingBasePath}/${seed.slug}`,
      duration: seed.duration,
      blurb: seed.cardBlurb,
      highlights: seed.highlights,
      badge: seed.badge,
    })),
}));

export const trainingCount = trainingSeeds.length;

const summaries: CourseSummary[] = trainingSeeds.map((seed) => ({
  slug: seed.slug,
  title: seed.title,
  category: seed.category,
  badge: seed.badge,
  featured: Boolean(seed.featured),
  tagline: seed.tagline,
  duration: seed.duration,
  level: seed.level,
  moduleCount: seed.topics.length,
  tools: seed.tools.slice(0, 4),
}));

export const trainingSummaries = summaries;

/**
 * Three sibling formats for the "keep exploring" rail: same track first, topped
 * up from the other tracks so a two-programme track still fills the row.
 */
export function relatedTraining(slug: string, count = 3): CourseSummary[] {
  const current = trainingSeeds.find((seed) => seed.slug === slug);
  if (!current) return summaries.slice(0, count);

  const sameTrack = summaries.filter((programme) => {
    const seed = trainingSeeds.find((s) => s.slug === programme.slug);
    return seed?.track === current.track && programme.slug !== slug;
  });
  const others = summaries.filter((programme) => {
    const seed = trainingSeeds.find((s) => s.slug === programme.slug);
    return seed?.track !== current.track && programme.slug !== slug;
  });

  return [...sameTrack, ...others].slice(0, count);
}
