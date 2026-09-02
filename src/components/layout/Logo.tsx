import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

/**
 * Wordmark lockup. The asset is the navy logo, so `inverted` filters it to
 * solid white for the dark header; the light footer uses it as supplied.
 */
export default function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} ${site.city} — home`}
      className={cn("flex items-center", className)}
    >
      <Image
        src="/images/icon/tce.png"
        alt=""
        width={940}
        height={260}
        // Rendered ~145px wide; without this Next preloads a 1080/1920 srcset.
        sizes="150px"
        priority
        className={cn(
          "h-9 w-auto transition-[filter] duration-500 lg:h-10",
          // brightness-0 flattens the navy to black, invert then lifts it to
          // pure white — no second asset needed.
          inverted && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
