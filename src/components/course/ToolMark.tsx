import { toolMarks } from "@/lib/tool-marks";
import { cn } from "@/lib/utils";

/**
 * The registries name the same product differently — a course seed says
 * "Python", the after-12th seeds say "Python 3" — and some name a specific
 * edition of something whose mark is the parent brand. Rather than duplicate
 * paths in `tool-marks.ts`, those spellings resolve to the key that holds one.
 */
const ALIASES: Record<string, string> = {
  Python: "Python 3",
  Ubuntu: "Ubuntu Linux",
  "Search Console": "Google Search Console",
  "Meta Business Suite": "Meta Ads Manager",
  "Power BI Desktop": "Power BI",
  "Tableau Desktop": "Tableau",
  "Windows & Linux": "Windows",
  "OpenAI API": "ChatGPT",
  LangGraph: "LangChain",
};

function markFor(tool: string) {
  return toolMarks[tool] ?? toolMarks[ALIASES[tool] ?? ""];
}

/**
 * Brand marks are drawn in the vendor's own colour, which several of them —
 * Hugging Face yellow, Google Fonts blue-white — pitch far too bright to read
 * against a white chip. Anything above this relative luminance gets swapped
 * for ink instead of being rendered as a pale smudge.
 */
const MAX_LUMINANCE = 0.72;

function channel(value: number) {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

/** WCAG relative luminance, used only to decide "is this too pale to show". */
function luminance(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  return (
    0.2126 * channel((n >> 16) & 255) +
    0.7152 * channel((n >> 8) & 255) +
    0.0722 * (n & 255)
  );
}

/**
 * The logo for a tool, or a lettered tile when we have no distributable mark
 * for it. Generic entries in the stack — "Windows", "PDF tools", "Typing
 * tutor" — deliberately fall through to the tile rather than borrowing a
 * lookalike vendor's logo.
 *
 * `tone` says how the mark is coloured. `brand` uses each vendor's own colour,
 * which needs a light ground under it. `inherit` draws the mark in the caller's
 * text colour instead — the only thing that works on a panel that changes
 * background on hover, where a fixed brand colour would be legible in one state
 * and invisible in the other.
 */
export default function ToolMark({
  tool,
  tone = "brand",
  className,
}: {
  tool: string;
  tone?: "brand" | "inherit";
  className?: string;
}) {
  const mark = markFor(tool);
  const inherit = tone === "inherit";

  if (!mark) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "grid size-[18px] shrink-0 place-items-center rounded-[5px] text-[0.6rem] font-semibold",
          /* The tile has to track the caller's colour too, or it inverts out
             of step with the glyphs beside it. */
          inherit ? "bg-current/15" : "bg-brand-100 text-brand-700",
          className,
        )}
      >
        {tool.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("size-[18px] shrink-0", className)}
      style={{
        fill: inherit
          ? "currentColor"
          : luminance(mark.hex) > MAX_LUMINANCE
            ? "var(--color-ink)"
            : mark.hex,
      }}
    >
      <path d={mark.path} />
    </svg>
  );
}
