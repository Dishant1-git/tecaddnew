"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { railMenus, type RailMegaKey } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Rail mega panel: a category rail on the left, three featured cards on the
 * right. Drives the Resources and About menus. Shares the open/close mechanics
 * of the other panels — it stays mounted while closed so the transition runs
 * both ways.
 */
export default function RailMega({
  menuKey,
  open,
  onNavigate,
  id,
}: {
  menuKey: RailMegaKey;
  open: boolean;
  onNavigate: () => void;
  id: string;
}) {
  const menu = railMenus[menuKey];

  return (
    <div
      id={id}
      aria-hidden={!open}
      className={cn(
        /* Matches the header pill's max-w-6xl so the panel lines up with it. */
        "absolute inset-x-0 top-full mx-auto hidden max-w-6xl pt-3 transition-all duration-300 xl:block",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0",
      )}
    >
      <div className="grid grid-cols-[minmax(0,0.26fr)_minmax(0,1fr)] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white via-white to-brand-50 shadow-[0_40px_90px_-30px_rgb(15_23_42/0.45)]">
        {/* ------------------------------------------------- category rail */}
        <div className="border-r border-line px-6 py-6">
          <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted uppercase">
            {menu.categoriesLabel}
          </span>

          <ul className="mt-4 flex flex-col gap-0.5">
            {menu.categories.map((category) => (
              <li key={category.label}>
                <Link
                  href={category.href}
                  onClick={onNavigate}
                  /* Same weight and size as the column links in MegaMenu, so
                     every dropdown's navigation reads identically. */
                  className="block rounded-lg px-2.5 py-1 text-[0.85rem] leading-snug text-ink-mute transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>

          {menu.cta && (
            <Link
              href={menu.cta.href}
              onClick={onNavigate}
              className="group mt-5 inline-flex items-center gap-2 px-3 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
            >
              {menu.cta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>

        {/* ---------------------------------------------- featured cards */}
        <div className="px-7 py-6">
          <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted uppercase">
            {menu.featuredLabel}
          </span>

          <div className="mt-4 grid grid-cols-3 gap-5">
            {menu.featured.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                onClick={onNavigate}
                className="group flex flex-col gap-2.5"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl shadow-sm ring-1 ring-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 20vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Placeholder artwork until real photography lands. */
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br",
                        card.tone,
                      )}
                    >
                      <div
                        aria-hidden="true"
                        className="circuit-texture absolute inset-0 opacity-50"
                      />
                      <div
                        aria-hidden="true"
                        className="dot-matrix absolute inset-0 opacity-[0.08]"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-base font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">
                    {card.title}
                  </h3>

                  <div className="mt-1.5 flex items-center gap-2.5">
                    <span className="rounded-md bg-brand-100 px-2 py-1 text-[0.6rem] font-bold tracking-[0.1em] text-brand-700 uppercase">
                      {card.chip}
                    </span>
                    <span className="text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                      {card.meta}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
