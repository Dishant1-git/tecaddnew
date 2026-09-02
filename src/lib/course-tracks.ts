/**
 * Duration tracks for a catalogue course.
 *
 * Every seed carries one duration — a range ("3 – 6 months") or a single span
 * ("6 weeks") — but the admissions desk is asked the same question either way:
 * how much of it can I take now, and what do I give up by taking less? This
 * derives that answer instead of adding a field to all thirty-five seeds.
 *
 * The upper bound of `duration` is the full programme; the shorter tracks are
 * exit points at even fractions of it. Each track adds whole stages of the
 * module list, so a track never ends halfway through a topic and extending
 * later repeats nothing. Courses whose span will not divide (a one-month
 * course) get no tracks at all and the section simply does not render.
 *
 * Tier names, the split and the blurbs all live here: change them once and
 * every course page follows.
 */

import { site } from "./content";
import type { Course, CourseModule } from "./courses";

export type CourseTrack = {
  name: string;
  /** Numeral rendered large on the card, e.g. "6". */
  value: string;
  /** Unit under the numeral, e.g. "months". */
  unit: string;
  /** Full label for the comparison column, e.g. "6 months". */
  label: string;
  blurb: string;
  /** The stage this track adds, e.g. "Modules 04 – 06". */
  range: string;
  /** The middle tier — flagged on the card, never on a two-track course. */
  popular: boolean;
};

/**
 * One row of the comparison table.
 *
 * A seed carries eight topics, which is too coarse a grid to choose a duration
 * against — the difference between three and six months lands inside a single
 * row. So the table is built from the *capabilities* under each topic instead,
 * numbered in one sequence, which puts every course in the 20 – 30 row band the
 * table is legible at.
 */
export type CourseTrackModule = {
  /** Two-digit index across the whole table, e.g. "07". */
  code: string;
  title: string;
  /** The topic this capability is drawn from — the row's context line. */
  blurb: string;
};

export type CourseTrackStage = {
  /** "Stage 2 · Professional · 8 capabilities" — labelled with the track name
   * rather than a stage name of its own, so a row group and the card it belongs
   * to read as the same thing. */
  heading: string;
  modules: CourseTrackModule[];
  /** Index of the first track that includes this stage. */
  from: number;
};

export type CourseTrackPlan = {
  intro: string;
  tracks: CourseTrack[];
  stages: CourseTrackStage[];
  /** The honest note under the table: what a shorter track actually costs. */
  note: string;
};

const TIER_NAMES = ["Practitioner", "Professional", "Expert"];

/**
 * Durations are written ascending ("6 weeks – 3 months"), so the last figure in
 * the string is the full programme and the last unit mentioned is its unit.
 */
function parseSpan(duration: string) {
  const matches = [...duration.matchAll(/(\d+)\s*(weeks?|months?|years?)?/gi)];
  if (matches.length === 0) return null;

  const span = Number(matches[matches.length - 1][1]);
  const unit = (matches.map((match) => match[2]).filter(Boolean).pop() ?? "months")
    .toLowerCase()
    .replace(/s$/, "");

  return Number.isFinite(span) && span > 0 ? { span, unit } : null;
}

/** Thirds where the span divides by three, halves where it divides by two. */
function tiersFor(span: number) {
  if (span >= 3 && span % 3 === 0) return [span / 3, (span * 2) / 3, span];
  if (span >= 2 && span % 2 === 0) return [span / 2, span];
  return null;
}

function plural(value: number, unit: string) {
  return value === 1 ? unit : `${unit}s`;
}

/* ------------------------------------------------------------ table rows */

/** The band the comparison table stays legible — and decidable — inside. */
const MIN_ROWS = 20;
const MAX_ROWS = 30;

type Row = { title: string; blurb: string };

/**
 * A topic's capabilities as rows, optionally led by the topic itself. The lead
 * row exists only for the handful of courses whose topic list is short enough
 * that its capabilities alone would not reach `MIN_ROWS`.
 */
function rowsFor(modules: CourseModule[], withLeads: boolean): Row[] {
  return modules.flatMap((module) => {
    const capabilities = module.skills.map((skill) => ({
      title: skill,
      blurb: module.title,
    }));

    return withLeads
      ? [{ title: module.title, blurb: module.blurb }, ...capabilities]
      : capabilities;
  });
}

/**
 * Folds consecutive rows from the same topic together until the table fits.
 * Merging never crosses a topic — a row always belongs to exactly one of them,
 * which is what keeps the stage boundaries meaningful.
 */
function condense(rows: Row[], size: number): Row[] {
  if (size <= 1) return rows;

  const folded: Row[] = [];

  for (const row of rows) {
    const last = folded[folded.length - 1];
    const room = last && last.title.split(" · ").length < size;

    if (last && room && last.blurb === row.blurb) {
      last.title = `${last.title} · ${row.title}`;
    } else {
      folded.push({ ...row });
    }
  }

  return folded;
}

export function courseTracks(course: Course): CourseTrackPlan | null {
  /* A course that opts out runs one flexible duration, not a ladder of them. */
  if (course.tracks === false) return null;

  const parsed = parseSpan(course.spec[0].value);
  /* A course that names its own durations uses them as the tiers; everything
     else has them cut from its span at even fractions. */
  const tiers = parsed
    ? Array.isArray(course.tracks)
      ? course.tracks
      : tiersFor(parsed.span)
    : null;
  const modules = course.modules;

  if (!parsed || !tiers || modules.length < tiers.length) return null;

  const lower = course.title.toLowerCase();
  const blurbs = [
    `Plan, build and hand in your first supervised ${lower} project, starting from no background.`,
    `The working track: the full toolchain on real briefs, with numbers you can defend in an interview.`,
    `Own the whole ${lower} pipeline end to end, not just the part one job title touches.`,
  ];

  /* Blurbs are written for three tiers. A two-track course takes the first
     and the *last* of them, so its second track is described as the finished
     programme rather than a middle rung with nothing above it. Tier names
     index straight through instead, which leaves a two-track course ending on
     "Professional" rather than promising an Expert track it does not run. */
  const pick = <T,>(list: T[], i: number) =>
    tiers.length === 3 ? list[i] : list[i === 0 ? 0 : list.length - 1];

  /* Stages are cut along *topic* boundaries and only then expanded into rows,
     so a track never ends halfway through a topic however the rows fall. */
  const cut = Math.ceil(modules.length / tiers.length);
  const slices = tiers
    .map((_, i) => modules.slice(i * cut, (i + 1) * cut))
    .filter((slice) => slice.length > 0);

  /* Expansion is decided once, on the whole course, so every stage of a course
     is written at the same grain. */
  const withLeads = rowsFor(modules, false).length < MIN_ROWS;
  const span = rowsFor(modules, withLeads).length;
  const size = span > MAX_ROWS ? Math.ceil(span / MAX_ROWS) : 1;

  const stages: CourseTrackStage[] = [];
  const tracks: CourseTrack[] = [];
  let counter = 0;

  slices.forEach((slice, i) => {
    const rows: CourseTrackModule[] = condense(
      rowsFor(slice, withLeads),
      size,
    ).map((row) => ({ ...row, code: String(++counter).padStart(2, "0") }));

    const name = TIER_NAMES[i];

    stages.push({
      heading: `Stage ${i + 1} · ${name} · ${rows.length} capabilities`,
      modules: rows,
      from: i,
    });

    tracks.push({
      name,
      value: String(tiers[i]),
      unit: plural(tiers[i], parsed.unit),
      label: `${tiers[i]} ${plural(tiers[i], parsed.unit)}`,
      blurb: pick(blurbs, i),
      range: `Modules ${rows[0].code} – ${rows[rows.length - 1].code}`,
      popular: slices.length === 3 && i === 1,
    });
  });

  if (tracks.length < 2) return null;

  const last = String(counter).padStart(2, "0");

  return {
    intro: `Modules run 01 to ${last} in a single sequence. Each track continues exactly where the shorter one ended, so a shorter duration costs you scope — never depth.`,
    tracks,
    stages,
    note: `Every track is the same syllabus read in order, which is why extending repeats nothing: you carry on from the module you finished at, in the ${site.city} lab or the live online batch.`,
  };
}
