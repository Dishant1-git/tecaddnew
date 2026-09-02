import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whoWeTeach } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function WhoWeTeach() {
  return (
    <Section
      id="who-we-teach"
      eyebrow={whoWeTeach.eyebrow}
      heading={whoWeTeach.heading}
      accent={whoWeTeach.accent}
      body={whoWeTeach.body}
      className="border-y border-line bg-brand-50/40"
    >
      {/*
        Five cards in a three-up grid: the first two stretch across the row on
        large screens so the odd count does not leave a ragged final row.
      */}
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {whoWeTeach.audiences.map((audience, i) => {
          const Icon = aboutIcon(audience.icon);
          const wide = i < 2;
          return (
            <Reveal
              as="li"
              key={audience.title}
              delay={i * 80}
              className={wide ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <Link
                href={audience.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-600 group-hover:opacity-100"
                  />
                </div>

                <h3 className="font-display mt-5 text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">
                  {audience.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {audience.body}
                </p>

                <span className="mt-5 w-fit rounded-md bg-brand-100 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-brand-700 uppercase">
                  {audience.fit}
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
