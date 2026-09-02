"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BadgeCheck, Quote, Search, SlidersHorizontal, X } from "lucide-react";
import {
  SOURCE_LABEL,
  reviewStats,
  reviewWall,
  reviews,
  trackCounts,
  tracks,
  type ReviewEntry,
} from "@/lib/reviews-content";
import { aboutIcon } from "@/components/about/icons";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import Stars from "./Stars";

const ALL = "all";

/**
 * Cards per row below which the doubled marquee track would be narrower than
 * a wide viewport, leaving a visible gap mid-loop. Short filter results are
 * repeated up to this length so the row always stays full.
 */
const MIN_PER_ROW = 6;

const SORTS = [
  { key: "recent", label: "Most recent" },
  { key: "highest", label: "Highest rated" },
  { key: "critical", label: "Critical first" },
] as const;

type SortKey = (typeof SORTS)[number]["key"];

/**
 * Track icons, resolved once at module scope — and held as rendered elements
 * rather than component types, so nothing picks a component mid-render.
 */
const StarIcon = aboutIcon("star");

const FALLBACK_ICON = <StarIcon className="size-3" aria-hidden="true" />;

const TRACK_ICON = new Map<string, React.ReactNode>(
  tracks.map((track) => {
    const Icon = aboutIcon(track.icon);
    return [track.slug, <Icon key={track.slug} className="size-3" aria-hidden="true" />];
  }),
);

/** Repeat a short list until it is long enough to fill a marquee row. */
function fill(items: ReviewEntry[]) {
  if (items.length === 0 || items.length >= MIN_PER_ROW) return items;
  const out: ReviewEntry[] = [];
  while (out.length < MIN_PER_ROW) out.push(...items);
  return out;
}

/** One review, as a card in a scrolling row. */
function ReviewCard({ review }: { review: ReviewEntry }) {

  return (
    <article className="flex h-[19rem] w-[19rem] flex-col rounded-3xl border border-line bg-white p-6 transition-colors duration-300 hover:border-brand-200 sm:w-[22rem]">
      <header className="flex items-start justify-between gap-3">
        <span className="flex items-center gap-2">
          <Stars rating={review.rating} size="size-4" />
          <span className="text-xs font-semibold text-ink">
            {review.rating.toFixed(1)}
          </span>
        </span>
        <Quote className="size-6 shrink-0 text-brand-200" aria-hidden="true" />
      </header>

      {/* Clamped to a fixed number of lines between them, so every card in
          the row is the same height whatever the review's length. */}
      <blockquote className="mt-4 flex-1">
        {review.highlight && (
          <p className="line-clamp-2 text-sm leading-relaxed font-medium text-ink">
            {review.highlight}
          </p>
        )}
        <p
          className={cn(
            "text-sm leading-relaxed text-ink-mute",
            review.highlight ? "mt-2 line-clamp-3" : "line-clamp-5",
          )}
        >
          {review.quote}
        </p>
      </blockquote>

      <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.14em] text-brand-700 uppercase">
        {TRACK_ICON.get(review.track) ?? FALLBACK_ICON}
        {review.course}
      </span>

      <footer className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-ink">
            {review.name}
          </span>
          <span className="truncate text-xs text-muted">
            {review.outcome ?? review.trackLabel}
          </span>
        </span>
        <span className="flex shrink-0 flex-col items-end gap-0.5">
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-muted">
            <BadgeCheck className="size-3.5 text-brand-500" aria-hidden="true" />
            {SOURCE_LABEL[review.source]}
          </span>
          <span className="text-[0.7rem] text-muted">{review.date}</span>
        </span>
      </footer>
    </article>
  );
}

/**
 * Every review, as two counter-scrolling rows on a white ground — the top one
 * right to left, the bottom one left to right, at different speeds. The rows
 * are pure CSS transforms on the compositor, run without pausing on hover, and
 * stop entirely under prefers-reduced-motion (globals.css).
 *
 * Search, track and sort filter what the rows carry; the matches are dealt
 * alternately into the two rows so both stay populated. Filtering is plain
 * client state over a few dozen entries — an index would cost more than it
 * saves.
 */
export default function ReviewsCarousel() {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState<string>(ALL);
  const [sort, setSort] = useState<SortKey>("recent");

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();

    const filtered = reviews.filter((review) => {
      if (track !== ALL && review.track !== track) return false;
      if (!needle) return true;
      return (
        review.quote.toLowerCase().includes(needle) ||
        review.name.toLowerCase().includes(needle) ||
        review.course.toLowerCase().includes(needle) ||
        (review.outcome ?? "").toLowerCase().includes(needle)
      );
    });

    // Sorted on a copy — `reviews` is module state shared with the rest of
    // the page and must keep its published order.
    return [...filtered].sort((a, b) => {
      if (sort === "highest") return b.rating - a.rating || b.sortKey - a.sortKey;
      if (sort === "critical") return a.rating - b.rating || b.sortKey - a.sortKey;
      return b.sortKey - a.sortKey;
    });
  }, [query, track, sort]);

  const total = matches.length;
  const filtering = query.trim() !== "" || track !== ALL;

  const rowOne = fill(matches.filter((_, i) => i % 2 === 0));
  const rowTwo = fill(matches.filter((_, i) => i % 2 === 1));

  function reset() {
    setQuery("");
    setTrack(ALL);
  }

  return (
    <section
      id="all-reviews"
      aria-labelledby="all-reviews-heading"
      className="relative scroll-mt-28 overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>{reviewWall.eyebrow}</Eyebrow>
          <SplitHeading
            id="all-reviews-heading"
            text={reviewWall.heading}
            accent={reviewWall.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
          />
          <p className="max-w-2xl text-base leading-relaxed text-ink-mute">
            {reviewWall.body}
          </p>
        </Reveal>

        {/* ------------------------------------------------------- controls */}
        <Reveal delay={80} className="mt-10 flex flex-col items-center gap-4">
          <div className="flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <label htmlFor="review-search" className="sr-only">
                Search the reviews
              </label>
              <input
                id="review-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={reviewWall.searchPlaceholder}
                className="h-12 w-full rounded-full border border-line bg-white pr-11 pl-11 text-sm text-ink transition-colors duration-200 outline-none placeholder:text-muted focus:border-brand-500"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-brand-50 hover:text-ink"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* sort */}
            <div className="flex items-center gap-2 rounded-full border border-line bg-white p-1">
              <SlidersHorizontal
                className="ml-3 size-4 shrink-0 text-muted"
                aria-hidden="true"
              />
              <span className="sr-only" id="review-sort-label">
                Sort reviews
              </span>
              <div
                role="group"
                aria-labelledby="review-sort-label"
                className="flex gap-1"
              >
                {SORTS.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setSort(option.key)}
                    aria-pressed={sort === option.key}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-200",
                      sort === option.key
                        ? "bg-ink text-white"
                        : "text-ink-mute hover:bg-brand-50 hover:text-ink",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* track chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setTrack(ALL)}
              aria-pressed={track === ALL}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200",
                track === ALL
                  ? "border-brand-600 bg-brand-600 font-medium text-white"
                  : "border-line bg-white text-ink-mute hover:border-brand-200 hover:bg-brand-50 hover:text-ink",
              )}
            >
              All tracks
              <span
                className={cn(
                  "text-xs",
                  track === ALL ? "text-white/70" : "text-muted",
                )}
              >
                {reviewStats.count}
              </span>
            </button>

            {tracks.map((item) => {
              const active = track === item.slug;
              const Icon = aboutIcon(item.icon);
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setTrack(active ? ALL : item.slug)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200",
                    active
                      ? "border-brand-600 bg-brand-600 font-medium text-white"
                      : "border-line bg-white text-ink-mute hover:border-brand-200 hover:bg-brand-50 hover:text-ink",
                  )}
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {item.label}
                  <span
                    className={cn(
                      "text-xs",
                      active ? "text-white/70" : "text-muted",
                    )}
                  >
                    {trackCounts.get(item.slug)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/*
        Full-bleed rows — deliberately outside `.container-page`, so the cards
        run to both edges of the viewport instead of stopping at the measure.
        The top row travels right to left and the bottom one left to right,
        at different speeds, so the two never lock into step. Neither pauses
        on hover — the rows run continuously.
      */}
      {total > 0 ? (
        <>
          <div className="mt-14 flex flex-col gap-5">
            <Marquee
              items={rowOne}
              duration={70}
              pauseOnHover={false}
              renderItem={(review) => <ReviewCard review={review} />}
            />
            <Marquee
              items={rowTwo}
              duration={88}
              reverse
              pauseOnHover={false}
              renderItem={(review) => <ReviewCard review={review} />}
            />
          </div>

          <p
            aria-live="polite"
            className="container-page mt-10 text-center text-sm text-muted"
          >
            {filtering
              ? `${total} of ${reviewStats.count} reviews match`
              : `${reviewStats.count} reviews and counting`}
          </p>
        </>
      ) : (
        <div className="container-page">
          <div className="mt-12 rounded-3xl border border-dashed border-line px-8 py-14 text-center">
            <h3 className="font-display text-xl font-semibold text-ink">
              No review mentions “{query.trim()}”
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-mute">
              Try a shorter keyword, or ask the desk directly — a question about
              your own situation is better answered by a person anyway.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Clear filters
              </button>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Ask your question
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
