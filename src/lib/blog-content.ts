/**
 * Copy and data for /blogs.
 *
 * One real post rather than a wall of placeholders — `blog.posts` in
 * content.ts is homepage lorem, kept separate until it's swapped for real
 * copy. Written by the trainers and placement desk, so the voice stays
 * specific rather than generic "top 10 tips" filler.
 */

import { site } from "./content";

export const blogHero = {
  eyebrow: "Blog",
  headingLead: "Notes from the classroom",
  headingBold: "and the codebase.",
  body: `Course guides, hiring trends and career advice, written by the trainers and placement team who see what employers actually ask for.`,
};

export type BlogPost = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-amritsar-hiring-managers-ask-first",
    tag: "Careers",
    date: "18 Aug 2026",
    title: `What ${site.city} hiring managers actually ask in a first technical interview`,
    excerpt:
      "Fewer algorithm puzzles than you would expect, more questions about a project you can explain end to end. Our placement desk sat in on a quarter's worth of interviews and wrote down what actually got asked.",
    href: "/blogs",
  },
];
