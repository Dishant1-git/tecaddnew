import { cn } from "@/lib/utils";

/**
 * The decorative layer stack behind every dark panel on the AI course page:
 * an ink-to-brand wash, a drifting circuit trace, a solder dot matrix, a
 * panning grid and two out-of-phase aurora blooms.
 *
 * `intensity` scales the whole thing back for the panels that carry a lot of
 * text — the hero can afford the full treatment, a seven-row comparison table
 * cannot. Every animation used here is disabled under prefers-reduced-motion
 * in globals.css.
 */
export default function AiBackdrop({
  intensity = "full",
  className,
}: {
  intensity?: "full" | "soft";
  className?: string;
}) {
  const soft = intensity === "soft";

  return (
    <div aria-hidden="true" className={cn("absolute inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
      <div
        className={cn(
          "animate-trace-slow circuit-texture absolute inset-0",
          soft ? "opacity-[0.14]" : "opacity-[0.28]",
        )}
      />
      <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
      <div
        className={cn(
          "animate-grid-pan grid-overlay absolute inset-0",
          soft ? "opacity-20" : "opacity-30",
        )}
      />
      <div
        className={cn(
          "animate-aurora-a absolute -top-[22%] -left-40 size-[42rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform",
          soft && "opacity-60",
        )}
      />
      <div
        className={cn(
          "animate-aurora-b absolute -right-40 bottom-[-32%] size-[38rem] rounded-full bg-accent/45 blur-[130px] will-change-transform",
          soft && "opacity-60",
        )}
      />
      <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
