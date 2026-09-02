import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { site } from "@/lib/content";
import Header from "@/components/layout/Header";
import PreFooterCta from "@/components/layout/PreFooterCta";
import Footer from "@/components/layout/Footer";
import { EnquiryProvider } from "@/components/layout/EnquiryDialog";
import CursorRing from "@/components/ui/CursorRing";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  /* Resolves every relative URL below — Open Graph images, canonicals — so
     crawlers and link unfurlers see absolute URLs. */
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.city} — ${site.tagline}`,
    /* Page titles supply their own half; this appends the brand. */
    template: `%s | ${site.name} ${site.city}`,
  },
  description:
    "IT training institute in Amritsar covering AI, cloud, cybersecurity and full-stack engineering, with live projects and placement support.",
  applicationName: `${site.name} ${site.city}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${site.name} ${site.city}`,
    locale: "en_IN",
    url: "/",
    title: `${site.name} ${site.city} — ${site.tagline}`,
    description:
      "AI, cloud, cybersecurity and full-stack training in Amritsar, taught on live projects with placement support.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} ${site.city} — ${site.tagline}`,
    description:
      "AI, cloud, cybersecurity and full-stack training in Amritsar, taught on live projects with placement support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The inline script below adds `js` to this element's class list before
      // React hydrates, which would otherwise be flagged as a mismatch.
      suppressHydrationWarning
      // globals.css sets `scroll-behavior: smooth` on this element. Next needs
      // to be told so it can suppress the smooth scroll during route
      // transitions — without this it warns, and a navigation animates the
      // whole page instead of landing at the top instantly.
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        {/*
          Arms the scroll-reveal animations before first paint. Scoping the
          hidden state to `html.js` means a no-JS visitor gets the full page
          rather than a blank one. Must stay render-blocking in <head> so there
          is no flash of un-hidden content.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <a
          href="#main"
          className="sr-only rounded-md bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100"
        >
          Skip to content
        </a>
        <EnquiryProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <PreFooterCta />
          <Footer />
        </EnquiryProvider>
        <ScrollToTop />
        <CursorRing />
      </body>
    </html>
  );
}
