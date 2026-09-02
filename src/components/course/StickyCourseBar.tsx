"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { EASE } from "@/components/ui/Motion";

/**
 * A persistent enrol prompt for long course pages. It appears once the hero's
 * own call to action has scrolled away, and can be dismissed for the session —
 * a bar that cannot be closed is a bar that gets scrolled around.
 */
export default function StickyCourseBar({
  title,
  duration,
}: {
  title: string;
  duration: string;
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-4 sm:pb-4"
        >
          <div className="container-page">
            <div className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-white/10 bg-ink/90 p-2.5 pl-5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.8)] backdrop-blur-xl sm:gap-5">
              <div className="min-w-0 flex-1">
                <p className="font-display truncate text-sm font-semibold text-white">
                  {title}
                </p>
                <p className="truncate text-xs text-white/50">
                  {duration} · Classroom & live online · Amritsar
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium whitespace-nowrap text-ink transition-all duration-300 hover:bg-brand-50"
              >
                <span className="hidden sm:inline">Book a free demo</span>
                <span className="sm:hidden">Book demo</span>
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>

              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Dismiss enrolment bar"
                className="grid size-9 shrink-0 place-items-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
