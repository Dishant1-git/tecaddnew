"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { faq } from "@/lib/content";
import { faqEntries, popularFaqs, type FaqEntry } from "@/lib/faq-content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";

/**
 * The questions asked most often, topped up in page order until the two
 * columns are full. Deduped by id, so a popular question is never repeated.
 */
const SHOWN: FaqEntry[] = (() => {
  const picked = [...popularFaqs];
  const seen = new Set(picked.map((entry) => entry.id));
  for (const entry of faqEntries) {
    if (picked.length >= faq.count) break;
    if (seen.has(entry.id)) continue;
    seen.add(entry.id);
    picked.push(entry);
  }
  return picked.slice(0, faq.count);
})();

/** Split down the middle: the columns fill top-to-bottom, not left-to-right. */
const HALF = Math.ceil(SHOWN.length / 2);
const COLUMNS = [SHOWN.slice(0, HALF), SHOWN.slice(HALF)];

function FaqCard({ entry }: { entry: FaqEntry }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-24px_rgb(15_23_42/0.5)] ring-1 ring-line transition-shadow duration-300 hover:shadow-[0_16px_40px_-24px_rgb(15_23_42/0.55)]">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((wasOpen) => !wasOpen)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-5 px-6 py-5 text-left"
        >
          <span className="font-display flex-1 text-base leading-snug font-medium text-ink">
            {entry.q}
          </span>
          <span
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
              open
                ? "rotate-45 bg-brand-600 text-white"
                : "bg-brand-50 text-ink-mute",
            )}
          >
            <Plus className="size-4" aria-hidden="true" />
          </span>
        </button>
      </h3>

      {/* Grid-rows trick: animates open from nothing to the answer's own
          height, with no measuring and no fixed max-height guess. */}
      <div
        id={panelId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
            {entry.a}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate scroll-mt-28 overflow-hidden py-20 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="circuit-texture-ink absolute inset-0 opacity-[0.035]" />
      </div>

      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-gold-500 uppercase ring-1 ring-line">
            {faq.eyebrow}
          </span>
          <SplitHeading
            id="faq-heading"
            text={faq.heading}
            accent={faq.accent}
            className="max-w-lg text-4xl leading-[1.05] text-ink sm:text-5xl"
            accentClassName="text-gold-500"
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2 lg:gap-6">
          {COLUMNS.map((column, columnIndex) => (
            <Reveal key={columnIndex} delay={columnIndex * 100}>
              <ul className="flex flex-col gap-5 lg:gap-6">
                {column.map((entry) => (
                  <FaqCard key={entry.id} entry={entry} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <Link
            href={faq.cta.href}
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            {faq.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
