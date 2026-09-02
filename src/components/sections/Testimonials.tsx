"use client";

import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/content";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

function TestimonialCard(item: Testimonial) {
  return (
    <figure className="flex h-full w-[19rem] flex-col rounded-2xl border border-line bg-white p-6 transition-colors duration-300 hover:border-brand-200 sm:w-[22rem]">
      <Quote className="size-6 text-brand-200" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-mute">
        {item.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand-700"
        >
          {item.initials}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-ink">
            {item.name}
          </span>
          <span className="truncate text-xs text-muted">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <SplitHeading
            id="testimonials-heading"
            text={testimonials.heading}
            accent={testimonials.accent}
            className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
          />

          <dl className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {testimonials.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-2.5">
                {i === 0 && (
                  <span className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-brand-500 text-brand-500"
                      />
                    ))}
                  </span>
                )}
                <dt className="font-display text-xl font-bold text-ink">
                  {stat.value}
                </dt>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Full-bleed marquees — deliberately outside the page container. */}
      <div className="mt-14 flex flex-col gap-5">
        <Marquee
          items={testimonials.rowOne}
          duration={68}
          renderItem={(item) => <TestimonialCard {...item} />}
        />
        <Marquee
          items={testimonials.rowTwo}
          duration={82}
          reverse
          renderItem={(item) => <TestimonialCard {...item} />}
        />
      </div>
    </section>
  );
}
