import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

type SectionProps = {
  id: string;
  eyebrow?: string;
  heading?: string;
  accent?: string[];
  body?: string;
  /** Dark sections invert eyebrow, heading and body colours. */
  dark?: boolean;
  /** Center the heading block instead of left-aligning it. */
  centered?: boolean;
  className?: string;
  headerClassName?: string;
  /** Rendered to the right of the heading block on large screens. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
};

/** Eyebrow label — a small uppercase kicker above the section heading. */
export function Eyebrow({
  children,
  dark,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
        dark ? "text-gold-300" : "text-gold-500",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          dark ? "bg-gold-300/60" : "bg-gold-500/60",
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

/**
 * Standard section shell: vertical rhythm, page container, and the shared
 * eyebrow / heading / intro block. Sections with bespoke headers pass no
 * `heading` and lay out their own header inside `children`.
 */
export default function Section({
  id,
  eyebrow,
  heading,
  accent,
  body,
  dark = false,
  centered = false,
  className,
  headerClassName,
  aside,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={heading ? headingId : undefined}
      aria-label={heading ? undefined : eyebrow}
      className={cn(
        "py-20 lg:py-28",
        dark && "bg-ink text-white",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || heading || body) && (
          <Reveal
            className={cn(
              "flex flex-col gap-6",
              aside
                ? "lg:flex-row lg:items-end lg:justify-between"
                : centered && "items-center text-center",
              headerClassName,
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-4",
                aside && "lg:max-w-2xl",
                centered && !aside && "items-center",
              )}
            >
              {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
              {heading && (
                <SplitHeading
                  id={headingId}
                  text={heading}
                  accent={accent}
                  className={cn(
                    "text-3xl leading-[1.12] sm:text-4xl lg:text-5xl",
                    dark ? "text-white" : "text-ink",
                  )}
                  accentClassName={dark ? "text-gold-300" : "text-gold-500"}
                />
              )}
              {body && (
                <p
                  className={cn(
                    "max-w-2xl text-base leading-relaxed",
                    dark ? "text-white/65" : "text-muted",
                  )}
                >
                  {body}
                </p>
              )}
            </div>
            {aside && <div className="shrink-0">{aside}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
