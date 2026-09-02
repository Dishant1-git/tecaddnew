import Image from "next/image";
import { ABOUT_ICONS, type AboutIconKey } from "./icons";
import { cn } from "@/lib/utils";

type AboutImageProps = {
  /**
   * Path under /public. The artwork shipped in `/public/about` is placeholder
   * illustration — drop a real photograph at the same path (any format
   * next/image supports) and it takes over with no code change.
   */
  src?: string;
  alt: string;
  /** Sizing/rounding for the frame, e.g. "aspect-16/10 rounded-2xl". */
  className?: string;
  /** Responsive hint for the optimiser; matches the frame's rendered width. */
  sizes?: string;
  /** Small label pinned to the bottom-left of the frame. */
  caption?: string;
  /** Fallback artwork when `src` is absent: gradient stops + an icon key. */
  gradient?: string;
  icon?: string;
  /** Frame edge: `light` for white sections, `dark` for the ink ones. */
  tone?: "light" | "dark";
  priority?: boolean;
};

const TONES = {
  light: "ring-line shadow-[0_24px_60px_-30px_rgb(15_23_42/0.55)]",
  dark: "ring-white/10",
} as const;

/**
 * One media frame for the About page.
 *
 * Photography is not in place yet, so this keeps both paths alive: with a
 * `src` it renders next/image cover-filled, and without one it falls back to
 * the site's gradient-and-circuit plate. Same frame, same caption, either way.
 *
 * `.svg` sources are served unoptimised by next/image automatically, so the
 * placeholder illustrations need no config.
 */
export default function AboutImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  caption,
  gradient = "from-brand-600 via-brand-700 to-accent",
  icon = "cpu",
  tone = "light",
  priority = false,
}: AboutImageProps) {
  const Icon = ABOUT_ICONS[icon as AboutIconKey] ?? ABOUT_ICONS.cpu;

  return (
    <div
      className={cn(
        "group/media relative overflow-hidden rounded-2xl bg-ink ring-1",
        TONES[tone],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover/media:scale-105"
        />
      ) : (
        <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)}>
          <div
            aria-hidden="true"
            className="circuit-texture absolute inset-0 opacity-45"
          />
          <div
            aria-hidden="true"
            className="dot-matrix absolute inset-0 opacity-[0.08]"
          />
          <Icon
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-white/20"
          />
        </div>
      )}

      {/* Scrim so a caption stays legible over any artwork. */}
      {caption && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/85 to-transparent"
          />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 py-1.5 pr-3.5 pl-3 text-xs font-semibold text-ink backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-brand-600" aria-hidden="true" />
            {caption}
          </span>
        </>
      )}
    </div>
  );
}
