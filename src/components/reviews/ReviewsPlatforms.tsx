import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { reviewPlatforms } from "@/lib/reviews-content";
import { aboutIcon } from "@/components/about/icons";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import Stars from "./Stars";

/**
 * Where the ratings are collected, as four cards. Each links out to the
 * profile it summarises so a sceptical reader can check the number rather
 * than take this page's word for it.
 */
export default function ReviewsPlatforms() {
  return (
    <Section
      id="review-sources"
      eyebrow={reviewPlatforms.eyebrow}
      heading={reviewPlatforms.heading}
      accent={reviewPlatforms.accent}
      body={reviewPlatforms.body}
      className="scroll-mt-28"
    >
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reviewPlatforms.items.map((item, i) => {
          const Icon = aboutIcon(item.icon);
          const external = item.href.startsWith("#");

          return (
            <Reveal as="li" key={item.label} delay={i * 70}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
              >
                {/* Brand wash that warms up on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 size-40 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {external && (
                    <ArrowUpRight
                      className="size-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                      aria-hidden="true"
                    />
                  )}
                </span>

                <span className="relative mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold text-ink">
                    {item.value}
                  </span>
                  <span className="text-xs text-muted">/ 5</span>
                </span>

                <Stars
                  rating={Number(item.value)}
                  className="relative mt-2"
                  size="size-3.5"
                />

                <span className="relative mt-4 text-sm font-semibold text-ink">
                  {item.label}
                </span>
                <span className="relative mt-1 text-xs text-muted">
                  {item.count}
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
