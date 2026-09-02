"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import {
  albumCounts,
  albums,
  galleryItems,
  galleryMosaic,
  galleryStats,
} from "@/lib/gallery-content";
import { aboutIcon } from "@/components/about/icons";
import { EASE } from "@/components/ui/Motion";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import GalleryTile from "./GalleryTile";

const ALL = "all";

/** Album labels for the chip on each tile, resolved once. */
const ALBUM_LABEL = new Map(albums.map((album) => [album.slug, album.label]));

/**
 * The mosaic rhythm: every fifth tile is a 2×2 block, the other four are
 * single cells, and the block alternates between the left and right half so
 * it does not stripe down one edge.
 *
 * Five tiles cover exactly eight cells — two full rows of four, or four rows
 * of two on phones — so a list whose length is a multiple of five leaves no
 * empty cell anywhere. `grid-flow-dense` covers the rest: when an album is
 * filtered to an awkward count, later singles backfill ahead of the block
 * rather than leaving a hole in the middle of the grid.
 */
function spanFor(index: number) {
  if (index % 5 !== 0) return "col-span-1 row-span-1";
  return cn(
    "col-span-2 row-span-2",
    // Odd-numbered blocks sit in the right-hand pair of columns.
    (index / 5) % 2 === 1 && "lg:col-start-3",
  );
}

/**
 * The filterable mosaic and its lightbox.
 *
 * Album filtering is plain client state. The filter buttons carry the
 * `album-<slug>` ids the hero chips link to, so those anchors scroll natively
 * and a hash listener applies the matching filter — no router round-trip.
 *
 * The lightbox steps through the *filtered* list, which is what a reader who
 * picked an album expects, and restores focus to the tile that opened it.
 */
export default function GalleryMosaic() {
  const [album, setAlbum] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const opener = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () =>
      album === ALL
        ? galleryItems
        : galleryItems.filter((item) => item.album === album),
    [album],
  );

  const active = openIndex === null ? null : (items[openIndex] ?? null);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + items.length) % items.length,
      );
    },
    [items.length],
  );

  const close = useCallback(() => {
    setOpenIndex(null);
    // Hand focus back to the tile the reader came from.
    opener.current?.focus();
    opener.current = null;
  }, []);

  /* Album deep links: `/gallery#album-events` selects that album. */
  useEffect(() => {
    function fromHash() {
      const hash = window.location.hash.slice(1);
      if (!hash.startsWith("album-")) return;
      const slug = hash.replace("album-", "");
      if (albums.some((entry) => entry.slug === slug)) setAlbum(slug);
    }

    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  /* Lightbox keyboard control and scroll lock, live only while it is open. */
  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

  function open(index: number, event: React.MouseEvent<HTMLButtonElement>) {
    opener.current = event.currentTarget;
    setOpenIndex(index);
  }

  return (
    <section
      id="mosaic"
      aria-labelledby="mosaic-heading"
      className="scroll-mt-28 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{galleryMosaic.eyebrow}</Eyebrow>
          <SplitHeading
            id="mosaic-heading"
            text={galleryMosaic.heading}
            accent={galleryMosaic.accent}
            className="max-w-2xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
          />
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {galleryMosaic.body}
          </p>
        </Reveal>

        {/* --------------------------------------------------- album filter */}
        <Reveal delay={80} className="mt-10">
          <div
            role="group"
            aria-label="Filter by album"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              onClick={() => setAlbum(ALL)}
              aria-pressed={album === ALL}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200",
                album === ALL
                  ? "border-brand-600 bg-brand-600 font-medium text-white"
                  : "border-line bg-white text-ink-mute hover:border-brand-300 hover:text-brand-700",
              )}
            >
              Everything
              <span
                className={cn(
                  "text-xs",
                  album === ALL ? "text-white/70" : "text-muted",
                )}
              >
                {galleryStats.photos}
              </span>
            </button>

            {albums.map((entry) => {
              const activeAlbum = album === entry.slug;
              const Icon = aboutIcon(entry.icon);
              return (
                <button
                  key={entry.slug}
                  id={`album-${entry.slug}`}
                  type="button"
                  onClick={() => setAlbum(activeAlbum ? ALL : entry.slug)}
                  aria-pressed={activeAlbum}
                  className={cn(
                    "inline-flex scroll-mt-32 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200",
                    activeAlbum
                      ? "border-brand-600 bg-brand-600 font-medium text-white"
                      : "border-line bg-white text-ink-mute hover:border-brand-300 hover:text-brand-700",
                  )}
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {entry.label}
                  <span
                    className={cn(
                      "text-xs",
                      activeAlbum ? "text-white/70" : "text-muted",
                    )}
                  >
                    {albumCounts.get(entry.slug)}
                  </span>
                </button>
              );
            })}
          </div>

          <p aria-live="polite" className="mt-4 text-sm text-muted">
            {album === ALL
              ? `${galleryStats.photos} frames across ${galleryStats.albums} albums`
              : `${items.length} frames — ${
                  albums.find((entry) => entry.slug === album)?.blurb
                }`}
          </p>
        </Reveal>

        {/*
          Every tile is its own rounded card with white space around it, so a
          gutter separates neighbouring frames instead of a hairline. That
          gutter is also what makes a lift-on-hover possible — the card can
          rise without colliding with the tile beside it.
        */}
        <ul className="mt-8 grid auto-rows-[8.5rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[10.5rem] sm:gap-4 lg:auto-rows-[12.5rem] lg:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.title} className={cn(spanFor(i), "min-h-0")}>
              <button
                type="button"
                onClick={(event) => open(i, event)}
                className="group relative size-full overflow-hidden rounded-2xl text-left ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:ring-brand-300 hover:shadow-[0_22px_50px_-24px_rgb(37_99_235/0.55)]"
              >
                <GalleryTile
                  item={item}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  priority={i < 4}
                  feature={i % 5 === 0}
                />

                <span
                  aria-hidden="true"
                  className="absolute top-3 left-3 rounded-full bg-ink/50 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.16em] text-white/75 uppercase backdrop-blur-md transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white"
                >
                  {ALBUM_LABEL.get(item.album)}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 grid size-9 translate-y-1 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                >
                  <Expand className="size-4" />
                </span>

                {/* The title is already rendered inside the tile; this only
                    says what activating the button does. */}
                <span className="sr-only">Open full size</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ------------------------------------------------------- lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-8"
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${active.title} — frame ${openIndex! + 1} of ${items.length}`}
              tabIndex={-1}
              className="relative flex w-full max-w-5xl flex-col outline-none"
            >
              <div className="flex items-start justify-between gap-4 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[0.65rem] font-semibold tracking-[0.22em] text-brand-400 uppercase">
                    {albums.find((entry) => entry.slug === active.album)?.label}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {active.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="grid size-11 shrink-0 place-items-center rounded-full text-white ring-1 ring-white/20 ring-inset transition-colors duration-200 hover:bg-white/10"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <motion.div
                key={active.title}
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative aspect-4/3 w-full overflow-hidden rounded-3xl ring-1 ring-white/15 sm:aspect-16/9"
              >
                <GalleryTile item={active} sizes="90vw" bare />
              </motion.div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-white/60">
                  {active.caption}
                  <span className="ml-2 text-white/35">{active.date}</span>
                </p>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="mr-2 text-xs tabular-nums text-white/40">
                    {String(openIndex! + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous frame"
                    className="grid size-11 place-items-center rounded-full text-white ring-1 ring-white/20 ring-inset transition-colors duration-200 hover:bg-white/10"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next frame"
                    className="grid size-11 place-items-center rounded-full text-white ring-1 ring-white/20 ring-inset transition-colors duration-200 hover:bg-white/10"
                  >
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
