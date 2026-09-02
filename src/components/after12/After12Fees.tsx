import { Check } from "lucide-react";
import { after12Fees } from "@/lib/after-12th";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** Three published fee tiers; the middle one is the volume programme. */
export default function After12Fees() {
  return (
    <section
      id="fees"
      aria-labelledby="after12-fees-heading"
      className="py-20 lg:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{after12Fees.eyebrow}</Eyebrow>
          <SplitHeading
            id="after12-fees-heading"
            text={after12Fees.heading}
            accent={after12Fees.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-600"
          />
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {after12Fees.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {after12Fees.tiers.map((tier, i) => {
            const featured = "featured" in tier && tier.featured;

            return (
              <Reveal as="li" key={tier.name} delay={i * 100}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
                    featured
                      ? "border-brand-600 bg-ink text-white shadow-[0_24px_60px_-28px_rgb(15_23_42/0.6)]"
                      : "border-line bg-white hover:-translate-y-1 hover:border-brand-200",
                  )}
                >
                  {featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-gold-400 px-3 py-1 text-[0.7rem] font-semibold text-ink">
                      Most enrolled
                    </span>
                  )}

                  <p
                    className={cn(
                      "text-[0.65rem] font-semibold tracking-[0.24em] uppercase",
                      featured ? "text-brand-400" : "text-brand-600",
                    )}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={cn(
                      "font-display mt-4 text-2xl font-semibold lg:text-[1.75rem]",
                      featured ? "text-white" : "text-ink",
                    )}
                  >
                    {tier.range}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-xs",
                      featured ? "text-white/45" : "text-muted",
                    )}
                  >
                    {tier.duration} · {tier.for}
                  </p>

                  <ul
                    className={cn(
                      "mt-6 flex flex-col gap-3 border-t pt-6",
                      featured ? "border-white/10" : "border-line",
                    )}
                  >
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                            featured
                              ? "bg-white/10 text-gold-300"
                              : "bg-brand-50 text-brand-600",
                          )}
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span
                          className={cn(
                            "text-sm leading-relaxed",
                            featured ? "text-white/70" : "text-ink-mute",
                          )}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120}>
          <p className="mt-8 rounded-2xl border border-line bg-brand-50/40 px-6 py-5 text-sm leading-relaxed text-ink-mute">
            {after12Fees.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
