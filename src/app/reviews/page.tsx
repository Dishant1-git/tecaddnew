import type { Metadata } from "next";
import { site } from "@/lib/content";
import { ratingBreakdown, reviewStats, reviews } from "@/lib/reviews-content";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsPlatforms from "@/components/reviews/ReviewsPlatforms";
import ReviewsCarousel from "@/components/reviews/ReviewsCarousel";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `Student Reviews — TechCadd ${site.city}`,
  description: `Read ${reviewStats.count} reviews of TechCadd ${site.city} from students, working professionals and hiring partners — filtered by track, sorted by rating, criticism included.`,
  alternates: { canonical: "/reviews" },
};

/**
 * Review structured data, built from the same list the page renders so the
 * two can never drift.
 *
 * NOTE: `reviews-content.ts` currently holds placeholder reviews. This block
 * must not go live until those are replaced with the real, collected ones —
 * publishing an aggregate rating for reviews that were never left is exactly
 * what the search guidelines call review spam. Swap the content, keep this.
 */
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: `TechCadd ${site.city}`,
  url: "/reviews",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewStats.average,
    reviewCount: reviewStats.count,
    bestRating: 5,
    worstRating: Math.min(...ratingBreakdown.filter((r) => r.count).map((r) => r.stars)),
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    datePublished: review.date,
    reviewBody: review.quote,
    itemReviewed: { "@type": "Course", name: review.course },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
  })),
};

/**
 * The reviews page, ordered the way a sceptical reader works through one:
 * the headline number and its full distribution, where the ratings came
 * from, then every review in the carousel with the filters to interrogate
 * them.
 */
export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // The payload is our own content, serialised here rather than fetched.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <ReviewsHero />
      <ReviewsPlatforms />
      <ReviewsCarousel />
      <FinalCta />
    </>
  );
}
