"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  MonitorPlay,
  Signal,
} from "lucide-react";
import type { Course } from "@/lib/courses";
import { site } from "@/lib/content";
import { EASE, FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

/* -------------------------------------------------------------------- hero */

/**
 * The course's own 3D render, floated on an ambient bloom and tilted towards
 * the pointer. The render, its glow and its shadow sit on separate depths, so
 * the parallax between them reads as real dimension rather than a flat rotate.
 *
 * Courses without artwork render no right-hand column at all, so the copy
 * simply widens. All pointer motion is inert under prefers-reduced-motion.
 */
function CourseArt({ src }: { src: string }) {
  const reduce = useReducedMotion();

  /* Pointer position within the frame, as -0.5 … 0.5 on each axis. */
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 110, damping: 18, mass: 0.6 };

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [12, -12]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-14, 14]),
    spring,
  );
  /* The glow lags behind the render, opposite the tilt. */
  const glowX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [26, -26]),
    spring,
  );
  const glowY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [20, -20]),
    spring,
  );

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      aria-hidden="true"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ perspective: 1200 }}
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        style={
          reduce
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="relative grid size-full place-items-center"
      >
        <motion.span
          style={reduce ? undefined : { x: glowX, y: glowY }}
          className="absolute inset-10 rounded-full bg-brand-500/25 blur-[90px]"
        />
        <Image
          src={src}
          alt=""
          width={640}
          height={640}
          priority
          sizes="(min-width: 1024px) 460px, 90vw"
          // Lifted off the tilt plane so it parallaxes against the glow.
          style={reduce ? undefined : { transform: "translateZ(60px)" }}
          className="relative size-full object-contain drop-shadow-[0_36px_60px_rgb(0_0_0/0.55)]"
        />
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------- hero */

/**
 * The breadcrumb parent. Defaults to the /courses catalogue; the after-12th
 * pages pass their own hub so the trail matches the section a visitor is in.
 */
export type CourseBreadcrumb = { label: string; href: string };

const DEFAULT_BREADCRUMB: CourseBreadcrumb = {
  label: "Courses",
  href: "/courses",
};

export default function CourseHero({
  course,
  breadcrumb = DEFAULT_BREADCRUMB,
  curriculumHref = "#curriculum",
}: {
  course: Course;
  breadcrumb?: CourseBreadcrumb;
  /** Anchor the secondary CTA jumps to. The AI page shape ids its curriculum
      section differently, so it passes its own. */
  curriculumHref?: string;
}) {
  const meta = [
    { icon: Clock, label: course.spec[0].value },
    { icon: Signal, label: course.spec[1].value },
    { icon: MonitorPlay, label: course.spec[2].value },
  ];

  return (
    <>
      <section
        data-cursor="light"
        aria-labelledby="course-hero-heading"
        className="relative isolate overflow-hidden bg-ink pt-32 pb-36 text-white lg:pt-40 lg:pb-44"
      >
        {/*
          Background stack — decorative. Unlike the homepage hero, which drifts
          a single circuit layer, this one is built from counter-moving layers:
          traces crawl up-left, the grid pans down-right, two aurora blooms
          breathe on different periods, and a scan beam falls through it all.
          Every animation is disabled under prefers-reduced-motion in
          globals.css; the beam starts at opacity 0 so it stays hidden there.
        */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-ink/85 to-brand-700/55" />
          <div className="animate-trace-slow circuit-texture absolute inset-0 opacity-[0.28]" />
          <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
          <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
          <div className="animate-aurora-a absolute -top-[22%] -left-40 size-[42rem] rounded-full bg-brand-600/25 blur-[130px] will-change-transform" />
          <div className="animate-aurora-b absolute -right-40 bottom-[-32%] size-[38rem] rounded-full bg-accent/45 blur-[130px] will-change-transform" />
          <div className="animate-beam absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-transparent via-brand-400/12 to-transparent opacity-0 will-change-transform" />
          <div className="tech-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            {/* ------------------------------------------------------ copy */}
            <Stagger
              className={course.hero.image ? "lg:col-span-7" : "lg:col-span-12"}
              gap={0.09}
            >
              <FadeUp>
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1 text-xs text-white/40">
                    <li>
                      <Link
                        href="/"
                        className="transition-colors hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <ChevronRight className="size-3" aria-hidden="true" />
                    <li>
                      <Link
                        href={breadcrumb.href}
                        className="transition-colors hover:text-white"
                      >
                        {breadcrumb.label}
                      </Link>
                    </li>
                    <ChevronRight className="size-3" aria-hidden="true" />
                    <li aria-current="page" className="text-white/70">
                      {course.title}
                    </li>
                  </ol>
                </nav>
              </FadeUp>

              <FadeUp className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-xs font-medium ring-1 ring-white/15 ring-inset backdrop-blur-md">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  {course.hero.eyebrow}
                </span>
                {course.badge && (
                  <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
                    {course.badge}
                  </span>
                )}
              </FadeUp>

              <WordsUp
                as="h1"
                text={course.hero.headline}
                accent={course.hero.accent}
                className="mt-6 max-w-2xl text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.6rem]"
                delay={0.15}
              />
              <span id="course-hero-heading" className="sr-only">
                {course.title} course in {site.city}
              </span>

              <FadeUp className="mt-6 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg">
                {course.hero.tagline}
              </FadeUp>

              <FadeUp className="mt-8 flex flex-wrap items-center gap-2.5">
                {meta.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs text-white/65"
                  >
                    <Icon
                      className="size-3.5 text-brand-400"
                      aria-hidden="true"
                    />
                    {label}
                  </span>
                ))}
              </FadeUp>

              <FadeUp className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium whitespace-nowrap text-ink shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Book a free demo class
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={curriculumHref}
                  className="inline-flex h-13 items-center justify-center rounded-full px-8 text-base font-medium whitespace-nowrap text-white ring-1 ring-white/25 ring-inset backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  See the curriculum
                </Link>
              </FadeUp>
            </Stagger>

            {/* --------------------------------------------------- artwork */}
            {/* Hidden below lg: the render adds real weight to an already
                long mobile hero, and the copy above already carries the
                page on small screens. */}
            {course.hero.image && (
              <div className="hidden lg:col-span-5 lg:block">
                <CourseArt src={course.hero.image} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stat rail — a light card straddling the dark/light seam. */}
      <div className="relative z-20 -mt-16 lg:-mt-20">
        <div className="container-page">
          <Stagger
            as="ul"
            className="grid gap-px overflow-hidden rounded-3xl bg-line shadow-[0_30px_70px_-40px_rgb(15_23_42/0.5)] sm:grid-cols-2 lg:grid-cols-4"
            gap={0.07}
          >
            {course.stats.map((stat) => (
              <FadeUp as="li" key={stat.label} className="bg-white px-6 py-7">
                <p className="font-display text-3xl font-semibold text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </div>
    </>
  );
}
