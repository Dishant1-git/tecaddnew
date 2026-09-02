"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/ui/Motion";

/**
 * One animated icon tile.
 *
 * Two nested motion layers, deliberately: the outer one runs the on-arrival
 * entrance, the inner one runs the idle float. Putting both on a single
 * element would mean the looping animation fights the entrance for control of
 * `y`, and the tile would snap.
 *
 * `index` staggers both the entrance and the float period, so a grid of these
 * drifts out of sync instead of pulsing as one block.
 */
export default function AiIconTile({
  Icon,
  label,
  meta,
  index = 0,
  dark = false,
  className,
}: {
  Icon: LucideIcon;
  label: string;
  meta?: string;
  index?: number;
  dark?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.07 }}
      className={cn(
        "group rounded-2xl p-4 transition-colors duration-300",
        dark
          ? "border border-white/10 bg-white/[0.04] hover:border-brand-400/35 hover:bg-white/[0.07]"
          : "border border-line bg-white hover:border-brand-300",
        className,
      )}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{
          duration: 3.6 + index * 0.35,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.2,
        }}
        className="flex flex-col gap-2.5"
      >
        <span
          className={cn(
            "grid size-10 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            dark
              ? "bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25 ring-inset"
              : "bg-brand-50 text-brand-600 ring-1 ring-brand-100 ring-inset",
          )}
        >
          <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
        </span>

        <span>
          <span
            className={cn(
              "font-display block text-sm leading-snug font-semibold",
              dark ? "text-white" : "text-ink",
            )}
          >
            {label}
          </span>
          {meta && (
            <span
              className={cn(
                "mt-0.5 block text-xs leading-snug",
                dark ? "text-white/45" : "text-muted",
              )}
            >
              {meta}
            </span>
          )}
        </span>
      </motion.div>
    </motion.div>
  );
}
