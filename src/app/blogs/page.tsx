import type { Metadata } from "next";
import { site } from "@/lib/content";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: `Blog — TechCadd ${site.city}`,
  description: `Course guides, hiring trends and career advice from the TechCadd ${site.city} trainers and placement team.`,
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <FinalCta />
    </>
  );
}
