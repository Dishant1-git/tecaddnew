"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger this block behind its siblings, in milliseconds. */
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "span";
};

/**
 * Fades and lifts its children into view the first time they intersect.
 * Adding `.in-view` also releases any nested `.word` spans, so a SplitHeading
 * inside a Reveal staggers automatically.
 *
 * The class is toggled on the DOM node rather than through state: it is a
 * one-way, additive change that never needs to re-render the subtree, and it
 * keeps the effect free of cascading setState calls.
 *
 * Reduced motion is handled entirely in globals.css, which forces `.reveal`
 * and `.word` visible — so no JS branch is needed for it here.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
