import { awards } from "@/lib/about-content";
import { aboutIcon } from "./icons";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function Awards() {
  return (
    <section
      data-cursor="light"
      id="awards"
      aria-labelledby="awards-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="animate-trace circuit-texture absolute inset-0 opacity-[0.22]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute -top-32 right-1/4 size-[34rem] rounded-full bg-brand-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 size-[30rem] rounded-full bg-accent/30 blur-[130px]" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Eyebrow dark>{awards.eyebrow}</Eyebrow>
          <SplitHeading
            id="awards-heading"
            text={awards.heading}
            accent={awards.accent}
            className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-xl text-base leading-relaxed text-white/55">
            {awards.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awards.items.map((item, i) => {
            const Icon = aboutIcon(item.icon);
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 90}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.07]"
              >
                {/* Gold-ish sheen that lifts on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/30 to-accent/40 text-brand-200 ring-1 ring-white/10 ring-inset transition-colors duration-300 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-md bg-white/8 px-2 py-1 text-[0.6rem] font-bold tracking-[0.12em] text-white/60 uppercase">
                    {item.tag}
                  </span>
                </div>

                <span className="mt-6 text-[0.65rem] font-semibold tracking-[0.2em] text-brand-400 uppercase">
                  {item.year}
                </span>
                <h3 className="font-display mt-2 text-lg leading-snug font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
