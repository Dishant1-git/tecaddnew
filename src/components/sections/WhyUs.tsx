import { Award, Briefcase, Clock, Layers, Phone } from "lucide-react";
import { whyUs } from "@/lib/content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

const icons = {
  layers: Layers,
  badge: Award,
  briefcase: Briefcase,
  clock: Clock,
} as const;

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-y border-line bg-brand-50/40 py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{whyUs.eyebrow}</Eyebrow>
            <SplitHeading
              id="why-us-heading"
              text={whyUs.heading}
              accent={whyUs.accent}
              className="text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            />
            <p className="max-w-lg text-base leading-relaxed text-muted">
              {whyUs.body}
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button href={whyUs.primaryCta.href} variant="primary" size="md">
                <Phone className="size-4" aria-hidden="true" />
                {whyUs.primaryCta.label}
              </Button>
              <Button href={whyUs.secondaryCta.href} variant="outline" size="md">
                {whyUs.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {whyUs.items.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 80}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
