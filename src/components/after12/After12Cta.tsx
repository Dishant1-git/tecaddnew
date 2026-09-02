"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Clock, MapPin, Phone } from "lucide-react";
import { after12Cta, after12Streams } from "@/lib/after-12th";
import { footer, site } from "@/lib/content";
import { submitEnquiry } from "@/lib/submit-enquiry";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

/**
 * Closing enquiry panel. Layout pass only — the form validates the mobile
 * number client-side and goes nowhere until a submission endpoint exists.
 */
export default function After12Cta() {
  const nameId = useId();
  const mobileId = useId();
  const courseId = useId();
  const errorId = `${mobileId}-error`;

  const [mobile, setMobile] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const digits = mobile.replace(/\D/g, "");

    if (digits.length !== 10) {
      setError("Enter a valid 10-digit mobile number.");
      setDone(false);
      return;
    }

    setError(null);
    submitEnquiry("after12_cta", Object.fromEntries(new FormData(event.currentTarget)));
    setDone(true);
  }

  return (
    <section
      data-cursor="light"
      id="enquire"
      aria-labelledby="after12-cta-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <div className="animate-trace circuit-texture absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
      </div>

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow dark>{after12Cta.eyebrow}</Eyebrow>
              <SplitHeading
                id="after12-cta-heading"
                text={after12Cta.heading}
                accent={after12Cta.accent}
                className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]"
                accentClassName="text-gold-300"
              />
              <p className="max-w-xl text-base leading-relaxed text-white/60">
                {after12Cta.body}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-8 flex flex-col gap-3">
                {after12Cta.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/10 text-gold-300"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <dl className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm sm:flex-row sm:flex-wrap sm:gap-8">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="text-white/70">{footer.address}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="sr-only">Phone</dt>
                    <dd>
                      <a
                        href={site.phoneHref}
                        className="text-white/70 transition-colors hover:text-white"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock
                    className="mt-0.5 size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="sr-only">Hours</dt>
                    <dd className="text-white/70">{footer.hours}</dd>
                  </div>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-6">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm lg:p-9"
            >
              <p className="font-display text-lg font-semibold text-white">
                Book a free demo class
              </p>
              <p className="mt-1.5 text-sm text-white/50">
                We call back the same working day.
              </p>

              <div className="mt-7 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor={nameId} className="text-xs text-white/55">
                    Student name
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className="h-12 rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-brand-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={mobileId} className="text-xs text-white/55">
                    Mobile number
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 focus-within:border-brand-500">
                    <span
                      className="shrink-0 border-r border-white/15 pr-3 text-sm text-white/50"
                      aria-hidden="true"
                    >
                      +91
                    </span>
                    <input
                      id={mobileId}
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="10-digit number"
                      value={mobile}
                      onChange={(event) => {
                        setMobile(event.target.value);
                        if (error) setError(null);
                        if (done) setDone(false);
                      }}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? errorId : undefined}
                      className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={courseId} className="text-xs text-white/55">
                    Which stream interests you?
                  </label>
                  <select
                    id={courseId}
                    name="course"
                    defaultValue=""
                    className="h-12 rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm text-white outline-none transition-colors focus:border-brand-500"
                  >
                    <option value="" className="bg-ink">
                      Not decided yet — please advise
                    </option>
                    {after12Streams.flatMap((stream) =>
                      stream.courses.map((course) => (
                        <option
                          key={course.title}
                          value={course.title}
                          className="bg-ink"
                        >
                          {course.title}
                        </option>
                      )),
                    )}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="mt-7 w-full"
              >
                Request a call back
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>

              <p
                id={errorId}
                role="alert"
                className="mt-3 min-h-5 text-sm text-red-400"
              >
                {error}
              </p>
              {done && !error && (
                <p role="status" className="text-sm text-emerald-400">
                  Thanks — the Amritsar desk will call you back shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
