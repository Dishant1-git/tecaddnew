"use client";

import { useId, useState } from "react";
import { Building2, Mail, Phone, Send } from "lucide-react";
import { contactForm, getInTouch, type TouchPoint } from "@/lib/contact-content";
import { footer } from "@/lib/content";
import { Facebook, Instagram, Linkedin, Youtube } from "@/components/layout/SocialIcons";
import { cn } from "@/lib/utils";
import { submitEnquiry } from "@/lib/submit-enquiry";
import Reveal from "@/components/ui/Reveal";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

const touchIcons: Record<TouchPoint["icon"], typeof Building2> = {
  office: Building2,
  email: Mail,
  phone: Phone,
};

/**
 * Ten-digit Indian mobile numbers: spaces, dashes and a +91 or leading 0 are
 * all things people actually type, so strip them before judging.
 */
function normalisePhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink transition-colors placeholder:text-muted focus:border-brand-500 focus:outline-none";
const LABEL = "text-sm font-medium text-ink-mute";
const ERROR = "text-xs text-rose-600";

/**
 * The ask, in two halves: a message form on the left, the office's own
 * contact details and socials on the right. No backend yet — the form
 * validates and acknowledges locally; swap the success branch for the real
 * endpoint when it exists.
 */
export default function ContactInfo() {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(contactForm.subjectOptions[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Record<string, string> = {
      name: name.trim().length < 2 ? "Enter your name." : "",
      email: EMAIL_RE.test(email.trim()) ? "" : "Enter a valid email address.",
      phone: normalisePhone(phone).length === 10 ? "" : "Enter a 10-digit mobile number.",
      message: message.trim().length < 5 ? "Tell us a little about what you need." : "",
    };

    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setSent(false);
      return;
    }

    submitEnquiry("contact_page", Object.fromEntries(new FormData(event.currentTarget)));
    setSent(true);
    setName("");
    setEmail("");
    setPhone("");
    setSubject(contactForm.subjectOptions[0]);
    setMessage("");
  }

  return (
    <section
      id="get-in-touch"
      aria-labelledby="get-in-touch-heading"
      className="py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ------------------------------------------------------- form */}
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-[0_24px_60px_-40px_rgb(15_23_42/0.5)] sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">
                {contactForm.heading}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {contactForm.body}
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-7 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
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
                      placeholder="Enter your full name"
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? `${id}-name-error` : undefined}
                      className={cn(FIELD, errors.name && "border-rose-400")}
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
                      placeholder="10-digit mobile number"
                      aria-invalid={errors.phone ? true : undefined}
                      aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
                      className={cn(FIELD, errors.phone && "border-rose-400")}
                    />
                    {errors.phone && (
                      <p id={`${id}-phone-error`} className={ERROR}>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-email`} className={LABEL}>
                    Email Address
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? `${id}-email-error` : undefined}
                    className={cn(FIELD, errors.email && "border-rose-400")}
                  />
                  {errors.email && (
                    <p id={`${id}-email-error`} className={ERROR}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-subject`} className={LABEL}>
                    Subject
                  </label>
                  <select
                    id={`${id}-subject`}
                    name="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className={FIELD}
                  >
                    {contactForm.subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
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
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? `${id}-message-error` : undefined}
                    className={cn(FIELD, "resize-y", errors.message && "border-rose-400")}
                  />
                  {errors.message && (
                    <p id={`${id}-message-error`} className={ERROR}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25"
                >
                  {contactForm.submitLabel}
                  <Send
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </form>

              <p role="status" className="mt-3 min-h-5 text-sm text-brand-700">
                {sent ? contactForm.successMessage : ""}
              </p>
            </div>
          </Reveal>

          {/* ------------------------------------------------- get in touch */}
          <Reveal delay={120}>
            <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-brand-50/60 p-8 sm:p-10 lg:p-12">
              <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div className="absolute -top-24 -right-24 size-[26rem] rounded-full bg-brand-200/40 blur-[110px]" />
                <div className="absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-brand-100/60 blur-[110px]" />
              </div>

              <h2
                id="get-in-touch-heading"
                className="font-display text-2xl font-semibold text-ink"
              >
                {getInTouch.heading}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {getInTouch.body}
              </p>

              <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                {getInTouch.points.map((point) => {
                  const Icon = touchIcons[point.icon];
                  return (
                    <li key={point.label} className="flex flex-col items-start gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-ink">
                          {point.label}
                        </span>
                        {point.lines.map((line) => (
                          <span key={line} className="text-sm leading-relaxed text-muted">
                            {line}
                          </span>
                        ))}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-semibold text-ink">
                  Follow our social media
                </span>
                <ul className="flex items-center gap-3">
                  {footer.socials.map((social) => {
                    const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                    return (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          aria-label={social.label}
                          className="grid size-10 place-items-center rounded-full bg-brand-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
                        >
                          <Icon className="size-4" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
