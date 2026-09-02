"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Framer Motion wrappers used across the course pages.
 *
 * The rest of the site animates with the IntersectionObserver-based `Reveal`
 * component and CSS transitions. Course pages need orchestration CSS cannot
 * express — staggered children, shared layout indicators, scroll-linked
 * progress — so they use these instead. Both paths respect prefers-reduced
 * -motion: globals.css handles the CSS one, `useReducedMotion` this one.
 */

/** Shared easing curve. Typed as a mutable tuple so it satisfies Framer's
 * bezier definition, which a readonly `as const` array would not. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Motion components are looked up through this map rather than `motion[tag]`,
 * which resolves to a union TypeScript struggles to call as JSX. Casting each
 * entry to `motion.div` keeps the call site simple; the rendered element is
 * still the right tag at runtime.
 */
type MotionTag = typeof motion.div;

const TAGS: Record<string, MotionTag> = {
  div: motion.div,
  ul: motion.ul as unknown as MotionTag,
  ol: motion.ol as unknown as MotionTag,
  li: motion.li as unknown as MotionTag,
  p: motion.p as unknown as MotionTag,
  span: motion.span as unknown as MotionTag,
  section: motion.section as unknown as MotionTag,
  article: motion.article as unknown as MotionTag,
  header: motion.header as unknown as MotionTag,
  h1: motion.h1 as unknown as MotionTag,
  h2: motion.h2 as unknown as MotionTag,
  h3: motion.h3 as unknown as MotionTag,
};

/** Parent that releases its `<FadeUp>` children in document order. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Seconds between each child. */
  gap?: number;
  as?: "div" | "ul" | "ol" | "section" | "header";
}) {
  const reduce = useReducedMotion();
  const Component = TAGS[as];

  if (reduce) return <Component className={className}>{children}</Component>;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </Component>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/**
 * A child of `<Stagger>`. With `standalone` it watches its own intersection
 * instead, so the same component works in either position.
 */
export function FadeUp({
  children,
  className,
  standalone = false,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  standalone?: boolean;
  delay?: number;
  as?: "div" | "li" | "p" | "span" | "article" | "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const Component = TAGS[as];

  if (reduce) return <Component className={className}>{children}</Component>;

  if (standalone) {
    return (
      <Component
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        variants={fadeUp}
        transition={{ delay }}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  );
}

/**
 * Lifts a heading in word by word — the motion equivalent of the site's CSS
 * `SplitHeading`, for headings that live inside a Framer-driven subtree.
 */
export function WordsUp({
  text,
  accent,
  className,
  accentClassName = "text-gold-300",
  as = "h2",
  delay = 0,
}: {
  text: string;
  /** Trailing phrase rendered in the accent colour. */
  accent?: string;
  className?: string;
  accentClassName?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const Component = TAGS[as];
  const leading = text.split(" ");
  const trailing = accent ? accent.split(" ") : [];
  const words = [...leading, ...trailing];
  const base = cn("font-display tracking-tight text-balance", className);

  if (reduce) {
    return (
      <Component className={base}>
        {text}
        {accent ? <span className={accentClassName}> {accent}</span> : null}
      </Component>
    );
  }

  return (
    <Component
      className={base}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className={cn(
              "inline-block",
              i >= leading.length && accentClassName,
            )}
            variants={{
              hidden: { y: "0.9em", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </Component>
  );
}
