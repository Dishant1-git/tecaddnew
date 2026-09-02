import Image from "next/image";
import type { TeamMember } from "@/lib/founder-content";

/**
 * A tall pill by default — border-radius is fixed in px at exactly half the
 * base width, rather than `rounded-full`, so it stays a true capsule and can
 * be eased to a much smaller radius as the card widens on hover/focus.
 * Width (not `scale`) drives the "stretch": a real layout change survives
 * keyboard focus and reads as the card being pulled outward from its edges
 * instead of the whole photo zooming.
 */
export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      tabIndex={0}
      className="team-card relative h-[300px] w-[168px] shrink-0 overflow-hidden rounded-[84px] border border-white/15 bg-white/5 outline-none transition-[width,border-radius,border-color] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:w-[228px] hover:rounded-[32px] hover:border-white/35 focus:w-[228px] focus:rounded-[32px] focus:border-white/35 focus-visible:ring-2 focus-visible:ring-brand-400/70 motion-reduce:transition-none sm:h-[350px] sm:w-[196px] sm:rounded-[98px] sm:hover:w-[268px] sm:hover:rounded-[36px] sm:focus:w-[268px] sm:focus:rounded-[36px] lg:h-[400px] lg:w-[220px] lg:rounded-[110px] lg:hover:w-[310px] lg:hover:rounded-[40px] lg:focus:w-[310px] lg:focus:rounded-[40px]"
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 310px, (min-width: 640px) 268px, 228px"
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-accent">
          <div aria-hidden="true" className="circuit-texture absolute inset-0 opacity-40" />
          <div aria-hidden="true" className="dot-matrix absolute inset-0 opacity-[0.08]" />
          <span
            aria-hidden="true"
            className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-[5.5rem] leading-none font-bold whitespace-nowrap text-white/10 select-none"
          >
            {member.name.split(" ")[0].toUpperCase()}
          </span>
        </div>
      )}

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/40"
      />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-10 text-center">
        <h3 className="truncate font-display text-sm font-bold tracking-tight text-white">
          {member.name}
        </h3>
        <span aria-hidden="true" className="team-card__rule mx-auto mt-2 block h-px w-8 bg-brand-400" />
        <p className="team-card__role mt-2 truncate text-[11px] text-white/75">{member.role}</p>
      </div>

      <span aria-hidden="true" className="team-card__veil pointer-events-none absolute inset-0" />
    </article>
  );
}
