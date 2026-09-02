/**
 * Copy and data for /gallery.
 *
 * Photography is not in place yet. Every tile therefore carries a `scene`
 * key, which `GalleryArt` draws as an inline SVG in the site's palette, and an
 * optional `src` under /public. Drop a real photograph in and set `src` — the
 * frame, caption, filter and lightbox behave identically; the illustration is
 * simply never rendered for that tile.
 *
 * Two things about the order of `galleryItems`, because the mosaic is a fixed
 * rhythm rather than a free-for-all:
 *
 *   1. Every fifth entry (0, 5, 10, …) is rendered as the large 2×2 block.
 *      Put a frame worth looking at there.
 *   2. Tones alternate deep / bright down the list so no two neighbours in
 *      the gapless grid melt into each other. Keep that alternation when you
 *      add or reorder entries.
 *
 * A multiple of five fills the grid exactly, leaving no empty cells.
 *
 * Captions are written as captions, not alt text: `GalleryArt` is decorative,
 * so the accessible name for each tile comes from its `title` and `caption`
 * in the markup rather than from the artwork.
 */

import { site } from "./content";

export type SceneKey =
  | "lab"
  | "lecture"
  | "workshop"
  | "hackathon"
  | "convocation"
  | "campus"
  | "interview"
  | "studio";

export type AlbumSlug =
  | "campus"
  | "classrooms"
  | "projects"
  | "events"
  | "placements"
  | "celebrations";

export type GalleryItem = {
  title: string;
  caption: string;
  album: AlbumSlug;
  scene: SceneKey;
  /** Tailwind gradient stops for the illustrated plate. */
  tone: string;
  /** Month and year, shown in the lightbox. */
  date: string;
  /** Real photograph under /public, when one exists. */
  src?: string;
};

export type Album = {
  slug: AlbumSlug;
  label: string;
  blurb: string;
  icon: string;
};

/**
 * The two tone families the grid alternates between. Deep plates read as the
 * night side of the palette, bright ones as the lit side; setting neighbours
 * from opposite families is what keeps a gapless grid legible.
 */
const DEEP = [
  "from-ink via-brand-900 to-brand-700",
  "from-brand-900 via-accent to-brand-800",
  "from-ink via-accent to-brand-700",
];

const BRIGHT = [
  "from-brand-600 via-brand-500 to-brand-400",
  "from-brand-500 via-brand-600 to-brand-800",
  "from-brand-700 via-brand-500 to-brand-400",
];

/* ------------------------------------------------------------------ hero */

export const galleryHero = {
  eyebrow: "Gallery",
  headingLead: "A day here looks like",
  headingMuted: "screens, whiteboards and arguments.",
  body: `Inside the labs, the project reviews, the seminar days and the evening a batch finally ships — TechCadd ${site.city}, without the stock photography.`,
  primaryCta: { label: "Plan a campus visit", href: "/contact" },
  secondaryCta: { label: "See the courses", href: "/courses" },
  stats: [
    { value: "6", label: "Labs and studios" },
    { value: "40+", label: "Events a year" },
    { value: "15K+", label: "Alumni network" },
  ],
};

/* ----------------------------------------------------------------- albums */

export const albums: Album[] = [
  {
    slug: "campus",
    label: "Campus",
    blurb: "The building, the floors, the places people actually sit.",
    icon: "building",
  },
  {
    slug: "classrooms",
    label: "Classrooms & labs",
    blurb: "Where the teaching happens, machines on and screens shared.",
    icon: "presentation",
  },
  {
    slug: "projects",
    label: "Project reviews",
    blurb: "Work on the screen, a trainer asking why it was built that way.",
    icon: "code",
  },
  {
    slug: "events",
    label: "Workshops & seminars",
    blurb: "Guest sessions, hackathons and industry days.",
    icon: "megaphone",
  },
  {
    slug: "placements",
    label: "Placement drives",
    blurb: "Mock interviews, drive days and the wait outside the room.",
    icon: "briefcase",
  },
  {
    slug: "celebrations",
    label: "Convocation & awards",
    blurb: "Certificates, families in the front row, and the group photo.",
    icon: "trophy",
  },
];

/* ------------------------------------------------------------------ tiles */

export const galleryItems: GalleryItem[] = [
  {
    title: "Full-stack lab, evening batch",
    caption: "Twenty machines, one deployment going out at 8pm.",
    album: "classrooms",
    scene: "lab",
    tone: DEEP[0],
    date: "March 2026",
  },
  {
    title: "Reception and the wall of intakes",
    caption: "Every batch that has passed through, listed by month.",
    album: "campus",
    scene: "campus",
    tone: BRIGHT[0],
    date: "February 2026",
  },
  {
    title: "Model evaluation, AI track",
    caption: "The confusion matrix nobody was happy with, on the projector.",
    album: "classrooms",
    scene: "lecture",
    tone: DEEP[1],
    date: "January 2026",
  },
  {
    title: "Code review, MERN cohort",
    caption: "Pull request open, trainer asking why this component knows so much.",
    album: "projects",
    scene: "workshop",
    tone: BRIGHT[1],
    date: "March 2026",
  },
  {
    title: "Mock interview room",
    caption: "Whiteboard, timer, and a panel that does not go easy.",
    album: "placements",
    scene: "interview",
    tone: DEEP[2],
    date: "February 2026",
  },
  {
    title: "Weekend hackathon, hour 26",
    caption: "Two teams still merging, one team asleep on the beanbags.",
    album: "events",
    scene: "hackathon",
    tone: BRIGHT[2],
    date: "December 2025",
  },
  {
    title: "Design studio",
    caption: "Colour boards, type tests and a client brief pinned above them.",
    album: "campus",
    scene: "studio",
    tone: DEEP[0],
    date: "November 2025",
  },
  {
    title: "Cyber security lab",
    caption: "A contained network, a scope document, and rules on the wall.",
    album: "classrooms",
    scene: "lab",
    tone: BRIGHT[0],
    date: "December 2025",
  },
  {
    title: "Client project handover",
    caption: "A real brief, a real deadline, a real person on the call.",
    album: "projects",
    scene: "workshop",
    tone: DEEP[1],
    date: "February 2026",
  },
  {
    title: "Guest session — hiring manager Q&A",
    caption: "Ninety minutes of what actually gets someone shortlisted.",
    album: "events",
    scene: "lecture",
    tone: BRIGHT[1],
    date: "October 2025",
  },
  {
    title: "Convocation, winter intake",
    caption: "Certificates handed out, families two rows deep.",
    album: "celebrations",
    scene: "convocation",
    tone: DEEP[2],
    date: "January 2026",
  },
  {
    title: "Data analytics studio",
    caption: "Six dashboards up, one of them finally telling the truth.",
    album: "classrooms",
    scene: "studio",
    tone: BRIGHT[2],
    date: "January 2026",
  },
  {
    title: "Terrace, between sessions",
    caption: "Where the debugging conversation usually gets finished.",
    album: "campus",
    scene: "campus",
    tone: DEEP[0],
    date: "September 2025",
  },
  {
    title: "Capstone review board",
    caption: "Three reviewers, one project, and the question you did not prepare for.",
    album: "projects",
    scene: "lecture",
    tone: BRIGHT[0],
    date: "December 2025",
  },
  {
    title: "Trainer's award, annual meet",
    caption: "Voted for by the students, which is the only version that counts.",
    album: "celebrations",
    scene: "convocation",
    tone: DEEP[1],
    date: "January 2026",
  },
  {
    title: "Drive day, three companies on floor two",
    caption: "Résumés printed, everyone pretending not to be nervous.",
    album: "placements",
    scene: "interview",
    tone: BRIGHT[1],
    date: "March 2026",
  },
  {
    title: "Cloud lab, weekend batch",
    caption: "Real accounts, real bills, resources shut down at the end.",
    album: "classrooms",
    scene: "lab",
    tone: DEEP[2],
    date: "November 2025",
  },
  {
    title: "Industry visit, partner office",
    caption: "Seeing a sprint board in the wild changes how a class listens.",
    album: "events",
    scene: "workshop",
    tone: BRIGHT[2],
    date: "October 2025",
  },
  {
    title: "Offer letter, first job",
    caption: "Photographed by everyone in the room, including the trainer.",
    album: "placements",
    scene: "convocation",
    tone: DEEP[0],
    date: "February 2026",
  },
  {
    title: "Morning stand-up, project week",
    caption: "Fifteen minutes, three questions, no laptops open.",
    album: "projects",
    scene: "workshop",
    tone: BRIGHT[0],
    date: "January 2026",
  },
  {
    title: "Demo day, summer intake",
    caption: "Eleven projects, eight minutes each, no slides allowed.",
    album: "events",
    scene: "hackathon",
    tone: DEEP[1],
    date: "August 2025",
  },
  {
    title: "Front desk and counselling room",
    caption: "Where the honest conversation about fit happens first.",
    album: "campus",
    scene: "campus",
    tone: BRIGHT[1],
    date: "March 2026",
  },
  {
    title: "Library corner and reading room",
    caption: "Reference shelves, and the quiet half of the second floor.",
    album: "campus",
    scene: "studio",
    tone: DEEP[2],
    date: "November 2025",
  },
  {
    title: "Alumni evening",
    caption: "Twelve people back to tell the current batch what surprised them.",
    album: "celebrations",
    scene: "hackathon",
    tone: BRIGHT[2],
    date: "December 2025",
  },
  {
    title: "Certificate day, 45-day cohort",
    caption: "University training done, letters signed the same afternoon.",
    album: "celebrations",
    scene: "convocation",
    tone: DEEP[0],
    date: "July 2025",
  },
];

/* ------------------------------------------------------------- derivation */

export const albumCounts = new Map(
  albums.map((album) => [
    album.slug,
    galleryItems.filter((item) => item.album === album.slug).length,
  ]),
);

export const galleryStats = {
  photos: galleryItems.length,
  albums: albums.length,
};

/** The three plates used in the hero collage. */
export const heroCollage = galleryItems.slice(0, 3);

/* ------------------------------------------------------------- the mosaic */

export const galleryMosaic = {
  eyebrow: "The mosaic",
  heading: "Pick an album, or scroll the lot",
  accent: ["or", "scroll", "the", "lot"],
  body: "Tap any frame to open it full size and step through the album with the arrow keys.",
};

/* --------------------------------------------------------- year of events */

export const galleryYear = {
  eyebrow: "Through the year",
  heading: "What the calendar actually looks like",
  accent: ["actually", "looks", "like"],
  body: "The campus runs on intake cycles rather than one annual event. This is the rhythm most students see.",
  moments: [
    {
      period: "January — March",
      title: "Winter intake and convocation",
      body: "New batches open across every track while the previous winter cohort collects certificates and project letters.",
      icon: "graduation",
    },
    {
      period: "April — June",
      title: "Summer training season",
      body: "45-day and 6-week university training formats fill the labs, running alongside the professional tracks.",
      icon: "factory",
    },
    {
      period: "July — September",
      title: "Demo days and drives",
      body: "Capstones are presented to review panels, and hiring partners run drives on campus through the quarter.",
      icon: "briefcase",
    },
    {
      period: "October — December",
      title: "Hackathons and alumni week",
      body: "Weekend hackathons, guest sessions from working practitioners, and alumni back to brief the current batch.",
      icon: "rocket",
    },
  ],
};

/* -------------------------------------------------------------- visit CTA */

export const galleryVisit = {
  eyebrow: "Better than photographs",
  heading: "Come and sit in a live class",
  accent: ["sit", "in", "a", "live", "class"],
  body: `A gallery can be curated; a Tuesday evening batch cannot. Ask the ${site.city} desk for a demo session in the batch you would actually join, and judge the trainer and the pace for yourself.`,
  points: [
    {
      title: "See the real batch",
      body: "Not a scripted sample class — the session running that week, at its normal pace.",
      icon: "eye",
    },
    {
      title: "Read a reviewed project",
      body: "Ask a student to open their project and the trainer's comments on it.",
      icon: "code",
    },
    {
      title: "Ask the awkward questions",
      body: "Fees, batch size, who teaches you, what happens if you fall behind.",
      icon: "message",
    },
  ],
  cta: { label: "Plan a visit", href: "/contact" },
  secondary: { label: `Call ${site.phone}`, href: site.phoneHref },
};
