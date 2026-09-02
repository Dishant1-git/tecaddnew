"use client";

import { useEffect } from "react";

/**
 * Turns document-level scroll snapping on for as long as a course detail page
 * is mounted, and off again on the way out.
 *
 * The snap container has to be the document itself — the panels are laid out
 * in the root <main>, and a nested scroller would break the fixed header, the
 * sticky enrol bar and Framer's scroll-linked progress. Scoping it to a class
 * on <html> keeps the homepage and the course catalogue scrolling normally.
 */
export default function ScreenSnap() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("course-snap");
    return () => root.classList.remove("course-snap");
  }, []);

  return null;
}
