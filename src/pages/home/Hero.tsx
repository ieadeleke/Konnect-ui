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
// `scaleY` = height factor, stepping down from card 1 → 4 (mirrored 5-7).
// `ml`     = per-card left-margin tweak (px) on top of the base 14px gap.
const CARDS = [
  { rotY: 24, scale: 1, scaleY: 0.9, bright: 0.75, origin: "right center", ml: 0 },
  { rotY: 16, scale: 0.92, scaleY: 0.8, bright: 0.85, origin: "right center", ml: 5 },
  { rotY: 14, scale: 0.85, scaleY: 0.7, bright: 0.95, origin: "right center", ml: -26 },
  // scaleY matches card 3's right edge / card 5's left edge.
  { rotY: 0, scale: 0.78, scaleY: 0.7, bright: 1, origin: "center center", ml: -22 },
  { rotY: -14, scale: 0.85, scaleY: 0.7, bright: 0.95, origin: "left center", ml: -22 },
  { rotY: -16, scale: 0.92, scaleY: 0.8, bright: 0.85, origin: "left center", ml: -26 },
  { rotY: -24, scale: 1, scaleY: 0.9, bright: 0.75, origin: "left center", ml: 5 },
] as const;
const SHADES = ["#c9c9c9", "#cdcdcd", "#d2d2d2", "#d7d7d7", "#d2d2d2", "#cdcdcd", "#c9c9c9"];

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
        {/* rating pill — a deliberate, contained lead-in */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="flex -space-x-2" aria-hidden="true">
              {["#d9d9d9", "#c9c9c9", "#bdbdbd"].map((c, i) => (
                <span
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-[#111111]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-wolf-cream/85">
              Loved By <span className="font-semibold text-wolf-cream">2.4m</span> Customers ·{" "}
              <span className="text-wolf-orange">★ 4.6</span>
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
            Shop Now
          </a>
          <a
            href="#"
            className="rounded-full bg-wolf-green-deep px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-cream ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
          >
            Explore Menu
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
                width: "max(108px, 15.8vw)",
                aspectRatio: "180 / 340",
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
