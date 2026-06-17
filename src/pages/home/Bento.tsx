/* ============================================================
   KONNECT — Bento category section (under the hero)
   A featured "Food Delivery" card (2×2) with "Groceries" and
   "Stores" coming-soon tiles stacked beside it. Collapses to a
   single column on mobile. Image slots come from the central config.
   ============================================================ */

import { Link } from "react-router-dom";
import { IMAGES } from "../../assets/images";

export default function Bento() {
  return (
    <section className="pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------- heading ---------- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            What&apos;s on Konnect
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Everything you crave,{" "}
            <span className="text-wolf-orange">delivered.</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/70">
            From hot meals to everyday essentials — order what you need and we&apos;ll bring it
            to your door. More on the way soon.
          </p>
        </div>

        {/* ---------- bento grid ---------- */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {/* Featured: Food Delivery (2×2) */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-wolf-green p-7 text-wolf-cream md:col-span-2 md:row-span-2">
            <div className="relative z-10 max-w-md">
              <span className="inline-block rounded-full bg-wolf-orange px-3 py-1 text-xs font-semibold text-wolf-green-dark">
                Available now
              </span>
              <h3 className="mt-4 font-display text-3xl leading-none tracking-tight md:text-4xl">
                Food Delivery
              </h3>
              <p className="mt-3 max-w-sm text-sm text-wolf-cream/80">
                From your favourite local kitchens straight to your door in minutes. Browse,
                order, track, and chop — it&apos;s that simple.
              </p>
              <Link
                to="/signup"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-wolf-orange px-6 py-3 text-sm font-semibold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
              >
                START HERE
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            {/* featured image */}
            <div className="relative mt-7 min-h-[170px] flex-1 overflow-hidden rounded-2xl bg-neutral-300 transition-transform duration-300 group-hover:scale-[1.01]">
              <img
                src={IMAGES.bentoFood}
                alt="A hot plate of Nigerian jollof rice"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </article>

          {/* Groceries (coming soon) */}
          <article className="group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl leading-none tracking-tight text-wolf-green">
                Groceries
              </h3>
              <span className="shrink-0 rounded-full bg-wolf-cream px-3 py-1 text-xs font-semibold text-wolf-green/60">
                Coming soon
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-500">
              Fresh produce and daily essentials, delivered.
            </p>
            <div className="relative mt-5 min-h-[120px] flex-1 overflow-hidden rounded-2xl bg-neutral-200 transition-transform duration-300 group-hover:scale-[1.01]">
              <img
                src={IMAGES.bentoGroceries}
                alt="Fresh groceries in a basket"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </article>

          {/* Pharmacy (coming soon) */}
          <article className="group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl leading-none tracking-tight text-wolf-green">
                Stores
              </h3>
              <span className="shrink-0 rounded-full bg-wolf-cream px-3 py-1 text-xs font-semibold text-wolf-green/60">
                Coming soon
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-500">
              Everyday items from local shops, brought right to your door.
            </p>
            <div className="relative mt-5 min-h-[120px] flex-1 overflow-hidden rounded-2xl bg-neutral-200 transition-transform duration-300 group-hover:scale-[1.01]">
              <img
                src={IMAGES.bentoStores}
                alt="A local convenience store"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
