import { cn } from "@/lib/utils";

/**
 * `light`       — white surface for light sections.
 * `translucent` — frosted surface for use on top of a dark section.
 * `ink`         — solid dark surface, for a dark card inside a light section.
 */
type Tone = "light" | "translucent" | "ink";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  /** Lift and brighten the border on hover. */
  interactive?: boolean;
};

const tones: Record<Tone, string> = {
  light: "border-line bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04)]",
  translucent: "border-white/10 bg-white/[0.04]",
  ink: "border-white/10 bg-ink text-white",
};

const hovers: Record<Tone, string> = {
  light:
    "hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]",
  translucent:
    "hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]",
  ink: "hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-[0_18px_40px_-18px_rgb(15_23_42/0.5)]",
};

export default function Card({
  children,
  className,
  tone = "light",
  interactive = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border transition-all duration-300",
        tones[tone],
        interactive && hovers[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
