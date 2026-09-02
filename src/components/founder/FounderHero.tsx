import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { founderHero } from "@/lib/founder-content";
import Reveal from "@/components/ui/Reveal";

/** Dark opener with the founder's own photograph dimmed behind the copy. */
export default function FounderHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="founder-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Image
          src={founderHero.photo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-brand-900/80" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-20" />
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
                Founder
              </li>
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={60} className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ring-1 ring-white/15 ring-inset backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            {founderHero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1
            id="founder-hero-heading"
            className="font-display mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            {founderHero.name}
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-3 text-lg text-white/60">{founderHero.role}</p>
        </Reveal>

        <Reveal delay={220}>
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/50">
            {founderHero.tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">•</span>}
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
