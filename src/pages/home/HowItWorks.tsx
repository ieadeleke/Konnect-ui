/* ============================================================
   KONNECT — How it works (sticky scrollytelling)
   Dark-green band. Left: steps stacked tall; the one crossing the
   viewport centre becomes active (others dim). Right: a sticky panel
   whose UI card crossfades to the active step. On mobile the sticky
   panel is dropped and each step shows its card inline.
   Cards are lightweight UI mockups (Browse → Cart → Track).
   ============================================================ */

import { useEffect, useRef, useState } from "react";

type Variant = "browse" | "cart" | "track";
type Step = { n: number; title: string; text: string; points: string[]; screen: Variant };

const STEPS: Step[] = [
  {
    n: 1,
    title: "Browse nearby",
    text: "Set your location and we'll surface every kitchen delivering to you right now — from buka classics to late-night cravings. Compare menus, prices and live delivery times before a single bite.",
    points: ["2,000+ kitchens", "Live ETAs", "Real reviews"],
    screen: "browse",
  },
  {
    n: 2,
    title: "Add to cart & checkout",
    text: "Build your order, leave notes for the kitchen, and pay your way in seconds. What you see is exactly what you pay — every fee shown upfront, no surprises at the last step.",
    points: ["Card · Transfer · Wallet", "No hidden fees"],
    screen: "cart",
  },
  {
    n: 3,
    title: "Track & receive",
    text: "Watch your rider move across the map in real time and get a heads-up as they near your door. Hot, sealed and handed straight to you — rain or shine.",
    points: ["Live map", "Rider updates", "Contactless"],
    screen: "track",
  },
];

/* ---------- lightweight UI cards (per step) ---------- */
function StepCard({ variant }: { variant: Variant }) {
  const base =
    "flex h-full flex-col rounded-2xl bg-white p-4 text-wolf-green shadow-xl shadow-black/25";

  if (variant === "browse") {
    return (
      <div className={base}>
        <div className="text-sm font-semibold">Restaurants near you</div>
        <div className="mt-3 flex h-9 items-center rounded-lg bg-neutral-100 px-3 text-xs text-neutral-400">
          Search dishes, kitchens…
        </div>
        <div className="mt-3 flex-1 space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-neutral-200" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2.5 w-2/3 rounded bg-neutral-200" />
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-wolf-orange">★ 4.8</span>
                  <div className="h-2 w-12 rounded bg-neutral-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "cart") {
    return (
      <div className={base}>
        <div className="text-sm font-semibold">Your order</div>
        <div className="mt-3 flex-1 space-y-3">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-neutral-200" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2.5 w-3/4 rounded bg-neutral-200" />
                <div className="h-2 w-10 rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3 text-sm font-semibold">
          <span>Total</span>
          <span>₦4,250</span>
        </div>
        <div className="mt-3 grid h-10 place-items-center rounded-xl bg-wolf-orange text-sm font-semibold text-wolf-green-dark">
          Checkout
        </div>
      </div>
    );
  }

  // track
  return (
    <div className={base}>
      <div className="text-sm font-semibold">On the way</div>
      <div className="relative mt-3 flex-1 overflow-hidden rounded-xl bg-neutral-100">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 240 180" fill="none" aria-hidden="true">
          <path
            d="M30 150 C 80 120, 70 60, 130 60 S 200 90, 210 40"
            stroke="#F53C08"
            strokeWidth="3"
            strokeDasharray="3 7"
            strokeLinecap="round"
          />
          <circle cx="30" cy="150" r="6" fill="#111111" />
          <circle cx="210" cy="40" r="7" fill="#F53C08" />
          <circle cx="210" cy="40" r="3" fill="#fff" />
        </svg>
      </div>
      <div className="mt-3">
        <div className="text-sm font-semibold">Arriving in 12 min</div>
        <div className="text-xs text-neutral-400">Rider: Emeka · 1.2km away</div>
      </div>
    </div>
  );
}

/* the lighter-green "stage" that frames the card */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10">
      <div className="relative mx-auto h-[440px] max-w-[340px]">{children}</div>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // discrete: which step is active (drives text / badge / card highlight)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.step));
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // continuous: scroll-linked rail fill + ball (imperative → no re-render)
  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;
    let raf = 0;
    const n = STEPS.length;
    const firstFrac = 0.5 / n; // list-fraction of the 1st step's centre
    const lastFrac = (n - 0.5) / n; // …and the last step's centre
    const update = () => {
      raf = 0;
      const rect = list.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const raw = (center - rect.top) / rect.height; // 0 at list top … 1 at bottom
      // remap so the ball is empty at the 1st step and full at the last step
      const p = (raw - firstFrac) / (lastFrac - firstFrac);
      fill.style.height = `${Math.min(1, Math.max(0, p)) * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative bg-[#111111] pt-24 pb-8 text-wolf-cream md:pt-28 md:pb-10">
      {/* soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 0%, rgba(245,60,8,0.10), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------- heading ---------- */}
        <h2 className="text-center font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
          How to order on <span className="text-wolf-orange">Konnect</span>
        </h2>

        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-24">
          {/* ----- left: steps + scroll-progress rail ----- */}
          <div ref={listRef} className="relative md:pl-12">
            {/* faint track + scroll-linked orange fill with a glowing ball (desktop) */}
            <div
              aria-hidden="true"
              className="absolute bottom-16 left-0 top-16 hidden w-0.5 md:block"
            >
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div
                ref={fillRef}
                className="absolute left-0 top-0 w-full rounded-full bg-wolf-orange"
                style={{ height: "0%" }}
              >
                <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-wolf-orange shadow-[0_0_14px_4px_rgba(245,60,8,0.6)]" />
              </div>
            </div>

            {STEPS.map((step, i) => (
              <div
                key={step.n}
                data-step={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="flex flex-col justify-center py-6 md:min-h-[58vh] md:py-0"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl font-display text-xl font-bold ring-1 transition-all duration-500 ${
                    active === i
                      ? "bg-wolf-orange text-wolf-green-dark ring-transparent shadow-[0_0_28px_rgba(245,60,8,0.45)]"
                      : "bg-[#262626] text-wolf-cream/70 ring-white/15"
                  }`}
                >
                  {step.n}
                </div>
                <h3
                  className={`mt-5 font-display text-2xl tracking-tight transition-colors duration-500 md:text-3xl ${
                    active === i ? "text-wolf-cream" : "text-wolf-cream/45"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-3 max-w-md text-base leading-relaxed transition-colors duration-500 ${
                    active === i ? "text-wolf-cream/80" : "text-wolf-cream/35"
                  }`}
                >
                  {step.text}
                </p>

                {/* supporting chips */}
                <div
                  className={`mt-5 flex flex-wrap gap-2 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {step.points.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-wolf-cream/80 ring-1 ring-white/10"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
                      {p}
                    </span>
                  ))}
                </div>

                {/* mobile inline card */}
                <div className="mt-7 md:hidden">
                  <Stage>
                    <StepCard variant={step.screen} />
                  </Stage>
                </div>
              </div>
            ))}
          </div>

          {/* ----- right: sticky card stage (desktop) ----- */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <Stage>
                {STEPS.map((step, i) => (
                  <div
                    key={step.n}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <StepCard variant={step.screen} />
                  </div>
                ))}
              </Stage>
            </div>
          </div>
        </div>

        {/* trailing space so the last step can glide up to the middle (desktop),
            letting the progress ball roll to the end instead of snapping */}
        <div aria-hidden="true" className="hidden h-[10vh] md:block" />
      </div>
    </section>
  );
}
