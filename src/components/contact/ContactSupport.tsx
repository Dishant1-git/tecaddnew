"use client";

import { useState } from "react";
import { GraduationCap, Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { support } from "@/lib/contact-content";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const DESK_ICONS = [GraduationCap, Users];

/** Digits only, so a `tel:` href can be turned into a `wa.me` link. */
function toWhatsAppHref(phoneHref: string) {
  return `https://wa.me/${phoneHref.replace(/\D/g, "")}`;
}

/**
 * Two desks, one panel: pick a desk on the left, its contact card and quick
 * actions render on the right. A single active index — no need for the full
 * ARIA tabs machinery of `TabGroup` for two stacked options.
 */
export default function ContactSupport() {
  const [active, setActive] = useState(0);
  const desk = support.desks[active];

  return (
    <Section
      id="support"
      eyebrow={support.eyebrow}
      heading={support.heading}
      centered
      className="bg-brand-50/40"
    >
      <Reveal delay={120} className="mx-auto mt-4 max-w-4xl">
        <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-[0_24px_60px_-40px_rgb(15_23_42/0.5)] sm:grid-cols-[minmax(220px,280px)_1fr]">
          {/* -------------------------------------------------- desk picker */}
          <div
            role="tablist"
            aria-label="Support desk"
            className="flex gap-3 bg-gradient-to-br from-brand-600 to-brand-800 p-5 sm:flex-col"
          >
            {support.desks.map((item, i) => {
              const Icon = DESK_ICONS[i];
              const selected = i === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex flex-1 items-start gap-3 rounded-2xl p-4 text-left transition-colors duration-300 sm:flex-none",
                    selected
                      ? "bg-white/15 ring-1 ring-white/30 ring-inset"
                      : "text-white/70 hover:bg-white/10",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-xl ring-1 ring-inset",
                      selected
                        ? "bg-white text-brand-700 ring-white/40"
                        : "bg-white/10 text-white ring-white/15",
                    )}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-white">
                      {item.title.replace(" Desk", " Support")}
                    </span>
                    <span className="text-xs leading-snug text-white/65">
                      {item.blurb}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* -------------------------------------------------- desk detail */}
          <div className="flex flex-col gap-6 p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-600 text-lg font-semibold text-white">
                {desk.initials}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {desk.title}
                </h3>
                <span className="text-sm font-medium text-brand-600">
                  {desk.tag}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-ink-mute">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {desk.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {desk.email}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {desk.location}
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={desk.phoneHref}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={toWhatsAppHref(desk.phoneHref)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${desk.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-amber-500 px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
