import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { aboutHero, whoWeAre } from "@/lib/about-content";
import { site } from "@/lib/content";
import AboutImage from "./AboutImage";
import Reveal from "@/components/ui/Reveal";

/**
 * Page opener. Shares the dark, layered treatment of the course hero — the
 * same background stack, breadcrumb and stat rail — so /about reads as part
 * of the same site rather than a bolt-on page.
 */
export default function AboutHero() {
  return (
    <>
      <section
        data-cursor="light"
        aria-labelledby="about-hero-heading"
        className="relative isolate overflow-hidden bg-ink pt-32 pb-32 text-white lg:pt-40 lg:pb-40"
      >
        {/* Decorative background stack — every layer is disabled under
            prefers-reduced-motion by globals.css. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
          <div className="animate-trace-slow circuit-texture absolute inset-0 opacity-[0.28]" />
          <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
          <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
          <div className="animate-aurora-a absolute -top-[22%] -left-40 size-[42rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
          <div className="animate-aurora-b absolute -right-40 bottom-[-32%] size-[38rem] rounded-full bg-accent/45 blur-[130px] will-change-transform" />
          <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            {/* ------------------------------------------------------ copy */}
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
                    <li aria-current="page" className="text-white/70">
                      About TechCadd
                    </li>
                  </ol>
                </nav>
              </Reveal>

              <Reveal delay={60} className="mt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  {aboutHero.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={120}>
                <h1
                  id="about-hero-heading"
                  className="font-display mt-6 max-w-3xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
                >
                  {aboutHero.headingLead}
                  <span className="block text-white/35">
                    {aboutHero.headingMuted}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                  {aboutHero.body}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <ul className="mt-8 flex flex-wrap items-center gap-2.5">
                  {aboutHero.chips.map((chip) => (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/65"
                    >
                      <span
                        className="size-1.5 rounded-full bg-brand-400"
                        aria-hidden="true"
                      />
                      {chip}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href={aboutHero.primaryCta.href}
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    {aboutHero.primaryCta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href={aboutHero.secondaryCta.href}
                    className="inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {aboutHero.secondaryCta.label}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* --------------------------------------------- campus panel */}
            <Reveal delay={200} className="lg:col-span-5">
              <div className="relative">
                {/* Ambient glow behind the panel. */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-full bg-brand-500/20 blur-[90px]"
                />

                <div className="rounded-3xl border border-white/12 bg-ink/60 p-6 shadow-[0_40px_90px_-40px_rgb(0_0_0/0.9)] backdrop-blur-xl sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-[0.65rem] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                      Inside the institute
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.14em] text-white/40 uppercase">
                      <MapPin className="size-3" aria-hidden="true" />
                      {site.city}
                    </span>
                  </div>

                  {/* Four campus plates. */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {whoWeAre.tiles.map((tile, i) => (
                      <div key={tile.label} className="relative">
                        <AboutImage
                          src={tile.image}
                          alt={tile.alt}
                          icon={tile.icon}
                          gradient={tile.gradient}
                          tone="dark"
                          priority={i < 2}
                          sizes="(min-width: 1024px) 16vw, 44vw"
                          className="h-28 sm:h-32"
                        />
                        <span className="pointer-events-none absolute inset-x-3 bottom-3 text-[0.7rem] font-medium text-white/90 drop-shadow-[0_1px_4px_rgb(2_6_23/0.9)]">
                          {tile.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/20 to-accent/25 p-4">
                    <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                      What that adds up to
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      Practitioner trainers, reviewed project work and a
                      placement desk that knows what its partners ask in
                      interviews.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stat rail — a light card straddling the dark/light seam. */}
      <div className="relative z-20 -mt-16 lg:-mt-20">
        <div className="container-page">
          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-3xl bg-line shadow-[0_30px_70px_-40px_rgb(15_23_42/0.5)] sm:grid-cols-2 lg:grid-cols-4">
              {aboutHero.stats.map((stat) => (
                <div key={stat.label} className="bg-white px-6 py-7">
                  <dd className="font-display text-3xl font-semibold text-ink">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </>
  );
}
