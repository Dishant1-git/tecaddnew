/**
 * Copy and data for /college-partnerships.
 *
 * Written for an institution's placement or training cell, not a student —
 * the vocabulary (cohort, mandated hours, MoU) and the CTAs (call, send an
 * enquiry) both assume the reader is deciding on behalf of a department.
 */

import { site } from "./content";

/* ------------------------------------------------------------------ hero */

export const collegeHero = {
  eyebrow: "College Partnerships",
  headingPre1: "Bringing",
  headingBold1: "industry practice",
  headingPre2: "onto your",
  headingBold2: "campus.",
  body: `Workshops, mandated industrial training, faculty development and joint placement drives, run with your departments and on ${site.city}'s own timetable.`,
  stats: [
    { value: "2016", label: "Working with institutions since" },
    { value: "10,000+", label: "Students trained" },
    { value: "50+", label: "Courses and tracks" },
    { value: "6", label: "Partnership formats" },
  ],
};

/* ---------------------------------------------------------------- ways we work */

export type CollegeWay = {
  icon: "workshop" | "training" | "placement" | "faculty" | "lab" | "certificate";
  title: string;
  body: string;
};

export const waysWeWork = {
  eyebrow: "What we run",
  heading: "Six ways we work with institutions",
  items: [
    {
      icon: "workshop",
      title: "Campus Workshops",
      body: "Hands-on sessions on AI, robotics, cyber security and emerging tools, run at your campus and sized to a single department or a whole year group.",
    },
    {
      icon: "training",
      title: "Industrial Training",
      body: "45-day, 6-week and 6-month programmes mapped to university training requirements, so a batch completes its mandated hours without a timetable clash.",
    },
    {
      icon: "placement",
      title: "Placement Drives",
      body: `Joint drives and pre-placement talks with the employers who recruit from us, hosted on your campus or at the ${site.city} centre.`,
    },
    {
      icon: "faculty",
      title: "Faculty Development",
      body: "Short programmes that bring teaching staff up to date on the stacks their students will be interviewed on: cloud, data and modern web tooling.",
    },
    {
      icon: "lab",
      title: "Lab & Curriculum Support",
      body: "Help specifying a teaching lab and aligning elective content with what hiring managers currently ask against, rather than what the syllabus was written against.",
    },
    {
      icon: "certificate",
      title: "Certification",
      body: "Completion certificates and internship letters issued in the format your university requires, for every student who finishes a programme.",
    },
  ] satisfies CollegeWay[],
};

/* ----------------------------------------------------------------- process */

export const howItWorks = {
  eyebrow: "How it works",
  heading: "From first call to a running programme",
  steps: [
    {
      number: "01",
      title: "Introductory call",
      body: "A short conversation about your departments, student numbers and where the gap between syllabus and industry is widest.",
    },
    {
      number: "02",
      title: "Proposal",
      body: "A written plan covering scope, duration, delivery mode and cost. Nothing starts on a handshake.",
    },
    {
      number: "03",
      title: "Pilot batch",
      body: "One cohort or one workshop first, so both sides can judge the fit before committing to a longer arrangement.",
    },
    {
      number: "04",
      title: "Ongoing programme",
      body: "A rolling schedule across semesters, with placement activity attached to the students who complete it.",
    },
  ],
};

/* --------------------------------------------------------------- partner cta */

export const partnerCta = {
  eyebrow: "Partner with us",
  heading: "Tell us what your students need next.",
  body: "Send us your department, student numbers and the semester you are planning for, and we will come back with a written proposal covering scope, duration, delivery mode and cost.",
  primaryCta: { label: `Call ${site.phone}`, href: site.phoneHref },
  secondaryCta: { label: "Send an enquiry", href: "/contact" },
};
