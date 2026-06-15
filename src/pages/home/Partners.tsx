/* ============================================================
   WOLFOOD — Partner section (under "How to order on Wolfood")
   Alternating rows (text card ↔ image), one for restaurants and
   one for riders. Layout inspired by v.png; copy/art original.
   Image areas use a soft gradient + faint icon watermark.
   ============================================================ */

import type { ReactNode } from "react";

type Row = {
  title: string;
  desc: string;
  points: string[];
  cta: string;
  variant: "green" | "orange";
  art: ReactNode;
};

const Storefront = (
  <svg viewBox="0 0 24 24" className="h-24 w-24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3.5 9 5 4h14l1.5 5" />
    <path d="M4 9v11h16V9" />
    <path d="M3.5 9h17" />
    <path d="M9.5 20v-6h5v6" />
  </svg>
);

const Scooter = (
  <svg viewBox="0 0 24 24" className="h-24 w-24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="5.5" cy="17.5" r="2.5" />
    <circle cx="18.5" cy="17.5" r="2.5" />
    <path d="M8 17.5h8l2-6h-4l-1.5-4H10" />
  </svg>
);

const ROWS: Row[] = [
  {
    title: "For Restaurants",
    desc: "List your kitchen and turn first-time orders into regulars. We bring the customers, the logistics and the tools — you bring the food.",
    points: [
      "Reach thousands of hungry customers across your city.",
      "One simple dashboard for orders, menus and payouts.",
      "Fast, reliable settlements — paid on time, every time.",
    ],
    cta: "Become a partner",
    variant: "green",
    art: Storefront,
  },
  {
    title: "Become a Rider",
    desc: "Earn on your own terms. Sign up, hit the road, and get paid every week for every delivery you complete — rain or shine.",
    points: [
      "Ride on your own schedule, full-time or whenever you're free.",
      "Weekly payouts plus bonuses when demand is high.",
      "Branded gear and in-app support on every trip.",
    ],
    cta: "Start riding",
    variant: "orange",
    art: Scooter,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Partners() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------- heading ---------- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Partner with Wolfood
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Grow with us, <span className="text-wolf-orange">ride with us</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/70">
            Whether you run a kitchen or ride the streets, there&apos;s a place for you on Wolfood.
          </p>
        </div>

        {/* ---------- alternating rows ---------- */}
        <div className="mt-14 space-y-8">
          {ROWS.map((row, i) => {
            const flipped = i % 2 === 1; // odd rows put the image on the left
            return (
              <div key={row.title} className="grid gap-6 md:grid-cols-3">
                {/* text card (2 of 3 cols) — background lives here only */}
                <div
                  className={`flex flex-col justify-center rounded-[2rem] bg-wolf-cream p-8 shadow-sm ring-1 ring-black/5 md:col-span-2 md:p-14 ${
                    flipped ? "md:order-2" : ""
                  }`}
                >
                  <h3 className="font-display text-3xl uppercase leading-none tracking-tight text-wolf-green md:text-4xl">
                    {row.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-wolf-green/70">
                    {row.desc}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {row.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wolf-orange/15 text-wolf-orange">
                          <Check />
                        </span>
                        <span className="text-[0.95rem] text-wolf-green/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-9 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                      row.variant === "orange"
                        ? "bg-wolf-orange text-wolf-green-dark"
                        : "bg-wolf-green text-wolf-cream"
                    }`}
                  >
                    {row.cta}
                    <Arrow />
                  </a>
                </div>

                {/* image panel (1 of 3 cols) — separate, beside the text */}
                <div
                  className={`relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-sm md:col-span-1 md:min-h-[380px] ${
                    flipped ? "md:order-1" : ""
                  }`}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
                  <div className="absolute inset-0 grid place-items-center text-neutral-400/70">
                    {row.art}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
