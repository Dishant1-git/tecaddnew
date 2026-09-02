import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { missionHero } from "@/lib/mission-content";
import AboutImage from "@/components/about/AboutImage";
import Reveal from "@/components/ui/Reveal";

/**
 * Opener for /about/mission-vision. Same dark treatment as the About hero so
 * the two pages read as one section of the site; the artwork carries the
 * "direction" idea the rest of the page argues for.
 */
export default function MissionHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="mission-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-24 text-white lg:pt-40 lg:pb-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
        <div className="animate-trace-slow circuit-texture absolute inset-0 opacity-[0.26]" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="animate-aurora-a absolute -top-[24%] -left-40 size-[40rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-40 bottom-[-30%] size-[36rem] rounded-full bg-accent/45 blur-[130px] will-change-transform" />
        <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* -------------------------------------------------------- copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <li>
                    <Link
                      href="/about"
                      className="transition-colors hover:text-white"
                    >
                      About TechCadd
                    </Link>
                  </li>
                  <ChevronRight className="size-3" aria-hidden="true" />
                  <li aria-current="page" className="text-white/70">
                    Mission and vision
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={60} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ring-1 ring-white/15 ring-inset backdrop-blur-md">
                <span
                  className="size-1.5 rounded-full bg-brand-400"
                  aria-hidden="true"
                />
                {missionHero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="mission-hero-heading"
                className="font-display mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                {missionHero.headingLead}
                <span className="block text-white/35">
                  {missionHero.headingMuted}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {missionHero.body}
              </p>
            </Reveal>

            {/* Anchors into the two halves of the page. */}
            <Reveal delay={240}>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {missionHero.jump.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-white/[0.08]"
                    >
                      <span>
                        <span className="font-display block text-base font-semibold text-white">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/45">
                          {item.hint}
                        </span>
                      </span>
                      <ArrowRight
                        className="size-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ------------------------------------------------------ artwork */}
          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-full bg-brand-500/20 blur-[90px]"
              />
              <AboutImage
                src={missionHero.media.image}
                alt={missionHero.media.alt}
                caption={missionHero.media.caption}
                icon={missionHero.media.icon}
                gradient={missionHero.media.gradient}
                tone="dark"
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-4/3 rounded-3xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
