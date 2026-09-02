"use client";

import { useId, useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { finalCta, site } from "@/lib/content";
import { submitEnquiry } from "@/lib/submit-enquiry";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { Eyebrow } from "@/components/ui/Section";

export default function FinalCta() {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const digits = value.replace(/\D/g, "");
    if (digits.length !== 10) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError(null);
    submitEnquiry("final_cta", Object.fromEntries(new FormData(event.currentTarget)));
  }

  return (
    <section
      id="get-started"
      aria-labelledby="get-started-heading"
      className="relative isolate overflow-hidden py-20 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/50 to-white" />
        <div className="circuit-texture-ink absolute inset-0 opacity-[0.035]" />
        <div className="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300/25 blur-[140px]" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>

          <SplitHeading
            id="get-started-heading"
            text={finalCta.heading}
            accent={finalCta.accent}
            className="text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
            accentClassName="text-gold-500"
          />

          <p className="max-w-xl text-base leading-relaxed text-muted lg:text-lg">
            {finalCta.body}
          </p>

          {/* ------------------------------------------------ enquiry form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-6 flex w-full max-w-xl flex-col gap-3"
          >
            <label htmlFor={inputId} className="sr-only">
              {finalCta.inputLabel}
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id={inputId}
                name="mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder={finalCta.placeholder}
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                  if (error) setError(null);
                }}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className="h-14 flex-1 rounded-full bg-white px-6 text-base text-ink shadow-[0_10px_30px_-18px_rgb(15_23_42/0.5)] ring-1 ring-line outline-none transition-shadow duration-300 placeholder:text-muted focus:ring-2 focus:ring-brand-500"
              />

              <button
                type="submit"
                className="font-display h-14 shrink-0 rounded-full bg-ink px-9 text-base font-semibold text-white shadow-[0_16px_40px_-16px_rgb(15_23_42/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                {finalCta.submitLabel}
              </button>
            </div>

            <p
              id={errorId}
              role="alert"
              className="min-h-5 text-left text-sm text-red-600 sm:text-center"
            >
              {error}
            </p>
          </form>

          {/* --------------------------------------------------- call button */}
          <a
            href={site.phoneHref}
            className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 py-2.5 pr-8 pl-2.5 text-left text-white shadow-[0_20px_45px_-16px_rgb(37_99_235/0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-400 hover:to-brand-600"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/20 ring-1 ring-white/25 ring-inset">
              <Phone className="size-5 fill-current" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-white/75 uppercase">
                {finalCta.callLabel}
              </span>
              <span className="font-display block text-lg font-bold">
                {site.phone}
              </span>
            </span>
          </a>

          {/* ------------------------------------------------- reassurances */}
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ink-mute">
            {finalCta.assurances.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 && (
                  <span aria-hidden="true" className="text-line">
                    |
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
