"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/ui/Motion";

/**
 * The animated AI logo mark.
 *
 * A gradient badge carrying the monogram, with four corner brackets that draw
 * in on arrival and a sheen that sweeps across on a slow loop. Everything is
 * transform- and opacity-only so the browser never re-rasterises the plate
 * mid-animation, and the whole thing goes static under prefers-reduced-motion.
 *
 * Decorative: the course title is stated in real text beside every use.
 */
export default function AiLogoMark({
  label = "AI",
  caption,
  className,
}: {
  label?: string;
  caption?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  /* Each bracket is one corner: [vertical edge, horizontal edge]. */
  const corners = [
    "top-3 left-3 border-t-2 border-l-2 rounded-tl-xl",
    "top-3 right-3 border-t-2 border-r-2 rounded-tr-xl",
    "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-xl",
    "bottom-3 right-3 border-b-2 border-r-2 rounded-br-xl",
  ];

  return (
    <div
      aria-hidden="true"
      className={cn("relative grid size-full place-items-center", className)}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative grid size-full place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-[0_30px_70px_-25px_rgb(37_99_235/0.85)]"
      >
        <span className="circuit-texture absolute inset-0 opacity-25" />

        {/* Sheen sweep. */}
        {!reduce && (
          <motion.span
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{
              duration: 2.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3.4,
            }}
            className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
        )}

        {corners.map((corner, i) => (
          <motion.span
            key={corner}
            initial={reduce ? false : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.35 + i * 0.09 }}
            className={cn("absolute size-5 border-white/45", corner)}
          />
        ))}

        <span className="relative text-center">
          <span className="font-display block bg-gradient-to-br from-white to-brand-100 bg-clip-text text-5xl leading-none font-bold tracking-tight text-transparent sm:text-6xl">
            {label}
          </span>
          {caption && (
            <span className="mt-2 block text-[0.6rem] font-semibold tracking-[0.22em] text-brand-100/80 uppercase">
              {caption}
            </span>
          )}
        </span>
      </motion.div>
    </div>
  );
}
