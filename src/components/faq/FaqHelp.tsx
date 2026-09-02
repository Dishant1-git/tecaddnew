import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqHelp } from "@/lib/faq-content";
import { aboutIcon } from "@/components/about/icons";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/** Three ways to get an answer this page could not give, plus onward links. */
export default function FaqHelp() {
  return (
    <section
      data-cursor="light"
      id="ask-us"
      aria-labelledby="ask-us-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-40" />
        <div className="animate-aurora-b absolute top-1/2 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[140px] will-change-transform" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Eyebrow dark>{faqHelp.eyebrow}</Eyebrow>
          <SplitHeading
            id="ask-us-heading"
            text={faqHelp.heading}
            accent={faqHelp.accent}
            className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-300"
          />
          <p className="max-w-2xl text-base leading-relaxed text-white/60">
            {faqHelp.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {faqHelp.channels.map((channel, i) => {
            const Icon = aboutIcon(channel.icon);
            const external = channel.cta.href.startsWith("tel:");
            return (
              <Reveal
                as="li"
                key={channel.title}
                delay={i * 90}
                className="group flex flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.07]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/30 to-accent/40 text-brand-200 ring-1 ring-white/10 ring-inset transition-colors duration-300 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <h3 className="font-display mt-5 text-lg font-semibold text-white">
                  {channel.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                  {channel.body}
                </p>

                {external ? (
                  <a
                    href={channel.cta.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-brand-300 transition-colors duration-300 hover:text-white"
                  >
                    {channel.cta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <Link
                    href={channel.cta.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-brand-300 transition-colors duration-300 hover:text-white"
                  >
                    {channel.cta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ul>

        {/* Onward links for anyone who arrived here from search. */}
        <Reveal
          delay={160}
          className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-10 sm:flex-row sm:justify-between"
        >
          <span className="text-xs tracking-[0.16em] text-white/35 uppercase">
            Read next
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {faqHelp.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
