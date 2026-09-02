import type { SceneKey } from "@/lib/gallery-content";
import { cn } from "@/lib/utils";

/**
 * Illustrated stand-ins for the photography that has not been shot yet.
 *
 * Each scene is drawn on a 400×300 canvas in translucent white and brand
 * light, so the same artwork sits correctly on top of any of the gradient
 * tones a tile can carry. Nothing here uses `id`-based gradients or filters:
 * a mosaic renders twenty of these at once, and duplicated SVG ids would
 * cross-reference each other.
 *
 * Decorative by definition — the frame around it supplies the accessible
 * name, so every scene is rendered `aria-hidden`.
 */

const LIGHT = "rgb(255 255 255 / 0.9)";
const MID = "rgb(255 255 255 / 0.45)";
const SOFT = "rgb(255 255 255 / 0.18)";
const GLASS = "rgb(255 255 255 / 0.1)";
const GLOW = "rgb(147 197 253 / 0.75)";

/** A seated person: head, shoulders. Positioned by its feet-forward origin. */
function Person({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="-26" r="10" fill={MID} />
      <path d="M-17 0a17 17 0 0 1 34 0z" fill={MID} />
    </g>
  );
}

function Lab() {
  return (
    <>
      <rect x="0" y="196" width="400" height="104" fill={GLASS} />
      {/* back row */}
      {[70, 160, 250, 340].map((x) => (
        <g key={`b-${x}`}>
          <Person x={x} y={150} s={0.72} />
          <rect x={x - 26} y="150" width="52" height="30" rx="4" fill={SOFT} />
          <rect x={x - 18} y="126" width="36" height="24" rx="3" fill={GLOW} />
        </g>
      ))}
      {/* front row */}
      {[35, 145, 255, 365].map((x) => (
        <g key={`f-${x}`}>
          <Person x={x} y={232} s={0.95} />
          <rect x={x - 36} y="232" width="72" height="42" rx="5" fill={SOFT} />
          <rect x={x - 26} y="198" width="52" height="34" rx="4" fill={GLOW} />
          <rect x={x - 26} y="198" width="52" height="10" rx="4" fill={LIGHT} />
        </g>
      ))}
      <path d="M0 196h400" stroke={SOFT} strokeWidth="2" />
    </>
  );
}

function Lecture() {
  return (
    <>
      {/* projection screen */}
      <rect x="96" y="34" width="208" height="132" rx="6" fill={GLASS} />
      <rect x="96" y="34" width="208" height="132" rx="6" stroke={MID} strokeWidth="2" fill="none" />
      {[
        [122, 120, 26],
        [152, 96, 50],
        [182, 108, 38],
        [212, 74, 72],
        [242, 88, 58],
        [272, 62, 84],
      ].map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="18" height={h} rx="3" fill={GLOW} />
      ))}
      <path d="M112 146h176" stroke={LIGHT} strokeWidth="2" />
      {/* presenter */}
      <g>
        <circle cx="52" cy="130" r="12" fill={LIGHT} />
        <path d="M34 190a18 26 0 0 1 36 0z" fill={MID} />
        <path d="M66 148l26-14" stroke={MID} strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* audience */}
      <rect x="0" y="240" width="400" height="60" fill={GLASS} />
      {[40, 108, 176, 244, 312, 380].map((x) => (
        <Person key={x} x={x} y={252} s={1.05} />
      ))}
      <path d="M0 240h400" stroke={SOFT} strokeWidth="2" />
    </>
  );
}

function Workshop() {
  return (
    <>
      <ellipse cx="200" cy="188" rx="132" ry="58" fill={GLASS} />
      <ellipse cx="200" cy="188" rx="132" ry="58" stroke={MID} strokeWidth="2" fill="none" />
      {/* laptops on the table */}
      {[
        [150, 170],
        [232, 168],
        [196, 208],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 22} y={y - 18} width="44" height="26" rx="3" fill={GLOW} />
          <rect x={x - 28} y={y + 8} width="56" height="6" rx="3" fill={LIGHT} />
        </g>
      ))}
      {/* people around it */}
      <Person x={92} y={168} s={1.1} />
      <Person x={200} y={126} s={0.9} />
      <Person x={308} y={168} s={1.1} />
      <Person x={140} y={262} s={1.2} />
      <Person x={266} y={262} s={1.2} />
      {/* sticky notes on the wall */}
      {[
        [52, 44, -6],
        [96, 34, 5],
        [140, 46, -3],
      ].map(([x, y, r]) => (
        <rect
          key={x}
          x={x}
          y={y}
          width="34"
          height="34"
          rx="3"
          fill={SOFT}
          transform={`rotate(${r} ${x + 17} ${y + 17})`}
        />
      ))}
      <path d="M300 40h64M300 58h44M300 76h56" stroke={MID} strokeWidth="4" strokeLinecap="round" />
    </>
  );
}

function Hackathon() {
  return (
    <>
      {/* late-hour clock */}
      <circle cx="330" cy="62" r="30" stroke={MID} strokeWidth="3" fill={GLASS} />
      <path d="M330 62V44M330 62l14 10" stroke={LIGHT} strokeWidth="3" strokeLinecap="round" />
      {/* three glowing laptops */}
      {[
        [78, 168],
        [200, 196],
        [322, 168],
      ].map(([x, y]) => (
        <g key={x}>
          <path d={`M${x - 40} ${y} L${x - 30} ${y - 44} h60 l10 44z`} fill={GLOW} />
          <path d={`M${x - 52} ${y} h104 l8 12h-120z`} fill={LIGHT} />
          <Person x={x} y={y - 52} s={0.78} />
        </g>
      ))}
      {/* coffee */}
      <g transform="translate(46 232)">
        <path d="M0 0h30v22a10 10 0 0 1-10 10H10A10 10 0 0 1 0 22z" fill={SOFT} />
        <path d="M30 6h8a7 7 0 0 1 0 14h-8" stroke={MID} strokeWidth="3" fill="none" />
        <path d="M8-14c0-6 8-6 8-12M20-14c0-6 8-6 8-12" stroke={MID} strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M0 258h400" stroke={SOFT} strokeWidth="2" />
      {[24, 96, 168, 240, 312, 384].map((x) => (
        <circle key={x} cx={x} cy={28} r="3" fill={GLOW} />
      ))}
    </>
  );
}

function Convocation() {
  return (
    <>
      {/* stage */}
      <rect x="0" y="222" width="400" height="78" fill={GLASS} />
      <path d="M0 222h400" stroke={MID} strokeWidth="2" />
      {/* graduate with certificate */}
      <g transform="translate(196 0)">
        <path d="M-24 222a24 34 0 0 1 48 0z" fill={LIGHT} />
        <circle cx="0" cy="164" r="16" fill={LIGHT} />
        <path d="M-30 150l30-14 30 14-30 14z" fill={MID} />
        <path d="M30 150v22" stroke={MID} strokeWidth="3" strokeLinecap="round" />
        <rect x="18" y="184" width="42" height="28" rx="3" fill={GLOW} transform="rotate(-8 39 198)" />
      </g>
      {/* podium and audience */}
      <rect x="36" y="176" width="52" height="46" rx="4" fill={SOFT} />
      <Person x={62} y={176} s={0.8} />
      <Person x={318} y={214} s={1} />
      <Person x={366} y={214} s={1} />
      {/* confetti */}
      {[
        [48, 44],
        [104, 26],
        [148, 62],
        [252, 34],
        [304, 70],
        [352, 30],
        [378, 96],
        [76, 96],
      ].map(([x, y], i) => (
        <rect
          key={x}
          x={x}
          y={y}
          width="9"
          height="9"
          rx="2"
          fill={i % 2 ? GLOW : SOFT}
          transform={`rotate(${i * 27} ${x + 4} ${y + 4})`}
        />
      ))}
    </>
  );
}

function Campus() {
  return (
    <>
      {/* building */}
      <rect x="84" y="60" width="232" height="180" rx="6" fill={GLASS} />
      <rect x="84" y="60" width="232" height="180" rx="6" stroke={MID} strokeWidth="2" fill="none" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={102 + col * 42}
            y={80 + row * 38}
            width="28"
            height="24"
            rx="3"
            fill={(row + col) % 3 === 0 ? GLOW : SOFT}
          />
        )),
      )}
      {/* entrance and sign */}
      <rect x="176" y="196" width="48" height="44" rx="4" fill={LIGHT} />
      <rect x="146" y="36" width="108" height="18" rx="4" fill={GLOW} />
      {/* trees and ground */}
      <circle cx="48" cy="196" r="26" fill={SOFT} />
      <path d="M48 196v44" stroke={MID} strokeWidth="5" />
      <circle cx="356" cy="204" r="22" fill={SOFT} />
      <path d="M356 204v36" stroke={MID} strokeWidth="5" />
      <path d="M0 240h400" stroke={MID} strokeWidth="2" />
      <rect x="0" y="240" width="400" height="60" fill={GLASS} />
    </>
  );
}

function Interview() {
  return (
    <>
      {/* whiteboard */}
      <rect x="44" y="34" width="150" height="100" rx="5" fill={GLASS} />
      <rect x="44" y="34" width="150" height="100" rx="5" stroke={MID} strokeWidth="2" fill="none" />
      <path d="M62 62h80M62 82h114M62 102h60" stroke={LIGHT} strokeWidth="4" strokeLinecap="round" />
      {/* table */}
      <rect x="72" y="200" width="256" height="16" rx="8" fill={LIGHT} />
      <path d="M104 216v58M296 216v58" stroke={MID} strokeWidth="6" strokeLinecap="round" />
      {/* candidate and panel */}
      <g>
        <circle cx="128" cy="152" r="17" fill={MID} />
        <path d="M100 200a28 34 0 0 1 56 0z" fill={MID} />
      </g>
      <g>
        <circle cx="252" cy="150" r="15" fill={LIGHT} />
        <path d="M228 200a24 32 0 0 1 48 0z" fill={LIGHT} />
      </g>
      <g>
        <circle cx="312" cy="156" r="13" fill={MID} />
        <path d="M292 200a20 28 0 0 1 40 0z" fill={MID} />
      </g>
      {/* laptop on the table */}
      <rect x="176" y="176" width="48" height="26" rx="3" fill={GLOW} />
      <rect x="286" y="34" width="72" height="96" rx="5" fill={SOFT} />
    </>
  );
}

function Studio() {
  return (
    <>
      {/* pinned boards */}
      {[
        [40, 32, -4],
        [156, 22, 3],
        [272, 36, -2],
      ].map(([x, y, r]) => (
        <g key={x} transform={`rotate(${r} ${x + 44} ${y + 40})`}>
          <rect x={x} y={y} width="88" height="80" rx="5" fill={GLASS} />
          <rect x={x} y={y} width="88" height="80" rx="5" stroke={MID} strokeWidth="2" fill="none" />
          <rect x={x + 12} y={y + 12} width="64" height="34" rx="3" fill={GLOW} />
          <path
            d={`M${x + 12} ${y + 58}h64M${x + 12} ${y + 68}h40`}
            stroke={MID}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      ))}
      {/* colour swatches */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={92 + i * 38}
          y="148"
          width="30"
          height="30"
          rx="6"
          fill={i % 2 ? GLOW : SOFT}
        />
      ))}
      {/* desk, tablet and pen */}
      <rect x="0" y="222" width="400" height="78" fill={GLASS} />
      <path d="M0 222h400" stroke={MID} strokeWidth="2" />
      <rect x="112" y="234" width="128" height="52" rx="6" fill={LIGHT} />
      <path d="M132 262l22-16 18 12 26-22" stroke={GLOW} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M266 282l38-38 12 12-38 38-16 4z" fill={MID} />
    </>
  );
}

const SCENES: Record<SceneKey, () => React.ReactElement> = {
  lab: Lab,
  lecture: Lecture,
  workshop: Workshop,
  hackathon: Hackathon,
  convocation: Convocation,
  campus: Campus,
  interview: Interview,
  studio: Studio,
};

export default function GalleryArt({
  scene,
  className,
}: {
  scene: SceneKey;
  className?: string;
}) {
  const Scene = SCENES[scene] ?? Campus;

  return (
    <svg
      viewBox="0 0 400 300"
      // `slice` so the drawing crops rather than letterboxes inside a tile of
      // any aspect ratio the mosaic hands it.
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={cn("absolute inset-0 size-full", className)}
    >
      <Scene />
    </svg>
  );
}
