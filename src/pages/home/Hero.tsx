/* ============================================================
   WOLFOOD — Hero section (rebuilt from hero.png / j.png)
   Dark-green hero: rating · headline · CTAs · full-bleed cinematic
   fan of cards. Each wing folds on a HINGE at its inner edge
   (transform-origin right/left center) — left cards rotateY positive,
   right cards negative — so the row folds inward like standing inside
   a cylinder. Cards step down in height toward the centre and dim at
   the edges (brightness) for depth. The viewport's clip-path ellipse
   curves the bottom edge. (Nav lives in the DisplayLayout.)
   Static layout. Image slots come from the central images config.
   ============================================================ */

import { IMAGES } from "../../assets/images";

// `scale`  = width factor (drives the gaps — leave these alone).
// `scaleY` = height factor, stepping down toward the centre card.
// `ml`     = per-card left-margin tweak (px) on top of the base 14px gap.
// Five cards: outer-left · inner-left · centre · inner-right · outer-right.
const CARDS = [
  { rotY: 22, scale: 1, scaleY: 0.88, bright: 0.78, origin: "right center", ml: 0 },
  { rotY: 13, scale: 0.9, scaleY: 0.74, bright: 0.92, origin: "right center", ml: -24 },
  { rotY: 0, scale: 0.82, scaleY: 0.7, bright: 1, origin: "center center", ml: -24 },
  { rotY: -13, scale: 0.9, scaleY: 0.74, bright: 0.92, origin: "left center", ml: -24 },
  { rotY: -22, scale: 1, scaleY: 0.88, bright: 0.78, origin: "left center", ml: -24 },
] as const;
const SHADES = ["#c9c9c9", "#d0d0d0", "#d7d7d7", "#d0d0d0", "#c9c9c9"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-wolf-cream font-sans">
      {/* soft background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(255,255,255,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ---------- HERO COPY ---------- */}
      {/* pt clears the transparent overlay nav from DisplayLayout */}
      <div className="relative mx-auto max-w-6xl px-6 pt-48 text-center">
        {/* offer pill — a deliberate, contained lead-in */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-wolf-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-wolf-green-dark">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <circle cx="7" cy="7" r="1.4" />
              </svg>
              Up to 70% off
            </span>
            <span className="text-xs font-medium text-wolf-cream/85">
              on your <span className="font-semibold text-wolf-cream">1st order</span> — every week
            </span>
          </div>
        </div>

        {/* headline — big, tightly stacked, poster-weight */}
        <h1 className="mt-7 font-display font-extrabold leading-[1.05] tracking-[-0.02em] text-wolf-cream text-[clamp(2.7rem,8vw,5.5rem)]">
          Fresh, delicious &amp;
          <br />
          delivered to your door!
        </h1>

        {/* CTAs */}
        <div className="mt-9 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-wolf-orange px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-green-dark shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
          >
            Click here to start
          </a>
        </div>
      </div>

      {/* ---------- CINEMATIC FOLDING CARD FAN ----------
          Viewport: perspective + clip-path ellipse (curved bottom).
          Track: flex row, cards fold inward on inner-edge hinges.
          The row is wider than the viewport so the first & last cards
          clip to ~half at the edges. */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          padding: "24px 0 120px",
          perspective: "1200px",
          perspectiveOrigin: "center 50%",
          clipPath: "ellipse(140% 100% at 50% 0%)",
        }}
      >
        <div
          className="flex w-full items-center justify-center"
          style={{ gap: "14px", transformStyle: "preserve-3d" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="relative flex-none overflow-hidden rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
              style={{
                width: "max(140px, 21vw)",
                aspectRatio: "180 / 230",
                background: SHADES[i],
                transformOrigin: card.origin,
                transform: `rotateY(${card.rotY}deg) scaleX(${card.scale}) scaleY(${card.scaleY})`,
                filter: `brightness(${card.bright})`,
                marginLeft: card.ml ? `${card.ml}px` : undefined,
              }}
              aria-hidden="true"
            >
              <img
                src={IMAGES.heroCards[i % IMAGES.heroCards.length]}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
