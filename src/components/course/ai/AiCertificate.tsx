"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Check, Download } from "lucide-react";
import type { AiCourseView } from "@/lib/ai-course";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Stagger } from "@/components/ui/Motion";
import AiBackdrop from "./AiBackdrop";
import AiHead from "./AiHead";

/**
 * A mock of two completion certificates fanned out like physical cards on a
 * desk — a muted "project excellence" plate peeking out behind the real
 * completion certificate. Decorative — every line printed on the front plate
 * is repeated as real text in the panel beside it. On hover the pair fans out
 * further, so the stack reads as tangible rather than a flat screenshot.
 */
function CertificatePlate({ view }: { view: AiCourseView }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative mx-auto max-w-md"
    >
      {/* back plate — a second certificate peeking out from behind */}
      <div
        className={cn(
          "absolute inset-x-6 top-0 -z-0 -rotate-6 rounded-2xl border border-white/15 bg-gradient-to-br from-white to-brand-50 p-2 opacity-90 shadow-[0_40px_90px_-45px_rgb(0_0_0/0.75)] transition-transform duration-500 ease-out",
          !reduce &&
            "group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-10",
        )}
      >
        <div className="relative isolate overflow-hidden rounded-xl border-2 border-brand-200 bg-white px-6 py-7">
          <span className="dot-matrix absolute inset-0 opacity-[0.05]" />
          <div className="relative text-center">
            <span className="font-display text-[0.55rem] font-bold tracking-[0.3em] text-brand-600 uppercase">
              {site.wordmark} · {site.wordmarkAccent}
            </span>
            <p className="font-display mt-4 text-[0.65rem] tracking-[0.22em] text-muted uppercase">
              Certificate
            </p>
            <p className="font-display -mt-0.5 text-xs font-semibold text-brand-700 italic">
              of Project Excellence
            </p>
            <span className="mx-auto mt-4 block h-px w-14 bg-brand-300" />
            <p className="mt-4 text-[0.65rem] text-muted">This is to certify that</p>
            <p className="font-display mt-1.5 text-base font-semibold text-ink/70">
              Student Name
            </p>
          </div>
        </div>
      </div>

      {/* front plate — the real completion certificate */}
      <div
        className={cn(
          "relative z-10 mt-10 rotate-3 rounded-2xl border border-white/15 bg-gradient-to-br from-white to-brand-50 p-2 shadow-[0_50px_100px_-40px_rgb(0_0_0/0.85)] transition-transform duration-500 ease-out",
          !reduce &&
            "group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-6",
        )}
      >
        <div className="relative isolate overflow-hidden rounded-xl border-2 border-brand-200 bg-white px-6 py-8 sm:px-10 sm:py-11">
          <span className="dot-matrix absolute inset-0 opacity-[0.05]" />

          <div className="relative text-center">
            <span className="font-display text-[0.6rem] font-bold tracking-[0.3em] text-brand-600 uppercase">
              {site.wordmark} · {site.wordmarkAccent}
            </span>
            <p className="font-display mt-5 text-xs tracking-[0.24em] text-muted uppercase">
              Certificate of Completion
            </p>

            <span className="mx-auto mt-4 block h-px w-16 bg-brand-300" />

            <p className="mt-5 text-xs text-muted">This is to certify that</p>
            <p className="font-display mt-2 text-2xl font-semibold text-ink sm:text-3xl">
              {view.certificate.recipient}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              has successfully completed the programme
            </p>
            <p className="font-display mt-1.5 text-sm font-semibold text-brand-700">
              {view.certificate.programme}
            </p>
          </div>

          <div className="relative mt-8 flex items-end justify-between gap-4">
            <div className="text-left">
              <span className="block h-px w-24 bg-line" />
              <span className="mt-1.5 block text-[0.6rem] tracking-[0.12em] text-muted uppercase">
                Centre Head
              </span>
            </div>

            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_28px_-12px_rgb(37_99_235/0.9)]">
              <Award className="size-6" strokeWidth={1.8} />
            </span>

            <div className="text-right">
              <span className="ml-auto block h-px w-24 bg-line" />
              <span className="mt-1.5 block text-[0.6rem] tracking-[0.12em] text-muted uppercase">
                {view.certificate.issued}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -inset-6 -z-10 rounded-3xl bg-brand-500/25 blur-[70px] transition-opacity duration-500 group-hover:opacity-90" />
    </motion.div>
  );
}

/* ---------------------------------------------------------------- section */

export default function AiCertificate({ view }: { view: AiCourseView }) {
  return (
    <section
      data-cursor="light"
      id="ai-certificate"
      aria-labelledby="ai-certificate-heading"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <AiBackdrop intensity="soft" />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <AiHead
              id="ai-certificate-heading"
              eyebrow="Certification"
              heading={view.certificate.heading}
              accent={view.certificate.accent}
              body={view.certificate.body}
              dark
            />

            <Stagger as="ul" className="mt-8 space-y-3" gap={0.07}>
              {view.certificate.points.map((point) => (
                <FadeUp
                  as="li"
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/65"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-300 ring-1 ring-brand-400/30 ring-inset">
                    <Check
                      className="size-3"
                      strokeWidth={3.5}
                      aria-hidden="true"
                    />
                  </span>
                  {point}
                </FadeUp>
              ))}
            </Stagger>

            <FadeUp standalone className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-7 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Enrol for the next batch
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-white ring-1 ring-white/25 ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Download className="size-4" aria-hidden="true" />
                Download brochure
              </Link>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <CertificatePlate view={view} />
          </div>
        </div>
      </div>
    </section>
  );
}
