import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { courseSlugs } from "@/lib/courses";
import { after12Slugs } from "@/lib/after-12th-courses";
import { trainingSlugs } from "@/lib/training";

/**
 * Every indexable URL, derived from the same data the routes are built from —
 * so a course added to a seed file appears here without anyone remembering to
 * update a list.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;

  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/courses", priority: 0.9 },
    { path: "/after-12th-courses", priority: 0.9 },
    { path: "/internship-training", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/about/mission-vision", priority: 0.5 },
    { path: "/founder", priority: 0.5 },
    { path: "/college-partnerships", priority: 0.5 },
    { path: "/gallery", priority: 0.5 },
    { path: "/reviews", priority: 0.6 },
    { path: "/blogs", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: url(page.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...courseSlugs.map((slug) => ({
      url: url(`/courses/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...after12Slugs.map((slug) => ({
      url: url(`/after-12th-courses/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...trainingSlugs.map((slug) => ({
      url: url(`/internship-training/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
