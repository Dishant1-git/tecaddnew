"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles, X } from "lucide-react";
import {
  aiMenu,
  megaMenus,
  navItems,
  railMenus,
  site,
  type ColumnMegaKey,
  type NavChild,
  type NavItem,
  type RailMegaKey,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

/* ------------------------------------------------------------- menu shape */

/**
 * The drawer mirrors whatever the desktop trigger opens, so nothing is
 * reachable on a wide screen but missing on a phone: the numbered mega
 * columns, the AI panel's link groups and the rail menus' category lists all
 * collapse into the same two-level accordion. Items with neither a mega panel
 * nor children stay plain links.
 */
type MobileGroup = {
  /** Absent for a single flat list (rail menus, plain `children`). */
  title?: string;
  /** The column's own section page, offered as "All …" inside the group. */
  href?: string;
  links: NavChild[];
};

type MobileSection = {
  label: string;
  href: string;
  sparkle?: boolean;
  groups: MobileGroup[];
  cta?: { label: string; href: string };
};

const columnKeys = Object.keys(megaMenus) as ColumnMegaKey[];
const railKeys = Object.keys(railMenus) as RailMegaKey[];

function buildSection(item: NavItem): MobileSection {
  const base = { label: item.label, href: item.href, sparkle: item.sparkle };
  const key = item.mega;

  if (key && columnKeys.includes(key as ColumnMegaKey)) {
    const menu = megaMenus[key as ColumnMegaKey];
    return {
      ...base,
      groups: menu.columns.map((column) => ({
        title: column.title,
        href: column.href,
        links: column.links,
      })),
      cta: menu.cta,
    };
  }

  if (key === "ai") {
    return {
      ...base,
      groups: aiMenu.groups.map((group) => ({
        title: group.label,
        links: group.links,
      })),
      cta: aiMenu.promo.cta,
    };
  }

  if (key && railKeys.includes(key as RailMegaKey)) {
    const menu = railMenus[key as RailMegaKey];
    return { ...base, groups: [{ links: menu.categories }], cta: menu.cta };
  }

  return { ...base, groups: item.children ? [{ links: item.children }] : [] };
}

/** Static data, so the tree is derived once rather than on every render. */
const sections: MobileSection[] = navItems.map(buildSection);

/* ----------------------------------------------------------------- pieces */

function LinkList({
  links,
  viewAll,
  onNavigate,
}: {
  links: NavChild[];
  viewAll?: { label: string; href: string };
  onNavigate: () => void;
}) {
  return (
    <ul className="flex flex-col">
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span className="min-w-0">{link.label}</span>
            {link.badge && (
              <span className="shrink-0 rounded-full bg-brand-600 px-1.5 py-0.5 text-[0.6rem] font-semibold text-white uppercase">
                {link.badge}
              </span>
            )}
          </Link>
        </li>
      ))}
      {viewAll && (
        <li>
          <Link
            href={viewAll.href}
            onClick={onNavigate}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-400 transition-colors hover:text-white"
          >
            {viewAll.label}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </li>
      )}
    </ul>
  );
}

/* ----------------------------------------------------------------- drawer */

/**
 * Slide-in drawer for < xl. Locks body scroll, closes on Escape, and keeps
 * focus inside the panel while open.
 */
export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  /** Keyed `${section}::${group}` so two sections cannot collide. */
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  /* Every navigation closes the drawer; collapse the accordion with it so the
     next open starts at the top rather than part-way down a course list. */
  function navigate() {
    setOpenSection(null);
    setOpenGroup(null);
    onClose();
  }

  function toggleSection(label: string) {
    setOpenSection((current) => (current === label ? null : label));
    setOpenGroup(null);
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-ink text-white shadow-2xl transition-transform duration-400 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
          <span className="text-sm font-semibold tracking-[0.24em] text-white/60 uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full ring-1 ring-white/15 ring-inset transition-colors hover:bg-white/10"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-5"
        >
          <ul className="flex flex-col gap-0.5">
            {sections.map((section) => {
              /* Nothing to expand — the item is a plain link. */
              if (!section.groups.length) {
                return (
                  <li key={section.label}>
                    <Link
                      href={section.href}
                      onClick={navigate}
                      className="block rounded-lg px-3 py-3 text-[0.95rem] text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {section.label}
                    </Link>
                  </li>
                );
              }

              const sectionOpen = openSection === section.label;

              return (
                <li key={section.label}>
                  <button
                    type="button"
                    onClick={() => toggleSection(section.label)}
                    aria-expanded={sectionOpen}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-[0.95rem] transition-colors hover:bg-white/5 hover:text-white",
                      sectionOpen ? "bg-white/5 text-white" : "text-white/85",
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      {section.label}
                      {section.sparkle && (
                        <Sparkles
                          className="size-3.5 fill-brand-400 text-brand-400"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 transition-transform duration-300",
                        sectionOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {sectionOpen && (
                    <div className="mt-0.5 mb-2 ml-3 flex flex-col border-l border-white/10 pl-2">
                      {section.groups.map((group) => {
                        /* A single untitled group is the whole menu — show its
                           links directly instead of nesting one level deeper. */
                        if (!group.title) {
                          return (
                            <LinkList
                              key="flat"
                              links={group.links}
                              onNavigate={navigate}
                            />
                          );
                        }

                        const groupKey = `${section.label}::${group.title}`;
                        const groupOpen = openGroup === groupKey;

                        return (
                          <div key={groupKey}>
                            <button
                              type="button"
                              onClick={() =>
                                setOpenGroup(groupOpen ? null : groupKey)
                              }
                              aria-expanded={groupOpen}
                              className={cn(
                                "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/5 hover:text-white",
                                groupOpen ? "text-white" : "text-white/70",
                              )}
                            >
                              {group.title}
                              <ChevronDown
                                className={cn(
                                  "size-3.5 shrink-0 transition-transform duration-300",
                                  groupOpen && "rotate-180",
                                )}
                                aria-hidden="true"
                              />
                            </button>

                            {groupOpen && (
                              <div className="mb-1 ml-3 border-l border-white/10 pl-2">
                                <LinkList
                                  links={group.links}
                                  viewAll={
                                    group.href
                                      ? {
                                          label: `All ${group.title}`,
                                          href: group.href,
                                        }
                                      : undefined
                                  }
                                  onNavigate={navigate}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {section.cta && (
                        <Link
                          href={section.cta.href}
                          onClick={navigate}
                          className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-400 transition-colors hover:text-white"
                        >
                          {section.cta.label}
                          <ArrowRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 flex-col gap-3 border-t border-white/10 px-6 py-6">
          <Button href="/contact" variant="primary" size="md" className="w-full">
            Book Demo
          </Button>
          <a
            href={site.phoneHref}
            className="text-center text-sm text-white/60 transition-colors hover:text-white"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
