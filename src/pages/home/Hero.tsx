import { FiTag } from "react-icons/fi";
import { IMAGES } from "../../assets/images";
import StoreBadges from "../../components/StoreBadges";

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

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(255,255,255,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-48 text-center">

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-wolf-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              <FiTag className="h-3.5 w-3.5" />
              Up to 70% off
            </span>
            <span className="text-xs font-medium text-wolf-cream/85">
              on your <span className="font-semibold text-wolf-cream">1st order</span> — every week
            </span>
          </div>
        </div>

        <h1 className="mt-7 font-display font-extrabold leading-[1.05] tracking-[-0.02em] text-wolf-cream text-[clamp(2.7rem,8vw,5.5rem)]">
          Fresh, delicious &amp;
          <br />
          delivered to your door!
        </h1>

        <StoreBadges className="mx-auto mt-9 max-w-md sm:max-w-none sm:justify-center" size="sm" mobileGrid />
      </div>

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
