"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TabGroupProps = {
  labels: string[];
  renderPanel: (index: number) => React.ReactNode;
  /** Replaces the plain label text inside the tab button. */
  renderLabel?: (label: string, index: number, selected: boolean) => React.ReactNode;
  orientation?: "horizontal" | "vertical";
  dark?: boolean;
  className?: string;
  listClassName?: string;
  panelClassName?: string;
};

/**
 * Accessible tabs shared by the Technologies and Capabilities sections.
 * Follows the ARIA tabs pattern: roving tabindex, arrow-key navigation,
 * Home/End jumps, and manual activation only on the focused tab.
 */
export default function TabGroup({
  labels,
  renderPanel,
  renderLabel,
  orientation = "horizontal",
  dark = false,
  className,
  listClassName,
  panelClassName,
}: TabGroupProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const vertical = orientation === "vertical";

  function focusTab(index: number) {
    const next = (index + labels.length) % labels.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    const prevKey = vertical ? "ArrowUp" : "ArrowLeft";
    const nextKey = vertical ? "ArrowDown" : "ArrowRight";

    if (event.key === nextKey) {
      event.preventDefault();
      focusTab(active + 1);
    } else if (event.key === prevKey) {
      event.preventDefault();
      focusTab(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(labels.length - 1);
    }
  }

  return (
    <div className={cn(vertical ? "lg:flex lg:gap-10" : "", className)}>
      <div
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={onKeyDown}
        className={cn(
          vertical
            ? "flex gap-2 overflow-x-auto pb-2 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0"
            : "flex flex-wrap gap-2",
          listClassName,
        )}
      >
        {labels.map((label, i) => {
          const selected = i === active;
          return (
            <button
              key={label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                vertical && "lg:w-full lg:rounded-xl lg:text-left",
                selected
                  ? dark
                    ? "bg-white text-ink"
                    : "bg-brand-600 text-white shadow-sm shadow-brand-600/25"
                  : dark
                    ? "text-white/60 ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:text-white"
                    : "text-muted ring-1 ring-inset ring-line hover:text-ink hover:ring-brand-200",
              )}
            >
              {renderLabel ? renderLabel(label, i, selected) : label}
            </button>
          );
        })}
      </div>

      {labels.map((label, i) => (
        <div
          key={label}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className={cn(
            i === active && "animate-[fade-in_0.4s_ease-out]",
            vertical ? "mt-8 lg:mt-0 lg:flex-1" : "mt-8",
            panelClassName,
          )}
        >
          {i === active ? renderPanel(i) : null}
        </div>
      ))}
    </div>
  );
}
