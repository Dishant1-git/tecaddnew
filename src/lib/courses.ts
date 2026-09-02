/**
 * Builds the full page model for /courses/[slug] from the compact seeds in
 * `course-data.ts`.
 *
 * Everything a course page renders is derived here so the page component stays
 * declarative and every course — flagship or long-tail — gets the same depth of
 * content. Seeds carry what is course-specific; this module supplies the shared
 * scaffolding (module blurbs, eligibility personas, FAQ shell, stat rail).
 */

import { courseSeeds, type CourseCategory, type CourseSeed, type Topic } from "./course-data";
import { courseOverrides } from "./course-overrides";
import { site } from "./content";

export type { CourseCategory, CourseSeed };

/* ------------------------------------------------------------------- types */

export type CourseModule = {
  /** Two-digit index, e.g. "01". */
  code: string;
  title: string;
  blurb: string;
  skills: string[];
  tools: string[];
  deliverable: string;
};

export type CourseFaq = { q: string; a: string };

/**
 * Optional copy for the closing enquiry section. A course that supplies this
 * replaces the generic counsellor pitch with its own — and can turn on the
 * email field and the two profile pickers, which stay off everywhere else.
 */
export type CourseCtaCopy = {
  eyebrow?: string;
  heading?: string;
  accent?: string;
  body?: string;
  /** Course · duration · mode · centre, rendered as a small fact list. */
  facts?: string[];
  assurances?: string[];
  formTitle?: string;
  formNote?: string;
  submitLabel?: string;
  placeholders?: { name?: string; phone?: string; email?: string };
  showEmail?: boolean;
  /** Adds a "Current Status" picker with these options. */
  statusLabel?: string;
  statusOptions?: string[];
  /** Adds a "Preferred Batch" picker with these options. */
  batchLabel?: string;
  batchOptions?: string[];
};

/** Optional copy for the call-back band under the duration table. */
export type CourseDemoCopy = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  /** Label on the secondary button beside the phone number. */
  action?: string;
  /** One reassurance line under the buttons. */
  note?: string;
};

/** One student review rendered on a course page. */
export type CourseReview = {
  name: string;
  /** Avatar fallback — first letters of the reviewer's name. */
  initials: string;
  role: string;
  /** Whole stars, 1–5. */
  rating: number;
  quote: string;
  /** Batch and year line under the reviewer. */
  meta: string;
};

export type CourseReviews = {
  /** One-decimal average, derived from `distribution` so the two agree. */
  average: string;
  total: number;
  distribution: Array<{ stars: number; percent: number }>;
  items: CourseReview[];
};

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  categorySlug: string;
  badge?: string;
  featured: boolean;

  hero: {
    eyebrow: string;
    headline: string;
    /** Trailing words of the headline, rendered in the brand accent. */
    accent: string;
    tagline: string;
    chips: string[];
    /** Transparent hero render; absent for courses without artwork yet. */
    image?: string;
  };

  /** The "at a glance" spec table beside the overview. */
  spec: Array<{ label: string; value: string }>;
  stats: Array<{ value: string; label: string }>;

  overview: {
    heading: string;
    paragraphs: string[];
    checks: string[];
  };

  modules: CourseModule[];
  tools: string[];
  toolGroups: Array<{ label: string; items: string[] }>;

  /**
   * The line the module explorer prints beside its heading. Defaults to a
   * count of the modules; a course with its own written introduction to the
   * curriculum puts it here instead.
   */
  curriculumNote?: string;

  audience: Array<{ title: string; body: string; tag: string }>;

  eligibility: {
    heading: string;
    intro: string;
    criteria: Array<{ label: string; detail: string }>;
  };

  outcomes: Array<{ role: string; blurb: string }>;
  projects: Array<{ title: string; body: string; tags: string[] }>;
  faqs: CourseFaq[];
  reviews: CourseReviews;

  futureScope: {
    heading: string;
    intro: string;
    drivers: Array<{ title: string; body: string }>;
    horizon: string;
  };

  whyChoose: {
    heading: string;
    accent: string;
    body: string;
    reasons: Array<{ title: string; body: string }>;
  };

  /**
   * A second "why" panel, for courses whose copy argues the programme and the
   * institute separately. Rendered under `whyChoose` when present; every other
   * course leaves it undefined and the page draws one panel as before.
   */
  whyChooseAlt?: Course["whyChoose"];

  /**
   * The durations the centre actually runs, when the derived ones are wrong.
   *
   * The tracks table is otherwise cut from the course's span at even
   * fractions of it, which is right for most of the catalogue but not all of
   * it. `false` turns the section off, for a course run at a single flexible
   * duration. An explicit list — `[3, 6]` — keeps the section but uses those
   * figures as the tiers, in the unit the span is written in.
   */
  tracks?: false | number[];

  cta?: CourseCtaCopy;
  demo?: CourseDemoCopy;

  /** Per-course metadata and schema copy; falls back to the generic build. */
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };

  closing: string;
};

export type CourseSummary = Pick<
  Course,
  "slug" | "title" | "category" | "badge" | "featured"
> & {
  tagline: string;
  duration: string;
  level: string;
  moduleCount: number;
  tools: string[];
};

/* -------------------------------------------------------------- generators */

/**
 * Six rotating phrasings for module blurbs. Rotating by index keeps a long
 * curriculum from reading like the same sentence eight times, without needing
 * a bespoke blurb in every seed.
 */
const MODULE_FRAMES = [
  (topic: string, course: string) =>
    `${topic} is where the ${course} track gets its footing. You work the concepts in the lab first, then carry them straight into the running project rather than leaving them as isolated exercises.`,
  (topic: string) =>
    `This block turns ${topic.toLowerCase()} from something you have read about into something you can do under time pressure, with a mentor reviewing the work as you go.`,
  (topic: string, course: string) =>
    `By the end of ${topic.toLowerCase()}, you can make the calls a working ${course.toLowerCase()} practitioner makes daily — and explain why you made them.`,
  (topic: string) =>
    `${topic} is taught against realistic, imperfect inputs. The point is not the clean textbook case; it is what you do when the data or the requirement fights back.`,
  (topic: string, course: string) =>
    `Everything in ${topic.toLowerCase()} feeds the next stage of the ${course.toLowerCase()} build, so nothing here is theory you park and forget.`,
  (topic: string) =>
    `You leave ${topic.toLowerCase()} with a reviewed artefact in your portfolio, not just notes — that is the standard every module in this course is held to.`,
];

function moduleBlurb(topic: Topic, index: number, course: string) {
  /* A seed that writes its own blurb keeps it; the frames are the fallback. */
  return topic.b ?? MODULE_FRAMES[index % MODULE_FRAMES.length](topic.t, course);
}

function deliverableFor(topic: Topic) {
  if (topic.d) return topic.d;
  const [first, second] = topic.s;
  return `A reviewed piece of work demonstrating ${first.toLowerCase()}${
    second ? ` and ${second.toLowerCase()}` : ""
  }.`;
}

/** Slices the course tool list so each module shows a plausible subset. */
function toolsForModule(tools: string[], index: number, count = 4) {
  const out: string[] = [];
  for (let i = 0; i < count; i += 1) {
    out.push(tools[(index * 2 + i) % tools.length]);
  }
  return Array.from(new Set(out));
}

const CATEGORY_SLUGS: Record<CourseCategory, string> = {
  Programming: "programming",
  "AI & Data": "ai-data",
  "Digital Marketing": "digital-marketing",
  "Cyber & Cloud": "cyber-cloud",
  "Graphics & Media": "graphics-media",
  "Design & Drafting": "design-drafting",
  "Business & Office": "business-office",
  "Internship & Training": "internship-training",
};

const CATEGORY_BLURBS: Record<CourseCategory, string> = {
  Programming:
    "Languages, frameworks and the engineering habits that make code maintainable by someone other than you.",
  "AI & Data":
    "Models, analytics and decision intelligence — built on data you have actually had to clean.",
  "Digital Marketing":
    "Search, social, paid media and analytics, run as one measurable system.",
  "Cyber & Cloud":
    "Secure, resilient infrastructure and the operational discipline to keep it running.",
  "Graphics & Media":
    "Design, video and motion craft, judged on the portfolio it produces.",
  "Design & Drafting":
    "CAD and BIM for civil and mechanical work, taught to drawing-office standard.",
  "Business & Office":
    "Accounting, spreadsheets and the office software every commercial role assumes you already know.",
  "Internship & Training":
    "Fixed-duration formats built around live delivery work, ending in a certificate and a documented letter.",
};

/**
 * One line on why demand in this category is structural rather than seasonal,
 * plus the short label used to refer to "work in this field" in the closing
 * paragraph the future-scope generator below writes.
 */
const CATEGORY_FUTURE: Record<CourseCategory, { angle: string; field: string }> = {
  Programming: {
    angle:
      "Every product, in every industry, still runs on code someone has to write and maintain — and that has not changed even as the tools drafting the first version have.",
    field: "development work",
  },
  "AI & Data": {
    angle:
      "Every company sitting on years of data is now under pressure to turn it into forecasts, automation and decisions — and that pressure is still climbing, not levelling off.",
    field: "AI and data work",
  },
  "Digital Marketing": {
    angle:
      "Marketing budgets keep shifting from print and outdoor to channels that can be measured, so the people who can run a campaign and prove its return are the ones who get funded first.",
    field: "digital marketing work",
  },
  "Cyber & Cloud": {
    angle:
      "Every workload a business moves online creates a workload that needs securing, and breach headlines have turned that budget line non-negotiable rather than optional.",
    field: "cyber and cloud work",
  },
  "Graphics & Media": {
    angle:
      "Every brand, product and platform now needs a constant stream of visual and video content, and the studios producing it are hiring faster than they can train people internally.",
    field: "design and media work",
  },
  "Design & Drafting": {
    angle:
      "Infrastructure and real-estate spending across Punjab and the rest of India keeps funding new sites, and every one of them needs drawings before it needs concrete.",
    field: "drafting and design work",
  },
  "Business & Office": {
    angle:
      "Every business, regardless of size, still runs its books, filings and reporting on the software this course teaches — that layer of work does not shrink as a company grows, it multiplies.",
    field: "accounts and office work",
  },
  "Internship & Training": {
    angle:
      "Employers keep filtering for candidates who have already done real, supervised delivery work, not just coursework — a documented internship is what turns a resume into a shortlist.",
    field: "internship and training work",
  },
};

/**
 * Where the course leads over the next few years, not just at graduation.
 * Deliberately hedged — "markets move" is in the closing line on purpose —
 * because the honest version of this section is a case for durability, not a
 * guarantee of a number.
 */
function futureScopeFor(seed: CourseSeed, title: string, city: string): Course["futureScope"] {
  const future = CATEGORY_FUTURE[seed.category];
  const nextRole = seed.roles[1] ?? seed.roles[0];
  const coreTool = seed.tools[0];

  return {
    heading: `Where ${title.toLowerCase()} is headed from here`,
    intro: `A certificate answers what you can do today. This is the honest answer to what ${title.toLowerCase()} looks like three to five years out, and why the fundamentals this course spends real time on are what carry you there.`,
    drivers: [
      {
        title: "Demand is structural, not seasonal",
        body: future.angle,
      },
      {
        title: "The skill ladder keeps climbing",
        body: `${seed.roles[0]} is the entry rung, not the ceiling. Once that portfolio is in place, ${nextRole.toLowerCase()} is the realistic next step — a promotion earned on the job, not a second course you have to go back and pay for.`,
      },
      {
        title: "Tooling changes; fundamentals compound",
        body: `${coreTool} and the rest of the stack will look different in five years — they always do. What does not expire is the fundamentals this course is built around, which is why the syllabus is reviewed each intake instead of frozen once and reused.`,
      },
      {
        title: "Remote and hybrid widen the market",
        body: `A ${title.toLowerCase()} portfolio built in ${city} competes for the same remote and hybrid roles as anywhere else. Companies hiring for this work are increasingly indifferent to which city the offer letter is posted to.`,
      },
    ],
    horizon: `The ${seed.duration.toLowerCase()} programme is built around the part that is genuinely in your hands — and you leave holding all of it. A reviewed portfolio, an industry-recognised certificate and a fundamentals-first foundation you can keep building on. Markets move, as they always have; that foundation is exactly what lets you move with them as ${future.field} around you keeps shifting.`,
  };
}

/**
 * Six concrete reasons to enrol here rather than at the next centre down the
 * road — the same six beats the AI mega-menu pages argue (practitioner-led
 * teaching, small batches, reviewed work, current tooling, flexible batches,
 * support that continues), written generically enough to hold for every
 * category without needing its own seed field.
 */
function whyChooseFor(seed: CourseSeed, title: string, city: string): Course["whyChoose"] {
  const lower = title.toLowerCase();

  return {
    heading: "Why students choose",
    accent: site.name.toLowerCase(),
    body: `Two decades of training in ${city}, in a format that has not changed since: small batches, real projects, mentors who still work in the field.`,
    reasons: [
      {
        title: "Practitioner-led teaching",
        body: `Your mentor works in ${lower} for a living. The examples in class come from that work, and so do the shortcuts.`,
      },
      {
        title: "Small, fixed batches",
        body: "Batch sizes are capped so a raised hand gets answered in the session it was raised in, not weeks later.",
      },
      {
        title: "Reviewed, not marked",
        body: "Every submission comes back annotated, line by line. The notes are the point — they are what you carry into the interview.",
      },
      {
        title: "Current tooling",
        body: `We teach ${seed.tools.slice(0, 3).join(", ")} and refresh the list each intake, because a stale stack is worse than no stack.`,
      },
      {
        title: "Flexible batches",
        body: "Morning, evening and weekend tracks, classroom or live online, with recordings either way for revision.",
      },
      {
        title: "Support that continues",
        body: "Resume and portfolio review, mock interviews and hiring-drive access — and it does not stop the day the course ends.",
      },
    ],
  };
}

/**
 * The concrete "can I actually join" criteria — a straight checklist rather
 * than the persona copy `audience` carries, for the pages that want eligibility
 * read at a glance instead of argued.
 */
function eligibilityFor(seed: CourseSeed, title: string): Course["eligibility"] {
  const entryLevel = seed.level.split(" to ")[0];

  return {
    heading: `Who can join the ${title} course`,
    intro: `There is no entrance test and no restrictive prerequisite. What follows is what the programme actually checks for before you enrol.`,
    criteria: [
      {
        label: "Educational background",
        detail:
          "No specific degree or stream required — school leavers, graduates and career switchers all qualify.",
      },
      {
        label: "Prior experience",
        detail: `None required. The programme opens at ${entryLevel.toLowerCase()} level and builds from there across ${seed.duration.toLowerCase()}.`,
      },
      {
        label: "Age",
        detail:
          "No upper age limit. What matters is being able to commit to the full course rather than dropping off midway.",
      },
      {
        label: "Equipment",
        detail:
          "A laptop or desktop with a stable internet connection for classroom or live-online batches.",
      },
      {
        label: "Time commitment",
        detail: `Able to attend regularly across ${seed.duration.toLowerCase()}, in a morning, evening or weekend batch.`,
      },
    ],
  };
}

/**
 * Slugs with hero artwork. Files are transparent 3D renders at
 * /public/images/courses/<slug>.png — the filename *is* the slug, so adding a
 * course's art means dropping the PNG in and listing it here. A course absent
 * from this set falls back to its category render below.
 */
const COURSE_IMAGE_SLUGS = new Set([
  "artificial-intelligence",
  "c-cpp",
  "cloud-computing",
  "cybersecurity",
  "data-analytics",
  "data-science",
  "deep-learning",
  "digital-marketing",
  "ethical-hacking",
  "generative-ai",
  "google-ads",
  "java",
  "linux",
  "machine-learning",
  "mean-stack",
  "mern-stack",
  "php-full-stack",
  "power-bi",
  "python",
  "seo",
  "shopify",
  "social-media-marketing",
  "web-designing",
  "web-development",
  "wordpress",
]);

/** The render a course falls back to when it has no artwork of its own. */
const CATEGORY_IMAGES: Record<CourseCategory, string> = {
  Programming: "/images/categories/programming.png",
  "AI & Data": "/images/categories/ai.png",
  "Digital Marketing": "/images/categories/digital-marketing.png",
  "Cyber & Cloud": "/images/categories/cyber.png",
  "Graphics & Media": "/images/categories/cad.png",
  "Design & Drafting": "/images/categories/cad.png",
  "Business & Office": "/images/categories/programming.png",
  /* Training formats are cross-discipline, so there is no single true render;
     the neutral programming one stands in. */
  "Internship & Training": "/images/categories/programming.png",
};

function heroImage(seed: CourseSeed) {
  return COURSE_IMAGE_SLUGS.has(seed.slug)
    ? `/images/courses/${seed.slug}.png`
    : CATEGORY_IMAGES[seed.category];
}

/* ------------------------------------------------------------------- slugs */

/**
 * The public URL segment for a course: `<name>-course-in-amritsar`.
 *
 * Seeds keep their short, stable name (`digital-marketing`) as the internal
 * key — image lookups, related-course wiring and the AI menu all key off the
 * long form built here, so the short name never leaks into a URL. Names that
 * already end in "course"/"courses" have it stripped first, so `it-courses`
 * reads as "IT course in Amritsar" rather than repeating the word.
 */
export function courseUrlSlug(name: string) {
  const base = name.replace(/-courses?$/, "");
  return `${base}-course-in-${site.city.toLowerCase()}`;
}

/**
 * Categories the /courses index renders. The three after-12th-only categories
 * are deliberately absent — no `courseSeeds` entry carries them, so listing
 * them here would draw empty sections.
 */
const CATALOG_CATEGORIES: CourseCategory[] = [
  "Programming",
  "AI & Data",
  "Digital Marketing",
  "Cyber & Cloud",
];

export const courseCategories = CATALOG_CATEGORIES.map((label) => ({
  label,
  slug: CATEGORY_SLUGS[label],
  blurb: CATEGORY_BLURBS[label],
}));

/* ----------------------------------------------------------------- reviews */

/**
 * Reviewer pool. Names are placeholder alumni copy — the pool is walked with a
 * per-course offset so two courses never open with the same face.
 */
const REVIEWER_POOL = [
  { name: "Simranjeet Kaur", city: "Amritsar" },
  { name: "Harman Sidhu", city: "Jalandhar" },
  { name: "Aditya Verma", city: "Chandigarh" },
  { name: "Manpreet Kaur", city: "Ludhiana" },
  { name: "Neha Bansal", city: "Amritsar" },
  { name: "Rajiv Malhotra", city: "Gurugram" },
  { name: "Gurpreet Singh", city: "Bengaluru" },
  { name: "Tanvir Dhillon", city: "Noida" },
  { name: "Ishita Sharma", city: "Pune" },
  { name: "Karanveer Brar", city: "Mohali" },
  { name: "Ritika Chopra", city: "Amritsar" },
  { name: "Sahil Arora", city: "Delhi" },
  { name: "Jasleen Grewal", city: "Hyderabad" },
  { name: "Mohit Khanna", city: "Batala" },
];

type ReviewCtx = {
  title: string;
  topic: string;
  project: string;
  projectCount: number;
  tool: string;
  altTool: string;
  role: string;
  duration: string;
  city: string;
};

/**
 * Eight review voices, each pointed at a different thing a prospective student
 * actually weighs up: teaching style, project feedback, scheduling, tooling,
 * finishing, placement, currency of the syllabus, and theory/practice balance.
 */
const REVIEW_FRAMES: Array<(c: ReviewCtx) => string> = [
  (c) =>
    `I joined the ${c.title} batch with almost no background, and what made the difference was that ${c.topic.toLowerCase()} was taught by building rather than by slides. By the third week I was debugging my own code instead of copying someone else's.`,
  (c) =>
    `The project reviews are the real value. My ${c.project.toLowerCase()} was picked apart line by line, and those notes are exactly what I ended up talking through in the interview that got me a ${c.role.toLowerCase()} offer.`,
  (c) =>
    `Weekend batches meant I kept my job through the whole ${c.duration.toLowerCase()}. Anything I missed got re-explained without fuss, and lab access outside batch hours was never a problem.`,
  (c) =>
    `${c.tool} and the rest of the stack were set up on day one, so no week went into environment issues. Batches are small enough that a doubt gets answered the same day instead of piling up.`,
  (c) =>
    `I had tried learning ${c.title.toLowerCase()} on my own twice and stalled both times. A fixed batch in ${c.city}, a mentor who checks your work and a deadline on every module is the only reason I finished.`,
  () =>
    `Placement support was not just a line on the brochure — resume and portfolio review, two mock interviews with people who do the job, and a referral into one of the hiring drives.`,
  (c) =>
    `The syllabus is current. We worked in ${c.altTool} rather than the older tooling most ${c.title.toLowerCase()} syllabi around here still teach, and that came up directly in my first interview.`,
  (c) =>
    `The balance of theory to lab time is about right: enough to understand why something works, then straight into building. I left with ${c.projectCount} projects I can demo, not just a certificate.`,
];

/** Stable per-course hash so ratings and counts do not shift between builds. */
function slugSeed(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return hash;
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const BATCH_LABELS = ["Weekend", "Morning", "Evening"];

function buildReviews(seed: CourseSeed): CourseReviews {
  const hash = slugSeed(seed.slug);

  /* Distribution first; the headline average is derived from it so the star
     rail and the bars can never disagree. */
  const five = 78 + (hash % 8);
  const distribution = [
    { stars: 5, percent: five },
    { stars: 4, percent: 92 - five },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 1 },
  ];

  const average = (
    distribution.reduce((sum, row) => sum + row.stars * row.percent, 0) / 100
  ).toFixed(1);

  const items = REVIEW_FRAMES.map((frame, i) => {
    const person = REVIEWER_POOL[(hash + i * 3) % REVIEWER_POOL.length];
    const role = seed.roles[i % seed.roles.length];

    return {
      name: person.name,
      initials: initialsOf(person.name),
      role: `${role}, ${person.city}`,
      /* Roughly one review in six lands on four stars, which is what keeps the
         average honest at 4.8 rather than a suspicious flat five. */
      rating: (hash + i) % 6 === 0 ? 4 : 5,
      meta: `${BATCH_LABELS[(hash + i) % BATCH_LABELS.length]} batch · ${
        2025 + ((hash + i) % 2)
      }`,
      quote: frame({
        title: seed.title,
        topic: seed.topics[i % seed.topics.length].t,
        project: seed.projects[i % seed.projects.length].title,
        projectCount: seed.projects.length,
        tool: seed.tools[(hash + i) % seed.tools.length],
        altTool: seed.tools[(hash + i + 4) % seed.tools.length],
        role,
        duration: seed.duration,
        city: site.city,
      }),
    };
  });

  return {
    average,
    total: 120 + (hash % 90),
    distribution,
    items,
  };
}

/* ------------------------------------------------------------------- build */

/**
 * Exported so sibling registries — currently `after-12th-courses.ts` — can
 * build the same page model from their own seeds and then override only the
 * fields whose framing differs.
 */
export function buildCourse(seed: CourseSeed): Course {
  const { title, city } = { title: seed.title, city: site.city };
  const slug = courseUrlSlug(seed.slug);

  const modules: CourseModule[] = seed.topics.map((topic, i) => ({
    code: String(i + 1).padStart(2, "0"),
    title: topic.t,
    blurb: moduleBlurb(topic, i, title),
    skills: topic.s,
    tools: toolsForModule(seed.tools, i),
    deliverable: deliverableFor(topic),
  }));

  /* Split the flat tool list into three labelled rails for the stack section. */
  const third = Math.ceil(seed.tools.length / 3);
  const toolGroups = [
    { label: "Core", items: seed.tools.slice(0, third) },
    { label: "Working set", items: seed.tools.slice(third, third * 2) },
    { label: "Shipping", items: seed.tools.slice(third * 2) },
  ].filter((group) => group.items.length > 0);

  const reviews = buildReviews(seed);

  const built: Course = {
    slug,
    title,
    category: seed.category,
    categorySlug: CATEGORY_SLUGS[seed.category],
    badge: seed.badge,
    featured: Boolean(seed.featured),

    hero: {
      eyebrow: `${seed.category} · TechCadd ${city}`,
      headline: `${title} course in`,
      accent: city,
      tagline: seed.tagline,
      chips: [seed.duration, "Classroom & online", seed.level.split(" to ")[0]],
      image: heroImage(seed),
    },

    spec: [
      { label: "Duration", value: seed.duration },
      { label: "Level", value: seed.level },
      { label: "Mode", value: "Classroom & live online" },
      { label: "Batches", value: "Morning, evening & weekend" },
      { label: "Certification", value: "techcadd industry certificate" },
      { label: "Placement support", value: "Included for every enrolled student" },
    ],

    stats: [
      { value: `${reviews.average}/5`, label: "Student rating" },
      { value: `${modules.length}`, label: "Structured modules" },
      { value: `${seed.projects.length}+`, label: "Portfolio projects" },
      { value: "Yes", label: "Placement support" },
    ],

    overview: {
      heading: `What the ${title} programme actually covers`,
      paragraphs: [
        seed.focus,
        `The ${title.toLowerCase()} programme at TechCadd ${city} runs across ${seed.duration.toLowerCase()} and is built for students, graduates and working professionals who want a practical route into the field — without relocating to Chandigarh, Delhi or Bangalore for quality training.`,
        `Teaching is delivered by practitioners, in small batches, against a curriculum that is reviewed each intake. Every module ends in something reviewable, so by the end you hold a certificate, a portfolio and the confidence to talk through your own work in an interview.`,
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    modules,
    tools: seed.tools,
    toolGroups,

    audience: [
      {
        title: "Students & final-year candidates",
        tag: "Start early",
        body: `If you are still studying, this is the head start. You finish your degree with a ${title.toLowerCase()} portfolio already built, instead of starting from zero after graduation.`,
      },
      {
        title: "Graduates looking for a first role",
        tag: "Job-focused",
        body: `A degree proves you can learn; a project proves you can build. This programme gives you the second one, along with interview preparation aimed specifically at ${seed.roles[0].toLowerCase()} roles.`,
      },
      {
        title: "Working professionals upskilling",
        tag: "Weekend batches",
        body: `Evening and weekend batches exist for exactly this. Bring the domain knowledge you already have and layer ${title.toLowerCase()} on top of it — that combination is rarer and more valuable than either alone.`,
      },
      {
        title: "Career switchers from other fields",
        tag: "No prior coding needed",
        body: `The programme starts from fundamentals, so a non-technical background is a starting point rather than a disqualification. What it does need is consistency across ${seed.duration.toLowerCase()}.`,
      },
    ],

    eligibility: eligibilityFor(seed, title),

    outcomes: seed.roles.map((role, i) => ({
      role,
      blurb:
        i === 0
          ? `The most direct destination from this track — the projects you build map onto the day-one expectations of the role.`
          : `A realistic adjacent path once the core ${title.toLowerCase()} skill set is in place and evidenced by your portfolio.`,
    })),

    projects: seed.projects.map((project, i) => ({
      ...project,
      tags: toolsForModule(seed.tools, i + 1, 3),
    })),

    faqs: [
      {
        q: `Do I need prior experience to join the ${title} course?`,
        a: `No. The programme opens at ${seed.level.split(" to ")[0].toLowerCase()} level and assumes no background beyond comfort with a computer. Students who already have some exposure move through the early modules faster and spend the saved time on project work.`,
      },
      {
        q: "How long is the course and how are batches scheduled?",
        a: `It runs across ${seed.duration.toLowerCase()}, with morning, evening and weekend batches. Working professionals usually take the weekend track; full-time students generally take the weekday morning batch.`,
      },
      {
        q: "Is this classroom training or online?",
        a: `Both. The Amritsar campus runs classroom batches with lab access, and the same syllabus is delivered live online for students outside the city. Recordings are available either way for revision.`,
      },
      {
        q: "What certification do I receive?",
        a: `A TechCadd industry certificate on completion, issued against the modules you finished and the projects you submitted — plus an internship letter where the internship track applies.`,
      },
      {
        q: "What kind of projects will I build?",
        a: `${seed.projects.length} portfolio projects, starting with ${seed.projects[0].title.toLowerCase()} and building to a capstone. They are reviewed individually, and the review notes go into your portfolio documentation.`,
      },
      {
        q: "Is placement support included?",
        a: "Yes. Every enrolled student gets resume and portfolio review, mock interviews with practitioners, and access to the hiring drives we run through the year. Support continues after the course ends.",
      },
      {
        q: "Can I pay the fee in instalments?",
        a: "Yes — instalment plans are available and are agreed at the counselling stage. Speak to the Amritsar admissions desk for the current structure for this programme.",
      },
    ],

    reviews,

    futureScope: futureScopeFor(seed, title, city),
    whyChoose: whyChooseFor(seed, title, city),

    closing: `By the end of this ${title.toLowerCase()} programme in ${city}, you will not just understand ${title.toLowerCase()} theoretically — you will have built and reviewed real work, giving you a practical skill set and a portfolio ready for hiring conversations.`,
  };

  /* A course with its own written copy replaces whole fields of the generated
     model; everything it does not name comes through the builder untouched. */
  const override = courseOverrides[slug]?.course;

  return override ? { ...built, ...override } : built;
}

/* --------------------------------------------------------------- accessors */

const built: Course[] = courseSeeds.map(buildCourse);

const bySlug = new Map(built.map((course) => [course.slug, course]));

export const allCourses = built;

export const courseSlugs = built.map((course) => course.slug);

export function getCourse(slug: string): Course | undefined {
  return bySlug.get(slug);
}

export const courseSummaries: CourseSummary[] = courseSeeds.map((seed) => ({
  slug: courseUrlSlug(seed.slug),
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

export function summariesByCategory(category: CourseCategory) {
  return courseSummaries.filter((course) => course.category === category);
}

/**
 * Three sibling courses for the "continue exploring" rail: same category first,
 * topped up from other categories so short categories still fill the row.
 */
export function relatedCourses(slug: string, count = 3): CourseSummary[] {
  const current = bySlug.get(slug);
  if (!current) return courseSummaries.slice(0, count);

  const sameCategory = courseSummaries.filter(
    (course) => course.category === current.category && course.slug !== slug,
  );
  const others = courseSummaries.filter(
    (course) => course.category !== current.category && course.slug !== slug,
  );

  return [...sameCategory, ...others].slice(0, count);
}
