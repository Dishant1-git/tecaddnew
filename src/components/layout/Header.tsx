"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import {
  megaMenus,
  navItems,
  railMenus,
  type ColumnMegaKey,
  type MegaKey,
  type RailMegaKey,
} from "@/lib/content";
import { courseSlugs } from "@/lib/courses";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useEnquiry } from "./EnquiryDialog";
import AiMega from "./AiMega";
import MegaMenu from "./MegaMenu";
import RailMega from "./RailMega";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const megaId = (key: MegaKey) => `${key}-mega-menu`;

/**
 * Sticky floating pill header. It rides over the dark hero as a translucent
 * dark capsule, then tightens into a narrower white capsule once the page
 * scrolls past the threshold.
 */
export default function Header() {
  const enquiry = useEnquiry();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  /** Which mega panel is showing, if any. */
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);

  /* When the visitor is reading a course page, Book Demo should hand that
     course straight to the enquiry dialog instead of asking them to pick it
     again from the dropdown. */
  const activeCourseSlug = useMemo(() => {
    const slug = pathname?.match(/^\/courses\/([^/]+)\/?$/)?.[1];
    return slug && courseSlugs.includes(slug) ? slug : undefined;
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll(); // Account for a restored scroll position on reload.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        onMouseLeave={() => setOpenMega(null)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpenMega(null);
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "pt-3" : "pt-0",
        )}
      >
        <div className="container-page relative">
          <div
            className={cn(
              "mx-auto flex items-center justify-between gap-4 border transition-all duration-500",
              scrolled
                ? "h-17 max-w-6xl rounded-full border-line bg-white/90 pr-2 pl-5 shadow-[0_20px_60px_-28px_rgb(15_23_42/0.6)] backdrop-blur-xl"
                : "h-20 max-w-full rounded-none border-transparent bg-transparent px-0",
            )}
          >
            {/* Navy wordmark on the white pill, white over the dark hero. */}
            <Logo inverted={!scrolled} className="shrink-0" />

            <nav
              aria-label="Main"
              className="hidden items-center gap-5 self-stretch xl:flex 2xl:gap-6"
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  /* Hovering any item settles the mega menus: open this item's
                     panel, close whichever one was showing. */
                  onMouseEnter={() => setOpenMega(item.mega ?? null)}
                  className="group relative flex items-center"
                >
                  <Link
                    href={item.href}
                    onFocus={() => setOpenMega(item.mega ?? null)}
                    aria-expanded={item.mega ? openMega === item.mega : undefined}
                    aria-controls={item.mega ? megaId(item.mega) : undefined}
                    className={cn(
                      "relative flex items-center gap-1.5 text-sm transition-all duration-300",
                      /* `sparkle` items render as a glowing gradient pill
                         instead of a plain text link. */
                      item.sparkle
                        ? "rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-4 py-1.5 font-medium text-white shadow-[0_10px_26px_-8px_rgb(37_99_235/1)] ring-1 ring-white/25 ring-inset hover:from-brand-400 hover:to-brand-600"
                        : scrolled
                          ? "text-ink-mute hover:text-ink"
                          : "text-white/75 hover:text-white",
                      !item.sparkle &&
                        openMega === item.mega &&
                        (scrolled ? "text-ink" : "text-white"),
                    )}
                  >
                    {item.label}
                    {item.sparkle && (
                      <Sparkles
                        className="animate-twinkle size-3.5 fill-white text-white"
                        aria-hidden="true"
                      />
                    )}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "size-2.5 transition-transform duration-300 group-hover:rotate-180",
                          openMega === item.mega && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {!item.sparkle && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                          scrolled ? "bg-ink" : "bg-white",
                          openMega === item.mega && "w-full",
                        )}
                      />
                    )}
                  </Link>

                  {item.children && !item.mega && (
                    <div className="invisible absolute top-full left-1/2 z-10 w-64 -translate-x-1/2 translate-y-2 pt-6 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_24px_60px_-20px_rgb(15_23_42/0.28)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-ink-mute transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                            {child.badge && (
                              <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[0.6rem] font-semibold text-white uppercase">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                onClick={() => enquiry.open(activeCourseSlug)}
                variant="gradient"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Book Demo
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-full ring-1 ring-inset transition-colors duration-300 xl:hidden",
                  scrolled
                    ? "text-ink ring-line hover:bg-brand-50"
                    : "text-white ring-white/25 hover:bg-white/10",
                )}
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>

          {(Object.keys(megaMenus) as ColumnMegaKey[]).map((key) => (
            <MegaMenu
              key={key}
              menuKey={key}
              id={megaId(key)}
              open={openMega === key}
              onNavigate={() => setOpenMega(null)}
            />
          ))}

          <AiMega
            id={megaId("ai")}
            open={openMega === "ai"}
            onNavigate={() => setOpenMega(null)}
          />

          {(Object.keys(railMenus) as RailMegaKey[]).map((key) => (
            <RailMega
              key={key}
              menuKey={key}
              id={megaId(key)}
              open={openMega === key}
              onNavigate={() => setOpenMega(null)}
            />
          ))}
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
