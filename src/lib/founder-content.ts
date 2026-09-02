/**
 * Copy and data for /founder.
 *
 * Shares its subject with `founder` in about-content.ts (same name, role and
 * founding year — 2016) but is written for a standalone page rather than an
 * in-page profile block, so the two do not import from each other.
 */

import { site } from "./content";

const NAME = "Gourav Gupta";
const ROLE = `Founder & Director, TechCadd ${site.city}`;
const INITIALS = "GG";

/* ------------------------------------------------------------------ hero */

export const founderHero = {
  eyebrow: "Founder",
  name: `Mr. ${NAME}`,
  role: ROLE,
  tags: ["Visionary Entrepreneur", "Technology Educator", "Skill Development Advocate"],
  photo: "/images/founder/gouravsir.jpg",
};

/* --------------------------------------------------------------- profile */

export const founderProfile = {
  eyebrow: "The founder",
  headingLead: "Making young people",
  headingAccent: "capable and confident",
  headingTail: "with technology.",
  paragraphs: [
    `Mr. ${NAME} founded TechCadd in ${site.city} in 2016 with a clear complaint: local training was teaching syllabi the industry had already moved past, and handing out certificates for work no employer would recognise.`,
    "Under his leadership, TechCadd has expanded from a single classroom into a full training institute — practitioners in the classroom, live projects instead of demonstrations, and a curriculum answerable to the people doing the hiring.",
  ],
  name: NAME,
  role: ROLE,
  initials: INITIALS,
};

/* ---------------------------------------------------------- vision & leadership */

export type LeadershipPillar = {
  icon: "cpu" | "layers" | "handshake" | "growth" | "spark";
  title: string;
  body: string;
};

export const founderLeadership = {
  visionEyebrow: "His vision",
  visionStatement:
    "Bridge the gap between academics and industry through practical, future-ready skills.",
  eyebrow: "Leadership",
  heading: "Under his leadership",
  pillars: [
    {
      icon: "cpu",
      title: "Emerging Technologies",
      body: "Moving the curriculum toward what companies actually run: AI, cloud, cyber security and automation.",
    },
    {
      icon: "layers",
      title: "Practical Training",
      body: "Learners build on projects and are assessed on work rather than theory alone.",
    },
    {
      icon: "handshake",
      title: "Industry Engagement",
      body: "Working with employers and institutions so what is taught tracks what is actually hired for.",
    },
    {
      icon: "growth",
      title: "Career Development",
      body: "Counselling, placement support and career pathways built into the programme, not an afterthought.",
    },
    {
      icon: "spark",
      title: "Innovation",
      body: "Bringing new technology into the classroom early, while it is still emerging.",
    },
  ] satisfies LeadershipPillar[],
};

/* ------------------------------------------------------------- engagement */

export const founderEngagement = {
  eyebrow: "Engagement",
  heading: "Present where students are",
  body: "His involvement extends into technology awareness and industry-academia engagement, on campus and at technology events.",
  items: [
    {
      tag: "Talk",
      title: "Pre-placement talks at partner colleges",
      body: `${NAME} is regularly invited to speak with graduating students during campus placement drives, on what a first technical role actually expects.`,
    },
    {
      tag: "Workshop",
      title: "Technology workshops at educational institutions",
      body: "He has led workshops and discussions on artificial intelligence, cyber security and other emerging technologies for student audiences.",
    },
  ],
};

/* ---------------------------------------------------------------- belief */

export const founderBelief = {
  eyebrow: "His belief",
  quote: "The future belongs to learners who continuously adapt, innovate and build.",
  name: NAME,
  role: "Founder & Director",
};

/* ------------------------------------------------------------------ story */

export const founderStory = {
  eyebrow: "Our founder story",
  heading: `From one classroom in ${site.city} to a growing name in Punjab`,
  body: `A brief, honest account of how TechCadd got here — no invented milestones, just what actually changed each year.`,
  milestones: [
    {
      tag: "Before 2016",
      title: "The gap he kept seeing",
      body: "Working alongside technical graduates, he kept seeing the same pattern: strong marksheets, and no ability to sit down and build the thing they had studied.",
    },
    {
      tag: "2016",
      title: `TechCadd opens in ${site.city}`,
      body: "The institute started with a single classroom and one rule that has not moved since: every trainer still does the work they teach.",
    },
    {
      tag: "Today",
      title: "Practitioners in the classroom",
      body: "Trainers stay current by working, so what a batch learns this month is what the syllabus said this month — not what it said three years ago.",
    },
  ],
  closingQuote:
    "A certificate says you attended. A project someone can spec says you can do the work. We built TechCadd around the second.",
};

/* ------------------------------------------------------------------ legacy */

export const founderLegacy = {
  eyebrow: "A growing legacy",
  fromYear: "2016",
  toLabel: "Today",
  body: "From a vision to make technology education more accessible, to today's focus on AI, automation, cloud, cyber security and industry-ready skills, TechCadd continues to evolve with the technology landscape.",
};

/* -------------------------------------------------------------------- team */

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  /**
   * Path under /public, e.g. "/images/team/aman-sharma.jpg". Left unset until
   * real photographs are supplied — the card falls back to a gradient plate
   * with the person's first name as a watermark, same pattern as `AboutImage`.
   */
  photo?: string;
};

export const founderTeam = {
  eyebrow: "Our team",
  heading: "Meet the people who teach here",
  body: "Trainers, mentors and counsellors who keep the classrooms running and the students moving.",
  cta: { label: "Talk to a counsellor", href: "/contact" },
  members: [
    {
      name: "Gourav Gupta",
      role: "Founder & Director",
      initials: "GG",
      photo: "/images/teamsimages/gourav-gupta.jpg",
    },
    {
      name: "Aman Sharma",
      role: "Full-Stack Trainer",
      initials: "AS",
      photo: "/images/teamsimages/aman-sharma.jpg",
    },
    {
      name: "Shilpa Gupta",
      role: "AI & Data Trainer",
      initials: "SG",
      photo: "/images/teamsimages/shilpa-gupta.jpg",
    },
    {
      name: "Asmita Sehgal",
      role: "Digital Marketing Trainer",
      initials: "AS",
      photo: "/images/teamsimages/asmita-sehgal.jpg",
    },
    {
      name: "Daljeet Singh",
      role: "Placement Counsellor",
      initials: "DS",
      photo: "/images/teamsimages/daljeet-singh.jpg",
    },
    {
      name: "Harrachneet Kaur",
      role: "Team Member",
      initials: "HK",
      photo: "/images/teamsimages/harrachneet-kaur.jpg",
    },
    {
      name: "Alam",
      role: "Team Member",
      initials: "AL",
      photo: "/images/teamsimages/alam.jpg",
    },
    {
      name: "Tanisha",
      role: "Team Member",
      initials: "TN",
      photo: "/images/teamsimages/tanisha.jpg",
    },
    {
      name: "Sandeep Chugh",
      role: "Team Member",
      initials: "SC",
      photo: "/images/teamsimages/sandeep-chugh.jpg",
    },
    {
      name: "Anita Sharma",
      role: "Team Member",
      initials: "AN",
      photo: "/images/teamsimages/anita-sharma.jpg",
    },
    {
      name: "Shiv",
      role: "Team Member",
      initials: "SH",
      photo: "/images/teamsimages/shiv.jpg",
    },
  ] satisfies TeamMember[],
};
