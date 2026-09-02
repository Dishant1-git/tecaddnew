"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { megaMenus, type ColumnMegaKey } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Full-width mega menu panel. Rendered by Header as an absolute panel under
 * the nav pill, so it spans the page container rather than the trigger.
 *
 * Every panel stays mounted while closed (with `pointer-events-none` +
 * `invisible`) so the open/close transition can run in both directions;
 * `open` also drives `aria-hidden`.
 */

/** Column counts are looked up so Tailwind sees static class names. */
const COLUMN_CLASS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
};

export default function MegaMenu({
  menuKey,
  open,
  onNavigate,
  id,
}: {
  menuKey: ColumnMegaKey;
  open: boolean;
  onNavigate: () => void;
  id: string;
}) {
  const menu = megaMenus[menuKey];

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
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_90px_-30px_rgb(15_23_42/0.45)]">
        <div
          className={cn(
            "grid gap-6 px-7 pt-6 pb-7",
            COLUMN_CLASS[menu.columns.length] ?? "grid-cols-4",
          )}
        >
          {menu.columns.map((column) => (
            <div key={column.title}>
              <span className="text-[0.65rem] tabular-nums text-muted/70">{column.index}</span>

              <Link
                href={column.href}
                onClick={onNavigate}
                className="font-display mt-0.5 block text-lg font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-brand-600"
              >
                {column.title}
              </Link>

              <p className="mt-1 text-[0.8rem] leading-snug text-muted">
                {column.blurb}
              </p>

              <ul className="mt-3 flex flex-col border-t border-line pt-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-lg px-2.5 py-1 text-[0.85rem] leading-snug text-ink-mute transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="shrink-0 rounded-md bg-brand-100 px-1.5 py-0.5 text-[0.6rem] font-semibold tracking-[0.08em] text-brand-700 uppercase">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-line bg-brand-50/50 px-7 py-3">
          <p className="flex items-start gap-2.5 text-sm text-ink-mute">
            <Quote
              className="mt-0.5 size-4 shrink-0 fill-brand-200 text-brand-200"
              aria-hidden="true"
            />
            <span>
              <em>{menu.quote.text}</em>{" "}
              <span className="font-medium text-ink">— {menu.quote.author}</span>
            </span>
          </p>

          <Link
            href={menu.cta.href}
            onClick={onNavigate}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            {menu.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
