import { founderEngagement } from "@/lib/founder-content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function FounderEngagement() {
  return (
    <Section
      id="engagement"
      eyebrow={founderEngagement.eyebrow}
      heading={founderEngagement.heading}
      body={founderEngagement.body}
      centered
    >
      <ul className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
        {founderEngagement.items.map((item) => (
          <Reveal
            as="li"
            key={item.title}
            className="flex flex-col rounded-2xl border border-line bg-white p-7 text-left"
          >
            <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-brand-600 uppercase">
              {item.tag}
            </span>
            <h3 className="font-display mt-4 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
