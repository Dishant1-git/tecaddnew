import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  FileBadge,
  MessagesSquare,
  Rocket,
  Target,
} from "lucide-react";
import { modules } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Keyed by `icon` on each block item. */
const MODULE_ICON = {
  projects: Rocket,
  doubts: MessagesSquare,
  interview: Target,
  certificate: Award,
  letter: FileBadge,
};

export default function Modules() {
  const [onCourse, afterCourse] = modules.blocks;

  return (
    <section
      id="modules"
      aria-labelledby="modules-heading"
      className="relative isolate overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Textured ground: the circuit tile in ink, a solder grid, and two soft
          colour blooms for the glass panels to pick up. All decorative. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/70 to-white" />
        <div className="circuit-texture-ink absolute inset-0 opacity-[0.05]" />
        <div className="dot-matrix-ink absolute inset-0 opacity-[0.04]" />
        <div className="absolute -top-20 -left-32 size-[34rem] rounded-full bg-brand-300/35 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 size-[32rem] rounded-full bg-violet-300/30 blur-[130px]" />
      </div>

      <div className="container-page">
        {/* ------------------------------------------- lead copy + glass card */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5">
            <Eyebrow>{modules.eyebrow}</Eyebrow>
            <SplitHeading
              id="modules-heading"
              text={modules.heading}
              accent={modules.accent}
              className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-[2.75rem]"
              accentClassName="text-gold-500"
            />
            <p className="max-w-md text-base leading-relaxed text-muted">
              {modules.body}
            </p>
            <Link
              href={modules.cta.href}
              className="group liquid-glass mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              {modules.cta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="liquid-glass rounded-3xl p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/favicons/android-chrome-192x192.png"
                  alt=""
                  width={192}
                  height={192}
                  className="size-10 rounded-full"
                />
                <span>
                  <span className="font-display block text-base font-semibold text-ink">
                    {modules.panel.title}
                  </span>
                  <span className="block text-xs text-muted">
                    {modules.panel.subtitle}
                  </span>
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-2.5">
                {modules.panel.rows.map((row) => (
                  <li
                    key={row}
                    className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-ink-mute"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {row}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-ink/8 pt-4 text-center text-xs tracking-[0.14em] text-muted uppercase">
                {modules.panel.footer}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------- two feature blocks */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {[onCourse, afterCourse].map((block, blockIndex) => (
            <Reveal key={block.eyebrow} delay={blockIndex * 100}>
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <h3 className="font-display mt-4 max-w-md text-2xl leading-[1.15] font-semibold text-ink lg:text-3xl">
                {block.heading}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {block.body}
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {block.items.map((item) => {
                  const Icon = MODULE_ICON[item.icon];
                  return (
                    <li
                      key={item.title}
                      className="liquid-glass rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.9)]">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <h4 className="font-display text-sm font-semibold text-ink">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* ------------------------------------------------------ closing flow */}
        <Reveal className="mt-24 flex flex-col items-start gap-5">
          <Eyebrow>{modules.flow.eyebrow}</Eyebrow>
          <h3 className="font-display max-w-2xl text-2xl leading-[1.15] font-semibold text-ink lg:text-4xl">
            {modules.flow.heading}
          </h3>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {modules.flow.body}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="liquid-glass overflow-hidden rounded-3xl px-6 py-10 lg:px-12 lg:py-14">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-6">
              {/* Inputs */}
              <ul className="flex w-full flex-col gap-3 lg:w-64">
                {modules.flow.inputs.map((input) => (
                  <li
                    key={input}
                    className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-center text-sm text-ink-mute shadow-sm lg:text-left"
                  >
                    {input}
                  </li>
                ))}
              </ul>

              {/* Connector — a hairline that the hub sits on. */}
              <div
                aria-hidden="true"
                className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block"
              />

              {/* Hub */}
              <div className="relative grid size-28 shrink-0 place-items-center lg:size-32">
                <span
                  aria-hidden="true"
                  className="absolute inset-[-18%] rounded-full border border-ink/[0.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-3 rounded-full bg-brand-400/35 blur-2xl"
                />
                <Image
                  src="/favicons/android-chrome-192x192.png"
                  alt=""
                  width={192}
                  height={192}
                  className="relative size-20 rounded-full ring-1 ring-white/70 lg:size-24"
                />
              </div>

              <div
                aria-hidden="true"
                className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block"
              />

              {/* Output */}
              <span className="rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white shadow-[0_14px_34px_-12px_rgb(37_99_235/0.9)] lg:w-64 lg:text-center">
                {modules.flow.output}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
