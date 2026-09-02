import type { Metadata } from "next";
import { site } from "@/lib/content";
import MissionHero from "@/components/mission/MissionHero";
import OurMission from "@/components/mission/OurMission";
import OurVision from "@/components/mission/OurVision";
import WhatWeHoldTo from "@/components/mission/WhatWeHoldTo";
import KeepingHonest from "@/components/mission/KeepingHonest";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `Mission and Vision — TechCadd ${site.city}`,
  description: `What TechCadd ${site.city} is for: our mission, our vision for the region, the commitments we hold to and the checks that keep them testable.`,
  alternates: { canonical: "/about/mission-vision" },
};

/**
 * The long form of the mission-and-vision block summarised on /about.
 *
 * Ordered as a claim and its proof: what we are for, where it leads, what we
 * hold to while getting there, and how anyone can check we still are.
 */
export default function MissionVisionPage() {
  return (
    <>
      <MissionHero />
      <OurMission />
      <OurVision />
      <WhatWeHoldTo />
      <KeepingHonest />
      <FinalCta />
    </>
  );
}
