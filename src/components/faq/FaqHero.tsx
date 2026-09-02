import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { faqCategories, faqHero, faqStats } from "@/lib/faq-content";
import { aboutIcon } from "@/components/about/icons";
import Reveal from "@/components/ui/Reveal";

/**
 * Dark opener with the topic rail duplicated as jump links, so a visitor who
 * knows what they came for can skip the list entirely. The chips target the
 * category headings rendered by `FaqExplorer` — plain anchors, no shared state.
 */
export default function FaqHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="faq-hero-heading"
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
                FAQ
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={60} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ring-1 ring-white/15 ring-inset backdrop-blur-md">
                <span
                  className="size-1.5 rounded-full bg-brand-400"
                  aria-hidden="true"
                />
                {faqHero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="faq-hero-heading"
                className="font-display mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                {faqHero.headingLead}
                <span className="block text-white/35">
                  {faqHero.headingMuted}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {faqHero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={faqHero.primaryCta.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {faqHero.primaryCta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={faqHero.secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {faqHero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------------------------- topic jumps */}
          <Reveal delay={200} className="lg:col-span-5 lg:mt-6">
            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-[0.65rem] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                  Jump to a topic
                </span>
                <span className="text-[0.65rem] tracking-[0.14em] text-white/40 uppercase">
                  {faqStats.questions} answers
                </span>
              </div>

              <ul className="mt-5 grid gap-2">
                {faqCategories.map((category) => {
                  const Icon = aboutIcon(category.icon);
                  return (
                    <li key={category.slug}>
                      <Link
                        href={`#cat-${category.slug}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 transition-colors duration-200 hover:bg-white/[0.07] hover:text-white"
                      >
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/8 text-brand-300 ring-1 ring-white/10 ring-inset transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <span className="flex-1">{category.label}</span>
                        <span className="text-xs text-white/35">
                          {category.items.length}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
