import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { galleryItems, galleryVisit } from "@/lib/gallery-content";
import { aboutIcon } from "@/components/about/icons";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";
import GalleryTile from "./GalleryTile";

/** The counselling-room frame, used as the plate beside the invitation. */
const plate =
  galleryItems.find((item) => item.scene === "campus") ?? galleryItems[0];

/**
 * The point of the whole page: a gallery is curated, a Tuesday evening batch
 * is not. Ends the visual sequence on an invitation rather than another grid.
 */
export default function GalleryVisit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-28 py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl ring-1 ring-line shadow-[0_40px_90px_-50px_rgb(15_23_42/0.7)]">
                <GalleryTile item={plate} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>

              {/* Floating stat card, overlapping the plate's lower corner. */}
              <div className="absolute -right-3 -bottom-6 w-44 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_50px_-28px_rgb(15_23_42/0.5)] sm:-right-6">
                <span className="font-display block text-3xl font-semibold text-ink">
                  6 days
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">
                  a week the labs are open, Monday to Saturday
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>{galleryVisit.eyebrow}</Eyebrow>
              <SplitHeading
                id="visit-heading"
                text={galleryVisit.heading}
                accent={galleryVisit.accent}
                className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
              />
              <p className="max-w-xl text-base leading-relaxed text-muted">
                {galleryVisit.body}
              </p>
            </Reveal>

            <ul className="mt-10 flex flex-col divide-y divide-line border-y border-line">
              {galleryVisit.points.map((point, i) => {
                const Icon = aboutIcon(point.icon);
                return (
                  <Reveal
                    as="li"
                    key={point.title}
                    delay={i * 80}
                    className="group flex items-start gap-5 py-5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-display text-base font-semibold text-ink">
                        {point.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {point.body}
                      </span>
                    </span>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={galleryVisit.cta.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25"
                >
                  {galleryVisit.cta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={galleryVisit.secondary.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {galleryVisit.secondary.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
