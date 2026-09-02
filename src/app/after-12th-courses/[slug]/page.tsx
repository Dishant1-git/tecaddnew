import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  after12BasePath,
  after12Slugs,
  getAfter12Course,
  relatedAfter12Courses,
} from "@/lib/after-12th-courses";
import { site } from "@/lib/content";
import CourseHero from "@/components/course/CourseHero";
import CourseIntro from "@/components/course/CourseIntro";
import CourseOverview from "@/components/course/CourseOverview";
import ModuleExplorer from "@/components/course/ModuleExplorer";
import CoursePhases from "@/components/course/CoursePhases";
import ToolStack from "@/components/course/ToolStack";
import CourseFit from "@/components/course/CourseFit";
import CourseFutureScope from "@/components/course/CourseFutureScope";
import CourseProjects from "@/components/course/CourseProjects";
import CourseWhyChoose from "@/components/course/CourseWhyChoose";
import CourseReviews from "@/components/course/CourseReviews";
import CourseFaq from "@/components/course/CourseFaq";
import RelatedCourses from "@/components/course/RelatedCourses";
import CourseCta from "@/components/course/CourseCta";
import StickyCourseBar from "@/components/course/StickyCourseBar";
import ScrollToHero from "@/components/course/ScrollToHero";

type After12CoursePageProps = { params: Promise<{ slug: string }> };

/** Every after-12th programme in the registry is prerendered at build time. */
export function generateStaticParams() {
  return after12Slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: After12CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getAfter12Course(slug);

  if (!course) {
    return { title: `Course not found — ${site.name} ${site.city}` };
  }

  const title = `${course.title} Course After 12th in ${site.city} — ${site.name}`;

  return {
    title,
    description: course.hero.tagline,
    openGraph: { title, description: course.hero.tagline, type: "website" },
    alternates: { canonical: `${after12BasePath}/${course.slug}` },
  };
}

export default async function After12CoursePage({
  params,
}: After12CoursePageProps) {
  const { slug } = await params;
  const course = getAfter12Course(slug);

  if (!course) notFound();

  const related = relatedAfter12Courses(course.slug);

  return (
    <>
      <ScrollToHero />
      <CourseHero
        course={course}
        breadcrumb={{ label: "After 12th", href: after12BasePath }}
      />
      <CourseIntro
        course={course}
        audience="students who have just finished 12th"
      />
      <CourseOverview
        course={course}
        hideSpecLabels={["Duration", "Fee range"]}
        variant="cards"
      />
      <ModuleExplorer course={course} />
      <CoursePhases course={course} variant="stack" />
      <ToolStack course={course} withMarks />
      <CourseFit course={course} />
      <CourseProjects course={course} variant="steps" />
      <CourseFutureScope course={course} />
      <CourseWhyChoose course={course} tone="dark" />
      <CourseReviews course={course} hoverBehavior="slow" />
      <CourseFaq course={course} variant="split" />
      <RelatedCourses
        courses={related}
        basePath={after12BasePath}
        allLabel="Browse all After 12th courses"
      />
      <CourseCta course={course} showMessage={false} />
      <StickyCourseBar
        title={`${course.title} — After 12th, ${site.city}`}
        duration={course.spec[0].value}
      />
    </>
  );
}
