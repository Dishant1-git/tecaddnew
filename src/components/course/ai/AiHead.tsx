"use client";

import { cn } from "@/lib/utils";
import { FadeUp, WordsUp } from "@/components/ui/Motion";

/**
 * The section header shared by every panel of the AI course page: a small
 * uppercase kicker, a two-tone heading that lifts in word by word, and an
 * optional intro paragraph.
 *
 * The AI pages alternate dark and light panels, so every colour here is chosen
 * by the `dark` flag rather than inherited — a heading that relies on ambient
 * text colour reads as muted grey on one panel and invisible on the next.
 */
export default function AiHead({
  id,
  eyebrow,
  heading,
  accent,
  body,
  dark = false,
  centered = false,
  className,
}: {
  /** Used for the visually hidden label the section's aria-labelledby points at. */
  id: string;
  eyebrow: string;
  heading: string;
  accent?: string;
  body?: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        centered && "flex flex-col items-center text-center",
        className,
      )}
    >
      <FadeUp standalone>
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
            dark ? "text-gold-300" : "text-gold-500",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-6",
              dark ? "bg-brand-400/60" : "bg-brand-600/40",
            )}
          />
          {eyebrow}
        </span>
      </FadeUp>

      <WordsUp
        as="h2"
        text={heading}
        accent={accent}
        accentClassName={dark ? "text-gold-300" : "text-gold-500"}
        className={cn(
          "mt-4 max-w-3xl text-3xl leading-[1.14] font-semibold sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink",
        )}
      />
      <span id={id} className="sr-only">
        {heading} {accent}
      </span>

      {body && (
        <FadeUp
          standalone
          as="p"
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed",
            dark ? "text-white/55" : "text-muted",
          )}
        >
          {body}
        </FadeUp>
      )}
    </div>
  );
}
