"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Award } from "lucide-react";
import { site } from "@/lib/content";

/**
 * The two certificate plates, tilting toward the pointer.
 *
 * They are decorative and marked `aria-hidden` — every line printed on them is
 * repeated as real text in the panel beside them, which is the contract
 * `AiCertificate` follows too. They are mock-ups: the recipient reads "Student
 * Name" so they cannot be mistaken for an issued record, and they carry no
 * verification URL because there is no verification service to name.
 */

/** Resting tilt for each plate, and how hard each one answers the pointer. */
const PLATES = [
  { base: { ry: -14, rx: 5, rz: -3, z: -50 }, react: { ry: 13, rx: 10 } },
  { base: { ry: -10, rx: 3, rz: 2, z: 45 }, react: { ry: 20, rx: 15 } },
] as const;

/** One corner bracket of the printed border. */
function Corner({ className }: { className: string }) {
  return (
    <span
      className={`absolute size-5 border-brand-500/60 ${className}`}
      aria-hidden="true"
    />
  );
}

function Plate({
  kicker,
  title,
  subtitle,
  body,
  serial,
  className,
  transform,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  body: string;
  serial: string;
  /** Must carry the plate's own `position` — see the note below. */
  className: string;
  transform: MotionValue<string>;
}) {
  return (
    /* No `position` here on purpose: a hardcoded `relative` would beat the
       caller's own positioning class, since both land at equal specificity and
       Tailwind's canonical order decides the winner rather than source order. */
    /* Each plate carries its own perspective and the wrapper stays flat. Share
       one `preserve-3d` context between them and the two tilted planes
       intersect in 3D — Chrome then draws the intersection line straight across
       the front plate, and z-index stops applying because 3D depth sorts
       instead. */
    <div
      className={className}
      /* 700px, not the ~1500 that reads as "correct": at this element width a
         long lens converges the far edge by under 10%, which measures as a
         trapezoid but looks flat. Short lens plus a right-of-centre vanishing
         point is what actually reads as depth. */
      style={{ perspective: "700px", perspectiveOrigin: "75% 40%" }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl border border-brand-200/70 bg-[#fdfcf7] px-6 py-7 shadow-[0_2px_0_rgb(255_255_255/0.9)_inset,-14px_24px_40px_-22px_rgb(15_23_42/0.30),-30px_60px_100px_-45px_rgb(15_23_42/0.38)] sm:px-8 sm:py-9"
        style={{ transform }}
      >
        {/* Specular sheen — the cue that sells a tilted plane as a lit surface
          rather than a flat card that happens to be rotated. Explicit stops:
          a two-stop gradient puts its midpoint across the middle of the plate
          and reads as a hard diagonal seam rather than a highlight. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgb(255_255_255/0.55)_0%,rgb(255_255_255/0.12)_16%,rgb(255_255_255/0)_38%,rgb(15_23_42/0.07)_100%)]"
        />
        <Corner className="top-3 left-3 border-t-2 border-l-2" />
        <Corner className="top-3 right-3 border-t-2 border-r-2" />
        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
        <Corner className="bottom-3 right-3 border-r-2 border-b-2" />

        {/* Ghosted wordmark, the way a printed certificate carries a watermark. */}
        <span className="font-display pointer-events-none absolute inset-0 grid place-items-center text-5xl font-bold text-brand-900/[0.045] sm:text-6xl">
          {site.name.toLowerCase()}
        </span>

        <div className="relative text-center">
          <span className="font-display text-lg font-bold tracking-tight text-brand-700">
            {site.name.toLowerCase()}
            <span className="align-super text-[0.5rem]">™</span>
          </span>
          <p className="mt-1 text-[0.55rem] font-semibold tracking-[0.22em] text-muted uppercase">
            {kicker}
          </p>

          <p className="font-display mt-5 text-xl font-bold tracking-[0.14em] text-ink uppercase sm:text-2xl">
            {title}
          </p>
          <p className="font-display mt-0.5 text-sm text-gold-600 italic">
            {subtitle}
          </p>

          <p className="mt-5 text-[0.6rem] tracking-[0.18em] text-muted uppercase">
            This is to certify that
          </p>
          <p className="font-display mt-1 text-xl font-semibold text-ink italic sm:text-2xl">
            Student Name
          </p>
          <p className="mx-auto mt-2.5 max-w-xs text-[0.7rem] leading-relaxed text-muted">
            {body}
          </p>
        </div>

        <div className="relative mt-7 flex items-end justify-between gap-4">
          <div className="text-left">
            <span className="block h-px w-20 bg-ink/25" />
            <span className="mt-1 block text-[0.5rem] tracking-[0.14em] text-muted uppercase">
              Course Director
            </span>
          </div>

          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-white shadow-[0_8px_20px_-8px_rgb(202_138_4/0.9)]">
            <Award className="size-5" strokeWidth={1.8} />
          </span>

          <div className="text-right">
            <span className="ml-auto block h-px w-20 bg-ink/25" />
            <span className="mt-1 block text-[0.5rem] tracking-[0.14em] text-muted uppercase">
              Centre Head
            </span>
          </div>
        </div>

        <p className="relative mt-5 text-center text-[0.5rem] tracking-[0.14em] text-muted uppercase">
          {serial} · Issued at {site.name} {site.city}
        </p>
      </motion.div>
    </div>
  );
}

export default function TrainingPlates({ title }: { title: string }) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);

  /* Pointer offset from the centre of the group, in -0.5…0.5. Springs rather
     than raw values so the plates settle instead of snapping, and so leaving
     the section eases them home. */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 130, damping: 18, mass: 0.5 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const [back, front] = PLATES;

  const backRy = useTransform(sx, (v) => back.base.ry + v * back.react.ry);
  const backRx = useTransform(sy, (v) => back.base.rx - v * back.react.rx);
  const frontRy = useTransform(sx, (v) => front.base.ry + v * front.react.ry);
  const frontRx = useTransform(sy, (v) => front.base.rx - v * front.react.rx);

  const backTransform = useMotionTemplate`rotateY(${backRy}deg) rotateX(${backRx}deg) rotateZ(${back.base.rz}deg) translateZ(${back.base.z}px)`;
  const frontTransform = useMotionTemplate`rotateY(${frontRy}deg) rotateX(${frontRx}deg) rotateZ(${front.base.rz}deg) translateZ(${front.base.z}px)`;

  /* Mouse only. A touch "move" is a drag the user is already committed to, and
     tilting under their finger reads as a bug rather than as depth. */
  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const box = wrap.current?.getBoundingClientRect();
    if (!box) return;
    px.set((event.clientX - box.left) / box.width - 0.5);
    py.set((event.clientY - box.top) / box.height - 0.5);
  }

  function onPointerLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    /* Overlapped by pulling the second plate up rather than taking it out of
       flow, so the wrapper still sizes to both. The pointer area is padded out
       past the plates so the tilt starts before the cursor reaches them. */
    <div
      ref={wrap}
      aria-hidden="true"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative mx-auto max-w-xl px-2 py-6"
    >
      <span className="absolute inset-x-4 top-10 bottom-10 -z-10 rounded-[3rem] bg-brand-200/60 blur-[80px]" />

      <Plate
        kicker={`Computer Education · ${site.city}`}
        title="Certificate"
        subtitle="of Project Excellence"
        body={`has completed a reviewed capstone project during the ${title} programme.`}
        serial="Cert. no. TC/PRJ/2026/1930"
        className="relative z-10 mr-4 sm:mr-24"
        transform={backTransform}
      />

      <Plate
        kicker={`Computer Education · ${site.city}`}
        title="Certificate"
        subtitle="of Course Completion"
        body={`has successfully completed the professional training programme in ${title}.`}
        serial="Cert. no. TC/CRS/2026/1930"
        className="relative z-20 -mt-28 ml-4 sm:-mt-36 sm:ml-24"
        transform={frontTransform}
      />
    </div>
  );
}
