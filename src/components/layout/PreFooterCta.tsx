import { Phone } from "lucide-react";
import { preFooterCta } from "@/lib/content";
import Button from "@/components/ui/Button";

/**
 * Slim, no-nonsense bar carried on every page just above the footer — the
 * last nudge after whatever the page's own closing section already made.
 * Rendered from the root layout, same tier as Header/Footer.
 */
export default function PreFooterCta() {
  return (
    <section aria-labelledby="pre-footer-cta-heading" className="border-y border-line bg-white py-10">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="pre-footer-cta-heading"
              className="font-display text-xl font-semibold text-ink sm:text-2xl"
            >
              {preFooterCta.heading}
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-muted">{preFooterCta.body}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href={preFooterCta.primaryCta.href} variant="primary" size="lg">
              {preFooterCta.primaryCta.label}
            </Button>
            <a
              href={preFooterCta.secondaryCta.href}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 text-base font-medium text-ink ring-1 ring-line ring-inset transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-600"
            >
              <Phone className="size-4" aria-hidden="true" />
              {preFooterCta.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
