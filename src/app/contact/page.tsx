import type { Metadata } from "next";
import { site, footer } from "@/lib/content";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSupport from "@/components/contact/ContactSupport";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: `Contact Us — TechCadd ${site.city}`,
  description: `Reach TechCadd ${site.city} for course enquiries, fees, batch timings or a campus visit — phone, email, WhatsApp or the form below.`,
  alternates: { canonical: "/contact" },
};

/**
 * ContactPoint structured data, so the office details show up the way search
 * engines expect for a "contact us" page.
 */
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: `TechCadd ${site.city}`,
  url: "/contact",
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", streetAddress: footer.address },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // The payload is our own content, serialised here rather than fetched.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactHero />
      <ContactInfo />
      <ContactSupport />
      <ContactMap />
    </>
  );
}
