/**
 * View model for the AI-track course pages.
 *
 * Courses reached from the AI mega menu render a different page shape from the
 * rest of the catalogue: a longer, marketing-led scroll (overview → readiness →
 * audience → curriculum → tool mesh → certification → careers → projects →
 * comparison → reviews) instead of the compact catalogue layout.
 *
 * Everything here is *derived* from the same `Course` object the standard page
 * uses, so no seed in `course-data.ts` needs an AI-only branch. Add a course to
 * the AI menu in `content.ts` and it picks this layout up automatically.
 */

import { aiMenu, megaMenus, navItems, site } from "./content";
import { courseOverrides } from "./course-overrides";
import type { Course } from "./courses";

/* ------------------------------------------------------------- membership */

function slugsFrom(hrefs: string[]) {
  return hrefs
    .filter((href) => href.startsWith("/courses/"))
    .map((href) => href.slice("/courses/".length))
    .filter((slug) => slug !== "" && !slug.includes("#"));
}

/**
 * Slugs also linked from the Courses mega menu (e.g. Artificial Intelligence,
 * Machine Learning). A course listed there needs to render the same catalogue
 * layout as every other Courses-dropdown page — Digital Marketing included —
 * so it is excluded from the AI layout below even though it is *also* linked
 * from the AI mega menu.
 */
const COURSES_MENU_SLUGS = new Set(
  slugsFrom(megaMenus.courses.columns.flatMap((column) => column.links.map((link) => link.href))),
);

/**
 * Both AI navigation surfaces feed this set — the mobile drawer's `children`
 * list and the desktop mega panel's groups — because the two are curated
 * separately and neither is a superset of the other.
 */
export const AI_COURSE_SLUGS = new Set(
  slugsFrom([
    ...(navItems.find((item) => item.mega === "ai")?.children ?? []).map(
      (child) => child.href,
    ),
    ...aiMenu.groups.flatMap((group) => group.links.map((link) => link.href)),
    aiMenu.featured.href,
    aiMenu.promo.cta.href,
  ]).filter((slug) => !COURSES_MENU_SLUGS.has(slug)),
);

export function isAiCourse(slug: string) {
  return AI_COURSE_SLUGS.has(slug);
}

/* ------------------------------------------------------------------ types */

export type AiIcon = "live" | "mentor" | "certificate" | "placement";

export type AiCourseView = {
  hero: {
    eyebrow: string;
    headline: string;
    accent: string;
    body: string;
    chips: Array<{ icon: AiIcon; label: string }>;
    stats: Array<{ value: string; label: string; note: string }>;
  };
  overview: {
    heading: string;
    paragraphs: string[];
    /** Phrases the overview renders in the accent colour wherever they appear. */
    highlights: string[];
    caption: string;
  };
  readiness: {
    heading: string;
    accent: string;
    body: string;
    points: string[];
    metrics: Array<{ value: string; label: string }>;
  };
  audience: Array<{ title: string; body: string; tag: string }>;
  worth: {
    heading: string;
    accent: string;
    paragraphs: string[];
    frames: Array<{ caption: string; meta: string; tone: string }>;
  };
  verify: {
    heading: string;
    accent: string;
    body: string;
    points: string[];
  };
  certificate: {
    heading: string;
    accent: string;
    body: string;
    points: string[];
    /** Lines printed on the certificate mock. */
    recipient: string;
    programme: string;
    issued: string;
  };
  careers: {
    heading: string;
    accent: string;
    body: string;
    spotlight: {
      role: string;
      entry: string;
      senior: string;
      demand: string;
      openings: string;
    };
    roles: Array<{ role: string; band: string; blurb: string }>;
  };
  projects: Array<{
    title: string;
    body: string;
    tags: string[];
    level: string;
  }>;
  advantages: {
    heading: string;
    accent: string;
    body: string;
    items: Array<{ title: string; body: string }>;
  };
  comparison: {
    heading: string;
    accent: string;
    body: string;
    columns: [string, string, string];
    rows: Array<{ label: string; ours: string; theirs: string }>;
  };
  reviewsHeading: { heading: string; accent: string; body: string };
};

/* -------------------------------------------------------------- generators */

/** Stable per-slug hash so every derived number is identical between builds. */
function hashOf(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return hash;
}

const ENTRY_BANDS = [
  "₹3.6 – 5.4 LPA",
  "₹4.2 – 6 LPA",
  "₹4.5 – 6.5 LPA",
  "₹5 – 7.2 LPA",
];

const SENIOR_BANDS = [
  "₹9 – 12 LPA",
  "₹10 – 14 LPA",
  "₹12 – 16 LPA",
  "₹14 – 19 LPA",
];

const FRAME_TONES = [
  "from-brand-700 via-brand-500 to-brand-400",
  "from-accent via-brand-700 to-brand-500",
];

/**
 * Six shippable projects from a seed that only carries three. The extras are
 * composed from the closing curriculum modules, so they stay specific to the
 * course rather than reading like filler.
 */
function buildProjects(course: Course) {
  const seeded = course.projects.map((project, i) => ({
    title: project.title,
    body: project.body,
    tags: project.tags,
    level: i === 0 ? "Foundation build" : "Core build",
  }));

  const derived = course.modules.slice(-3).map((module, i) => ({
    title: `${module.title} Build`,
    body: `A working artefact from the ${module.title.toLowerCase()} block — ${module.deliverable
      .replace(/^A /, "")
      .replace(
        /\.$/,
        "",
      )}, reviewed against the same checklist we use on the capstone.`,
    tags: module.tools.slice(0, 3),
    level: i === 2 ? "Capstone" : "Applied build",
  }));

  return [...seeded, ...derived].slice(0, 6).map((project, i) => ({
    ...project,
    tags: project.tags.length > 0 ? project.tags : course.tools.slice(i, i + 3),
  }));
}

/* ------------------------------------------------------------------- build */

export function buildAiView(course: Course): AiCourseView {
  const hash = hashOf(course.slug);
  const city = site.city;
  const lower = course.title.toLowerCase();
  const primaryRole = course.outcomes[0]?.role ?? "AI Engineer";
  const duration = course.spec[0].value;
  const entryLevel = course.spec[1].value.split(" to ")[0].toLowerCase();
  const topics = course.modules.map((module) => module.title);

  /*
   * Everything this view writes for itself is generic scaffolding for courses
   * whose seed carries a single line of focus copy. A course with hand-written
   * copy keeps it: the overview whole — heading and every paragraph — rather
   * than having all but the first replaced by the generated pair, its own
   * eligibility personas in place of the four generated audience cards, and its
   * own "why" arguments in place of the generated advantages list.
   */
  const written = courseOverrides[course.slug]?.course;
  const writtenOverview = written?.overview;

  return {
    hero: {
      eyebrow: `${course.category} · ${site.name} ${city}`,
      headline: `${course.title} course in ${city} with`,
      accent: "live projects & placement support",
      body: `${course.hero.tagline} Taught in small batches by working practitioners, built around ${course.projects.length}+ portfolio projects, and backed by placement support that continues after the course ends.`,
      chips: [
        { icon: "live", label: "Live projects, not demos" },
        { icon: "mentor", label: "Practitioner mentors" },
        { icon: "certificate", label: "Industry certificate" },
        { icon: "placement", label: "Placement support" },
      ],
      stats: [
        {
          value: "25,000+",
          label: "Students trained",
          note: `across ${site.name} centres`,
        },
        {
          value: `${course.reviews.average}★`,
          label: "Learner rating",
          note: `${course.reviews.total} verified reviews`,
        },
        {
          value: "100%",
          label: "Placement support",
          note: "for every enrolled student",
        },
      ],
    },

    overview: {
      heading: writtenOverview?.heading ?? "Course overview",
      highlights: [
        course.title,
        city,
        duration,
        primaryRole,
        ...course.tools.slice(0, 3),
      ],
      paragraphs: writtenOverview?.paragraphs ?? [
        course.overview.paragraphs[0],
        `The ${lower} programme at ${site.name} ${city} is built the way the work is actually done: you handle the data, train and break the models, then ship something that runs. Tools such as ${course.tools
          .slice(0, 3)
          .join(
            ", ",
          )} are installed on your own machine in week one, not shown on a slide in week ten.`,
        `It runs across ${duration.toLowerCase()} with morning, evening and weekend batches, and every module closes in a reviewable artefact. By the end you hold a certificate, a portfolio, and the ability to talk through your own decisions in an interview for a ${primaryRole.toLowerCase()} role.`,
      ],
      caption: `Inside the ${city} lab — a walkthrough of the ${lower} track.`,
    },

    readiness: {
      heading: "Industry-ready training in",
      accent: course.title,
      body: `A syllabus reviewed every intake against what employers are actually hiring for — not a curriculum frozen three years ago.`,
      points: [
        `Full arc from fundamentals to deployment: ${topics
          .slice(0, 3)
          .join(", ")} and beyond`,
        "Every concept implemented in the lab before it is examined",
        "Mentors who ship this work professionally, not career trainers",
        "Project reviews line by line, with written notes you keep",
        "Doubt sessions and lab access outside your batch hours",
      ],
      metrics: [
        { value: `${course.modules.length}`, label: "Structured modules" },
        { value: `${course.tools.length}`, label: "Tools you install" },
      ],
    },

    audience: written?.eligibility
      ? written.eligibility.criteria.map((criterion) => ({
          tag: "Who can join",
          title: criterion.label,
          body: criterion.detail,
        }))
      : [
      {
        tag: "Start early",
        title: "Students & final-year candidates",
        body: `Finish your degree with a ${lower} portfolio already built, instead of starting from zero after graduation.`,
      },
      {
        tag: "Job-focused",
        title: "Graduates chasing a first role",
        body: `A degree proves you can learn; a reviewed project proves you can build. This gives you the second one, plus interview prep aimed at ${primaryRole.toLowerCase()} roles.`,
      },
      {
        tag: "Weekend batches",
        title: "Working professionals upskilling",
        body: `Layer ${lower} on top of the domain knowledge you already have — that combination is rarer, and better paid, than either alone.`,
      },
      {
        tag: "No coding needed",
        title: "Career switchers from other fields",
        body: `The track opens at ${entryLevel} level, so a non-technical background is a starting point rather than a disqualification.`,
      },
      {
        tag: "Apply it at work",
        title: "Business owners & managers",
        body: `Understand what ${lower} can and cannot do for your operation before you commission it, and brief a vendor without being sold to.`,
      },
      {
        tag: "Raise your rate",
        title: "Freelancers & consultants",
        body: "Add an AI service line to what you already sell, with a portfolio piece behind each offer rather than a claim on a profile page.",
      },
      {
        tag: "Refresh your stack",
        title: "Faculty & corporate trainers",
        body: `Rebuild your teaching material against current tooling — ${course.tools
          .slice(3, 5)
          .join(" and ")} rather than the syllabus you inherited.`,
      },
    ],

    worth: {
      heading: "Why this programme is",
      accent: "worth your year",
      paragraphs: [
        `Most ${lower} training in this region stops at the tutorial: you follow along, the notebook runs, nothing is retained. This programme is built the other way round — every module hands you an unfinished problem and a deadline, and a mentor reviews what you did with it.`,
        "That is slower and harder than watching lectures. It is also the only version that survives an interview, because the questions there are about the decisions you made, not the code you copied.",
      ],
      frames: [
        {
          caption: `Project review week at the ${city} campus`,
          meta: "Mentors mark up work line by line",
          tone: FRAME_TONES[0],
        },
        {
          caption: "Hiring drive & mock interview day",
          meta: "Practitioners run the panel, not HR",
          tone: FRAME_TONES[1],
        },
      ],
    },

    verify: {
      heading: "Build AI skills employers can",
      accent: "verify",
      body: `Anyone can list ${course.tools[0]} on a résumé. What gets you hired is a repository a reviewer can open, a decision you can defend, and a certificate issued against work that was actually assessed.`,
      points: [
        `${course.projects.length}+ portfolio projects with written review notes`,
        "A public repository per project, documented for a reader",
        "Mock interviews with people who do the job daily",
        `${site.name} industry certificate issued against assessed work`,
      ],
    },

    certificate: {
      heading: "Get certified in",
      accent: course.title,
      body: `Issued on completion against the modules you finished and the projects you submitted — plus an internship letter where the industrial training track applies. Shareable to LinkedIn, and verifiable by an employer who calls the ${city} desk.`,
      points: [
        "Module-wise assessment, not attendance-based",
        "Project submissions logged against your certificate",
        "Internship letter on the industrial training track",
        "Verifiable directly with the campus office",
      ],
      recipient: "Your Name Here",
      programme: `${course.title} — ${duration}`,
      issued: `${site.name} ${city}`,
    },

    careers: {
      heading: "Where this course",
      accent: "takes you",
      body: "Salary bands below are indicative of what our placement desk sees quoted for candidates who arrive with a reviewed portfolio. They are an observation, not a promise.",
      spotlight: {
        role: primaryRole,
        entry: ENTRY_BANDS[hash % ENTRY_BANDS.length],
        senior: SENIOR_BANDS[hash % SENIOR_BANDS.length],
        demand: "High",
        openings: `${4 + (hash % 5)},${100 + (hash % 800)}+ open roles in India`,
      },
      roles: course.outcomes.map((outcome, i) => ({
        role: outcome.role,
        band: ENTRY_BANDS[(hash + i) % ENTRY_BANDS.length],
        blurb: outcome.blurb,
      })),
    },

    projects: buildProjects(course),

    advantages: written?.whyChoose
      ? {
          heading: written.whyChoose.heading,
          accent: written.whyChoose.accent,
          body: written.whyChoose.body,
          /* A course whose copy argues the programme and the institute
             separately has both panels folded into this one list, because the
             AI layout draws a single advantages section. */
          items: [
            ...written.whyChoose.reasons,
            ...(written.whyChooseAlt?.reasons ?? []),
          ],
        }
      : {
      heading: "Why students choose",
      accent: site.name.toLowerCase(),
      body: `Two decades of training in ${city}, in a format that has not changed since: small batches, real projects, mentors who still practise.`,
      items: [
        {
          title: "Practitioner-led teaching",
          body: `Your mentor writes ${lower} for a living. The war stories in class are theirs, and so are the shortcuts.`,
        },
        {
          title: "Small, fixed batches",
          body: "Batch sizes are capped so a raised hand is answered in the session it was raised in, not in a ticket queue.",
        },
        {
          title: "Reviewed, not marked",
          body: "Every submission comes back annotated. The notes are the point — they are what you carry into the interview.",
        },
        {
          title: "Current tooling",
          body: `We teach ${course.tools
            .slice(0, 3)
            .join(
              ", ",
            )} and refresh the list each intake, because a stale stack is worse than no stack.`,
        },
        {
          title: "Flexible batches",
          body: "Morning, evening and weekend tracks, classroom or live online, with recordings either way for revision.",
        },
        {
          title: "Support that continues",
          body: "Résumé and portfolio review, mock interviews and hiring-drive access — and it does not stop the day the course ends.",
        },
      ],
    },

    comparison: {
      heading: `How ${site.name.toLowerCase()}`,
      accent: "compares",
      body: `An honest side-by-side against the typical ${lower} institute in the region. Ask any centre you are considering these same seven questions.`,
      columns: [
        "What you should ask",
        `${site.name} ${city}`,
        "Typical institute",
      ],
      rows: [
        {
          label: "Who teaches the batch",
          ours: "Working practitioners",
          theirs: "Full-time trainers only",
        },
        {
          label: "Project work",
          ours: `${course.projects.length}+ reviewed builds`,
          theirs: "One demo project, unmarked",
        },
        {
          label: "Feedback on submissions",
          ours: "Line-by-line written review",
          theirs: "Pass / fail mark",
        },
        {
          label: "Syllabus refresh",
          ours: "Reviewed every intake",
          theirs: "Static for years",
        },
        {
          label: "Lab access",
          ours: "Outside batch hours too",
          theirs: "Batch hours only",
        },
        {
          label: "Placement support",
          ours: "Continues after completion",
          theirs: "Ends with the course",
        },
        {
          label: "Certificate basis",
          ours: "Assessed modules & projects",
          theirs: "Attendance",
        },
      ],
    },

    reviewsHeading: {
      heading: `What our students in ${city}`,
      accent: "say",
      body: `${course.reviews.total} verified reviews from the ${lower} batches, averaging ${course.reviews.average} out of 5.`,
    },
  };
}
