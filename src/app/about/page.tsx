import type { Metadata } from "next";
import { site } from "@/lib/content";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import WhatWeCover from "@/components/about/WhatWeCover";
import HowWeTeach from "@/components/about/HowWeTeach";
import OutcomeLoop from "@/components/about/OutcomeLoop";
import WhoWeTeach from "@/components/about/WhoWeTeach";
import LearningToPractice from "@/components/about/LearningToPractice";
import TheDifference from "@/components/about/TheDifference";
import WhatWeTeach from "@/components/about/WhatWeTeach";
import OurApproach from "@/components/about/OurApproach";
import IndustryConnection from "@/components/about/IndustryConnection";
import Awards from "@/components/about/Awards";
import Founder from "@/components/about/Founder";
import OurBelief from "@/components/about/OurBelief";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `About TechCadd ${site.city} — Who we are and how we teach`,
  description: `TechCadd ${site.city}: an IT training institute teaching AI, software, data, digital marketing, cyber security and cloud through live projects, practitioner trainers and placement support.`,
  alternates: { canonical: "/about" },
};

/**
 * The institute story, ordered as a visitor's questions arrive: who we are,
 * what we stand for, what we cover, how we teach it, who it is for, what you
 * leave with, and why any of it should be believed.
 *
 * Section ids double as the anchors used by the About mega menu in the header
 * (`#mission-vision`, `#founder`) — keep them in step with `content.ts`.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhatWeCover />
      <HowWeTeach />
      <OutcomeLoop />
      <WhoWeTeach />
      <LearningToPractice />
      <TheDifference />
      <WhatWeTeach />
      <OurApproach />
      <IndustryConnection />
      <Awards />
      <Founder />
      <OurBelief />
      <FinalCta />
    </>
  );
}
