This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Course pages (`/courses` and `/courses/[slug]`)

The course area is content-driven: one slug, one data object, one page.

```
src/lib/course-data.ts     34 course seeds — the only file you edit to add a course
src/lib/courses.ts         builds the full page model from a seed (modules, FAQ, personas…)
src/app/courses/page.tsx   catalogue: dark hero + searchable, category-grouped grid
src/app/courses/[slug]/    the detail page, prerendered for every slug
src/components/course/     the ten sections the detail page composes
src/components/ui/Motion.tsx  Framer Motion helpers (Stagger / FadeUp / WordsUp)
```

### Adding a course

Append one object to `courseSeeds` in `src/lib/course-data.ts`:

```ts
{
  slug: "rust",                 // becomes /courses/rust
  title: "Rust Programming",
  category: "Programming",      // must be one of the four CourseCategory values
  tagline: "...",               // one line under the hero headline
  focus: "...",                 // opening sentence of the overview
  duration: "3 months",
  level: "Beginner to intermediate",
  topics: [{ t: "Module title", s: ["Skill", "Skill", "Skill"] }, /* … */],
  tools: ["…"],                 // 8–12; split automatically into three rails
  roles: ["…"],                 // career destinations
  projects: [{ title: "…", body: "…" }],
}
```

Everything else — module blurbs and deliverables, the eligibility personas, the
FAQ, the stat rail, phase grouping, related-course links and page metadata — is
generated in `courses.ts`. The page is prerendered by `generateStaticParams`, so
no route registration is needed. Add a matching link in `src/lib/content.ts` if
the course should appear in the header dropdown.

### Page structure

Dark and light bands alternate, matching the homepage: hero (dark) → overview →
module explorer → phases → tool stack → who it's for and career outcomes (dark)
→ projects → FAQ → related courses → closing CTA (dark), with a dismissible
sticky enrol bar past the fold.

### Motion

Course pages use Framer Motion (`framer-motion`) for orchestration CSS cannot
express — staggered entrances, the `layoutId` module marker, the scroll-linked
phase spine, accordion height transitions. The rest of the site keeps using the
IntersectionObserver-based `Reveal` component. Both honour
`prefers-reduced-motion`.
