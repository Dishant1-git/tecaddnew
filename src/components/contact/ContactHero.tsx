import Link from "next/link";
import { ArrowRight, ChevronRight, Clock, Mail, Phone } from "lucide-react";
import { contactHero } from "@/lib/contact-content";
import { footer, site } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const QUICK_FACTS = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Desk hours", value: footer.hours },
];

/**
 * Dark opener matching the other content pages (FAQ, Reviews): breadcrumb,
 * heading and body on the left, a compact quick-contact rail on the right.
 */
export default function ContactHero() {
  return (
    <section
      data-cursor="light"
      aria-labelledby="contact-hero-heading"
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
                Contact
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
                {contactHero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1
                id="contact-hero-heading"
                className="font-display mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              >
                {contactHero.headingLead}
                <span className="block text-white/35">
                  {contactHero.headingMuted}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {contactHero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={contactHero.primaryCta.href}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {contactHero.primaryCta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={contactHero.secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {contactHero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------------------------- quick facts */}
          <Reveal delay={200} className="lg:col-span-5 lg:mt-6">
            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
              <span className="font-display text-[0.65rem] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                Reach us directly
              </span>

              <ul className="mt-5 flex flex-col gap-2">
                {QUICK_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  const content = (
                    <>
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/8 text-brand-300 ring-1 ring-white/10 ring-inset">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-white/45">
                          {fact.label}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {fact.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={fact.label}>
                      {fact.href ? (
                        <a
                          href={fact.href}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.07]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
                          {content}
                        </div>
                      )}
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
