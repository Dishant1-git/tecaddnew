"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function Categories() {
  const [filter, setFilter] = useState(categories.filters[0]);

  const visible =
    filter === categories.filters[0]
      ? categories.items
      : categories.items.filter((item) => item.group === filter);

  return (
    <section
      data-cursor="light"
      id="categories"
      aria-labelledby="categories-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      {/* Same background recipe as the hero, at a calmer intensity. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-ink to-brand-800/50" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-40" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute -top-40 left-1/4 size-[34rem] rounded-full bg-brand-600/20 blur-[130px]" />
        <div className="absolute -right-32 -bottom-40 size-[32rem] rounded-full bg-accent/40 blur-[130px]" />
        <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-2xl">
            <Eyebrow dark>{categories.eyebrow}</Eyebrow>
            <SplitHeading
              id="categories-heading"
              text={categories.heading}
              accent={categories.accent}
              className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
              accentClassName="text-gold-300"
            />
          </div>

          <div
            role="group"
            aria-label="Filter categories"
            className="flex flex-wrap gap-2"
          >
            {categories.filters.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={filter === label}
                onClick={() => setFilter(label)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  filter === label
                    ? "bg-white text-ink shadow-lg shadow-black/25"
                    : "bg-white/8 text-white/65 ring-1 ring-white/15 ring-inset backdrop-blur-sm hover:bg-white/15 hover:text-white",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {visible.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <Link
                href={item.href}
                className="group relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] lg:min-h-72 lg:p-8"
              >
                {/* Per-card colour wash. */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 -z-10 bg-gradient-to-br to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100",
                    item.tone,
                  )}
                />

                {/* Transparent 3D render, bloomed from behind so it sits on
                    the dark card rather than floating on it. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 -bottom-2 transition-transform duration-500 group-hover:scale-105 lg:right-4"
                >
                  <div className="relative grid size-40 place-items-center lg:size-52">
                    <span className="absolute size-28 rounded-full bg-brand-400/30 blur-3xl lg:size-36" />
                    <Image
                      src={item.image}
                      alt=""
                      width={280}
                      height={280}
                      className="relative size-36 object-contain drop-shadow-[0_18px_30px_rgb(0_0_0/0.45)] lg:size-48"
                    />
                  </div>
                </div>

                <div className="relative max-w-[62%]">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 lg:text-base">
                    {item.tagline}
                  </p>
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 ring-inset transition-all duration-300 group-hover:bg-gold-300 group-hover:text-ink group-hover:ring-gold-200">
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.14em] text-white/45 uppercase">
                    {item.count}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
