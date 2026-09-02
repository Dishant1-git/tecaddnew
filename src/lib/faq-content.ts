/**
 * Copy and data for /faq.
 *
 * Answers are written to be true of the institute as the rest of the site
 * describes it — practitioner trainers, reviewed project work, placement
 * support without a guarantee. Anything that depends on a live number (fees,
 * the current batch calendar) deliberately points at the desk rather than
 * inventing a figure that would go stale.
 *
 * Question ids are derived from the question text, so a question can be
 * deep-linked (`/faq#q-...`) without hand-maintaining slugs. Renaming a
 * question changes its id — update any link that pointed at the old one.
 */

import { site } from "./content";

export type FaqItem = {
  q: string;
  a: string;
  /** Surfaced in the "asked most often" rail above the list. */
  popular?: boolean;
};

export type FaqCategorySeed = {
  slug: string;
  label: string;
  icon: string;
  blurb: string;
  items: FaqItem[];
};

/* ----------------------------------------------------------------- hero */

export const faqHero = {
  eyebrow: "Frequently asked questions",
  headingLead: "Everything the admissions desk",
  headingMuted: "gets asked, answered here.",
  body: `Straight answers about courses, fees, batches, projects and placement at TechCadd ${site.city} — including the questions most institutes prefer you asked in person.`,
  searchHint: "Search by keyword — try “fees”, “placement” or “6 months”.",
  primaryCta: { label: "Ask a question", href: "/contact" },
  secondaryCta: { label: `Call ${site.phone}`, href: site.phoneHref },
};

/* ------------------------------------------------------------ questions */

const CATEGORY_SEEDS: FaqCategorySeed[] = [
  {
    slug: "courses",
    label: "Courses & curriculum",
    icon: "book",
    blurb: "What we teach, how deep it goes, and how current it is.",
    items: [
      {
        q: "Which courses does TechCadd Amritsar run?",
        a: "Programming and full-stack development, artificial intelligence and generative AI, data science and analytics, digital marketing, cyber security, and cloud and DevOps. Every programme has its full module list, tools and project brief published on its course page — open one before you speak to anyone.",
        popular: true,
      },
      {
        q: "How do I choose the right course for me?",
        a: "Start from the job you want rather than the subject you liked at college, then read the roles listed at the bottom of each course page. If two courses still look equally plausible, book a counselling slot — we would rather spend twenty minutes on that than have you a month into the wrong programme.",
      },
      {
        q: "Is the syllabus actually up to date?",
        a: "Modules are revised each intake against what hiring partners tell us candidates were asked to do in interviews. When a tool, framework or model that a subject depends on changes, that module changes in the same intake rather than at the next printing of the notes.",
      },
      {
        q: "Do I need a programming background to start?",
        a: "For the foundation and after-12th tracks, no — they assume you are starting from the beginning. Specialist tracks such as agentic AI or cloud engineering do assume working fundamentals, and the counselling desk will tell you plainly if a bridging course should come first.",
      },
      {
        q: "Can I learn AI without a maths or engineering degree?",
        a: "Yes for the applied tracks — generative AI, prompt engineering, AI tools and AI-powered marketing are built for people who need to use these systems well. Research-flavoured machine learning does lean on maths, and we will say so before you enrol rather than after.",
      },
      {
        q: "How long does a course take?",
        a: "Most programmes run between six weeks and six months depending on depth and pace, with 45-day and 6-week formats for university-mandated training. The exact duration and weekly hours are listed on each course page.",
      },
    ],
  },
  {
    slug: "admissions",
    label: "Admissions & eligibility",
    icon: "graduation",
    blurb: "Who can join, what it takes, and how enrolment works.",
    items: [
      {
        q: "What is the admission process?",
        a: "A counselling conversation about your background and target role, a free demo class in the batch you are considering, then enrolment and a seat in the next intake. There is no entrance exam for most programmes.",
        popular: true,
      },
      {
        q: "Can I attend a demo class before paying?",
        a: "Yes, and we would rather you did. Ask the front desk for a demo session in the specific batch you would join — not a scripted sample class — so you are judging the trainer and the pace you will actually get.",
      },
      {
        q: "What are the eligibility requirements?",
        a: "Foundation and after-12th tracks need a 12th-standard pass. Most professional tracks are open to anyone with the prerequisite skills, whether or not the degree matches; several of our strongest alumni came from non-technical backgrounds.",
      },
      {
        q: "Do you take school students, or only graduates?",
        a: "Both. There are dedicated six-month and one-year certificate routes for students who have just finished 12th, alongside the professional tracks for graduates and people already working.",
      },
      {
        q: "When do new batches start?",
        a: "New batches open through the year rather than in one annual cycle, with heavier intakes around the summer and winter training seasons. Call the desk for the next start date on a specific course — it is the one thing on this page that changes weekly.",
      },
      {
        q: "Can I switch courses after joining?",
        a: "If it becomes clear early on that the fit is wrong, talk to us. We would rather move you to the right programme than have you finish the wrong one, and we will explain any fee difference up front.",
      },
    ],
  },
  {
    slug: "fees",
    label: "Fees & payments",
    icon: "chart",
    blurb: "What it costs, how it can be paid, and what is included.",
    items: [
      {
        q: "What are the course fees?",
        a: "Fees vary by programme, duration and mode, so the current schedule comes from the admissions desk rather than a page that may be months out of date. Ask for it in writing along with what is included — we will give you both without a follow-up call.",
        popular: true,
      },
      {
        q: "Can fees be paid in instalments?",
        a: "Instalment plans are available on the longer programmes. Agree the schedule at enrolment so it is on record, and there are no charges that appear later in the course.",
      },
      {
        q: "Is there a discount for students or groups?",
        a: "Concessions exist for students, for group enrolments from the same college, and during specific intake windows. Ask the desk what applies to you rather than assuming it does not.",
      },
      {
        q: "What is included in the fee?",
        a: "Classroom or live-online sessions, lab access beyond class hours, project reviews, course material, the certificate on completion, and placement support including portfolio review and mock interviews. Anything not included will be stated before you pay.",
      },
      {
        q: "Do you have a refund policy?",
        a: "Yes, and it is shared in writing at enrolment along with the notice period it depends on. Read it before you pay — an institute that will not put its refund terms on paper is telling you something.",
      },
    ],
  },
  {
    slug: "batches",
    label: "Batches, timings & mode",
    icon: "presentation",
    blurb: "When classes run, how big they are, and online versus campus.",
    items: [
      {
        q: "What are the class timings?",
        a: "Morning, evening and weekend batches run in parallel so students and working professionals can both attend. Pick the slot you can hold to every week — attendance, not intent, is what decides how a course goes.",
        popular: true,
      },
      {
        q: "Do you offer online classes?",
        a: "Yes. Courses run as classroom sessions on campus and as live online batches — live, with the same trainer and the same reviews, not recorded video you work through alone.",
      },
      {
        q: "How many students are in a batch?",
        a: "Small enough that every submission is read and the trainer knows who is quietly falling behind. We cap batches for that reason rather than filling every chair in the room.",
      },
      {
        q: "What if I miss a class?",
        a: "Tell your trainer. Depending on the batch you can sit the same session in a parallel slot or take a catch-up in lab hours — but a pattern of missed classes is a conversation, because the project work compounds week to week.",
      },
      {
        q: "Can I use the lab outside class hours?",
        a: "Yes. Lab access beyond scheduled sessions is part of the programme, and alumni keep access after finishing — the machines are of no use to anyone sitting idle.",
      },
    ],
  },
  {
    slug: "projects",
    label: "Projects, training & internships",
    icon: "wrench",
    blurb: "The practical half: what you build and what you leave holding.",
    items: [
      {
        q: "Do students work on real projects?",
        a: "Every module ends in a built artefact — an application, a model, a campaign or a hardened network — and the second half of each course carries one substantial capstone project with scope, deadlines and revisions. All of it is reviewed line by line.",
      },
      {
        q: "Do you provide industrial training and internships?",
        a: "Yes: 45-day, 6-week, 4-month and 6-month industrial training in the formats universities ask for, plus internship programmes. They are run as real project work with a reviewer, not as an attendance exercise ending in a signed letter.",
        popular: true,
      },
      {
        q: "Will I get a certificate for university submission?",
        a: "Yes, with the training duration, the modules covered and the project completed. If your university has a specific format or reporting requirement, bring it at the start and we will work to it.",
      },
      {
        q: "Do I keep the projects I build?",
        a: "They are yours, version-controlled in a repository you keep and can show. That portfolio is the point of the course as far as we are concerned.",
      },
      {
        q: "Is there any live client work?",
        a: "Advanced batches take scoped briefs with a client-side reviewer and a deadline that does not move. It is the closest thing to a first week at work that a classroom can offer.",
      },
    ],
  },
  {
    slug: "placement",
    label: "Placement & careers",
    icon: "briefcase",
    blurb: "What placement support is, and — honestly — what it is not.",
    items: [
      {
        q: "Do you guarantee placement?",
        a: "No, and be careful with anyone who does. We control the training, the portfolio, the interview practice and the referrals; we do not control an employer's hiring decision, so we do not promise it. What we commit to is real support until you land a role.",
        popular: true,
      },
      {
        q: "What does placement support actually include?",
        a: "Portfolio and CV review, technical and HR mock interviews run against your own project, referrals into our hiring-partner network, and preparation for the specific companies you are interviewing with.",
      },
      {
        q: "Which companies hire from TechCadd?",
        a: "A standing network of companies across Punjab, Delhi NCR, Bengaluru and Pune interviews from our batches, in roles spanning software development, AI and machine learning, data analytics, digital marketing, cyber security, cloud and QA.",
      },
      {
        q: "How long does it usually take to find a job?",
        a: "It depends on your track, your portfolio and how prepared you are for interviews — anyone quoting an average is guessing. What we will tell you is where your work currently stands against what our partners ask for, and what would close the gap.",
      },
      {
        q: "Is placement support available to alumni later?",
        a: "Yes. Referrals and interview practice stay open to alumni; several students come back a year or two later for the next move, which is exactly what the network is for.",
      },
    ],
  },
  {
    slug: "certificates",
    label: "Certificates & recognition",
    icon: "award",
    blurb: "What you are awarded, and what that is worth.",
    items: [
      {
        q: "What certificate do I receive?",
        a: "A course completion certificate listing the modules covered, the duration and the project delivered. It is issued when the work is done, not for turning up.",
      },
      {
        q: "Is the certificate valid for jobs?",
        a: "It is recognised by employers who know the institute, and it is verifiable with us. Be clear-eyed though: in this field the reviewed project you can open in an interview carries more weight than any certificate, which is why the course is built around producing one.",
      },
      {
        q: "Do you prepare students for vendor certifications?",
        a: "Several tracks map onto industry certification syllabi and prepare you for them. The examination fee and scheduling sit with the vendor; the desk will tell you which certifications a course lines up with.",
      },
      {
        q: "Can employers verify my certificate?",
        a: "Yes — an employer can verify it with the institute directly. Keep your enrolment details, since verification is checked against them.",
      },
    ],
  },
];

/* ----------------------------------------------------------- derivation */

/** `"What are the course fees?"` → `"q-what-are-the-course-fees"`. */
function questionId(question: string) {
  return `q-${question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
    .replace(/-$/, "")}`;
}

export type FaqEntry = FaqItem & { id: string };
export type FaqCategory = Omit<FaqCategorySeed, "items"> & {
  items: FaqEntry[];
};

export const faqCategories: FaqCategory[] = CATEGORY_SEEDS.map((category) => ({
  ...category,
  items: category.items.map((item) => ({ ...item, id: questionId(item.q) })),
}));

/** Flat list, used for search, counts and the structured-data block. */
export const faqEntries = faqCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
    categoryLabel: category.label,
  })),
);

export const popularFaqs = faqEntries.filter((entry) => entry.popular);

export const faqStats = {
  questions: faqEntries.length,
  categories: faqCategories.length,
};

/* ------------------------------------------------------------- get help */

export const faqHelp = {
  eyebrow: "Still stuck",
  heading: "Ask us the thing this page did not answer",
  accent: ["did", "not", "answer"],
  body: `Questions about your own situation — a specific batch, a university requirement, a career switch — are better answered by a person. The ${site.city} desk answers directly; there is no call-back queue.`,
  channels: [
    {
      icon: "message",
      title: "Call the desk",
      body: "Fastest for batch dates, fees and eligibility.",
      cta: { label: site.phone, href: site.phoneHref },
    },
    {
      icon: "book",
      title: "Send an enquiry",
      body: "Best when you want the answer in writing.",
      cta: { label: "Open the enquiry form", href: "/contact" },
    },
    {
      icon: "building",
      title: "Visit the campus",
      body: "Sit a live class and see a student's reviewed project.",
      cta: { label: "Plan a visit", href: "/contact" },
    },
  ],
  related: [
    { label: "About the institute", href: "/about" },
    { label: "Mission and vision", href: "/about/mission-vision" },
    { label: "All courses", href: "/courses" },
    { label: "Internship & training", href: "/internship-training" },
  ],
};
