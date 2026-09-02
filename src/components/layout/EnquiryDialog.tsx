"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  RotateCw,
  Star,
  X,
} from "lucide-react";
import { enquiry, site } from "@/lib/content";
import { courseSummaries } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { submitEnquiry } from "@/lib/submit-enquiry";

/* --------------------------------------------------------------- context */

type EnquiryContext = {
  /**
   * Opens the dialog. Pass the slug of the course the visitor is currently
   * reading about (e.g. from the course-page pathname) to have the course
   * picker pre-select it — the Book Demo button in the header does this so
   * clicking it never asks someone to re-pick the course they are already on.
   */
  open: (courseSlug?: string) => void;
};

const Ctx = createContext<EnquiryContext | null>(null);

/** Opens the enquiry dialog from anywhere under the provider. */
export function useEnquiry() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}

/** Marks the auto-open as spent, so it fires once per tab, not per navigation. */
const SEEN_KEY = "techcadd:enquiry-seen";

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialCourse, setInitialCourse] = useState<string | undefined>();

  const open = useCallback((courseSlug?: string) => {
    setInitialCourse(courseSlug);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  /* Show itself once, a few seconds in — never again this tab. */
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // Private mode or blocked storage: fall through and show it.
    }
    if (seen) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Nothing to do — worst case it opens again next load.
      }
    }, enquiry.autoOpenAfter * 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <EnquiryDialog open={isOpen} onClose={close} initialCourse={initialCourse} />
    </Ctx.Provider>
  );
}

/* ---------------------------------------------------------------- dialog */

/** A small arithmetic challenge — enough to stop naive bots. */
function newChallenge() {
  const a = 1 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  return { a, b };
}

function EnquiryDialog({
  open,
  onClose,
  initialCourse,
}: {
  open: boolean;
  onClose: () => void;
  /** Course slug to pre-select, set by whatever opened the dialog. */
  initialCourse?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  /* Seeded during render, so there is no setState-in-effect. The server and
     client necessarily roll different numbers, so the one element that shows
     them opts out of hydration matching. */
  const [challenge, setChallenge] = useState(newChallenge);

  /* Carries the course from wherever "Book Demo" was clicked into the
     picker, each time the dialog opens with one to carry. Adjusted during
     render (rather than in an effect) by tracking the previous `open` value,
     so there is no cascading-render setState-in-effect. */
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open && initialCourse) setCourse(initialCourse);
  }

  /* Escape to close, focus kept inside, page scroll locked while open —
     the same contract as the mobile drawer. */
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("select, input")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};

    if (!course) next.course = "Choose the course you are interested in.";
    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (phone.replace(/\D/g, "").length !== 10)
      next.phone = "Enter a valid 10-digit mobile number.";
    if (Number(answer) !== challenge.a + challenge.b)
      next.answer = "That sum is not right — try again.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setChallenge(newChallenge());
      setAnswer("");
      return;
    }

    submitEnquiry("enquiry_dialog", Object.fromEntries(new FormData(event.currentTarget)));
    setSent(true);
  }

  const field =
    "h-13 w-full rounded-xl border border-white/25 bg-white/15 px-4 text-sm text-white placeholder:text-white/70 outline-none transition-colors duration-200 focus:border-white/60 focus:bg-white/20";

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-100 grid place-items-center p-4",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${baseId}-title`}
        className={cn(
          "relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl shadow-[0_50px_120px_-30px_rgb(0_0_0/0.8)] transition-all duration-300 md:grid-cols-2",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full text-white/80 ring-1 ring-white/40 ring-inset transition-colors hover:bg-white/15 hover:text-white"
        >
          <X className="size-4" />
        </button>

        {/* ------------------------------------------------------ left panel */}
        <div className="flex flex-col gap-5 bg-brand-900 p-7 text-white lg:p-9">
          <h2
            id={`${baseId}-title`}
            className="font-display text-2xl leading-snug font-bold"
          >
            {/* Pivots at the wrist, not the centre of the glyph. */}
            <span
              aria-hidden="true"
              className="animate-wave inline-block origin-[70%_75%]"
            >
              👋
            </span>{" "}
            {enquiry.heading}
          </h2>
          <p className="text-sm leading-relaxed text-white/65">
            {enquiry.body}
          </p>

          <figure className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <blockquote className="text-base leading-snug font-semibold">
              “{enquiry.quote.text}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Image
                src="/favicons/android-chrome-192x192.png"
                alt=""
                width={192}
                height={192}
                className="size-10 rounded-full"
              />
              <span className="text-sm">
                <span className="block font-semibold">
                  {enquiry.quote.author}
                </span>
                <span className="block text-white/55">
                  {enquiry.quote.role}
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-ink">
              {enquiry.verified.label}
              <BadgeCheck
                className="size-4 fill-brand-600 text-white"
                aria-hidden="true"
              />
            </span>
            <span
              className="flex items-center gap-0.5"
              aria-label={`${enquiry.verified.stars} out of 5`}
            >
              {Array.from({ length: enquiry.verified.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-gold-400 text-gold-400"
                  aria-hidden="true"
                />
              ))}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-white/50">
            {enquiry.emailLead}{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-white underline underline-offset-2"
            >
              {site.email}
            </a>
            , {enquiry.emailTail}
          </p>
        </div>

        {/* ----------------------------------------------------- right panel */}
        <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-violet-600 p-7 text-white lg:p-9">
          {sent ? (
            <div className="flex h-full flex-col items-start justify-center gap-3">
              <CheckCircle2 className="size-10" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold">
                {enquiry.form.successHeading}
              </h3>
              <p className="text-sm text-white/80">
                {enquiry.form.successBody}
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-lg leading-snug font-bold">
                {enquiry.form.heading}
              </h3>

              <form onSubmit={onSubmit} noValidate className="mt-6 flex flex-col gap-3">
                <div>
                  <label htmlFor={`${baseId}-course`} className="sr-only">
                    {enquiry.form.coursePlaceholder}
                  </label>
                  <select
                    id={`${baseId}-course`}
                    name="course"
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                    className={cn(field, "appearance-none")}
                  >
                    <option value="" className="text-ink">
                      {enquiry.form.coursePlaceholder}
                    </option>
                    {courseSummaries.map((item) => (
                      <option
                        key={item.slug}
                        value={item.slug}
                        className="text-ink"
                      >
                        {item.title}
                      </option>
                    ))}
                  </select>
                  {errors.course && <FieldError>{errors.course}</FieldError>}
                </div>

                <div>
                  <label htmlFor={`${baseId}-name`} className="sr-only">
                    {enquiry.form.namePlaceholder}
                  </label>
                  <input
                    id={`${baseId}-name`}
                    name="name"
                    value={name}
                    autoComplete="name"
                    onChange={(event) => setName(event.target.value)}
                    placeholder={enquiry.form.namePlaceholder}
                    className={field}
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </div>

                <div>
                  <label htmlFor={`${baseId}-phone`} className="sr-only">
                    {enquiry.form.phonePlaceholder}
                  </label>
                  <input
                    id={`${baseId}-phone`}
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder={enquiry.form.phonePlaceholder}
                    className={field}
                  />
                  {errors.phone && <FieldError>{errors.phone}</FieldError>}
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium">
                    {enquiry.form.captchaLabel}
                  </span>
                  <span
                    suppressHydrationWarning
                    className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold tabular-nums"
                  >
                    {`${challenge.a} + ${challenge.b} = ?`}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setChallenge(newChallenge());
                      setAnswer("");
                    }}
                    aria-label="New question"
                    className="grid size-8 place-items-center rounded-lg ring-1 ring-white/35 ring-inset transition-colors hover:bg-white/15"
                  >
                    <RotateCw className="size-3.5" aria-hidden="true" />
                  </button>
                </div>

                <div>
                  <label htmlFor={`${baseId}-answer`} className="sr-only">
                    {enquiry.form.answerPlaceholder}
                  </label>
                  <input
                    id={`${baseId}-answer`}
                    inputMode="numeric"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    placeholder={enquiry.form.answerPlaceholder}
                    className={field}
                  />
                  {errors.answer && <FieldError>{errors.answer}</FieldError>}
                </div>

                <p className="flex items-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-sm font-semibold text-ink">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  {enquiry.form.assurance}
                </p>

                <button
                  type="submit"
                  className="group mt-2 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white/85 px-7 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  {enquiry.form.submitLabel}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-lime-200">
      {children}
    </p>
  );
}
