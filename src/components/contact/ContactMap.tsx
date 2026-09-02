import { contactMap } from "@/lib/contact-content";

/** Full-bleed map, closing the page the way a "here's exactly where" should. */
export default function ContactMap() {
  return (
    <section aria-label="Campus location" className="relative isolate">
      <iframe
        title={contactMap.caption}
        src={contactMap.embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[420px] w-full border-0 grayscale-[0.15] sm:h-[480px]"
      />
    </section>
  );
}
