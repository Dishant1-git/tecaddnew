import type { Course, CourseSummary } from "@/lib/courses";
import { buildAiView } from "@/lib/ai-course";
import { site } from "@/lib/content";

import CourseFaq from "@/components/course/CourseFaq";
import RelatedCourses from "@/components/course/RelatedCourses";
import CourseCta from "@/components/course/CourseCta";
import StickyCourseBar from "@/components/course/StickyCourseBar";
import ScrollToHero from "@/components/course/ScrollToHero";
import CourseHero from "@/components/course/CourseHero";

import AiOverview from "./AiOverview";
import AiReadiness from "./AiReadiness";
import AiAudience from "./AiAudience";
import AiWorth from "./AiWorth";
import AiVerify from "./AiVerify";
import AiCurriculum from "./AiCurriculum";
import AiToolMesh from "./AiToolMesh";
import AiCertificate from "./AiCertificate";
import AiCareers from "./AiCareers";
import AiProjects from "./AiProjects";
import AiAdvantages from "./AiAdvantages";
import AiCompare from "./AiCompare";
import AiReviews from "./AiReviews";

/**
 * The page shape for courses reached from the AI mega menu.
 *
 * Ordered as a single argument rather than a feature list: what the course is,
 * who it is for, why it is worth the time, what you build, what you leave with,
 * where it takes you, and only then the proof (comparison, reviews, FAQ).
 *
 * The closing three panels — FAQ, related courses and the enquiry form — are
 * the standard course components, deliberately shared so an enquiry submitted
 * from an AI page behaves identically to one from anywhere else in the
 * catalogue.
 */
export default function AiCoursePage({
  course,
  related,
}: {
  course: Course;
  related: CourseSummary[];
}) {
  const view = buildAiView(course);

  return (
    <>
      <ScrollToHero />

      <CourseHero course={course} curriculumHref="#ai-curriculum" />
      <AiOverview course={course} view={view} />
      <AiReadiness view={view} />
      <AiAudience view={view} />
      <AiWorth view={view} />
      <AiVerify view={view} />
      <AiCurriculum course={course} />
      <AiToolMesh course={course} />
      <AiCertificate view={view} />
      <AiCareers view={view} />
      <AiProjects view={view} />
      <AiAdvantages view={view} />
      <AiCompare view={view} />
      <AiReviews course={course} view={view} />

      <CourseFaq course={course} />
      <RelatedCourses courses={related} />
      <CourseCta course={course} showMessage={false} />

      <StickyCourseBar
        title={`${course.title} — ${site.city}`}
        duration={course.spec[0].value}
      />
    </>
  );
}
