import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ChartLine,
  Cloud,
  Code,
  Compass,
  Cpu,
  Database,
  Eye,
  Factory,
  Flame,
  GitBranch,
  GraduationCap,
  Handshake,
  Lightbulb,
  Medal,
  Megaphone,
  MessageSquare,
  Network,
  Presentation,
  Repeat,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  Terminal,
  Trophy,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * One lookup for every icon the About page references by name.
 *
 * The copy in `about-content.ts` stores icon *keys* so the content file stays
 * free of component imports; each section resolves them through this map.
 */
export const ABOUT_ICONS = {
  award: Award,
  book: BookOpen,
  briefcase: Briefcase,
  building: Building2,
  chart: ChartLine,
  cloud: Cloud,
  code: Code,
  compass: Compass,
  cpu: Cpu,
  database: Database,
  eye: Eye,
  factory: Factory,
  flame: Flame,
  git: GitBranch,
  graduation: GraduationCap,
  handshake: Handshake,
  lightbulb: Lightbulb,
  medal: Medal,
  megaphone: Megaphone,
  message: MessageSquare,
  network: Network,
  presentation: Presentation,
  repeat: Repeat,
  rocket: Rocket,
  shield: ShieldCheck,
  star: Star,
  target: Target,
  terminal: Terminal,
  trophy: Trophy,
  users: Users,
  wrench: Wrench,
} satisfies Record<string, LucideIcon>;

export type AboutIconKey = keyof typeof ABOUT_ICONS;

/** Resolves an icon key from the content file, falling back to a safe default. */
export function aboutIcon(key: string): LucideIcon {
  return ABOUT_ICONS[key as AboutIconKey] ?? Target;
}
