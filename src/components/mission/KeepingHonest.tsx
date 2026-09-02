import { ArrowRight, X } from "lucide-react";
import { keepingHonest } from "@/lib/mission-content";
import { aboutIcon } from "@/components/about/icons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * The accountability half of the page: the loops that test the promise, the
 * claims we refuse to make, and an open invitation to check both in person.
 */
export default function KeepingHonest() {
  return (
    <Section
      id="keeping-honest"
      eyebrow={keepingHonest.eyebrow}
      heading={keepingHonest.heading}
      accent={keepingHonest.accent}
      body={keepingHonest.body}
      className="scroll-mt-28"
    >
      <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* ------------------------------------------------------- checks */}
        <ul className="flex flex-col gap-4">
          {keepingHonest.checks.map((check, i) => {
            const Icon = aboutIcon(check.icon);
            return (
              <Reveal
                as="li"
                key={check.title}
                delay={i * 80}
                className="group flex gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {check.title}
                    </h3>
                    <span className="rounded-md bg-brand-100 px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.12em] text-brand-700 uppercase">
                      {check.cadence}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {check.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {/* ------------------------------------- refusals and invitation */}
        <div className="flex flex-col gap-5">
          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white"
          >
            <div
              aria-hidden="true"
              className="grid-overlay absolute inset-0 opacity-40"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-20 size-56 rounded-full bg-brand-700/40 blur-3xl"
            />

            <h3 className="font-display relative text-lg font-semibold">
              {keepingHonest.refusals.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-white/50">
              {keepingHonest.refusals.body}
            </p>

            <ul className="relative mt-5 flex flex-col gap-2.5">
              {keepingHonest.refusals.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-4 py-3 text-sm text-white/70 line-through decoration-white/25"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-white/10 text-white/70 no-underline">
                    <X className="size-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={180}
            className="rounded-2xl border border-line bg-gradient-to-br from-brand-50/80 via-white to-brand-50/60 p-7"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {keepingHonest.invitation.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              {keepingHonest.invitation.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={keepingHonest.invitation.primaryCta.href}
                variant="primary"
                size="md"
              >
                {keepingHonest.invitation.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href={keepingHonest.invitation.secondaryCta.href}
                variant="outline"
                size="md"
              >
                {keepingHonest.invitation.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
