import { Award, FlaskConical, GraduationCap, Presentation, Briefcase, Users } from "lucide-react";
import { waysWeWork, type CollegeWay } from "@/lib/college-content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const WAY_ICONS: Record<CollegeWay["icon"], typeof Presentation> = {
  workshop: Presentation,
  training: GraduationCap,
  placement: Briefcase,
  faculty: Users,
  lab: FlaskConical,
  certificate: Award,
};

export default function CollegeWays() {
  return (
    <Section
      id="what-we-run"
      eyebrow={waysWeWork.eyebrow}
      heading={waysWeWork.heading}
      centered
      className="bg-brand-50/40"
    >
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {waysWeWork.items.map((item, i) => {
          const Icon = WAY_ICONS[item.icon];
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 90}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-18px_rgb(37_99_235/0.35)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full"
              />

              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>

              <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
