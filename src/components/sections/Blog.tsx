import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blog } from "@/lib/content";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Deterministic gradient per card so thumbnails read as distinct placeholders. */
const thumbGradients = [
  "from-brand-600 via-brand-500 to-accent",
  "from-accent via-brand-700 to-brand-500",
  "from-brand-500 via-accent to-ink",
];

export default function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="border-t border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-2xl">
            <Eyebrow>{blog.eyebrow}</Eyebrow>
            <SplitHeading
              id="blog-heading"
              text={blog.heading}
              accent={blog.accent}
              className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            />
          </div>
          <Link
            href={blog.cta.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            {blog.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {blog.posts.map((post, i) => (
            <Reveal as="li" key={post.title} delay={i * 90}>
              <Card className="h-full">
                <Link href={post.href} className="flex h-full flex-col">
                  {/* Thumbnail placeholder — replace with next/image later. */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${thumbGradients[i % thumbGradients.length]}`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 grid-overlay opacity-50"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <time className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      {post.date}
                    </time>
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {post.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-brand-600">
                      Read more
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
