import type { Metadata } from "next";
import { site } from "@/lib/content";
import After12Hero from "@/components/after12/After12Hero";
import After12Overview from "@/components/after12/After12Overview";
import After12Streams from "@/components/after12/After12Streams";
import After12Journey from "@/components/after12/After12Journey";
import After12Eligibility from "@/components/after12/After12Eligibility";
import After12Careers from "@/components/after12/After12Careers";
import After12Fees from "@/components/after12/After12Fees";
import After12Faq from "@/components/after12/After12Faq";
import After12Cta from "@/components/after12/After12Cta";

export const metadata: Metadata = {
  title: `Courses After 12th in ${site.city} — ${site.name}`,
  description: `Career courses after 12th at ${site.name} ${site.city}: 6-month and 1-year certificates in digital marketing, Python, AI, cybersecurity, design, video and CAD — with live projects, internship track and placement support.`,
  openGraph: {
    title: `Courses After 12th in ${site.city} — ${site.name}`,
    description: `6-month and 1-year career programmes for 12th pass students in ${site.city}, with live projects and placement support.`,
    type: "website",
  },
  alternates: { canonical: "/after-12th-courses" },
};

export default function After12CoursesPage() {
  return (
    <>
      <After12Hero />
      <After12Overview />
      <After12Streams />
      <After12Journey />
      <After12Eligibility />
      <After12Careers />
      <After12Fees />
      <After12Faq />
      <After12Cta />
    </>
  );
}
