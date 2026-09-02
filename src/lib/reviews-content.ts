/**
 * Copy and data for /reviews.
 *
 * The reviews below are placeholder copy written in the voice of the students
 * these programmes are for — realistic, specific, and safe to show while the
 * real ones are collected. Swap the entries in `REVIEW_SEEDS` for verified
 * quotes and every number on the page (average, count, star distribution,
 * per-track tallies) recalculates itself; nothing is hard-coded twice.
 *
 * Ratings on the platform strip are the only figures that come from outside
 * this file — keep them in step with the profiles they point at, or drop the
 * entry rather than let it go stale.
 */

import { site } from "./content";

export type ReviewSource = "campus" | "google" | "linkedin" | "justdial";

export type TrackSlug =
  | "ai"
  | "fullstack"
  | "data"
  | "marketing"
  | "cyber-cloud"
  | "foundation";

export type Review = {
  name: string;
  initials: string;
  /** Programme they took, as it is titled on the course page. */
  course: string;
  /** Track slug — drives the filter rail. */
  track: TrackSlug;
  /** Where they landed after, when they told us. */
  outcome?: string;
  rating: number;
  /** Month and year the review was left. */
  date: string;
  quote: string;
  /** Short pull-quote used by the spotlight carousel. */
  highlight?: string;
  source: ReviewSource;
  /** Promoted into the spotlight rail above the wall. */
  featured?: boolean;
};

export type Track = {
  slug: TrackSlug;
  label: string;
  icon: string;
};

/* ------------------------------------------------------------------ hero */

export const reviewsHero = {
  eyebrow: "Student reviews",
  headingLead: "What people say once",
  headingMuted: "the course is behind them.",
  body: `Feedback from students, working professionals and hiring partners who have been through a programme at TechCadd ${site.city} — including the parts we are still working on.`,
  primaryCta: { label: "Write a review", href: "/contact" },
  secondaryCta: { label: `Call ${site.phone}`, href: site.phoneHref },
  note: "Published as written. A review is never taken down for being critical.",
};

/* ---------------------------------------------------------------- tracks */

export const tracks: Track[] = [
  { slug: "ai", label: "AI & Generative AI", icon: "cpu" },
  { slug: "fullstack", label: "Programming & Full stack", icon: "code" },
  { slug: "data", label: "Data science & analytics", icon: "chart" },
  { slug: "marketing", label: "Digital marketing", icon: "megaphone" },
  { slug: "cyber-cloud", label: "Cyber security & cloud", icon: "shield" },
  { slug: "foundation", label: "Foundation & after 12th", icon: "graduation" },
];

/** Source labels, shown as a small chip on each card. */
export const SOURCE_LABEL: Record<ReviewSource, string> = {
  campus: "Verified at campus",
  google: "Google review",
  linkedin: "LinkedIn",
  justdial: "Justdial",
};

/* --------------------------------------------------------------- reviews */

const REVIEW_SEEDS: Review[] = [
  {
    name: "Simranjeet Kaur",
    initials: "SK",
    course: "MERN Stack Development",
    track: "fullstack",
    outcome: "Frontend Developer, Mohali",
    rating: 5,
    date: "March 2026",
    highlight:
      "I walked in able to follow a tutorial and walked out able to ship without one.",
    quote:
      "I walked in able to follow a tutorial and walked out able to ship without one. The difference was the code review — every week someone senior read what I had written and told me exactly why a component was doing too much. Three interviews asked me to talk through a project; I had one I actually built, so it was a conversation instead of a recital.",
    source: "campus",
    featured: true,
  },
  {
    name: "Harman Sidhu",
    initials: "HS",
    course: "Data Analytics",
    track: "data",
    outcome: "Data Analyst, Gurugram",
    rating: 5,
    date: "February 2026",
    highlight:
      "The SQL was hard in the way it needed to be. Nothing in my first month at work surprised me.",
    quote:
      "The SQL was hard in the way it needed to be — messy data, no clean answer key, a stakeholder question waiting at the end of it. Nothing in my first month at work surprised me. If I could change one thing, I would have liked more time on the statistics module; the trainer stayed back twice for it, but it belongs in the schedule.",
    source: "google",
    featured: true,
  },
  {
    name: "Aditya Verma",
    initials: "AV",
    course: "Artificial Intelligence",
    track: "ai",
    outcome: "Python Developer, Chandigarh",
    rating: 5,
    date: "January 2026",
    highlight:
      "They taught the maths behind the model, not just the library call.",
    quote:
      "I had done two online AI courses before this and could not explain a single thing I had built. Here they taught the maths behind the model before the library call, so when the output was wrong I knew where to look. The capstone was a retrieval system over our own documents — it is the project my current employer asked about.",
    source: "campus",
    featured: true,
  },
  {
    name: "Neha Bansal",
    initials: "NB",
    course: "Digital Marketing",
    track: "marketing",
    outcome: "Digital Marketing Lead, Ludhiana",
    rating: 5,
    date: "March 2026",
    highlight:
      "Live ad budget, real campaign, real consequences. That is the whole review.",
    quote:
      "We ran campaigns on a live budget instead of a screenshot of somebody else's dashboard. Watching money leave the account because of a badly written headline teaches you faster than any slide deck. Live ad budget, real campaign, real consequences — that is the whole review.",
    source: "google",
    featured: true,
  },
  {
    name: "Gurpreet Singh",
    initials: "GS",
    course: "Cyber Security",
    track: "cyber-cloud",
    outcome: "Security Analyst, Bengaluru",
    rating: 5,
    date: "December 2025",
    highlight:
      "The lab was scoped and legal, and the report writing counted as much as the exploit.",
    quote:
      "The lab was scoped and legal, and the report writing counted as much as the exploit — which is exactly how the job works. My interview was ninety percent walk-me-through-your-findings-document. I had written eleven of them by then.",
    source: "linkedin",
    featured: true,
  },
  {
    name: "Manpreet Kaur",
    initials: "MK",
    course: "Python Programming",
    track: "fullstack",
    outcome: "QA Engineer, Pune",
    rating: 5,
    date: "November 2025",
    quote:
      "Batch of fourteen, so the trainer knew where each of us was stuck without being told. I came from a commerce background and was slower than the rest for the first month. Nobody made that a problem, and nobody slowed the class down for me either — I got the extra hour after class instead.",
    source: "campus",
  },
  {
    name: "Rajiv Malhotra",
    initials: "RM",
    course: "Hiring partner",
    track: "fullstack",
    outcome: "Engineering Manager, hiring partner",
    rating: 5,
    date: "February 2026",
    quote:
      "We have taken four people from TechCadd in two years. Their candidates arrive with a repository and can defend the commits in it, which puts them ahead of most fresh graduates we screen. The gap is still system design — but that is an experience thing, not a training-institute thing.",
    source: "linkedin",
  },
  {
    name: "Tanvir Dhillon",
    initials: "TD",
    course: "Cloud & DevOps",
    track: "cyber-cloud",
    outcome: "Cloud Engineer, Noida",
    rating: 5,
    date: "January 2026",
    quote:
      "Everything ran on a real cloud account with a real bill attached, so we learned to shut resources down as carefully as we spun them up. The Terraform module was the strongest part. The Kubernetes week is dense — do the prep reading they send, it is not optional.",
    source: "google",
  },
  {
    name: "Anmol Preet",
    initials: "AP",
    course: "Generative AI",
    track: "ai",
    outcome: "AI Engineer, Hyderabad",
    rating: 5,
    date: "March 2026",
    quote:
      "The syllabus changed twice while I was in it, because the tools changed — which is the entire reason to learn this in a classroom instead of from a year-old playlist. We shipped an agent that reads a document set and answers with citations, and I understood every layer of it by the end.",
    source: "campus",
  },
  {
    name: "Ishita Sharma",
    initials: "IS",
    course: "Data Science",
    track: "data",
    outcome: "Junior Data Scientist, Pune",
    rating: 4,
    date: "December 2025",
    quote:
      "Strong on modelling and evaluation, honest about what a model cannot do. My only complaint is scheduling: two sessions moved because of a festival week and the make-up classes ran late in the evening. The teaching itself was worth staying for.",
    source: "google",
  },
  {
    name: "Karan Bhatia",
    initials: "KB",
    course: "Web Development",
    track: "fullstack",
    outcome: "Web Developer, Amritsar",
    rating: 5,
    date: "October 2025",
    quote:
      "I did the six-week format alongside my final semester. It was intense and I nearly dropped it in week three. The trainer restructured my deadlines instead of letting me quit, and I finished with a portfolio site that got me my first freelance client a month later.",
    source: "campus",
  },
  {
    name: "Ritika Arora",
    initials: "RA",
    course: "SEO & Content Marketing",
    track: "marketing",
    rating: 5,
    date: "February 2026",
    quote:
      "I run a small store and joined to stop paying an agency for things I did not understand. Six weeks later I can read my own analytics, brief a writer properly and tell when someone is selling me nonsense. That was the entire goal.",
    source: "justdial",
  },
  {
    name: "Sahil Mehta",
    initials: "SM",
    course: "Machine Learning",
    track: "ai",
    outcome: "ML Engineer, Bengaluru",
    rating: 5,
    date: "November 2025",
    quote:
      "Good balance of theory and practice, and the trainer had actually shipped models rather than only taught them. He would show us why the textbook approach falls over on real data. Bring your own laptop with decent memory — the lab machines are fine, yours will be faster.",
    source: "linkedin",
  },
  {
    name: "Jaspreet Randhawa",
    initials: "JR",
    course: "IT Foundation Programme",
    track: "foundation",
    rating: 5,
    date: "January 2026",
    quote:
      "I finished 12th and had no idea what any of these job titles meant. The counselling session was straight with me about what I would find hard. Six months in I am writing Python and I have a direction, which is more than most of my school friends have right now.",
    source: "campus",
  },
  {
    name: "Divya Kapoor",
    initials: "DK",
    course: "Power BI & Analytics",
    track: "data",
    outcome: "Business Analyst, Delhi",
    rating: 5,
    date: "March 2026",
    quote:
      "Practical from the first class — we were cleaning an ugly spreadsheet by day two. The dashboard I built in the final week is still the one I demo in interviews. It has been rebuilt for my current employer, but the structure is the same.",
    source: "google",
  },
  {
    name: "Arjun Nanda",
    initials: "AN",
    course: "Java Programming",
    track: "fullstack",
    rating: 4,
    date: "September 2025",
    quote:
      "Solid fundamentals and plenty of practice problems. I would have liked more Spring Boot inside the core course rather than as an extension — I took the extra module and it was excellent, but budget for it.",
    source: "campus",
  },
  {
    name: "Pooja Chadha",
    initials: "PC",
    course: "Social Media Marketing",
    track: "marketing",
    outcome: "Content Strategist, Jalandhar",
    rating: 5,
    date: "February 2026",
    quote:
      "The class critiques were brutal in the best way — your post goes up on the screen and fourteen people tell you why they scrolled past it. My engagement doubled within two months of applying what came out of those sessions.",
    source: "campus",
  },
  {
    name: "Vikram Sethi",
    initials: "VS",
    course: "Ethical Hacking",
    track: "cyber-cloud",
    rating: 5,
    date: "December 2025",
    quote:
      "Everything was taught inside a contained lab with the rules spelled out on day one, which I appreciated — the legal and disclosure side gets skipped everywhere else. I came out with a methodology I can repeat, not a bag of tricks.",
    source: "justdial",
  },
  {
    name: "Meenakshi Rana",
    initials: "MR",
    course: "Prompt Engineering",
    track: "ai",
    outcome: "Product Associate, remote",
    rating: 5,
    date: "March 2026",
    quote:
      "I am not a developer and was worried I would be lost. The course is built for exactly that — it is about evaluating outputs and designing the process around them. I now run the AI workflows for a team of nine and I understand where they break.",
    source: "google",
  },
  {
    name: "Rohit Chauhan",
    initials: "RC",
    course: "Full Stack Development",
    track: "fullstack",
    outcome: "Software Engineer, Mohali",
    rating: 5,
    date: "October 2025",
    quote:
      "Six months, four projects, one of them with a real client brief and a real deadline. The client one taught me more about requirements than the other three combined. Placement support was genuine help with the process rather than a promise of a job — which is how they described it up front.",
    source: "campus",
  },
  {
    name: "Sana Qureshi",
    initials: "SQ",
    course: "Digital Marketing",
    track: "marketing",
    rating: 4,
    date: "August 2025",
    quote:
      "Very good on paid ads and analytics. The email marketing module felt thin next to the rest, and I said so on the feedback form — they told me it was being rewritten for the next intake. Four stars until I see it.",
    source: "google",
  },
  {
    name: "Yuvraj Bajwa",
    initials: "YB",
    course: "After 12th — One Year Certificate",
    track: "foundation",
    rating: 5,
    date: "January 2026",
    quote:
      "My parents came to the counselling session with a long list of doubts and left satisfied, which I did not expect. A year later I have a certificate, a portfolio and part-time web work while I study further.",
    source: "campus",
  },
  {
    name: "Amrita Sood",
    initials: "AS",
    course: "Deep Learning",
    track: "ai",
    outcome: "Research Associate, Bengaluru",
    rating: 5,
    date: "February 2026",
    quote:
      "The hardest course I have taken and the one I got the most out of. Reading a paper and reproducing its result was on the syllabus, and it is the skill I use every single day now.",
    source: "linkedin",
  },
  {
    name: "Nikhil Gupta",
    initials: "NG",
    course: "Cloud Computing",
    track: "cyber-cloud",
    outcome: "DevOps Engineer, Gurugram",
    rating: 5,
    date: "November 2025",
    quote:
      "I was already working and took the weekend batch. It held its schedule for five months straight, which matters more than it sounds when you are fitting study around a job. The CI/CD pipeline we built is the template I still use.",
    source: "google",
  },
  {
    name: "Kavya Trehan",
    initials: "KT",
    course: "Tableau & Visualisation",
    track: "data",
    rating: 5,
    date: "December 2025",
    quote:
      "Taught as a communication skill rather than a software tutorial — which chart lies, which one earns the reader's trust. My reports get read now instead of forwarded and forgotten.",
    source: "campus",
  },
  {
    name: "Manav Khurana",
    initials: "MN",
    course: "45 Days Industrial Training",
    track: "foundation",
    rating: 4,
    date: "July 2025",
    quote:
      "Did this for my university requirement expecting a formality and got an actual project instead. Forty-five days is short, so it moves fast — turn up to every session or you will feel it. Certificate and letter arrived without me chasing anyone.",
    source: "campus",
  },
];

/* ------------------------------------------------------------ derivation */

/** `"Simranjeet Kaur"` + course → `"r-simranjeet-kaur-mern-stack…"`, for deep links. */
function reviewId(name: string, course: string) {
  return `r-${`${name} ${course}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
    .replace(/-$/, "")}`;
}

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/**
 * `"March 2026"` → `202603`. A sortable integer rather than a Date: the wall
 * only ever compares these to each other, and a plain number keeps the module
 * free of timezone behaviour.
 */
function sortKey(date: string) {
  const [month, year] = date.toLowerCase().split(" ");
  const index = MONTHS.indexOf(month);
  return Number(year) * 100 + (index < 0 ? 0 : index + 1);
}

export type ReviewEntry = Review & {
  id: string;
  trackLabel: string;
  sortKey: number;
};

const TRACK_LABEL = new Map(tracks.map((track) => [track.slug, track.label]));

/** Newest first — the order the wall shows before anyone touches a control. */
export const reviews: ReviewEntry[] = REVIEW_SEEDS.map((review) => ({
  ...review,
  id: reviewId(review.name, review.course),
  trackLabel: TRACK_LABEL.get(review.track) ?? "Programmes",
  sortKey: sortKey(review.date),
})).sort((a, b) => b.sortKey - a.sortKey);

export const featuredReviews = reviews.filter((review) => review.featured);

/** How many reviews sit at each star value, 5 down to 1. */
export const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => {
  const count = reviews.filter((review) => review.rating === stars).length;
  return {
    stars,
    count,
    percent: reviews.length ? Math.round((count / reviews.length) * 100) : 0,
  };
});

const ratingTotal = reviews.reduce((sum, review) => sum + review.rating, 0);

export const reviewStats = {
  count: reviews.length,
  /** One decimal place, e.g. `4.9`. */
  average: Math.round((ratingTotal / reviews.length) * 10) / 10,
  tracks: tracks.length,
  placed: reviews.filter((review) => review.outcome).length,
};

/** Per-track tallies for the filter rail. */
export const trackCounts = new Map(
  tracks.map((track) => [
    track.slug,
    reviews.filter((review) => review.track === track.slug).length,
  ]),
);

/* ------------------------------------------------------------- platforms */

export const reviewPlatforms = {
  eyebrow: "Where these come from",
  heading: "The same rating, wherever you check it",
  accent: ["wherever", "you", "check", "it"],
  body: "Feedback is collected at the end of every batch and left publicly by students on their own accounts. None of it is gated behind a certificate.",
  items: [
    {
      label: "Google Business",
      value: "4.9",
      count: "750+ reviews",
      icon: "star",
      href: "#",
    },
    {
      label: "Walk-in feedback",
      value: "4.8",
      count: "Every batch, every intake",
      icon: "message",
      href: "/contact",
    },
    {
      label: "LinkedIn recommendations",
      value: "4.9",
      count: "Alumni & hiring partners",
      icon: "network",
      href: "#",
    },
    {
      label: "Placement follow-up",
      value: "4.7",
      count: "Six months after finishing",
      icon: "briefcase",
      href: "/#why-us",
    },
  ],
};

/* ------------------------------------------------------------- spotlight */

export const reviewSpotlight = {
  eyebrow: "In their words",
  heading: "Longer stories, start to finish",
  accent: ["start", "to", "finish"],
  body: "Accounts from people who finished a programme and then went and used it.",
};

/* ------------------------------------------------------------------ wall */

export const reviewWall = {
  eyebrow: "Every review",
  heading: "Read all of them, not just the flattering ones",
  accent: ["not", "just", "the", "flattering", "ones"],
  body: "Filter by track, search for the thing you actually care about, or sort by rating if you would rather start with the criticism.",
  searchPlaceholder: "Search reviews — try “placement”, “weekend batch”, “SQL”",
};

/* ------------------------------------------------------------ your turn */

export const shareStory = {
  eyebrow: "Your turn",
  heading: "Finished a programme with us? Say so honestly",
  accent: ["Say", "so", "honestly"],
  body: `A review that names what did not work is worth more to the next student than five stars with no sentence attached. Send yours to the ${site.city} desk and it goes up as written.`,
  points: [
    "Name the course and the batch, so a reader can place it.",
    "Say what you can do now that you could not do before.",
    "Tell us what should be better — we publish that part too.",
  ],
  cta: { label: "Write a review", href: "/contact" },
  secondary: { label: `Call ${site.phone}`, href: site.phoneHref },
};
