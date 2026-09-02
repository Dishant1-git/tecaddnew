"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Course } from "@/lib/courses";
import { EASE, FadeUp, Stagger } from "@/components/ui/Motion";
import AiHead from "./AiHead";

/**
 * Reduces a tool name to a short monogram for its badge — "scikit-learn" to
 * "SL", "Python" to "PY". Multi-word and hyphenated names take one letter per
 * part; a single word takes its first two.
 */
function monogramOf(tool: string) {
  const parts = tool.split(/[\s\-&/]+/).filter(Boolean);

  if (parts.length > 1) {
    return parts
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  return tool.slice(0, 2).toUpperCase();
}

/**
 * One tool, as a monogram badge with its name.
 *
 * The badge stands in for a real vendor logo — dropping an <Image> in later
 * means replacing the inner span and nothing else. Two nested motion layers so
 * the idle float never fights the entrance for control of `y`.
 */
function ToolTile({ tool, index }: { tool: string; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay: (index % 6) * 0.06 }}
      className="group flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_45px_-32px_rgb(15_23_42/0.6)]"
    >
      <motion.span
        animate={reduce ? undefined : { y: [0, -4, 0] }}
        transition={{
          duration: 3.8 + (index % 5) * 0.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: (index % 6) * 0.25,
        }}
        className="font-display grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold tracking-wide text-white shadow-[0_10px_22px_-12px_rgb(37_99_235/0.9)] transition-transform duration-300 group-hover:scale-110"
      >
        {monogramOf(tool)}
      </motion.span>

      <span className="font-display min-w-0 truncate text-sm font-semibold text-ink">
        {tool}
      </span>
    </motion.li>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiToolMesh({ course }: { course: Course }) {
  return (
    <section
      id="ai-tools"
      aria-labelledby="ai-tools-heading"
      className="relative isolate overflow-hidden border-y border-line bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-brand-50 blur-[130px]"
      />

      <div className="container-page">
        <AiHead
          id="ai-tools-heading"
          eyebrow="The working stack"
          heading="One course."
          accent="A mesh of real tools."
          body={`All ${course.tools.length} are installed, configured and used by you during the programme — none of them are demonstrated on a slide. You leave able to set the environment up from scratch on your own machine.`}
          centered
          className="mx-auto"
        />

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {course.tools.map((tool, i) => (
            <ToolTile key={tool} tool={tool} index={i} />
          ))}
        </ul>

        {/* Grouped rails restate the same tools in the order you meet them. */}
        <Stagger
          as="ul"
          className="mt-14 grid gap-4 border-t border-line pt-10 sm:grid-cols-3"
          gap={0.08}
        >
          {course.toolGroups.map((group) => (
            <FadeUp as="li" key={group.label}>
              <span className="font-display text-[0.65rem] font-semibold tracking-[0.22em] text-brand-600 uppercase">
                {group.label}
              </span>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {group.items.join(" · ")}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
