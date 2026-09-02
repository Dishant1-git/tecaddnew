import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogHero } from "@/lib/blog-content";
import Reveal from "@/components/ui/Reveal";

/** Dark opener, matching the other content pages — breadcrumb, badge, heading, body. */
export default function BlogHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="blog-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-24 text-white lg:pt-40 lg:pb-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-[0.24]" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="animate-aurora-a absolute -top-[26%] -left-40 size-[40rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-40 bottom-[-30%] size-[34rem] rounded-full bg-accent/40 blur-[130px] will-change-transform" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3" aria-hidden="true" />
              <li aria-current="page" className="text-white/70">
                Blog
              </li>
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={60} className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ring-1 ring-white/15 ring-inset backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            {blogHero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1
            id="blog-hero-heading"
            className="font-display mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="text-white/35">{blogHero.headingLead}</span>{" "}
            {blogHero.headingBold}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
            {blogHero.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
