import { Link } from "react-router-dom";
import { FiArrowRight, FiShoppingCart } from "react-icons/fi";
import { IMAGES } from "../../assets/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-wolf-green pt-28 pb-16 md:pt-32 md:pb-24">

      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(11,122,82,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Konnect for Business
          </span>
          <h1 className="mt-4 font-display text-[2.75rem] leading-[1.02] tracking-tight text-wolf-cream md:text-6xl">
            Grow your restaurant with <span className="text-wolf-orange">Konnect</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
            Reach thousands of hungry customers, manage every order from one simple
            dashboard, and get paid reliably — every single week.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Get started
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/2348073376943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-wolf-cream ring-1 ring-white/20 transition-colors hover:bg-white/15"
            >
              Talk to sales
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-wolf-cream/70">
            {["No setup fees", "Live in 48 hours", "Cancel anytime", "Instant payouts"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">

          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 h-28 w-28"
            style={{
              backgroundImage:
                "radial-gradient(rgba(11,122,82,0.55) 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-wolf-orange/25 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <img
              src={IMAGES.businessHero}
              alt="A chef plating food in a busy restaurant kitchen"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -left-5 top-10 grid h-14 w-14 place-items-center rounded-2xl bg-wolf-orange text-white shadow-lg ring-1 ring-black/5">
            <FiShoppingCart className="h-6 w-6" />
          </div>

          <div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
            <img
              src={IMAGES.picks[0]}
              alt=""
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div className="leading-tight">
              <div className="text-xs font-semibold text-wolf-green">New order · ₦4,500</div>
              <div className="text-[0.7rem] text-wolf-green/50">Jollof rice · 2 items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
