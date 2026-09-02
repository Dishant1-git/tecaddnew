/**
 * Copy and data for /contact.
 *
 * Office details echo `footer` and `site` in content.ts rather than
 * re-typing them, so the two never drift. The map query is built from the
 * same address string for the same reason.
 */

import { footer, site } from "./content";

/* ------------------------------------------------------------------ hero */

export const contactHero = {
  eyebrow: "Get in touch",
  headingLead: "Questions about a course?",
  headingMuted: "Someone answers the same working day.",
  body: `Ask about batch dates, fees or which track fits your goals. Whichever way you reach us, someone at TechCadd ${site.city} answers the same working day.`,
  primaryCta: { label: "Call the desk", href: site.phoneHref },
  secondaryCta: { label: "Email us", href: `mailto:${site.email}` },
};

/* -------------------------------------------------------------- get in touch */

export type TouchPoint = {
  icon: "office" | "email" | "phone";
  label: string;
  lines: string[];
};

export const getInTouch = {
  heading: "Get in touch",
  body: `Ask about batch dates, fees or which track fits your degree. Whichever way you reach us, someone answers the same working day.`,
  points: [
    {
      icon: "office",
      label: "Head Office",
      lines: ["TechCadd Computer Education", `${footer.address}`],
    },
    {
      icon: "email",
      label: "Email Us",
      lines: [site.email, "admissions@techcadd.com"],
    },
    {
      icon: "phone",
      label: "Call Us",
      lines: [`Phone : ${site.phone}`, "Alt : +91 98881 22254"],
    },
  ] satisfies TouchPoint[],
};

/* ------------------------------------------------------------------- form */

export const contactForm = {
  heading: "Send us a message",
  body: "Fill this in and a counsellor calls or emails you back — no obligation, no hard sell.",
  subjectOptions: [
    "Course enquiry",
    "Fees & batch timings",
    "Placement support",
    "College partnership",
    "Something else",
  ],
  submitLabel: "Send message",
  successMessage: `Thanks — the ${site.city} desk will get back to you within one working day.`,
};

/* ------------------------------------------------------------ support desk */

export type SupportDesk = {
  id: string;
  initials: string;
  title: string;
  tag: string;
  blurb: string;
  phone: string;
  phoneHref: string;
  email: string;
  location: string;
};

export const support = {
  eyebrow: "Support & assistance",
  heading: "Get personalised support for your educational journey",
  desks: [
    {
      id: "student",
      initials: "SD",
      title: "Student Desk",
      tag: "Student Support",
      blurb: "Academic guidance and career counselling.",
      phone: site.phone,
      phoneHref: site.phoneHref,
      email: site.email,
      location: `TechCadd ${site.city} Campus`,
    },
    {
      id: "college",
      initials: "CD",
      title: "College Desk",
      tag: "College Support",
      blurb: "Institution partnerships and placement collaboration.",
      phone: site.phone,
      phoneHref: site.phoneHref,
      email: "admissions@techcadd.com",
      location: `TechCadd ${site.city} Campus`,
    },
  ] satisfies SupportDesk[],
};

/* ------------------------------------------------------------------- map */

const MAP_QUERY = `TechCadd Computer Education, ${footer.address}`;

export const contactMap = {
  caption: `Find us on the map — ${footer.address}`,
  embedSrc: `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`,
};
