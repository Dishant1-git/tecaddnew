"use client";

import { useEffect } from "react";

/**
 * Opens a course page at its hero.
 *
 * Client navigation from the catalogue can carry the previous page's scroll
 * offset over, which lands the reader in the overview with the hero already
 * behind them. `html` has `scroll-behavior: smooth`, so the reset has to be
 * explicitly instant or it animates down-to-up on load. A hash link (a
 * shared `#curriculum` URL, say) is left alone — that scroll is intentional.
 */
export default function ScrollToHero() {
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
