"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { Course } from "@/lib/courses";
import { EASE, FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type Faq = Course["faqs"][number];

type ItemProps = {
  faq: Faq;
  /** Index into `course.faqs`, not into the column — the accordion is global. */
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  /** `useReducedMotion` is null until it resolves, so this is not just bool. */
  reduce: boolean | null;
  card?: boolean;
};

/**
 * One question. `card` lifts the row into a panel of its own, which is what the
 * two-column layout needs — with rows side by side, a shared bottom rule reads
 * as a table instead of as a list.
 */
function FaqItem({ faq, index, isOpen, onToggle, reduce, card }: ItemProps) {
  return (
    <FadeUp
      as="li"
      className={
        card
          ? cn(
              "rounded-2xl border transition-all duration-400",
              isOpen
                ? "border-brand-200 bg-white shadow-[0_26px_54px_-38px_rgb(15_23_42/0.5)]"
                : "border-line/80 bg-white/70 hover:border-brand-200 hover:bg-white hover:shadow-[0_20px_44px_-36px_rgb(15_23_42/0.45)]",
            )
          : "border-b border-line"
      }
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          className={cn(
            "group flex w-full items-start gap-5 text-left",
            card ? "px-5 py-5 sm:px-6" : "py-5",
          )}
        >
          <span
            className={cn(
              "font-display flex-1 text-base leading-snug font-semibold transition-colors duration-300 sm:text-lg",
              isOpen ? "text-brand-700" : "text-ink group-hover:text-brand-600",
            )}
          >
            {faq.q}
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
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            key="panel"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE }}
            className="overflow-hidden"
          >
            <p
              className={cn(
                "text-sm leading-relaxed text-muted sm:text-base",
                card ? "px-5 pb-5 sm:px-6" : "pb-6",
              )}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeUp>
  );
}

/**
 * `variant` picks the layout. `aside` keeps the heading in a sticky column with
 * the questions running down beside it. `split` centres the heading and deals
 * the questions into two columns underneath — used on the after-12th pages,
 * where the list is long enough that a single column runs well past the fold.
 */
export default function CourseFaq({
  course,
  variant = "aside",
}: {
  course: Course;
  variant?: "aside" | "split";
}) {
  /** Single-open accordion; the first answer is visible on arrival. */
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const toggle = (i: number) => setOpen(open === i ? null : i);

  const heading = (
    <>
      <WordsUp
        as="h2"
        text="Questions we get asked"
        accent="at the admissions desk"
        accentClassName="text-gold-500"
        className={cn(
          "text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl",
          variant === "aside" && "mt-4",
        )}
      />
      <span id="faq-heading" className="sr-only">
        Frequently asked questions
      </span>
    </>
  );

  const blurb =
    "If something here is not covered, the Amritsar desk will answer it directly — no call-back queue.";

  const actions = (
    <>
      <a
        href={site.phoneHref}
        className="inline-flex h-11 items-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
      >
        Call {site.phone}
      </a>
      <a
        href="/contact"
        className="inline-flex h-11 items-center rounded-full bg-white/70 px-6 text-sm font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
      >
        Send an enquiry
      </a>
    </>
  );

  if (variant === "split") {
    /* Dealt column-major so each column keeps its own height — laid out
       row-major, opening an answer would leave a hole beside it. */
    const half = Math.ceil(course.faqs.length / 2);
    const columns = [
      { items: course.faqs.slice(0, half), offset: 0 },
      { items: course.faqs.slice(half), offset: half },
    ].filter((column) => column.items.length > 0);

    return (
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative isolate overflow-hidden border-t border-line bg-brand-50/40 py-20 lg:py-28"
      >
        {/* Atmosphere: two brand blooms drifting out of phase behind a panning
            rule grid. Both use the shared ambience tokens, which globals.css
            already stills under prefers-reduced-motion. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="animate-aurora-a absolute -top-40 -left-32 size-[34rem] rounded-full bg-brand-200/55 blur-[130px] will-change-transform" />
          <div className="animate-aurora-b absolute -right-32 -bottom-40 size-[30rem] rounded-full bg-gold-200/40 blur-[130px] will-change-transform" />
          <div
            className="animate-grid-pan absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(15 23 42 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.045) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(110% 80% at 50% 0%, black 15%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(110% 80% at 50% 0%, black 15%, transparent 75%)",
            }}
          />
        </div>

        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            {heading}
            <FadeUp
              standalone
              as="p"
              className="mt-5 text-base leading-relaxed text-muted"
            >
              {blurb}
            </FadeUp>
            <FadeUp
              standalone
              className="mt-7 flex flex-wrap justify-center gap-3"
            >
              {actions}
            </FadeUp>
          </div>

          <div className="mt-14 grid items-start gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-5">
            {columns.map((column) => (
              <Stagger
                as="ul"
                key={column.offset}
                className="grid content-start gap-4 lg:gap-5"
                gap={0.06}
              >
                {column.items.map((faq, i) => {
                  const index = column.offset + i;
                  return (
                    <FaqItem
                      card
                      key={faq.q}
                      faq={faq}
                      index={index}
                      isOpen={open === index}
                      onToggle={() => toggle(index)}
                      reduce={reduce}
                    />
                  );
                })}
              </Stagger>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeUp standalone>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase">
                  <span className="h-px w-6 bg-brand-600/40" aria-hidden="true" />
                  Before you enrol
                </span>
              </FadeUp>
              {heading}
              <FadeUp
                standalone
                as="p"
                className="mt-5 max-w-sm text-base leading-relaxed text-muted"
              >
                {blurb}
              </FadeUp>
              <FadeUp standalone className="mt-6 flex flex-wrap gap-3">
                {actions}
              </FadeUp>
            </div>
          </div>

          <Stagger as="ul" className="lg:col-span-7" gap={0.06}>
            {course.faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => toggle(i)}
                reduce={reduce}
              />
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
