import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarsProps = {
  /** 0–5, fractional values render a partially filled final star. */
  rating: number;
  /** Tailwind size utility for one star, e.g. `size-4`. */
  size?: string;
  className?: string;
  /** Track colour behind an unfilled star. */
  tone?: "light" | "dark";
};

/**
 * A five-star row. The fill is drawn as a clipped overlay rather than by
 * rounding to whole stars, so an average of 4.7 reads as 4.7.
 *
 * Purely decorative — every caller states the numeric rating in text beside
 * it, so the row itself is hidden from assistive technology.
 */
export default function Stars({
  rating,
  size = "size-4",
  className,
  tone = "light",
}: StarsProps) {
  const clamped = Math.max(0, Math.min(5, rating));

  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-flex shrink-0 gap-0.5", className)}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(size, tone === "dark" ? "text-white/20" : "text-line")}
          fill="currentColor"
        />
      ))}

      {/* Filled layer, clipped to the rating. */}
      <span
        className="absolute inset-0 flex gap-0.5 overflow-hidden"
        style={{ width: `${(clamped / 5) * 100}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(size, "shrink-0 text-brand-500")}
            fill="currentColor"
          />
        ))}
      </span>
    </span>
  );
}
