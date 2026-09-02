"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Show the button once the reader is roughly one screen down. */
const THRESHOLD = 600;

/**
 * Back-to-top button, pinned bottom-right. Stays mounted and fades out rather
 * than unmounting, so the transition runs both ways; while hidden it is
 * inert — no pointer events, and out of the tab order.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > THRESHOLD);
    }
    onScroll(); // Account for a restored scroll position on reload.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: still ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-brand-600 text-white shadow-[0_18px_40px_-14px_rgb(37_99_235/0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 lg:right-8 lg:bottom-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
