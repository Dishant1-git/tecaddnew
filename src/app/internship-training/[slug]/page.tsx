import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getTrainingCourse,
  getTrainingSeed,
  relatedTraining,
  trainingBasePath,
  trainingSlugs,
} from "@/lib/training";
import { site } from "@/lib/content";
import CourseHero from "@/components/course/CourseHero";
import CourseIntro from "@/components/course/CourseIntro";
import CourseOverview from "@/components/course/CourseOverview";
import ModuleExplorer from "@/components/course/ModuleExplorer";
import CourseFit from "@/components/course/CourseFit";
import CourseFutureScope from "@/components/course/CourseFutureScope";
import CourseProjects from "@/components/course/CourseProjects";
import CourseWorkingLoop from "@/components/course/CourseWorkingLoop";
import CourseReviews from "@/components/course/CourseReviews";
import CourseFaq from "@/components/course/CourseFaq";
import CourseDemoBand from "@/components/course/CourseDemoBand";
import RelatedCourses from "@/components/course/RelatedCourses";
import CourseCta from "@/components/course/CourseCta";
import StickyCourseBar from "@/components/course/StickyCourseBar";
import ScrollToHero from "@/components/course/ScrollToHero";
import AiWorth from "@/components/course/ai/AiWorth";
import { buildAiView } from "@/lib/ai-course";
import TrainingPlan from "@/components/training/TrainingPlan";
import TrainingWhyNow from "@/components/training/TrainingWhyNow";
import TrainingDisciplines from "@/components/training/TrainingDisciplines";
import TrainingPaperwork from "@/components/training/TrainingPaperwork";
import TrainingWhy from "@/components/training/TrainingWhy";

type TrainingPageProps = { params: Promise<{ slug: string }> };

/** Every training format in the registry is prerendered at build time. */
export function generateStaticParams() {
  return trainingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TrainingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getTrainingCourse(slug);

  if (!course) {
    return { title: `Programme not found — ${site.name} ${site.city}` };
  }

  const title = `${course.title} in ${site.city} — Live Projects & Placement | ${site.name}`;

  return {
    title,
    description: course.hero.tagline,
    openGraph: { title, description: course.hero.tagline, type: "website" },
    alternates: { canonical: `${trainingBasePath}/${course.slug}` },
  };
}

/**
 * Two sections a course page renders are replaced here by format-specific
 * equivalents rather than dropped:
 *
 * - `CoursePhases` inferred three stages from the module count. A format is
 *   sold on its calendar, so `TrainingPlan` states the real spans instead.
 * - `ToolStack` needs a fixed subject to list a real toolchain. Here the
 *   discipline is picked at counselling, so `TrainingDisciplines` shows the
 *   catalogue rather than the same eight generic tools on all six pages.
 *
 * `TrainingPaperwork` sits where `CourseReviews` does on a course page rather
 * than replacing it — both now run, reviews immediately before the FAQ.
 *
 * `CourseTracks` is the one catalogue section deliberately absent: these pages
 * *are* the durations, so offering a shorter exit point inside one of them
 * would be selling the page next door.
 */
export default async function TrainingPage({ params }: TrainingPageProps) {
  const { slug } = await params;
  const course = getTrainingCourse(slug);
  const seed = getTrainingSeed(slug);

  if (!course || !seed) notFound();

  const related = relatedTraining(course.slug);

  return (
    <>
      <ScrollToHero />
      <CourseHero
        course={course}
        breadcrumb={{ label: "Internship & Training", href: trainingBasePath }}
      />
      <CourseIntro
        course={course}
        audience="students, graduates and working professionals"
      />
      <CourseOverview course={course} variant="panel" />
      <TrainingWhyNow course={course} />
      <AiWorth view={buildAiView(course)} />
      <TrainingPlan
        title={course.title}
        duration={seed.duration}
        plan={seed.plan}
      />
      <ModuleExplorer course={course} withMarks />
      <TrainingDisciplines title={course.title} />
      <CourseFit course={course} />
      <TrainingPaperwork title={course.title} credential={seed.credential} />
      <CourseFutureScope course={course} />
      <CourseProjects course={course} />
      <CourseWorkingLoop course={course} />
      <TrainingWhy
        title={course.title}
        intro={seed.copy?.why?.intro}
        reasons={seed.copy?.why?.reasons}
      />
      <CourseReviews course={course} hoverBehavior="slow" />
      <CourseFaq course={course} variant="split" />
      <CourseDemoBand course={course} />
      <RelatedCourses
        courses={related}
        basePath={trainingBasePath}
        allLabel="See all training formats"
      />
      <CourseCta course={course} variant="split" />
      <StickyCourseBar
        title={`${course.title} — ${site.city}`}
        duration={course.spec[0].value}
      />
    </>
  );
}
