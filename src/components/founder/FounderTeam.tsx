"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { founderTeam } from "@/lib/founder-content";
import Section from "@/components/ui/Section";
import Marquee from "@/components/ui/Marquee";
import TeamCard from "./TeamCard";

export default function FounderTeam() {
  return (
    <Section
      id="team"
      eyebrow={founderTeam.eyebrow}
      heading={founderTeam.heading}
      body={founderTeam.body}
      dark
      aside={
        <Link
          href={founderTeam.cta.href}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
        >
          {founderTeam.cta.label}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      }
    >
      {/* Breaks out of `container-page` to run edge-to-edge of the viewport. */}
      <Marquee
        items={founderTeam.members}
        duration={36}
        className="relative left-1/2 mt-14 w-screen -translate-x-1/2 py-2"
        renderItem={(member) => <TeamCard member={member} />}
      />
    </Section>
  );
}
