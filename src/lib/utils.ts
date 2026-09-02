/**
 * Join class names, keeping only non-empty strings. Accepts arbitrary values so
 * `cond && "class"` works even when `cond` is a ReactNode or number.
 */
export function cn(...parts: unknown[]) {
  return parts.filter((p): p is string => typeof p === "string" && p !== "").join(" ");
}
