"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus, Search, X } from "lucide-react";
import { faqCategories, faqStats } from "@/lib/faq-content";
import { aboutIcon } from "@/components/about/icons";
import { EASE } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const ALL = "all";

/**
 * The FAQ list: a category rail beside searchable, grouped accordions.
 *
 * Filtering is plain client state — the dataset is a few dozen questions, so
 * an index would cost more than it saves. Deep links (`/faq#q-…`) are handled
 * on mount and on hashchange: the matching answer opens, filters reset so it
 * cannot be hidden by an active one, and the row is scrolled into view.
 */
export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    function openFromHash() {
      const hash = window.location.hash.slice(1);
      if (!hash.startsWith("q-")) return;

      const exists = faqCategories.some((group) =>
        group.items.some((item) => item.id === hash),
      );
      if (!exists) return;

      // Clear the filters first: a deep-linked answer must never land on a
      // list that is filtering it out.
      setQuery("");
      setCategory(ALL);
      setOpenId(hash);

      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "center",
        });
      });
    }

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [reduce]);

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return faqCategories
      .filter((group) => category === ALL || group.slug === category)
      .map((group) => ({
        ...group,
        items: needle
          ? group.items.filter(
              (item) =>
                item.q.toLowerCase().includes(needle) ||
                item.a.toLowerCase().includes(needle),
            )
          : group.items,
      }))
      .filter((group) => group.items.length > 0);
  }, [query, category]);

  const shown = groups.reduce((total, group) => total + group.items.length, 0);
  const filtering = query.trim() !== "" || category !== ALL;

  return (
    <section
      id="faq-list"
      aria-labelledby="faq-list-heading"
      className="scroll-mt-28 py-20 lg:py-28"
    >
      <div className="container-page">
        <h2 id="faq-list-heading" className="sr-only">
          All questions
        </h2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-12">
          {/* -------------------------------------------------- category rail */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted uppercase">
              Topics
            </span>

            <ul className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              <li className="shrink-0">
                <button
                  type="button"
                  onClick={() => setCategory(ALL)}
                  aria-pressed={category === ALL}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm whitespace-nowrap transition-colors duration-200",
                    category === ALL
                      ? "bg-brand-600 font-medium text-white"
                      : "text-ink-mute hover:bg-brand-50 hover:text-brand-700",
                  )}
                >
                  All questions
                  <span
                    className={cn(
                      "text-xs",
                      category === ALL ? "text-white/70" : "text-muted",
                    )}
                  >
                    {faqStats.questions}
                  </span>
                </button>
              </li>

              {faqCategories.map((group) => {
                const active = category === group.slug;
                const Icon = aboutIcon(group.icon);
                return (
                  <li key={group.slug} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setCategory(active ? ALL : group.slug)}
                      aria-pressed={active}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm whitespace-nowrap transition-colors duration-200",
                        active
                          ? "bg-brand-600 font-medium text-white"
                          : "text-ink-mute hover:bg-brand-50 hover:text-brand-700",
                      )}
                    >
                      <Icon className="size-4 shrink-0" aria-hidden="true" />
                      <span className="flex-1 text-left">{group.label}</span>
                      <span
                        className={cn(
                          "text-xs",
                          active ? "text-white/70" : "text-muted",
                        )}
                      >
                        {group.items.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ------------------------------------------------------- results */}
          <div>
            {/* search */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search
                  className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted"
                  aria-hidden="true"
                />
                <label htmlFor="faq-search" className="sr-only">
                  Search the questions
                </label>
                <input
                  id="faq-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search questions and answers"
                  className="h-12 w-full rounded-full border border-line bg-white pr-11 pl-11 text-sm text-ink transition-colors duration-200 outline-none placeholder:text-muted focus:border-brand-500"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              <p
                aria-live="polite"
                className="shrink-0 text-sm text-muted sm:text-right"
              >
                {filtering
                  ? `${shown} of ${faqStats.questions} questions`
                  : `${faqStats.questions} questions`}
              </p>
            </div>

            {/* groups */}
            {groups.length > 0 ? (
              <div className="mt-8 flex flex-col gap-10">
                {groups.map((group) => (
                  <section
                    key={group.slug}
                    id={`cat-${group.slug}`}
                    aria-labelledby={`cat-${group.slug}-heading`}
                    className="scroll-mt-28"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-4">
                      <h3
                        id={`cat-${group.slug}-heading`}
                        className="font-display text-xl font-semibold text-ink"
                      >
                        {group.label}
                      </h3>
                      <p className="text-sm text-muted">{group.blurb}</p>
                    </div>

                    <ul>
                      {group.items.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                          <li
                            key={item.id}
                            id={item.id}
                            className="scroll-mt-28 border-b border-line"
                          >
                            <h4>
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenId(isOpen ? null : item.id)
                                }
                                aria-expanded={isOpen}
                                aria-controls={`panel-${item.id}`}
                                className="group flex w-full items-start gap-5 py-5 text-left"
                              >
                                <span
                                  className={cn(
                                    "font-display flex-1 text-base leading-snug font-semibold transition-colors duration-300",
                                    isOpen
                                      ? "text-brand-700"
                                      : "text-ink group-hover:text-brand-600",
                                  )}
                                >
                                  {item.q}
                                </span>
                                <span
                                  aria-hidden="true"
                                  className={cn(
                                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                                    isOpen
                                      ? "border-brand-600 bg-brand-600 text-white"
                                      : "border-line bg-white text-muted group-hover:border-brand-300",
                                  )}
                                >
                                  {isOpen ? (
                                    <Minus className="size-3.5" strokeWidth={2.5} />
                                  ) : (
                                    <Plus className="size-3.5" strokeWidth={2.5} />
                                  )}
                                </span>
                              </button>
                            </h4>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  id={`panel-${item.id}`}
                                  key="panel"
                                  initial={
                                    reduce ? false : { height: 0, opacity: 0 }
                                  }
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={
                                    reduce
                                      ? undefined
                                      : { height: 0, opacity: 0 }
                                  }
                                  transition={{ duration: 0.38, ease: EASE }}
                                  className="overflow-hidden"
                                >
                                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted sm:text-base">
                                    {item.a}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>
            ) : (
              /* nothing matched */
              <div className="mt-8 rounded-3xl border border-dashed border-brand-300 bg-brand-50/40 px-8 py-14 text-center">
                <h3 className="font-display text-xl font-semibold text-ink">
                  No question matches “{query.trim()}”
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                  Try a shorter keyword, or ask us directly — anything specific
                  to your situation is better answered by a person anyway.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setCategory(ALL);
                    }}
                    className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
