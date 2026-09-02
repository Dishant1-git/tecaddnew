import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { footer, site } from "@/lib/content";
import { Facebook, Instagram, Linkedin, Youtube } from "./SocialIcons";
import Logo from "./Logo";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-white to-brand-50/70 text-ink">
      {/*
        Giant shimmering wordmark. Sits behind the footer's content (negative
        z-index under an `isolate` parent), is never announced, and takes no
        pointer events, so the links above it stay clickable.
      */}
      <span
        aria-hidden="true"
        className="footer-watermark font-display absolute -bottom-2 left-1/2 -z-10 w-full -translate-x-1/2 translate-y-[14%] text-center leading-none font-bold tracking-tight select-none"
        style={{ fontSize: "clamp(4rem, 21vw, 20rem)" }}
      >
        {footer.watermark}
      </span>

      <div className="container-page pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,minmax(0,1fr))] lg:gap-8">
          {/* -------------------------------------------------- brand column */}
          <div className="flex flex-col gap-6">
            <Logo />

            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {footer.blurb}
            </p>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span className="max-w-xs text-ink-mute">{footer.address}</span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-ink-mute transition-colors hover:text-brand-700"
                >
                  <Phone className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-ink-mute transition-colors hover:text-brand-700"
                >
                  <Mail className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                <span className="text-ink-mute">{footer.hours}</span>
              </li>
            </ul>

            <ul className="flex items-center gap-3">
              {footer.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="grid size-11 place-items-center rounded-full bg-ink/[0.06] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ------------------------------------------------- link columns */}
          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-ink-mute transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ------------------------------------------------------ legal bar */}
        <div className="mt-16 border-t border-line/80 pt-6">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-line/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{site.copyright}</p>

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            {footer.status.map((item, i) => (
              <li key={item.label} className="flex items-center gap-4">
                {i > 0 && (
                  <span aria-hidden="true" className="text-line">
                    |
                  </span>
                )}
                <span className="flex items-center gap-2">
                  {item.dot && (
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-emerald-500"
                    />
                  )}
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
