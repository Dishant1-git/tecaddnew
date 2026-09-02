import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  courseSlugs,
  getCourse,
  relatedCourses,
  type Course,
} from "@/lib/courses";
import { buildAiView, isAiCourse } from "@/lib/ai-course";
import { site } from "@/lib/content";
import AiCoursePage from "@/components/course/ai/AiCoursePage";
import CourseHero from "@/components/course/CourseHero";
import AiOverview from "@/components/course/ai/AiOverview";
import AiWorth from "@/components/course/ai/AiWorth";
import AiCertificate from "@/components/course/ai/AiCertificate";
import ModuleExplorer from "@/components/course/ModuleExplorer";
import ToolStack from "@/components/course/ToolStack";
import CourseFit from "@/components/course/CourseFit";
import CourseFutureScope from "@/components/course/CourseFutureScope";
import CourseProjects from "@/components/course/CourseProjects";
import CourseWorkingLoop from "@/components/course/CourseWorkingLoop";
import CourseWhyChoose from "@/components/course/CourseWhyChoose";
import CourseReviews from "@/components/course/CourseReviews";
import CourseFaq from "@/components/course/CourseFaq";
import CourseTracks from "@/components/course/CourseTracks";
import CourseDemoBand from "@/components/course/CourseDemoBand";
import RelatedCourses from "@/components/course/RelatedCourses";
import CourseCta from "@/components/course/CourseCta";
import StickyCourseBar from "@/components/course/StickyCourseBar";
import ScrollToHero from "@/components/course/ScrollToHero";

type CoursePageProps = { params: Promise<{ slug: string }> };

/** Every course in the registry is prerendered at build time. */
export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) return { title: `Course not found — ${site.name} ${site.city}` };

  /* A course with written SEO copy uses its own title tag, description and
     keyword set; everything else keeps the generated pair. */
  const title = course.seo?.title ?? `${course.title} Course in ${site.city} — ${site.name}`;
  const description = course.seo?.description ?? course.hero.tagline;

  return {
    title,
    description,
    keywords: course.seo?.keywords,
    openGraph: { title, description, type: "website" },
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

/**
 * Course, FAQPage and BreadcrumbList structured data for a catalogue page.
 *
 * Built from the same model the page renders, so the two cannot drift. There is
 * deliberately no Review or AggregateRating node: the reviews on these pages are
 * not yet collected through a verified channel, and marking them up as if they
 * were is the one piece of this schema that would be a misrepresentation.
 */
function courseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: `${course.title} Course in ${site.city}`,
        description: course.seo?.description ?? course.hero.tagline,
        url: `${site.url}/courses/${course.slug}`,
        provider: {
          "@type": "EducationalOrganization",
          name: site.name,
          url: site.url,
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressRegion: "Punjab",
            addressCountry: "IN",
          },
          telephone: site.phone,
        },
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: ["Onsite", "Online"],
            location: {
              "@type": "Place",
              name: `${site.name} ${site.city}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: site.city,
                addressRegion: "Punjab",
                addressCountry: "IN",
              },
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: course.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Courses",
            item: `${site.url}/courses`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: course.title,
            item: `${site.url}/courses/${course.slug}`,
          },
        ],
      },
    ],
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) notFound();

  const related = relatedCourses(course.slug);

  /* Courses that hang off the AI mega menu get their own, longer page shape.
     Everything else keeps the standard catalogue layout below. */
  if (isAiCourse(course.slug)) {
    return <AiCoursePage course={course} related={related} />;
  }

  const view = buildAiView(course);

  return (
    <>
      <script
        type="application/ld+json"
        // The payload is our own content, serialised here rather than fetched.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd(course)) }}
      />
      <ScrollToHero />
      <CourseHero course={course} />
      <AiOverview course={course} view={view} />
      <AiWorth view={view} />
      <ModuleExplorer course={course} />
      <ToolStack course={course} />
      <AiCertificate view={view} />
      <CourseProjects course={course} />
      <CourseWorkingLoop course={course} />
      <CourseFit course={course} variant="checklist" />
      <CourseFutureScope course={course} />
      <CourseWhyChoose course={course} />
      {/* Courses whose copy argues the programme and the institute separately
          draw the second panel here, on the dark ground so the two alternate. */}
      {course.whyChooseAlt && (
        <CourseWhyChoose course={course} panel="alt" tone="dark" />
      )}
      <CourseReviews course={course} />
      <CourseFaq course={course} />
      <CourseTracks course={course} />
      <CourseDemoBand course={course} />
      <RelatedCourses courses={related} />
      <CourseCta course={course} showMessage={false} alignTop />
      <StickyCourseBar
        title={`${course.title} — ${site.city}`}
        duration={course.spec[0].value}
      />
    </>
  );
}
