/**
 * Copy for /about/mission-vision.
 *
 * The About page carries a two-card summary of the same material; this file
 * is the long form. Keep the two in step — the summary links here, and a
 * mission that reads differently in two places is a mission nobody holds.
 *
 * As elsewhere, `image` fields point at `/public/about/*.svg` placeholder
 * artwork; drop a real photograph at the same path to replace it.
 */

import { site } from "./content";

/* ----------------------------------------------------------------- hero */

export const missionHero = {
  eyebrow: "Mission and vision",
  headingLead: "What we are for,",
  headingMuted: "and what we refuse to become.",
  body: `Every institute has a mission statement. Ours is written to be checkable — each line below is something you can walk into TechCadd ${site.city} and test on a Tuesday afternoon.`,
  jump: [
    { label: "Our mission", href: "#our-mission", hint: "What we are here to do" },
    { label: "Our vision", href: "#our-vision", hint: "Where this is going" },
  ],
  media: {
    image: "/about/horizon.svg",
    alt: "A path leading toward a horizon marked by a guiding star",
    caption: "The direction we are set on",
    icon: "compass",
    gradient: "from-brand-700 via-brand-800 to-ink",
  },
};

/* ---------------------------------------------------------- our mission */

export const ourMission = {
  eyebrow: "Our mission",
  heading: "Make industry-grade training ordinary in Amritsar",
  accent: ["ordinary", "in", "Amritsar"],
  statement: `No one should have to leave Punjab to learn the current stack from the people who actually use it.`,
  paragraphs: [
    "That sentence is the whole of it. Everything the institute does is either in service of it or in the way of it — and the second kind gets cut, however well it sells.",
    "It also sets the standard we are held to. Not enrolments, not the size of the batch photo: whether a student who finishes here can be handed unfamiliar work and get it done.",
  ],
  commitments: [
    {
      icon: "cpu",
      title: "Teach the stack in current use",
      body: "The tools, versions and workflows teams deploy this year — not the syllabus that was printed when the centre opened.",
    },
    {
      icon: "users",
      title: "Keep every batch reviewable",
      body: "Small enough that a trainer reads every submission and knows who is quietly falling behind.",
    },
    {
      icon: "wrench",
      title: "Finish with work, not paper",
      body: "Every student leaves with reviewed, version-controlled projects they can open in front of an interviewer.",
    },
    {
      icon: "handshake",
      title: "Stay reachable",
      body: "Fees, timings and batch modes are set so a working professional or a Punjab family can actually plan around them.",
    },
  ],
  rulesOut: {
    title: "What that rules out",
    items: [
      "Courses we cannot staff with someone who does the work for a living",
      "Batch sizes chosen by how many chairs fit in the room",
      "Selling a programme to a student it is plainly wrong for",
      "Any promise about a job that we are not the ones to keep",
    ],
  },
  media: {
    image: "/about/mentor-review.svg",
    alt: "A trainer reviewing a student's work line by line",
    caption: "Every submission is read",
    icon: "presentation",
    gradient: "from-brand-600 via-brand-700 to-accent",
  },
};

/* ----------------------------------------------------------- our vision */

export const ourVision = {
  eyebrow: "Our vision",
  heading: "Amritsar as a place hiring managers look first",
  accent: ["look", "first"],
  statement:
    "Talent here has never been the constraint. Access to people who do the work has been. We intend to close that gap until the city's name on a CV is a reason to read further.",
  /**
   * Deliberately expressed at three scales rather than against dates — a
   * timeline of invented years would be the least honest thing on the page.
   */
  horizons: [
    {
      scale: "For a student",
      icon: "rocket",
      title: "The route stops being a gamble",
      body: "You can see the syllabus, the projects and the roles a course leads to before you pay, and you leave able to prove what you learned.",
      points: ["Published module lists", "Reviewed portfolio work", "Interview practice against your own build"],
    },
    {
      scale: "For the city",
      icon: "building",
      title: "A talent pool, not a departure lounge",
      body: "Enough trained engineers, analysts and marketers stay that companies open teams here instead of only recruiting out of here.",
      points: ["Alumni who hire the next batch", "Local firms training with us", "Colleges teaching against real briefs"],
    },
    {
      scale: "For the field",
      icon: "network",
      title: "Teaching that keeps up with the work",
      body: "A curriculum close enough to practice that what changes in industry on Monday is in a classroom the same intake.",
      points: ["Practitioner trainers", "Hiring feedback into the syllabus", "AI and cloud taught as they are used"],
    },
  ],
  media: {
    image: "/about/industry.svg",
    alt: "The institute connected to a network of hiring companies",
    caption: "The network we are building toward",
    icon: "network",
    gradient: "from-brand-700 via-accent to-brand-500",
  },
};

/* ------------------------------------------------------ what we hold to */

export const whatWeHoldTo = {
  eyebrow: "What we hold to",
  heading: "Six commitments that survive a bad month",
  accent: ["survive", "a", "bad", "month"],
  body: "Values are only worth printing if they cost something when admissions are slow. These are the ones we have kept when it would have been easier not to.",
  tenets: [
    {
      n: "01",
      icon: "shield",
      title: "Tell the truth in counselling",
      body: "If a course is wrong for you, we say so and lose the admission. A mis-sold seat costs a student a year of their life.",
    },
    {
      n: "02",
      icon: "code",
      title: "Teach only what we would use",
      body: "If a trainer would not reach for it in their own work, it does not go in the module — however good it looks on a brochure.",
    },
    {
      n: "03",
      icon: "message",
      title: "Read everything a student submits",
      body: "Feedback is the product. Work that is collected and never commented on teaches nobody anything.",
    },
    {
      n: "04",
      icon: "repeat",
      title: "Change the syllabus when we are wrong",
      body: "Being out of date is a mistake; staying out of date to protect printed notes is a choice we do not make.",
    },
    {
      n: "05",
      icon: "handshake",
      title: "Keep the door open afterwards",
      body: "Alumni keep lab access, syllabus updates and referrals. The relationship does not end at the certificate.",
    },
    {
      n: "06",
      icon: "eye",
      title: "Never sell a guarantee",
      body: "We control the training, the portfolio and the referrals. We do not control an employer's decision, so we do not promise it.",
    },
  ],
};

/* ----------------------------------------------- how we keep ourselves honest */

export const keepingHonest = {
  eyebrow: "How we keep ourselves honest",
  heading: "The checks that make the promise testable",
  accent: ["make", "the", "promise", "testable"],
  body: "A mission with no feedback loop is decoration. These are the loops — what we measure, how often, and what we do when the answer is unflattering.",
  checks: [
    {
      icon: "message",
      title: "Batch feedback, every module",
      body: "Students rate the module and the trainer while it is fresh. Two weak scores in a row and the module is reworked, not defended.",
      cadence: "Per module",
    },
    {
      icon: "briefcase",
      title: "Hiring-partner debriefs",
      body: "We ask interviewers what our candidates could not do. Whatever comes back becomes a syllabus change before the next intake.",
      cadence: "Per intake",
    },
    {
      icon: "chart",
      title: "Public reviews stay public",
      body: "We do not curate the review platforms. The rating is what students actually said, including when it is not flattering.",
      cadence: "Always on",
    },
    {
      icon: "graduation",
      title: "Alumni follow-ups",
      body: "We check in months after a course ends, when the honest answer about whether the training held up is finally available.",
      cadence: "6 & 12 months",
    },
  ],
  refusals: {
    title: "Claims you will not hear from us",
    body: "Not because they would not sell — because we cannot stand behind them.",
    items: [
      "100% placement",
      "A guaranteed job or salary",
      "Expert in any field in 30 days",
      "Certificates that substitute for skill",
    ],
  },
  invitation: {
    title: "Hold us to it",
    body: `Walk into the ${site.city} campus unannounced. Sit in a live class, ask a trainer what they build outside the classroom, and ask to see a student's reviewed project. If any of this page is decoration, twenty minutes will show it.`,
    primaryCta: { label: "Book a campus visit", href: "/contact" },
    secondaryCta: { label: "Read about the institute", href: "/about" },
  },
};
