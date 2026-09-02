import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "light" | "gradient";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 hover:-translate-y-0.5 shadow-sm hover:shadow-lg hover:shadow-brand-600/25",
  ghost:
    "bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
  outline:
    "bg-transparent text-ink ring-1 ring-inset ring-line hover:ring-brand-600 hover:text-brand-600 hover:-translate-y-0.5",
  light:
    "bg-white text-ink hover:bg-brand-50 hover:text-brand-700 hover:-translate-y-0.5",
  /* Matches the glowing AI pill in the header. */
  gradient:
    "bg-gradient-to-br from-brand-500 to-brand-600 text-white ring-1 ring-inset ring-white/25 shadow-[0_10px_26px_-8px_rgb(37_99_235/1)] hover:from-brand-400 hover:to-brand-600 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  /** Ignored when `href` is set — a link is a link. */
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
