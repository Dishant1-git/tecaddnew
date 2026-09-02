import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { popularFaqs } from "@/lib/faq-content";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";

/**
 * The questions the desk fields most often, as deep links into the list
 * below. `FaqExplorer` watches the hash, so following one opens that answer
 * with the filters cleared.
 */
export default function PopularQuestions() {
  return (
    <section
      aria-labelledby="popular-questions-heading"
      className="border-b border-line bg-brand-50/40 py-16 lg:py-20"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>Asked most often</Eyebrow>
          <h2
            id="popular-questions-heading"
            className="font-display max-w-2xl text-2xl leading-snug font-semibold tracking-tight text-ink text-balance sm:text-3xl"
          >
            The questions that come up at every counselling desk
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularFaqs.map((entry, i) => (
            <Reveal as="li" key={entry.id} delay={(i % 3) * 80}>
              <Link
                href={`#${entry.id}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
              >
                <div>
                  <span className="text-[0.6rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                    {entry.categoryLabel}
                  </span>
                  <h3 className="font-display mt-3 text-base leading-snug font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">
                    {entry.q}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                  Read the answer
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
