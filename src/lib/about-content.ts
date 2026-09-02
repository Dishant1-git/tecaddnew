/**
 * Copy for the /about page.
 *
 * Kept separate from `content.ts` — that file is the homepage's source of
 * truth — so the two pages can be reworded independently. Every string the
 * About page renders lives here; the section components hold layout only.
 *
 * Figures reuse the same placeholder numbers as the homepage (15K+ alumni,
 * 500+ hiring partners, 4.9/5). Swap them here once the institute's audited
 * records are available, and no JSX needs touching.
 *
 * `image` fields point at `/public/about/*.svg` — placeholder illustration in
 * the site's palette. Replace a file with a real photograph at the same path
 * (or point the field at a new one) and `AboutImage` picks it up unchanged.
 */

import { site } from "./content";

/* ----------------------------------------------------------------- hero */

export const aboutHero = {
  eyebrow: `TechCadd ${site.city} · Since 2016`,
  /** Rendered as two lines; the second sits in a dimmed white. */
  headingLead: "We are an IT institute built",
  headingMuted: "around what employers hire for.",
  body: `TechCadd ${site.city} trains students, graduates and working professionals for real technology roles — through live projects, mentors who still build for a living, and a curriculum rewritten whenever the industry moves.`,
  chips: ["Live project training", "Industry mentors", "Placement support"],
  primaryCta: { label: "Book a campus visit", href: "/contact" },
  secondaryCta: { label: "Explore our courses", href: "/courses" },
  stats: [
    { value: "10+", label: "Years training in Amritsar" },
    { value: "15K+", label: "Students trained" },
    { value: "40+", label: "Programmes running" },
    { value: "500+", label: "Hiring partners" },
  ],
};

/* ---------------------------------------------------------- who we are */

export const whoWeAre = {
  eyebrow: "Who we are",
  heading: "An institute run like an engineering team",
  accent: ["engineering", "team"],
  lead: `TechCadd is an IT training institute in ${site.city} teaching programming, artificial intelligence, data, digital marketing, cyber security and cloud — to people who intend to work in them, not just certify in them.`,
  paragraphs: [
    "We started with a single classroom and one stubborn conviction: a training institute should be judged by what its students can build on their first day at work, not by how thick the notes are. Everything since — the labs, the mentor model, the project reviews — grew out of that.",
    "So we run the place the way a good engineering team runs. Small batches. Working professionals teaching their own craft. Code and campaigns reviewed line by line. Syllabus revisions whenever the tooling underneath a subject changes, which in this field is often.",
  ],
  pillars: [
    {
      icon: "target",
      title: "One measure of success",
      body: "A student who can do the job, and can explain the decisions behind the work they did.",
    },
    {
      icon: "users",
      title: "Taught by practitioners",
      body: "Trainers who ship production work bring the current version of a subject, not the version they learned.",
    },
    {
      icon: "repeat",
      title: "Curriculum that moves",
      body: "Modules are revised each intake against what hiring partners are actually asking candidates to do.",
    },
  ],
  /** Gradient tiles standing in for campus photography. */
  tiles: [
    {
      icon: "cpu",
      label: "AI & Data lab",
      gradient: "from-brand-600 via-brand-700 to-accent",
      image: "/about/classroom.svg",
      alt: "Students working through a lab session at TechCadd",
    },
    {
      icon: "terminal",
      label: "Dev floor",
      gradient: "from-slate-500 via-slate-700 to-ink-soft",
      image: "/about/project-lab.svg",
      alt: "An editor, terminal and results panel from a student project",
    },
    {
      icon: "presentation",
      label: "Mentor reviews",
      gradient: "from-brand-400 via-brand-600 to-brand-900",
      image: "/about/mentor-review.svg",
      alt: "A mentor reviewing a student's work line by line",
    },
    {
      icon: "users",
      label: "Placement desk",
      gradient: "from-accent via-brand-700 to-brand-500",
      image: "/about/industry.svg",
      alt: "The institute connected to its network of hiring partners",
    },
  ],
  /** Wide plate under the story column. */
  feature: {
    image: "/about/campus.svg",
    alt: `The TechCadd campus in ${site.city}`,
    caption: `Our campus in ${site.city}`,
    icon: "building",
    gradient: "from-brand-700 via-brand-800 to-ink",
  },
};

/* --------------------------------------------------- mission and vision */

export const missionVision = {
  eyebrow: "Mission and vision",
  heading: "Where we are going, and how we get there",
  accent: ["going,", "there"],
  cards: [
    {
      kind: "Mission",
      icon: "compass",
      title: "Make industry-grade technology training available in Amritsar",
      body: "No one should have to move to a metro to learn the current stack from the people who use it. We bring that standard of training here, at a price a Punjab family can plan for.",
      points: [
        "Teach the tools teams actually deploy",
        "Keep batches small enough to be reviewed",
        "Carry every learner to a portfolio, not a certificate",
      ],
    },
    {
      kind: "Vision",
      icon: "eye",
      title: "A regional talent pool the industry recruits from by default",
      body: "We want Amritsar to be somewhere hiring managers look first — because the engineers, analysts and marketers who come out of here arrive ready and keep growing.",
      points: [
        "An alumni network that hires the next batch",
        "Deep partnerships with companies and colleges",
        "Research-aware teaching in AI and cloud",
      ],
    },
  ],
};

/* -------------------------------------------------------- what we cover */

export const whatWeCover = {
  eyebrow: "What we cover",
  heading: "The full working stack of a modern technology career",
  accent: ["modern", "technology", "career"],
  body: "Six domains, taught as they are used — connected to each other, not as isolated subjects. Most students take one as their track and borrow the neighbouring skills they need.",
  domains: [
    {
      icon: "code",
      title: "Software engineering",
      body: "Languages, frameworks, version control and the habits that keep a codebase maintainable by someone other than its author.",
      tags: ["Python", "Java", "C / C++", "Full stack", "Web development"],
    },
    {
      icon: "cpu",
      title: "Artificial intelligence",
      body: "From the fundamentals through generative models, prompt engineering, agentic systems and retrieval-augmented applications.",
      tags: ["Generative AI", "Agentic AI", "Prompt engineering", "RAG"],
    },
    {
      icon: "database",
      title: "Data & analytics",
      body: "Collecting, cleaning and interrogating messy real data, then turning it into a decision someone can act on.",
      tags: ["Data science", "Analytics", "SQL", "Power BI"],
    },
    {
      icon: "megaphone",
      title: "Digital marketing",
      body: "Search, social, paid media, content and analytics run as one measurable system rather than five separate tactics.",
      tags: ["SEO", "Performance ads", "Analytics", "AI marketing"],
    },
    {
      icon: "shield",
      title: "Cyber security",
      body: "Defensive fundamentals, network hardening and the operational discipline that keeps systems standing under pressure.",
      tags: ["Network security", "Ethical hacking", "Security operations"],
    },
    {
      icon: "cloud",
      title: "Cloud & DevOps",
      body: "Deploying, automating and monitoring the infrastructure everything else in this list ends up running on.",
      tags: ["AWS", "Docker", "CI / CD", "Linux"],
    },
  ],
};

/* -------------------------------------------------------- how we teach */

export const howWeTeach = {
  eyebrow: "How we teach",
  heading: "Every class is a working session",
  accent: ["working", "session"],
  body: "A TechCadd session is not a lecture with an exercise stapled on. Concepts are introduced, worked in the lab under supervision, then folded straight into the project you are already building.",
  steps: [
    {
      n: "01",
      title: "Concept, briefly",
      body: "The idea, why it exists and where it breaks — in the first twenty minutes, not the first three classes.",
    },
    {
      n: "02",
      title: "Guided build",
      body: "You implement it while the trainer moves through the lab. Mistakes get caught at the moment they are made.",
    },
    {
      n: "03",
      title: "Independent work",
      body: "The same skill against a harder, less tidy input, so it becomes something you can do without prompting.",
    },
    {
      n: "04",
      title: "Line-by-line review",
      body: "Your work is read and commented on — the standard is what a team lead would send back, not a tick mark.",
    },
    {
      n: "05",
      title: "Into the project",
      body: "The module output ships into your running project, so nothing you learn is parked and forgotten.",
    },
  ],
  aside: {
    title: "What a batch looks like",
    image: "/about/classroom.svg",
    alt: "A live lab session in progress",
    caption: "A live lab session",
    facts: [
      { label: "Batch size", value: "Small, mentor-reviewable" },
      { label: "Lab access", value: "Beyond class hours" },
      { label: "Timings", value: "Morning, evening & weekend" },
      { label: "Mode", value: "Classroom and live online" },
    ],
  },
};

/* -------------------------------------------------------- outcome loop */

export const outcomeLoop = {
  eyebrow: "Our outcome loop",
  heading: "The loop that keeps our teaching honest",
  accent: ["keeps", "our", "teaching", "honest"],
  body: "What we teach is answerable to what happens after. Hiring feedback comes back into the syllabus every intake — that circuit, not any single course, is the actual product.",
  stages: [
    {
      label: "Teach",
      icon: "book",
      title: "Run the module",
      body: "Trainers deliver against the current syllabus, with lab work reviewed as it happens.",
    },
    {
      label: "Build",
      icon: "wrench",
      title: "Ship something real",
      body: "Every module ends in an artefact — an app, a model, a campaign, a hardened network.",
    },
    {
      label: "Review",
      icon: "message",
      title: "Critique the work",
      body: "Mentors and peers pull the build apart the way a code review or a client review would.",
    },
    {
      label: "Place",
      icon: "briefcase",
      title: "Send it to interview",
      body: "The portfolio and the mock-interview record go out to our hiring partners.",
    },
    {
      label: "Learn",
      icon: "repeat",
      title: "Bring the answer back",
      body: "What interviewers probed, and what candidates fumbled, rewrites the next intake's syllabus.",
    },
  ],
  note: "Anything a hiring partner tells us a candidate could not do becomes a module change before the next batch starts.",
};

/* -------------------------------------------------------- who we teach */

export const whoWeTeach = {
  eyebrow: "Who we teach",
  heading: "Five kinds of people walk in here",
  accent: ["Five", "kinds"],
  body: "The syllabus is shared; the pacing, the timings and the placement plan are not. Tell us which of these you are and the counselling desk will map a route.",
  audiences: [
    {
      icon: "graduation",
      title: "School leavers after 12th",
      body: "Certificate and diploma tracks that turn a first exposure to computing into an employable skill inside a year.",
      fit: "6-month & 1-year certificates",
      href: "/after-12th-courses",
    },
    {
      icon: "book",
      title: "Engineering & degree students",
      body: "University-mandated 45-day, 6-week and 6-month industrial training, run as real project work rather than attendance.",
      fit: "Industrial training & internships",
      href: "/internship-training",
    },
    {
      icon: "rocket",
      title: "Fresh graduates",
      body: "Job-ready tracks for anyone holding a degree but not yet the portfolio, the tooling or the interview practice.",
      fit: "Placement-focused programmes",
      href: "/courses",
    },
    {
      icon: "briefcase",
      title: "Working professionals",
      body: "Evening and weekend upskilling for people adding AI, cloud, data or analytics to a career already in motion.",
      fit: "Flexible batches",
      href: "/courses",
    },
    {
      icon: "building",
      title: "Colleges & companies",
      body: "Cohort training delivered on your campus or ours, scoped to the outcomes your department or team needs.",
      fit: "Partnership programmes",
      href: "/college-partnerships",
    },
  ],
};

/* ------------------------------- from learning to practical experience */

export const learningToPractice = {
  eyebrow: "From learning to practical experience",
  heading: "The distance between knowing and doing, closed on purpose",
  accent: ["knowing", "and", "doing"],
  body: "Practical experience is not a phase bolted on at the end of the course. It is staged from the first week, so by the time you interview you are describing work you have done rather than topics you have covered.",
  ladder: [
    {
      stage: "Week 1 onward",
      title: "Lab exercises",
      body: "Short, supervised drills that make the syntax, the tooling and the workflow automatic.",
      output: "Working fundamentals",
    },
    {
      stage: "Mid-course",
      title: "Module projects",
      body: "Each module closes with a build against realistic, imperfect inputs — reviewed like a pull request.",
      output: "Reviewed artefacts",
    },
    {
      stage: "Second half",
      title: "The capstone build",
      body: "One substantial end-to-end project carried across modules, with scope, deadlines and revisions.",
      output: "A portfolio project",
    },
    {
      stage: "Before placement",
      title: "Live & client work",
      body: "Internship and industrial-training students take briefs with real constraints and a real reviewer.",
      output: "Experience you can cite",
    },
  ],
  media: {
    image: "/about/project-lab.svg",
    alt: "A capstone project: editor, terminal and measured results",
    caption: "Capstone project work",
    icon: "wrench",
    gradient: "from-brand-600 via-brand-700 to-accent",
  },
  proofs: [
    {
      icon: "git",
      label: "Version-controlled work",
      body: "Every project lives in a repository you keep and can show.",
    },
    {
      icon: "chart",
      label: "Documented outcomes",
      body: "Results written up the way a workplace would expect them.",
    },
    {
      icon: "message",
      label: "Mock interviews",
      body: "Technical and HR rounds rehearsed against your own project.",
    },
  ],
};

/* ------------------------------------------------------- the difference */

export const theDifference = {
  eyebrow: "The difference",
  heading: "What separates us from a coaching centre",
  accent: ["coaching", "centre"],
  body: "A fair question to ask of any institute in this city. Here is the honest comparison — hold us to it when you visit.",
  columns: { typical: "Typical coaching centre", ours: "TechCadd" },
  rows: [
    {
      point: "Who teaches",
      typical: "Whoever is available to read the notes",
      ours: "Practitioners still working in the field they teach",
    },
    {
      point: "The syllabus",
      typical: "Fixed for years, printed once",
      ours: "Revised each intake against hiring feedback",
    },
    {
      point: "Project work",
      typical: "One demo project copied across the batch",
      ours: "Your own build, reviewed line by line",
    },
    {
      point: "Batch size",
      typical: "As many seats as the room holds",
      ours: "Small enough that every submission is read",
    },
    {
      point: "Placement",
      typical: "A list of company names on a wall",
      ours: "Portfolio, mock interviews and active referrals",
    },
    {
      point: "After the course",
      typical: "The relationship ends at the certificate",
      ours: "Alumni keep lab access, updates and referrals",
    },
  ],
  closing:
    "None of this is expensive to promise. Ask any institute you are considering to show you a student's reviewed project — that question settles it quickly.",
};

/* -------------------------------------------------------- what we teach */

export const whatWeTeach = {
  eyebrow: "What we teach",
  heading: "Every programme running on campus",
  accent: ["programme", "running"],
  body: "Open any course to see its full module list, tools, projects and the roles it leads to — before you speak to anyone.",
  cta: { label: "Browse all courses", href: "/courses" },
  /** Non-catalogue tracks that sit alongside the course categories. */
  tracks: [
    {
      title: "Internship & industrial training",
      body: "45 days, 6 weeks, 4 months and 6 months — the university-mandated formats, run as project work.",
      href: "/internship-training",
    },
    {
      title: "After 12th certificates",
      body: "Six-month and one-year certificate routes for school leavers starting from the beginning.",
      href: "/after-12th-courses",
    },
    {
      title: "College partnerships",
      body: "Cohort training and workshops delivered with departments across Punjab.",
      href: "/college-partnerships",
    },
  ],
};

/* --------------------------------------------------------- our approach */

export const ourApproach = {
  eyebrow: "Our approach",
  heading: "Six rules we do not bend",
  accent: ["do", "not", "bend"],
  body: "Method is easy to claim and hard to keep. These are the constraints we hold the institute to, in the order they matter.",
  principles: [
    {
      n: "01",
      title: "Depth over coverage",
      body: "We would rather you own six things completely than have heard of twenty. Syllabus bloat is how institutes hide shallow teaching.",
    },
    {
      n: "02",
      title: "Nothing is taught abstractly",
      body: "Every concept arrives attached to a problem it solves. If we cannot show you where it is used, it does not belong in the module.",
    },
    {
      n: "03",
      title: "Work is reviewed, not collected",
      body: "A submission nobody reads teaches nothing. Every artefact comes back with comments you have to act on.",
    },
    {
      n: "04",
      title: "Struggle is scheduled",
      body: "Difficulty is placed deliberately, with a mentor nearby. Skill comes from working at the edge of what you can already do.",
    },
    {
      n: "05",
      title: "The tools stay current",
      body: "When the industry moves to a new framework, model or platform, the module changes that intake — not the next syllabus cycle.",
    },
    {
      n: "06",
      title: "Say what we cannot do",
      body: "If a course is wrong for you, the counselling desk will tell you so. A mis-sold admission costs a student a year.",
    },
  ],
};

/* --------------------------------------------------- industry connection */

export const industryConnection = {
  eyebrow: "Industrial connection",
  heading: "Wired into the industry we are training you for",
  accent: ["industry"],
  body: "Our connection to working companies is not a logo wall. It is where our trainers come from, where our project briefs come from, and where our students go.",
  pillars: [
    {
      icon: "handshake",
      title: "Hiring partners",
      body: "A standing network of companies across Punjab, Delhi NCR, Bengaluru and Pune that we place into, with active referral channels.",
      stat: "500+",
      statLabel: "hiring partners",
    },
    {
      icon: "factory",
      title: "Live client briefs",
      body: "Real scoped work routed to advanced batches, with a client-side reviewer and a deadline that does not move.",
      stat: "Live",
      statLabel: "project briefs",
    },
    {
      icon: "network",
      title: "Campus & college tie-ups",
      body: "Structured industrial training with engineering and degree colleges, plus workshops run on their campuses.",
      stat: "Punjab-wide",
      statLabel: "college network",
    },
  ],
  media: {
    image: "/about/industry.svg",
    alt: "TechCadd linked to its network of hiring partners",
    caption: "Where our alumni go",
    icon: "network",
    gradient: "from-brand-700 via-accent to-brand-500",
  },
  hiresIn: [
    "Software development",
    "AI & machine learning",
    "Data analytics",
    "Digital marketing",
    "Cyber security",
    "Cloud & DevOps",
    "QA & automation",
    "UI / UX design",
  ],
  note: "Placement support is genuine support — portfolio review, interview practice and referrals. No institute can honestly guarantee a job, and we do not.",
};

/* -------------------------------------------------------------- founder */

export const founder = {
  eyebrow: "Our founder",
  heading: "The person who set the standard",
  accent: ["set", "the", "standard"],
  name: "Gourav Gupta",
  role: `Founder & Director, TechCadd ${site.city}`,
  initials: "GG",
  photo: {
    image: "/about/founder.svg",
    alt: "Portrait of Gourav Gupta, founder of TechCadd",
    icon: "users",
    gradient: "from-brand-600 via-brand-700 to-accent",
  },
  quote:
    "A certificate is a receipt. What a student should leave with is the confidence that they can be handed an unfamiliar problem on a Monday morning and work it out.",
  paragraphs: [
    `TechCadd began in ${site.city} with a small classroom, a handful of machines and a clear complaint: local training was teaching syllabi the industry had already moved past.`,
    "That complaint became the operating rule of the institute — practitioners in the classroom, live projects instead of demonstrations, and a syllabus answerable to the people doing the hiring. It still decides what we run, and what we refuse to run.",
  ],
  facts: [
    { label: "Founded", value: "2016" },
    { label: "Base", value: `${site.city}, Punjab` },
    { label: "Focus", value: "AI, software & industry training" },
  ],
};

/* --------------------------------------------------------------- awards */

export const awards = {
  eyebrow: "Awards, recognition & achievements",
  heading: "Recognition we are glad about, and proud of",
  accent: ["glad", "about,", "proud"],
  /**
   * Placeholder entries. Replace each with the institute's verified award,
   * certification or record — including the awarding body — before launch.
   */
  body: "A record built one batch at a time, by students who went on to do the work.",
  items: [
    {
      icon: "trophy",
      year: "2024",
      title: "Best IT Training Institute — Amritsar",
      body: "Regional recognition for training quality and placement outcomes.",
      tag: "Award",
    },
    {
      icon: "medal",
      year: "2023",
      title: "ISO-certified training processes",
      body: "Curriculum, delivery and assessment audited against a documented standard.",
      tag: "Certification",
    },
    {
      icon: "star",
      year: "Ongoing",
      title: "4.9 / 5 across 750+ student reviews",
      body: "Rated by students on public review platforms, batch after batch.",
      tag: "Rating",
    },
    {
      icon: "users",
      year: "2016 – today",
      title: "15,000+ students trained",
      body: "Across programming, AI, data, marketing, cyber security and cloud.",
      tag: "Milestone",
    },
    {
      icon: "handshake",
      year: "Ongoing",
      title: "500+ hiring partners",
      body: "Companies that have interviewed or hired from our batches.",
      tag: "Network",
    },
    {
      icon: "building",
      year: "Ongoing",
      title: "Authorised training partnerships",
      body: "A recognised centre for partner certification tracks and college programmes.",
      tag: "Partnership",
    },
  ],
};

/* --------------------------------------------------------------- belief */

export const belief = {
  eyebrow: "Our belief",
  headingLead: "Talent is evenly distributed.",
  headingMuted: "Training is not.",
  body: `A student in ${site.city} is no less capable than one in Bengaluru — they have simply had less access to people who do the work and will show them how. Closing that gap is the whole of our job, and it is why this institute exists.`,
  values: [
    {
      icon: "lightbulb",
      title: "Curiosity first",
      body: "The best students ask why before they ask what is in the exam.",
    },
    {
      icon: "shield",
      title: "Honesty in counselling",
      body: "The right course or no course. We will say when we are not the fit.",
    },
    {
      icon: "users",
      title: "Nobody left behind",
      body: "Small batches exist so the quiet student is not the invisible one.",
    },
    {
      icon: "flame",
      title: "Work worth showing",
      body: "Everything built here should be something you would show an employer.",
    },
  ],
  closing:
    "If that is the kind of place you are looking for, come and see the labs before you decide.",
  primaryCta: { label: "Book a campus visit", href: "/contact" },
  secondaryCta: { label: "Talk to a counsellor", href: site.phoneHref },
};
