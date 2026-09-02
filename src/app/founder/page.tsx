import type { Metadata } from "next";
import { site } from "@/lib/content";
import FounderHero from "@/components/founder/FounderHero";
import FounderProfile from "@/components/founder/FounderProfile";
import FounderLeadership from "@/components/founder/FounderLeadership";
import FounderEngagement from "@/components/founder/FounderEngagement";
import FounderBelief from "@/components/founder/FounderBelief";
import FounderStory from "@/components/founder/FounderStory";
import FounderLegacy from "@/components/founder/FounderLegacy";
import FounderTeam from "@/components/founder/FounderTeam";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `Our Founder — TechCadd ${site.city}`,
  description: `Gourav Gupta founded TechCadd ${site.city} in 2016 to bridge the gap between academics and industry through practical, future-ready skills.`,
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return (
    <>
      <FounderHero />
      <FounderProfile />
      <FounderLeadership />
      <FounderEngagement />
      <FounderBelief />
      <FounderStory />
      <FounderLegacy />
      <FounderTeam />
      <FinalCta />
    </>
  );
}
