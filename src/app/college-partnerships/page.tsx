import type { Metadata } from "next";
import { site } from "@/lib/content";
import CollegeHero from "@/components/college/CollegeHero";
import CollegeWays from "@/components/college/CollegeWays";
import CollegeProcess from "@/components/college/CollegeProcess";
import CollegePartnerCta from "@/components/college/CollegePartnerCta";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `College Partnerships — TechCadd ${site.city}`,
  description: `Campus workshops, mandated industrial training, faculty development and placement drives — run with your department on its own timetable.`,
  alternates: { canonical: "/college-partnerships" },
};

export default function CollegePartnershipsPage() {
  return (
    <>
      <CollegeHero />
      <CollegeWays />
      <CollegeProcess />
      <CollegePartnerCta />
      <FinalCta />
    </>
  );
}
