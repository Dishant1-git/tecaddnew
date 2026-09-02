import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery-content";
import { cn } from "@/lib/utils";
import GalleryArt from "./GalleryArt";

type GalleryTileProps = {
  item: GalleryItem;
  /** Sizing and rounding for the frame, e.g. `aspect-4/3 rounded-2xl`. */
  className?: string;
  /** Responsive hint for the optimiser; only used when `item.src` is set. */
  sizes?: string;
  priority?: boolean;
  /** Hide the gradient scrim and caption — used by the hero collage. */
  bare?: boolean;
  /**
   * A 2×2 block in the mosaic: it has four times the area of its neighbours,
   * so it carries the larger title and shows its caption without a hover.
   */
  feature?: boolean;
};

/**
 * One frame in the gallery.
 *
 * Both paths are live: with a `src` the tile renders the photograph
 * cover-filled, and without one it falls back to the gradient plate plus the
 * matching `GalleryArt` scene. Everything else — the frame, the scrim, the
 * caption, the hover lift — is identical either way, so swapping placeholder
 * for photograph is a one-line change in `gallery-content.ts`.
 */
export default function GalleryTile({
  item,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  bare = false,
  feature = false,
}: GalleryTileProps) {
  return (
    <div
      className={cn(
        "group/tile relative isolate size-full overflow-hidden bg-ink",
        className,
      )}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover/tile:scale-[1.06]"
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover/tile:scale-[1.06]",
            item.tone,
          )}
        >
          <div
            aria-hidden="true"
            className="circuit-texture absolute inset-0 opacity-30"
          />
          <div
            aria-hidden="true"
            className="dot-matrix absolute inset-0 opacity-[0.07]"
          />
          <GalleryArt scene={item.scene} />
        </div>
      )}

      {!bare && (
        <>
          {/* Two scrims: a full-tile wash that deepens on hover, and a
              heavier foot so the title holds against light artwork. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover/tile:bg-ink/35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink via-ink/55 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <span
              className={cn(
                "font-display block leading-snug font-semibold text-white text-balance",
                feature ? "text-base sm:text-xl" : "text-[0.8rem] sm:text-sm",
              )}
            >
              {item.title}
            </span>
            <span
              className={cn(
                "mt-1 block text-xs leading-relaxed text-white/65 transition-opacity duration-500",
                // A feature tile has the room to carry its caption at rest;
                // a single cell would be crowded by it.
                feature
                  ? "opacity-100"
                  : "opacity-0 group-hover/tile:opacity-100",
              )}
            >
              {item.caption}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
