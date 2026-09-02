"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { Check, Phone, RefreshCw } from "lucide-react";
import type { Course } from "@/lib/courses";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { FadeUp, Stagger, WordsUp } from "@/components/ui/Motion";

const ASSURANCES = [
  "Free career counselling",
  "No registration fee",
  "Placement support included",
];

/* --------------------------------------------------------------- helpers */

/**
 * Indian mobile numbers: ten digits starting 6–9. Spaces, dashes and a +91 or
 * leading 0 are all things people actually type, so strip them before judging.
 */
function normalisePhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0"))
    digits = digits.slice(1);
  return digits;
}

function phoneError(raw: string) {
  const digits = normalisePhone(raw);
  if (!digits) return "Enter your mobile number.";
  if (digits.length !== 10) return "A mobile number is 10 digits.";
  if (!/^[6-9]/.test(digits))
    return "Indian mobile numbers start with 6, 7, 8 or 9.";
  return "";
}

/** Answers may be typed as digits or as words, so both are accepted. */
const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
];

function captchaMatches(answer: string, expected: number) {
  const value = answer.trim().toLowerCase();
  if (!value) return false;
  if (/^\d+$/.test(value)) return Number(value) === expected;
  return NUMBER_WORDS[expected] === value;
}

type Sum = { a: number; b: number };

function randomSum(): Sum {
  return {
    a: 1 + Math.floor(Math.random() * 9),
    b: 1 + Math.floor(Math.random() * 9),
  };
}

/** Rendered on the server and during hydration; replaced on the next render. */
const PRERENDER_SUM: Sum = { a: 3, b: 2 };

/**
 * `false` while the server renders and while React hydrates, `true` on every
 * render after that. Course pages are prerendered at build time, so a random
 * sum picked during render would be a hydration mismatch; gating on this
 * gives the client a fresh question without a state update inside an effect.
 */
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/* ------------------------------------------------------------------ form */

const FIELD =
  "w-full rounded-2xl border border-white/15 bg-ink/50 px-4 py-2.5 text-base text-white transition-colors placeholder:text-white/35 focus:border-brand-400 focus:outline-none";
const LABEL = "text-sm font-medium text-white/85";
const ERROR = "text-xs text-rose-300";

export default function CourseCta({
  course,
  /**
   * The free-text message box. Dropped on the after-12th pages, where the
   * enquiry is a call-back request and the counsellor asks the questions.
   */
  showMessage = true,
  variant = "aside",
  alignTop = false,
}: {
  course: Course;
  showMessage?: boolean;
  /**
   * `aside` stands the form in a narrow column beside the copy. `split` gives
   * the form the larger half so name and phone pair on one line, turns the
   * assurances into a checklist under the copy, and compresses the captcha
   * into a single row — used on the training pages.
   */
  variant?: "aside" | "split";
  /**
   * Hangs the copy from the top of the row instead of centring it against the
   * form. On the catalogue course pages the form is much the taller column, so
   * centred copy floats away from the heading rule the rest of the page keeps.
   */
  alignTop?: boolean;
}) {
  const split = variant === "split";
  const id = useId();

  /*
   * Written copy for this section, when the course has any. It replaces the
   * generic counsellor pitch and can turn on three fields the catalogue form
   * does not otherwise carry — email, current status and preferred batch.
   */
  const copy = course.cta;
  const assurances = copy?.assurances ?? ASSURANCES;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  /*
   * The visitor's question is drawn on the first render after hydration, by
   * adjusting state during render rather than in an effect: React discards
   * the in-progress output and re-runs immediately, so the prerendered pair
   * never reaches the screen.
   */
  const hydrated = useHydrated();
  const [sum, setSum] = useState<Sum | null>(null);
  if (hydrated && sum === null) setSum(randomSum());

  const answerRef = useRef<HTMLInputElement>(null);
  const question = sum ?? PRERENDER_SUM;

  function newQuestion() {
    setSum(randomSum());
    setAnswer("");
    setErrors((prev) => ({ ...prev, answer: "" }));
    answerRef.current?.focus();
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Record<string, string> = {
      name: name.trim().length < 2 ? "Enter your name." : "",
      phone: phoneError(phone),
      answer: captchaMatches(answer, question.a + question.b)
        ? ""
        : "That is not the right answer.",
    };

    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setSent(false);
      return;
    }

    const fields = Object.fromEntries(new FormData(event.currentTarget));

    /*
     * The enquiry table has no column for the two profile pickers, and this
     * variant hides the message box, so the answers ride in on `message`
     * rather than being dropped between the form and the counsellor.
     */
    const profile = [
      fields.status && `${copy?.statusLabel ?? "Current Status"}: ${fields.status}`,
      fields.batch && `${copy?.batchLabel ?? "Preferred Batch"}: ${fields.batch}`,
    ].filter(Boolean);

    if (profile.length > 0) {
      fields.message = [fields.message, profile.join(" · ")]
        .filter(Boolean)
        .join(" — ");
    }

    submitEnquiry("course_cta", fields);
    setSent(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setAnswer("");
    setSum(randomSum());
  }

  return (
    <section
      data-cursor="light"
      id="enquire"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-ink py-14 text-white lg:py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-ink to-accent/60" />
        <div className="animate-grid-pan grid-overlay absolute inset-0 opacity-30" />
        <div className="dot-matrix absolute inset-0 opacity-[0.05]" />
        <div className="animate-aurora-b absolute -top-24 left-1/3 size-[32rem] rounded-full bg-brand-500/25 blur-[130px] will-change-transform" />
      </div>

      <div className="container-page">
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-12",
            alignTop ? "lg:items-start" : "lg:items-center",
            split ? "lg:gap-14" : "lg:gap-16",
          )}
        >
          <div className={cn(split ? "lg:col-span-5" : "lg:col-span-7")}>
            <FadeUp standalone>
              {split ? (
                <span className="inline-flex items-center rounded-full bg-white/[0.07] px-4 py-2 text-sm font-medium text-white/85 ring-1 ring-white/20 ring-inset backdrop-blur-sm">
                  Course Information
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
                  <span
                    className="h-px w-6 bg-brand-300/60"
                    aria-hidden="true"
                  />
                  {copy?.eyebrow ?? "Next batch, Amritsar campus"}
                </span>
              )}
            </FadeUp>
            <WordsUp
              as="h2"
              text={
                copy?.heading ??
                (split
                  ? `Ask about ${course.title}`
                  : `Start the ${course.title} programme`)
              }
              accent={copy ? copy.accent : split ? undefined : "this intake."}
              accentClassName="text-gold-300"
              className={cn(
                "mt-4 text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-5xl",
                split ? "text-balance" : "max-w-2xl",
              )}
            />
            <span id="cta-heading" className="sr-only">
              Enquire about the {course.title} course
            </span>
            <FadeUp
              standalone
              as="p"
              className={cn(
                "mt-5 text-base leading-relaxed text-white/60",
                !split && "max-w-xl",
              )}
            >
              {copy?.body ??
                "Send your question and a counsellor will call you back about batch timings, fees, EMI options, placement record, or whether this course fits your background."}
            </FadeUp>

            {/* Course · duration · mode · centre — the citable facts the copy
                states outright rather than burying in the paragraph above. */}
            {copy?.facts && copy.facts.length > 0 && (
              <Stagger
                as="ul"
                className="mt-7 grid gap-2.5 sm:grid-cols-2"
                gap={0.06}
              >
                {copy.facts.map((fact) => (
                  <FadeUp
                    as="li"
                    key={fact}
                    className="rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm leading-snug text-white/75"
                  >
                    {fact}
                  </FadeUp>
                ))}
              </Stagger>
            )}

            <Stagger
              as="ul"
              className={cn(
                "mt-8",
                split ? "space-y-3.5" : "flex flex-wrap gap-x-6 gap-y-3",
              )}
              gap={0.07}
            >
              {assurances.map((item) => (
                <FadeUp
                  as="li"
                  key={item}
                  className={cn(
                    "flex items-center gap-3 text-white/70",
                    split ? "text-base" : "gap-2 text-sm",
                  )}
                >
                  {split ? (
                    <span
                      className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 ring-inset"
                      aria-hidden="true"
                    >
                      <Check className="size-3.5 text-white" strokeWidth={3} />
                    </span>
                  ) : (
                    <Check
                      className="size-4 text-brand-300"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  )}
                  {item}
                </FadeUp>
              ))}
            </Stagger>
          </div>

          <FadeUp
            standalone
            className={cn(split ? "lg:col-span-7" : "lg:col-span-5")}
          >
            <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-7 shadow-[0_2px_0_rgb(255_255_255/0.06)_inset,0_40px_90px_-50px_rgb(2_6_23/0.9)] backdrop-blur-xl lg:p-8">
              {/* The reference card opens straight onto the fields; the
                  heading it would repeat is already the section's own. */}
              {!split && (
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {copy?.formTitle ?? "Request a call back"}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/55">
                    About the {course.title} course · {course.spec[0].value}
                  </p>
                </div>
              )}

              <form
                onSubmit={onSubmit}
                noValidate
                className={cn("grid gap-5", split ? "sm:grid-cols-2" : "mt-6")}
              >
                {/* ------------------------------------------- name + phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={`${id}-name`} className={LABEL}>
                      Your Name
                    </label>
                    <input
                      id={`${id}-name`}
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={
                        copy?.placeholders?.name ?? "Enter your full name"
                      }
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={
                        errors.name ? `${id}-name-error` : undefined
                      }
                      className={cn(FIELD, errors.name && "border-rose-400/70")}
                    />
                    {errors.name && (
                      <p id={`${id}-name-error`} className={ERROR}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={`${id}-phone`} className={LABEL}>
                      Phone Number
                    </label>
                    <input
                      id={`${id}-phone`}
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={18}
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder={
                        copy?.placeholders?.phone ?? "10-digit mobile number"
                      }
                      aria-invalid={errors.phone ? true : undefined}
                      aria-describedby={
                        errors.phone ? `${id}-phone-error` : undefined
                      }
                      className={cn(FIELD, errors.phone && "border-rose-400/70")}
                    />
                    {errors.phone && (
                      <p id={`${id}-phone-error`} className={ERROR}>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* ------------------------------------------------ email */}
                {/* Optional, and only for courses that ask for it — the rest
                    of the catalogue takes a name and a number. */}
                {copy?.showEmail && (
                  <div
                    className={cn(
                      "flex flex-col gap-1.5",
                      split && "sm:col-span-2",
                    )}
                  >
                    <label htmlFor={`${id}-email`} className={LABEL}>
                      Email{" "}
                      <span className="font-normal text-white/45">
                        (optional)
                      </span>
                    </label>
                    <input
                      id={`${id}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={
                        copy.placeholders?.email ?? "Enter your email"
                      }
                      className={FIELD}
                    />
                  </div>
                )}

                {/* -------------------------------------- status + batch */}
                {(copy?.statusOptions || copy?.batchOptions) && (
                  <div
                    className={cn(
                      "grid gap-4 sm:grid-cols-2",
                      split && "sm:col-span-2",
                    )}
                  >
                    {copy.statusOptions && (
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${id}-status`} className={LABEL}>
                          {copy.statusLabel ?? "Current Status"}
                        </label>
                        <select
                          id={`${id}-status`}
                          name="status"
                          defaultValue=""
                          className={cn(FIELD, "appearance-none")}
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          {copy.statusOptions.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="bg-ink"
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {copy.batchOptions && (
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={`${id}-batch`} className={LABEL}>
                          {copy.batchLabel ?? "Preferred Batch"}
                        </label>
                        <select
                          id={`${id}-batch`}
                          name="batch"
                          defaultValue=""
                          className={cn(FIELD, "appearance-none")}
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          {copy.batchOptions.map((option) => (
                            <option
                              key={option}
                              value={option}
                              className="bg-ink"
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}

                {/* ----------------------------------------------- course */}
                <div
                  className={cn(
                    "flex flex-col gap-1.5",
                    split && "sm:col-span-2",
                  )}
                >
                  <span className={LABEL}>Course or Service</span>
                  {/*
                    Not a picker: the reader is already on the course page, so
                    the enquiry is tagged with it and the value rides along in
                    a hidden input for whatever handles the submission.
                  */}
                  {split ? (
                    <div className={cn(FIELD, "font-medium")}>
                      {course.title}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-brand-400/40 bg-brand-600/25 px-4 py-3">
                      <span className="font-display text-base font-semibold text-white">
                        {course.title} Course
                      </span>
                      <Check
                        className="size-4 shrink-0 text-brand-200"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <input type="hidden" name="course" value={course.title} />
                  {!split && (
                    <p className="text-xs leading-relaxed text-white/45">
                      {copy?.formNote ??
                        `Taken from the page you are on — this enquiry reaches the ${course.title} counsellor directly.`}
                    </p>
                  )}
                </div>

                {/* ---------------------------------------------- message */}
                {showMessage && (
                  <div
                    className={cn(
                      "flex flex-col gap-1.5",
                      split && "sm:col-span-2",
                    )}
                  >
                    <label htmlFor={`${id}-message`} className={LABEL}>
                      Your Message
                    </label>
                    <textarea
                      id={`${id}-message`}
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Ask about batch timings, fees or anything else"
                      className={cn(FIELD, "resize-y")}
                    />
                  </div>
                )}

                {/* ---------------------------------------------- captcha */}
                {split ? (
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor={`${id}-answer`} className={LABEL}>
                      Security check
                    </label>
                    <div className="flex items-stretch gap-2.5">
                      <span
                        className="font-display grid shrink-0 place-items-center rounded-2xl border border-white/15 bg-ink/50 px-4 text-base font-semibold tabular-nums text-white"
                        aria-hidden="true"
                      >
                        {question.a} + {question.b} = ?
                      </span>
                      <input
                        ref={answerRef}
                        id={`${id}-answer`}
                        name="captcha"
                        type="text"
                        inputMode="text"
                        autoComplete="off"
                        value={answer}
                        onChange={(event) => setAnswer(event.target.value)}
                        placeholder="Answer"
                        aria-invalid={errors.answer ? true : undefined}
                        aria-describedby={`${id}-answer-hint`}
                        className={cn(
                          FIELD,
                          "min-w-0 flex-1",
                          errors.answer && "border-rose-400/70",
                        )}
                      />
                      <button
                        type="button"
                        onClick={newQuestion}
                        aria-label="Show a new question"
                        className="grid w-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-white/70 transition-colors hover:border-white/30 hover:text-white"
                      >
                        <RefreshCw className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                    {/* The sum chip is aria-hidden so it is not announced as
                        loose symbols; the question is spelled out here. */}
                    <p
                      id={`${id}-answer-hint`}
                      className="text-xs text-white/45"
                    >
                      What is {question.a} plus {question.b}? Digits or words
                      both work — it tells us you are a person.
                    </p>
                    {errors.answer && <p className={ERROR}>{errors.answer}</p>}
                  </div>
                ) : (
                  <div
                    className={cn(
                      "rounded-2xl border border-white/12 bg-ink/40 p-4",
                      split && "sm:col-span-2",
                    )}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <label htmlFor={`${id}-answer`} className={LABEL}>
                        What is {question.a} plus {question.b}?
                      </label>
                      <button
                        type="button"
                        onClick={newQuestion}
                        className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white sm:self-auto"
                      >
                        <RefreshCw className="size-3" aria-hidden="true" />
                        New question
                      </button>
                    </div>

                    <input
                      ref={answerRef}
                      id={`${id}-answer`}
                      name="captcha"
                      type="text"
                      inputMode="text"
                      autoComplete="off"
                      value={answer}
                      onChange={(event) => setAnswer(event.target.value)}
                      placeholder="Your answer"
                      aria-invalid={errors.answer ? true : undefined}
                      aria-describedby={`${id}-answer-hint`}
                      className={cn(
                        FIELD,
                        "mt-2.5",
                        errors.answer && "border-rose-400/70",
                      )}
                    />

                    <p
                      id={`${id}-answer-hint`}
                      className="mt-2 text-xs text-white/45"
                    >
                      A one-line sum, so we know you are a person. Digits or
                      words both work.
                    </p>
                    {errors.answer && (
                      <p className={cn(ERROR, "mt-1")}>{errors.answer}</p>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className={cn(
                    "h-13 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 text-base font-semibold tracking-wide text-white uppercase shadow-lg shadow-brand-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-400 hover:to-brand-600",
                    split && "sm:col-span-2",
                  )}
                >
                  {copy?.submitLabel ??
                    (showMessage ? "Send message" : "Request a call back")}
                </button>

                {split && (
                  <p className="text-center text-xs text-white/45 sm:col-span-2">
                    We never share your number. Expect a call within working
                    hours.
                  </p>
                )}
              </form>

              <p role="status" className="mt-3 min-h-5 text-xs text-brand-200">
                {sent
                  ? `Thanks — the ${site.city} desk will call you within one working day.`
                  : ""}
              </p>

              <div
                className={cn(
                  "mt-6 border-t border-white/10 pt-5",
                  split && "hidden",
                )}
              >
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 ring-inset transition-colors group-hover:bg-white/15">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  Prefer to call? {site.phone}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
