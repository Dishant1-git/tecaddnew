"use client";

import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Layers,
  Megaphone,
  ShieldCheck,
} from "lucide-react";
import { capabilities } from "@/lib/content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import TabGroup from "@/components/ui/TabGroup";
import { Eyebrow } from "@/components/ui/Section";
import { TECH_LOGO } from "./tech-logos";

/** Keyed by `icon` on each capability, with the tile gradient it wears. */
const CAPABILITY_ICON = {
  ai: { Icon: BrainCircuit, tone: "from-violet-500 to-brand-600" },
  fullstack: { Icon: Layers, tone: "from-brand-500 to-brand-700" },
  data: { Icon: BarChart3, tone: "from-sky-500 to-brand-600" },
  cloud: { Icon: Cloud, tone: "from-cyan-500 to-brand-600" },
  security: { Icon: ShieldCheck, tone: "from-emerald-500 to-brand-600" },
  marketing: { Icon: Megaphone, tone: "from-fuchsia-500 to-brand-600" },
};

/** Fallback for tools simple-icons has no glyph for. */
function monogram(name: string) {
  return name.replace(/[^A-Za-z0-9+#.]/g, "").slice(0, 2);
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative isolate overflow-hidden py-20 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/60 to-white" />
        <div className="circuit-texture-ink absolute inset-0 opacity-[0.04]" />
        <div className="absolute top-1/4 -right-32 size-[32rem] rounded-full bg-brand-300/30 blur-[130px]" />
      </div>

      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>{capabilities.eyebrow}</Eyebrow>
          <SplitHeading
            id="capabilities-heading"
            text={capabilities.heading}
            accent={capabilities.accent}
            className="max-w-3xl text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            accentClassName="text-gold-500"
          />
        </Reveal>

        <TabGroup
          orientation="vertical"
          className="mt-14 lg:items-start lg:gap-14"
          listClassName="lg:w-80 xl:w-96"
          labels={capabilities.items.map((item) => item.label)}
          /* Each rail entry is an icon tile with its label beside it. */
          renderLabel={(label, index, selected) => {
            const { Icon, tone } = CAPABILITY_ICON[capabilities.items[index].icon];
            return (
              <span className="flex items-center gap-3.5">
                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white transition-shadow duration-300",
                    tone,
                    selected
                      ? "shadow-[0_10px_24px_-10px_rgb(37_99_235/0.9)]"
                      : "shadow-none",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-base font-semibold">
                  {label}
                </span>
              </span>
            );
          }}
          renderPanel={(index) => {
            const item = capabilities.items[index];
            return (
              <div className="liquid-glass rounded-3xl p-7 lg:p-9">
                <h3 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
                  {item.label}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {item.body}
                </p>

                {/* The stack, as logo-and-name cards. */}
                <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {item.stack.map((tech) => {
                    const path = TECH_LOGO[tech];
                    return (
                      <li key={tech}>
                        <span className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/70 px-3.5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
                          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-ink text-white">
                            {path ? (
                              <svg
                                viewBox="0 0 24 24"
                                className="size-4.5 fill-current"
                                aria-hidden="true"
                              >
                                <path d={path} />
                              </svg>
                            ) : (
                              <span className="text-[0.7rem] font-semibold">
                                {monogram(tech)}
                              </span>
                            )}
                          </span>
                          <span className="truncate text-sm font-medium text-ink-mute">
                            {tech}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
}
