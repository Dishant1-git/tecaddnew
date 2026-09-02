import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  text: string;
  /** Words rendered in the brand accent colour. Matched case-sensitively. */
  accent?: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClassName?: string;
  id?: string;
};

/**
 * Splits a heading into per-word spans so a parent `.in-view` (see Reveal)
 * can stagger them. Purely presentational — it stays a server component.
 */
export default function SplitHeading({
  text,
  accent = [],
  as: Tag = "h2",
  className,
  accentClassName = "text-gold-500",
  id,
}: SplitHeadingProps) {
  const words = text.split(" ");
  const accentSet = new Set(accent);

  return (
    <Tag
      id={id}
      className={cn(
        "font-display font-semibold tracking-tight text-balance",
        className,
      )}
    >
      {words.map((word, i) => (
        // The space sits outside the animated span: trailing whitespace inside
        // an inline-block collapses, which would run the words together.
        <span key={`${word}-${i}`}>
          <span
            className={cn("word", accentSet.has(word) && accentClassName)}
            style={{ "--i": i } as React.CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
