import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-content";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

/** Deterministic gradient per card so thumbnails read as distinct placeholders. */
const THUMB_GRADIENTS = [
  "from-brand-600 via-brand-500 to-accent",
  "from-accent via-brand-700 to-brand-500",
  "from-brand-500 via-accent to-ink",
];

export default function BlogList() {
  return (
    <section id="latest-posts" aria-labelledby="latest-posts-heading" className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
          <span
            id="latest-posts-heading"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-500 uppercase"
          >
            <span className="h-px w-6 bg-gold-500/60" aria-hidden="true" />
            Latest posts
          </span>
          <span className="text-sm text-muted">
            {blogPosts.length} {blogPosts.length === 1 ? "article" : "articles"}
          </span>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 90}>
              <Card className="h-full">
                <Link href={post.href} className="flex h-full flex-col">
                  <div
                    className={`relative h-44 bg-gradient-to-br ${THUMB_GRADIENTS[i % THUMB_GRADIENTS.length]}`}
                  >
                    <div aria-hidden="true" className="grid-overlay absolute inset-0 opacity-50" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <time className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                      {post.date}
                    </time>
                    <h2 className="font-display text-lg leading-snug font-semibold text-ink">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
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
