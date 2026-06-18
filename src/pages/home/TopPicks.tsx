import { IMAGES } from "../../assets/images";

type Pick = { name: string; meta: string; img: string };

const PICKS: Pick[] = [
  { name: "Beckley's Kitchen", meta: "Jollof · ★ 4.8 · 25 min", img: IMAGES.picks[0] },
  { name: "Ibile Delicacies", meta: "Barbecue · ★ 4.9 · 30 min", img: IMAGES.picks[1] },
  { name: "University of Amala", meta: "Amala · ★ 4.7 · 18 min", img: IMAGES.picks[2] },
  { name: "Amala Nation", meta: "Soups · ★ 4.6 · 35 min", img: IMAGES.picks[3] },
  { name: "Amala Sky", meta: "Amala · ★ 4.8 · 28 min", img: IMAGES.picks[4] },
  { name: "YKB Amala Spot", meta: "Ofada · ★ 4.7 · 32 min", img: IMAGES.picks[5] },
  { name: "Remmy's Food Palace", meta: "Desserts · ★ 4.9 · 20 min", img: IMAGES.picks[6] },
  { name: "EWA-AGONYI (dabina's)", meta: "Jollof · ★ 4.8 · 25 min", img: IMAGES.picks[0] },
  { name: "Chef Chi Kitchen", meta: "Barbecue · ★ 4.9 · 30 min", img: IMAGES.picks[1] },
  { name: "Chopstick Dynasty", meta: "Shawarma · ★ 4.7 · 18 min", img: IMAGES.picks[2] },
];

function Pill({ p }: { p: Pick }) {
  return (
    <a
      href="#"
      className="group flex w-full items-center gap-4 rounded-full bg-white p-2 pr-5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-[280px]"
    >

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

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {PICKS.map((p) => (
            <Pill key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
