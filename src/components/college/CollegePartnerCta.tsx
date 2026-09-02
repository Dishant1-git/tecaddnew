import Link from "next/link";
import { Phone } from "lucide-react";
import { partnerCta } from "@/lib/college-content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function CollegePartnerCta() {
  return (
    <Section
      id="partner-with-us"
      eyebrow={partnerCta.eyebrow}
      heading={partnerCta.heading}
      body={partnerCta.body}
      centered
      className="bg-brand-50/40"
    >
      <Reveal delay={120} className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={partnerCta.primaryCta.href}
          className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-600 px-8 text-base font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25"
        >
          <Phone className="size-4" aria-hidden="true" />
          {partnerCta.primaryCta.label}
        </a>
        <Link
          href={partnerCta.secondaryCta.href}
          className="inline-flex h-13 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
        >
          {partnerCta.secondaryCta.label}
        </Link>
      </Reveal>
    </Section>
  );
}
