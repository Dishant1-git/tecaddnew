/**
 * Builds the page model for /after-12th-courses/[slug].
 *
 * These pages render the same components as /courses/[slug], so the model is
 * the same `Course` object — built by the shared `buildCourse` and then
 * re-pointed at a school leaver. Only the fields whose framing differs are
 * overridden here; modules, tools, projects, outcomes and reviews come through
 * the shared builder untouched.
 *
 * The hub page at /after-12th-courses reads `after12Streams` from this module
 * too, so the grid and the detail pages can never drift apart.
 */

import { buildCourse, type Course, type CourseSummary } from "./courses";
import {
  after12Seeds,
  after12StreamMeta,
  type After12Seed,
  type After12StreamId,
} from "./after-12th-data";
import { site } from "./content";

export type { After12StreamId };

/** One card on the hub grid. */
export type After12CourseCard = {
  slug: string;
  title: string;
  href: string;
  duration: string;
  blurb: string;
  highlights: string[];
  badge?: string;
};

export type After12Stream = {
  id: After12StreamId;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
  courses: After12CourseCard[];
};

export const after12BasePath = "/after-12th-courses";

/* ------------------------------------------------------------------- build */

const STREAM_LABELS: Record<After12StreamId, string> = {
  "six-month": "6 Month Certificate",
  "one-year": "1 Year Certificate",
  graphics: "Graphics",
  "civil-mechanical": "Civil / Mechanical",
};

/**
 * The four personas that actually walk in for an after-12th programme. This
 * replaces the generic set the shared builder produces, which is written for
 * graduates and working professionals.
 */
function audienceFor(seed: After12Seed): Course["audience"] {
  const title = seed.title.toLowerCase();

  return [
    {
      title: "Straight out of 12th",
      tag: "No experience needed",
      body: `The programme assumes nothing beyond a 12th pass and comfort with a computer. You start at the actual beginning of ${title}, and by month three you are working on a brief rather than an exercise.`,
    },
    {
      title: "Studying alongside a degree",
      tag: "Evening & weekend",
      body: `Two hours a day fits either side of a college timetable. You graduate with a ${title} portfolio already built instead of starting one after your final semester.`,
    },
    {
      title: "Taking a drop or gap year",
      tag: "Fills the year",
      body: `An empty year reads badly on a CV. A certificate, ${seed.projects.length} reviewed projects and an internship letter turn it into something you can explain in an interview.`,
    },
    {
      title: "Joining a family business",
      tag: "Applies immediately",
      body: `Bring the business you already know and layer ${title} onto it. Students in this group usually apply the first two modules inside their own shop or unit before the course has ended.`,
    },
  ];
}

/** After-12th FAQ shell: the questions a parent asks at the desk. */
function faqsFor(seed: After12Seed): Course["faqs"] {
  return [
    {
      q: `Can I join the ${seed.title} course straight after 12th?`,
      a: `Yes. The entry requirement is ${seed.eligibility}, and there is no entrance test. Admissions run through the year rather than in a single intake window, so you can start in the gap between your result and college admissions closing.`,
    },
    {
      q: "Do I need any prior background for this course?",
      a: `No. The programme opens at ${seed.level.split(" to ")[0].toLowerCase()} level and builds from there across ${seed.duration.toLowerCase()}. Students who arrive with some exposure move through the early modules faster and spend the saved time on project work.`,
    },
    {
      q: "Can I do this alongside my college degree?",
      a: `That is what the evening and weekend batches exist for, and roughly a third of each intake is doing exactly that. Classes are two hours; anything you miss is re-explained in the doubt slot rather than skipped.`,
    },
    {
      q: "What will the fee be, and can I pay in instalments?",
      a: `The ${seed.title} programme sits in the ${seed.fee} range depending on batch type and mode. Instalment plans are available on every programme and are agreed in writing at counselling, before you enrol.`,
    },
    {
      q: "What certificate and internship do I get?",
      a: `A ${site.name} industry certificate issued against the modules you completed and the projects you submitted${
        seed.duration.includes("1 year")
          ? ", plus a documented internship letter from the second-semester internship track, which Punjab universities accept for credit requirements"
          : ""
      }.`,
    },
    {
      q: "What kind of projects will I actually build?",
      a: `${seed.projects.length} portfolio projects, starting with ${seed.projects[0].title.toLowerCase()} and building to a capstone. Each one is reviewed individually and the review notes go into your portfolio documentation.`,
    },
    {
      q: "Is placement support included?",
      a: `Yes, for every enrolled student: CV and portfolio review, two mock interviews with working practitioners, and entry into the hiring drives we run through the year with regional partners. Support continues after the course ends.`,
    },
    {
      q: "Can I sit a class before paying anything?",
      a: `Yes. The demo class is a full session inside a running batch, not a sales pitch. If you switch programmes within the first two weeks, the fee moves with you.`,
    },
  ];
}

function buildAfter12Course(seed: After12Seed): Course {
  const base = buildCourse(seed);
  const streamLabel = STREAM_LABELS[seed.stream];

  return {
    ...base,
    /* `buildCourse` rewrites the slug into the /courses URL form
       ("best-…-course-in-amritsar"); this hub keeps its own short slugs. */
    slug: seed.slug,
    /* Points the category rail at the hub anchor rather than a /courses one. */
    categorySlug: seed.stream,

    hero: {
      ...base.hero,
      eyebrow: `After 12th · ${streamLabel} · ${site.name} ${site.city}`,
      chips: [seed.duration, seed.eligibility, "Classroom & live online"],
    },

    /* The first three rows feed the hero meta strip in that order — duration,
       level, mode — so they stay put; the after-12th rows follow. */
    spec: [
      { label: "Duration", value: seed.duration },
      { label: "Level", value: seed.level },
      { label: "Mode", value: "Classroom & live online" },
      { label: "Eligibility", value: seed.eligibility },
      { label: "Batches", value: "Morning, evening & weekend" },
      { label: "Fee range", value: `${seed.fee} · instalments available` },
      { label: "Certification", value: `${site.name} industry certificate` },
      {
        label: "Internship",
        value: seed.duration.includes("1 year")
          ? "Included — second semester"
          : "Optional add-on track",
      },
    ],

    stats: [
      { value: base.reviews.average + "/5", label: "Student rating" },
      { value: String(base.modules.length), label: "Structured modules" },
      { value: `${seed.projects.length}+`, label: "Portfolio projects" },
      { value: "12th pass", label: "Entry requirement" },
    ],

    overview: {
      ...base.overview,
      paragraphs: [
        seed.focus,
        `The ${seed.title.toLowerCase()} programme runs across ${seed.duration.toLowerCase()} at ${site.name} ${site.city} and is built for students who have just finished school — no degree, no prior experience and no coding background assumed. Two hours a day, five days a week, in batches small enough that your work is looked at individually.`,
        `You can take it as a standalone career course, run it alongside a degree in the evening or weekend batch, or use it to fill a drop year with something a recruiter will actually read. Whichever route you take, the finish line is the same: a certificate, ${seed.projects.length} reviewed projects and a portfolio you can talk through in an interview.`,
      ],
      checks: [
        `${seed.eligibility}, and no entrance test`,
        "Every concept is built before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Lab access and doubt sessions outside batch hours",
      ],
    },

    audience: audienceFor(seed),
    faqs: faqsFor(seed),

    closing: `Finish this ${seed.title.toLowerCase()} programme and you leave ${site.city} with more than a certificate from your 12th year: a reviewed portfolio, an internship letter where the track applies, and a first role that is realistic rather than aspirational.`,
  };
}

/* --------------------------------------------------------------- accessors */

const built: Course[] = after12Seeds.map(buildAfter12Course);

const bySlug = new Map(built.map((course) => [course.slug, course]));

export const after12Courses = built;

export const after12Slugs = built.map((course) => course.slug);

export function getAfter12Course(slug: string): Course | undefined {
  return bySlug.get(slug);
}

/** Hub-page grid, grouped into the four streams in mega-menu order. */
export const after12Streams: After12Stream[] = after12StreamMeta.map((meta) => ({
  ...meta,
  courses: after12Seeds
    .filter((seed) => seed.stream === meta.id)
    .map((seed) => ({
      slug: seed.slug,
      title: seed.title,
      href: `${after12BasePath}/${seed.slug}`,
      duration: seed.duration,
      blurb: seed.cardBlurb,
      highlights: seed.highlights,
      badge: seed.badge,
    })),
}));

export const after12CourseCount = after12Seeds.length;

const summaries: CourseSummary[] = after12Seeds.map((seed) => ({
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

/**
 * Three sibling programmes for the "keep exploring" rail: same stream first,
 * topped up from other streams so a four-course stream still fills the row.
 */
export function relatedAfter12Courses(slug: string, count = 3): CourseSummary[] {
  const current = after12Seeds.find((seed) => seed.slug === slug);
  if (!current) return summaries.slice(0, count);

  const sameStream = after12Seeds.filter(
    (seed) => seed.stream === current.stream && seed.slug !== slug,
  );
  const others = after12Seeds.filter(
    (seed) => seed.stream !== current.stream && seed.slug !== slug,
  );

  const order = [...sameStream, ...others].slice(0, count).map((seed) => seed.slug);

  return order
    .map((s) => summaries.find((summary) => summary.slug === s))
    .filter((summary): summary is CourseSummary => Boolean(summary));
}
