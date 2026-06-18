import { Link } from "react-router-dom";
import { Arrow, Stars, Avatars, RouteMap } from "./shared";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-wolf-green pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: "radial-gradient(60% 60% at 80% 10%, rgba(11,122,82,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
            Ride with Konnect
          </span>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.02] tracking-tight text-wolf-cream md:text-6xl">
            Earn on your own <span className="text-wolf-orange">terms</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
            Deliver with Konnect and ride when it suits you. Flexible hours, instant
            payouts, and bonuses when demand is high — you decide when you ride.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Start riding
              <Arrow />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-wolf-cream ring-1 ring-white/20 transition-colors hover:bg-white/15"
            >
              See how it works
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <Avatars />
            <div>
              <Stars />
              <div className="mt-1 text-sm text-wolf-cream/70">
                Join <span className="font-semibold text-wolf-cream">5,000+ riders</span> earning daily
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-wolf-orange/25 blur-3xl" />
          <RouteMap className="aspect-[4/5]" />

          <div className="absolute -left-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
            <div className="text-[0.7rem] font-medium text-wolf-green/50">This week</div>
            <div className="font-display text-lg font-bold tracking-tight text-wolf-green">₦42,500</div>
          </div>

          <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-wolf-orange" />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-wolf-green">On the way</div>
                <div className="text-[0.7rem] text-wolf-green/50">Arrives in 8 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
