import type { Metadata } from "next";
import { site } from "@/lib/content";
import { faqEntries } from "@/lib/faq-content";
import FaqHero from "@/components/faq/FaqHero";
import PopularQuestions from "@/components/faq/PopularQuestions";
import FaqExplorer from "@/components/faq/FaqExplorer";
import FaqHelp from "@/components/faq/FaqHelp";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `FAQ — TechCadd ${site.city}`,
  description: `Answers about courses, admissions, fees, batch timings, projects, placement support and certificates at TechCadd ${site.city}.`,
  alternates: { canonical: "/faq" },
};

/**
 * FAQPage structured data, built from the same source as the visible list so
 * the two can never drift. Rendered as JSON-LD in the page body, which is
 * where search engines expect it.
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((entry) => ({
    "@type": "Question",
    name: entry.q,
    acceptedAnswer: { "@type": "Answer", text: entry.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // The payload is our own content, serialised here rather than fetched.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqHero />
      <PopularQuestions />
      <FaqExplorer />
      <FaqHelp />
      <FinalCta />
    </>
  );
}
