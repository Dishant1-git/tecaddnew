/**
 * Content model for `/after-12th-courses`.
 *
 * Same convention as `content.ts`: every string the page renders lives here so
 * the section components stay layout-only. Body copy is placeholder marketing
 * copy for this pass — swap the strings, no JSX needs touching.
 *
 * Stream groups and their anchors mirror the "After 12th" mega menu in
 * `content.ts` (`#six-month`, `#one-year`, `#graphics`, `#civil-mechanical`),
 * so header links land on the right block. The grid itself is built from the
 * course registry in `after-12th-courses.ts` and re-exported below.
 */

import { site } from "./content";
import { after12CourseCount } from "./after-12th-courses";

/* -------------------------------------------------------------------- hero */

export const after12Hero = {
  eyebrow: `After 12th · ${site.name} ${site.city}`,
  headline: "Courses after 12th that end in",
  accent: "a portfolio, not a certificate",
  tagline:
    "Six-month and one-year career programmes for students out of school — any stream, no coding background assumed. You learn on live client work from week three, and finish with projects you can actually open in an interview.",
  chips: ["6 months – 1 year", "12th pass, any stream", "Classroom & live online"],
  stats: [
    { value: String(after12CourseCount), label: "Programmes after 12th" },
    { value: "4.9/5", label: "Student rating" },
    { value: "25,000+", label: "Trained since 2007" },
    { value: "2 hrs", label: "Daily class time" },
  ],
  primaryCta: { label: "Book a free demo class", href: "#enquire" },
  secondaryCta: { label: "See all courses", href: "/courses" },
};

/* ---------------------------------------------------------------- overview */

export const after12Overview = {
  eyebrow: "Straight after school",
  heading: "The gap year that is not a gap year",
  accent: ["not", "a", "gap", "year"],
  paragraphs: [
    `Most students leave 12th with a board result and no idea what a working day in a studio, an agency or an engineering office actually looks like. These programmes exist to close that gap in months rather than years — you pick one skill, go deep, and leave with work that stands on its own.`,
    `Every programme at ${site.name} ${site.city} runs on the same shape: two hours a day, small batches, a mentor who still does client work, and a project brief that changes every few weeks. Theory is taught only far enough to explain the decision in front of you — the rest of the time you are building.`,
    `Run alongside a degree, run instead of a drop year, or run before you decide on a degree at all. Roughly a third of each intake is enrolled in a college course at the same time, which is exactly what the evening and weekend batches are for.`,
  ],
  checks: [
    "No entrance test — a counselling call and a free demo class",
    "Same syllabus in classroom and live online batches",
    "Lab machines stay open outside your batch hours",
    "Internship letter accepted by Punjab universities",
  ],
  spec: [
    { label: "Eligibility", value: "12th pass, any stream" },
    { label: "Duration", value: "6 months to 1 year" },
    { label: "Class length", value: "2 hours, five days a week" },
    { label: "Batches", value: "Morning, evening & weekend" },
    { label: "Mode", value: "Classroom & live online" },
    { label: "Certification", value: `${site.name} industry certificate` },
    { label: "Internship", value: "Included on the 1-year track" },
    { label: "Placement support", value: "Included for every student" },
  ],
};

/* ----------------------------------------------------------------- streams */

/*
 * The stream grid is derived from the after-12th course registry rather than
 * duplicated here, so the hub cards and the /after-12th-courses/[slug] pages
 * they link to can never disagree.
 */
export {
  after12Streams,
  after12BasePath,
  type After12Stream,
  type After12CourseCard,
} from "./after-12th-courses";

export { after12CourseCount };

/* ----------------------------------------------------------------- journey */

export const after12Journey = {
  eyebrow: "How the programme runs",
  heading: "Three phases, one running project",
  accent: ["one", "running", "project"],
  body: "Every after-12th track is staged the same way. The subject changes; the rhythm does not.",
  phases: [
    {
      code: "Phase 01",
      months: "Months 1–2",
      title: "Foundations & tooling",
      body: "Concepts, vocabulary and the working environment. Your machine is set up in week one so no part of the course is spent fighting installations, and the first small brief lands before the phase ends.",
      points: ["Core concepts", "Tools installed & configured", "First graded brief"],
    },
    {
      code: "Phase 02",
      months: "Months 3–4",
      title: "Real work, real constraints",
      body: "You move onto live client material with the messiness left in — incomplete inputs, changing requirements and a deadline. Reviews get stricter here, because this is the phase that decides how your portfolio reads.",
      points: ["Live client brief", "Weekly critique", "Industry standards"],
    },
    {
      code: "Phase 03",
      months: "Months 5–6",
      title: "Portfolio & placement",
      body: "The capstone is assembled, documented and rehearsed. In parallel: CV rebuild, portfolio review, two mock interviews with practitioners, and entry into the hiring drives we run each quarter.",
      points: ["Capstone project", "Mock interviews", "Hiring drives"],
    },
  ],
};

/* ------------------------------------------------------------- eligibility */

export const after12Eligibility = {
  eyebrow: "Who these are for",
  heading: "Six ways students arrive here",
  accent: ["Six", "ways"],
  body: "Same classroom, six different starting points. The counselling call exists to work out which of these is yours before you pay anything.",
  personas: [
    {
      tag: "Straight from school",
      title: "12th passed this year",
      body: "You have the result and no plan yet. Take six months, get one employable skill on paper, and decide on the degree with more information than you have today.",
    },
    {
      tag: "Alongside a degree",
      title: "Studying in college",
      body: "Evening and weekend batches are built for this. You graduate with a portfolio already three years old instead of starting to build one after your final semester.",
    },
    {
      tag: "Dropped a year",
      title: "Preparing for an entrance",
      body: "A drop year reads badly on a CV when it is empty. A certificate and two projects in the same window turn it into something you can explain confidently.",
    },
    {
      tag: "Family business",
      title: "Joining the shop or unit",
      body: "Tally, Excel and digital marketing pay for themselves inside a quarter for most Amritsar traders, exporters and manufacturers.",
    },
    {
      tag: "Restarting",
      title: "Back after a break",
      body: "A break of a year or five is not a disqualification. The programmes assume nothing carried over and start from the actual beginning.",
    },
    {
      tag: "Self-taught",
      title: "Learned online, stalled",
      body: "You know pieces but nothing joins up and nothing is finished. A fixed batch, a mentor and a deadline on every module are what get it over the line.",
    },
  ],
};

/* ----------------------------------------------------------------- careers */

export const after12Careers = {
  eyebrow: "What comes after",
  heading: "Where students land, and on what",
  accent: ["and", "on", "what"],
  body: "Placeholder figures for this pass, in the range the Amritsar and wider Punjab market has been paying entrants with a portfolio.",
  bands: [
    {
      stage: "First role",
      range: "₹15,000 – ₹28,000",
      unit: "per month",
      note: "Trainee or junior title, portfolio-dependent. The portfolio moves this number far more than the certificate does.",
    },
    {
      stage: "After two years",
      range: "₹30,000 – ₹55,000",
      unit: "per month",
      note: "Executive or associate level once you own deliverables end to end and can brief someone junior.",
    },
    {
      stage: "Freelance",
      range: "₹8,000 – ₹40,000",
      unit: "per project",
      note: "Common on the design, video and marketing tracks, usually alongside a salaried role rather than instead of one.",
    },
  ],
  roles: [
    "Trainee Executive",
    "Junior Developer",
    "Data Analyst",
    "Graphic Designer",
    "Video Editor",
    "CAD Draughtsman",
    "SOC Analyst (L1)",
    "Freelance Consultant",
  ],
  industries: [
    "Export houses",
    "Sports goods manufacturing",
    "Immigration consultancies",
    "Hospitals & diagnostics",
    "Schools & coaching",
    "Real estate & construction",
    "IT services",
    "D2C & retail brands",
  ],
};

/* -------------------------------------------------------------------- fees */

export const after12Fees = {
  eyebrow: "Fees & what is included",
  heading: "Published ranges, instalments available",
  accent: ["instalments", "available"],
  body: "Indicative placeholder ranges. The exact figure for a programme is confirmed at counselling, and every plan can be split into instalments.",
  tiers: [
    {
      name: "Short certificate",
      range: "₹9,000 – ₹18,000",
      duration: "3 – 4 months",
      for: "Tally, Excel, AutoCAD, Revit, video editing",
      includes: [
        "Full classroom or online batch",
        "Lab access outside class hours",
        "Certificate on completion",
        "Portfolio review",
      ],
    },
    {
      name: "6 month programme",
      range: "₹18,000 – ₹40,000",
      duration: "6 months",
      featured: true,
      for: "Digital marketing, Python, ML & AI, cybersecurity, design",
      includes: [
        "Everything in the short certificate",
        "Live client project brief",
        "Capstone with documented review",
        "CV rebuild and two mock interviews",
        "Entry into quarterly hiring drives",
      ],
    },
    {
      name: "1 year programme",
      range: "₹42,000 – ₹75,000",
      duration: "1 year",
      for: "Generative AI, cloud & DevOps, data science, animation",
      includes: [
        "Everything in the 6 month programme",
        "Second-semester internship track",
        "Internship letter for university credit",
        "Extended placement support",
      ],
    },
  ],
  note: "Free demo class before you pay anything. Instalment plans are agreed at the counselling stage — ask the admissions desk for the current structure.",
};

/* --------------------------------------------------------------------- faq */

export const after12Faq = {
  eyebrow: "Before you enrol",
  heading: "What parents and students ask",
  accent: "at the admissions desk",
  body: "If something is not covered here, the Amritsar desk answers it directly — no call-back queue.",
  items: [
    {
      q: "Can I join right after my 12th board result?",
      a: "Yes. A 12th pass from any stream is the only requirement, and admissions run through the year rather than in one intake window. Students frequently join in the gap between the result and college admissions closing.",
    },
    {
      q: "Do I need a science or maths background?",
      a: "Only for the engineering-drafting tracks, where a PCM background makes the drawing conventions easier to pick up. Everything else — marketing, design, video, Python, Tally — is taught from zero and regularly taken by commerce and arts students.",
    },
    {
      q: "Can I do this alongside my college degree?",
      a: "That is what the evening and weekend batches exist for, and roughly a third of each intake is doing exactly this. Attendance is two hours a day, and any missed session is re-explained in the doubt slot rather than skipped.",
    },
    {
      q: "Is the certificate recognised?",
      a: "You receive a TechCadd industry certificate issued against the modules you completed and the projects you submitted. Students on the one-year track also receive a documented internship letter, which Punjab universities accept for credit requirements.",
    },
    {
      q: "What if I pick the wrong course?",
      a: "Sit the free demo class first — it is a full session in a running batch, not a sales pitch. If you switch within the first two weeks, the fee moves with you to the other programme.",
    },
    {
      q: "Is placement guaranteed?",
      a: "No, and be sceptical of anyone in this city who tells you otherwise. What is included for every enrolled student: CV and portfolio review, two mock interviews with working practitioners, and entry into the hiring drives we run through the year with regional partners.",
    },
    {
      q: "Are online batches the same as classroom?",
      a: "Same syllabus, same mentors, same project briefs and the same review standard. Classroom students get lab machines and open lab hours; online students get session recordings for revision. Both are available for every programme listed here.",
    },
    {
      q: "How do I pay, and can it be split?",
      a: "Instalment plans are available on every programme and are agreed at counselling before you enrol. Bring the fee structure question to the demo class visit and you will leave with a written plan.",
    },
  ],
};

/* --------------------------------------------------------------------- cta */

export const after12Cta = {
  eyebrow: "Next intake",
  heading: "Sit one class before you decide anything",
  accent: ["before", "you", "decide", "anything"],
  body: `Walk into a running batch, watch how a session actually works, and talk to students already halfway through. Free, no commitment — the ${site.city} desk is open Monday to Saturday, 9am to 7pm.`,
  points: [
    "Free demo class in a live batch",
    "Counselling on which track fits your marks and plan",
    "Written fee and instalment plan before you enrol",
  ],
};
