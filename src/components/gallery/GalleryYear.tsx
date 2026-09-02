import { galleryYear } from "@/lib/gallery-content";
import { aboutIcon } from "@/components/about/icons";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * The year as a horizontal timeline on desktop, a vertical spine on phones.
 * The rule is drawn once behind the markers rather than per card, so the line
 * never breaks between two of them.
 *
 * Deliberately light: the hero and the mosaic above it are both ink, and this
 * is where the page comes up for air before the closing invitation.
 */
export default function GalleryYear() {
  return (
    <section
      id="through-the-year"
      aria-labelledby="through-the-year-heading"
      className="scroll-mt-28 bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{galleryYear.eyebrow}</Eyebrow>
          <SplitHeading
            id="through-the-year-heading"
            text={galleryYear.heading}
            accent={galleryYear.accent}
            className="max-w-2xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
          />
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {galleryYear.body}
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* The spine: vertical on phones, horizontal from lg. */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[1.375rem] w-px bg-gradient-to-b from-transparent via-brand-200 to-transparent lg:top-[1.375rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {galleryYear.moments.map((moment, i) => {
              const Icon = aboutIcon(moment.icon);
              return (
                <Reveal
                  as="li"
                  key={moment.period}
                  delay={i * 90}
                  className="group relative flex gap-5 lg:flex-col lg:gap-0"
                >
                  <span
                    aria-hidden="true"
                    className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white shadow-[0_10px_24px_-12px_rgb(37_99_235/0.9)] ring-4 ring-brand-50/40 transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    <Icon className="size-5" />
                  </span>

                  <div className="lg:mt-7 lg:pr-6">
                    <span className="font-display text-[0.65rem] font-semibold tracking-[0.22em] text-brand-600 uppercase">
                      {moment.period}
                    </span>
                    <h3 className="font-display mt-2 text-lg leading-snug font-semibold text-ink">
                      {moment.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {moment.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
