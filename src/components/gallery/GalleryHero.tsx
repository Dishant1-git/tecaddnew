import Link from "next/link";
import { ArrowRight, ChevronRight, ImageIcon } from "lucide-react";
import {
  albums,
  galleryHero,
  galleryStats,
  heroCollage,
} from "@/lib/gallery-content";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import GalleryTile from "./GalleryTile";

/**
 * Dark opener with a fanned collage of three plates beside it. The fan is
 * built from the same tiles the mosaic renders, so it can never show artwork
 * the page below does not have.
 */
export default function GalleryHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="gallery-hero-heading"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-24 text-white lg:pt-40 lg:pb-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-accent/60" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-[0.22]" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="animate-aurora-a absolute -top-[28%] -left-40 size-[42rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
        <div className="animate-aurora-b absolute -right-44 bottom-[-32%] size-[36rem] rounded-full bg-brand-400/25 blur-[130px] will-change-transform" />
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
                Gallery
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal delay={60} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ring-1 ring-white/15 ring-inset backdrop-blur-md">
                <ImageIcon
                  className="size-3.5 text-brand-400"
                  aria-hidden="true"
                />
                {galleryHero.eyebrow}
                <span className="text-white/40">
                  {galleryStats.photos} frames
                </span>
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="gallery-hero-heading"
                className="font-display mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                {galleryHero.headingLead}
                <span className="block text-white/35">
                  {galleryHero.headingMuted}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {galleryHero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={galleryHero.primaryCta.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {galleryHero.primaryCta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={galleryHero.secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {galleryHero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
                {galleryHero.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="font-display text-2xl font-semibold text-white">
                      {stat.value}
                    </dt>
                    <dd className="mt-0.5 text-xs text-white/45">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ------------------------------------------------------ collage */}
          <Reveal delay={200} className="lg:col-span-6">
            <div className="relative mx-auto flex max-w-lg items-end justify-center gap-3 sm:gap-4 lg:max-w-none">
              {heroCollage.map((item, i) => (
                <div
                  key={item.title}
                  className={cn(
                    "relative w-1/3 overflow-hidden rounded-2xl ring-1 shadow-[0_30px_70px_-40px_rgb(0_0_0/0.9)] ring-white/15 transition-transform duration-500 hover:z-20 hover:-translate-y-2",
                    // Middle plate stands taller and on top; the outer two
                    // tilt away and tuck behind it.
                    i === 1
                      ? "z-10 aspect-2/3 -translate-y-6"
                      : "aspect-3/4 rotate-[var(--tilt)]",
                  )}
                  style={
                    {
                      "--tilt": i === 0 ? "-5deg" : "5deg",
                    } as React.CSSProperties
                  }
                >
                  <GalleryTile item={item} className="rounded-2xl" bare />
                </div>
              ))}
            </div>

            {/* album chips under the fan */}
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {albums.map((album) => (
                <li key={album.slug}>
                  <Link
                    href={`#album-${album.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/65 ring-1 ring-white/10 ring-inset transition-colors duration-200 hover:bg-white/[0.12] hover:text-white"
                  >
                    {album.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
