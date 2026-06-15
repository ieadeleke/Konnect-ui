/* ============================================================
   WOLFOOD — Top picks for you
   Matches g.png: a compact grid of small "pick" items — a round
   thumbnail beside a short label — under a centred heading, with an
   orange button below. Grey circles stand in for the thumbnails.
   NOTE: "Top picks for you" heading is verbatim from g.png; the
   eyebrow / subcopy / item text are placeholders (source not
   legible) — swap when the real copy lands.
   ============================================================ */

import { IMAGES } from "../../assets/images";

type Pick = { name: string; meta: string; img: string };

const PICKS: Pick[] = [
  { name: "Mama Nkechi Kitchen", meta: "Jollof · ★ 4.8 · 25 min", img: IMAGES.picks[0] },
  { name: "Suya Republic", meta: "Barbecue · ★ 4.9 · 30 min", img: IMAGES.picks[1] },
  { name: "Wrap & Roll", meta: "Shawarma · ★ 4.7 · 18 min", img: IMAGES.picks[2] },
  { name: "The Pepper Pot", meta: "Soups · ★ 4.6 · 35 min", img: IMAGES.picks[3] },
  { name: "Crust & Co.", meta: "Pizza · ★ 4.8 · 28 min", img: IMAGES.picks[4] },
  { name: "Ofada Republic", meta: "Ofada · ★ 4.7 · 32 min", img: IMAGES.picks[5] },
  { name: "Sweet Tooth", meta: "Desserts · ★ 4.9 · 20 min", img: IMAGES.picks[6] },
];

function Pill({ p }: { p: Pick }) {
  return (
    <a
      href="#"
      className="group flex w-full items-center gap-4 rounded-full bg-white p-2 pr-5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-[280px]"
    >
      {/* round thumbnail */}
      <img
        src={p.img}
        alt={p.name}
        loading="lazy"
        className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="min-w-0">
        <span className="block truncate font-bold text-wolf-green">{p.name}</span>
        <span className="block truncate text-sm text-neutral-500">{p.meta}</span>
      </span>
    </a>
  );
}

export default function TopPicks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------- heading ---------- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Featured kitchens
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Top picks for you
          </h2>
          <p className="mt-4 text-base text-wolf-green/70">
            Hand-picked spots near you, loved for getting it right every single time.
          </p>
        </div>

        {/* ---------- picks: 3 on top, 4 under ---------- */}
        <div className="mt-12 flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-6">
            {PICKS.slice(0, 3).map((p) => (
              <Pill key={p.name} p={p} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {PICKS.slice(3, 7).map((p) => (
              <Pill key={p.name} p={p} />
            ))}
          </div>
        </div>

        {/* ---------- view all ---------- */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
          >
            View all restaurants
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
