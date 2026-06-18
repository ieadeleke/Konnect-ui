/* ============================================================
   KONNECT for Business — merchant / restaurant partner page.
   Pattern inspired by heyfood.africa/merchant, styled to match the
   Konnect landing page: clean, flat, near-black + orange + cream.
   Sections: hero (copy + signup form), stats, why-partner benefits,
   how-it-works steps, testimonial, final CTA. Footer is shared.
   ============================================================ */

import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import { FaBullhorn, FaQuoteLeft } from "react-icons/fa6";
import {
  FiUsers,
  FiGrid,
  FiTruck,
  FiCreditCard,
  FiLifeBuoy,
  FiArrowRight,
  FiShoppingCart,
} from "react-icons/fi";
import { IMAGES } from "../../assets/images";
import { useSeo } from "../../lib/seo";

const BENEFITS: { Icon: IconType; title: string; text: string }[] = [
  {
    Icon: FiUsers,
    title: "More customers",
    text: "Get discovered by thousands of hungry diners searching for their next meal across your city.",
  },
  {
    Icon: FiGrid,
    title: "One simple dashboard",
    text: "Manage menus, orders and opening hours from a single, clean dashboard built for busy kitchens.",
  },
  {
    Icon: FiTruck,
    title: "Reliable delivery fleet",
    text: "Our riders handle pickup and delivery, so your food arrives hot and your team stays in the kitchen.",
  },
  {
    Icon: FiCreditCard,
    title: "Fast instant payouts",
    text: "Get settled instantly straight to your business wallet, with every transaction itemized clearly.",
  },
  {
    Icon: FaBullhorn,
    title: "Marketing that works",
    text: "Feature in promotions, push offers and in-app placements that bring repeat orders to your door.",
  },
  {
    Icon: FiLifeBuoy,
    title: "Dedicated support",
    text: "A real partner-success team is one tap away whenever you need a hand — every day of the week.",
  },
];

const STATS: { value: string; label: string }[] = [
  { value: "10k+", label: "orders every month" },
  { value: "500+", label: "partner restaurants" },
  { value: "20+", label: "cities and growing" },
  { value: "4.8★", label: "average partner rating" },
];

const STEPS: { title: string; text: string }[] = [
  { title: "Sign up", text: "Tell us about your restaurant and share a few documents — it takes minutes." },
  { title: "Get verified", text: "Our team reviews your details and helps you set up your menu, usually within 48 hours." },
  { title: "Go live", text: "Your kitchen appears on Konnect and starts receiving orders from nearby customers." },
  { title: "Get paid", text: "Fulfil orders, track everything in your dashboard, and get paid instantly." },
];

/* ---------- hero: headline + CTAs + image ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-wolf-green pt-28 pb-16 md:pt-32 md:pb-24">
      {/* soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, rgba(11,122,82,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* copy */}
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

        {/* image + floating accents */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* decorative dot grid (peeks top-right) */}
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 h-28 w-28"
            style={{
              backgroundImage:
                "radial-gradient(rgba(11,122,82,0.55) 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />
          {/* soft glow blob (behind, bottom-left) */}
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-wolf-orange/25 blur-3xl"
          />

          {/* photo */}
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <img
              src={IMAGES.businessHero}
              alt="A chef plating food in a busy restaurant kitchen"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* cart badge (top-left) */}
          <div className="absolute -left-5 top-10 grid h-14 w-14 place-items-center rounded-2xl bg-wolf-orange text-white shadow-lg ring-1 ring-black/5">
            <FiShoppingCart className="h-6 w-6" />
          </div>

          {/* "new order" notification card (bottom-right) */}
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

/* ---------- stats strip ---------- */
function Stats() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold tracking-tight text-wolf-green md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-wolf-green/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- why partner ---------- */
function Benefits() {
  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Why partner with us
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Everything you need to <span className="text-wolf-orange">sell more</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/60">
            From your first order to your busiest weekend, Konnect gives you the customers,
            the tools and the support to grow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-wolf-orange/15 text-wolf-orange">
                <b.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-tight text-wolf-green">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wolf-green/60">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how it works ---------- */
function Steps() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            How it works
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Up and running in <span className="text-wolf-orange">four steps</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-wolf-cream p-7">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-wolf-green font-display text-lg font-bold text-wolf-cream">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-lg tracking-tight text-wolf-green">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wolf-green/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonial ---------- */
function Testimonial() {
  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FaQuoteLeft className="mx-auto h-12 w-12 text-wolf-orange md:h-14 md:w-14" aria-hidden="true" />
        <blockquote className="mt-4 font-display text-2xl leading-snug tracking-tight text-wolf-green md:text-3xl">
          Since joining Konnect, our weekend orders have nearly doubled. The dashboard is
          dead simple and payouts always land on time — it just works.
        </blockquote>
        <div className="mt-6">
          <div className="font-semibold text-wolf-green">Amaka Obi</div>
          <div className="text-sm text-wolf-green/60">Owner, Mama&apos;s Kitchen · Lagos</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- final CTA ---------- */
function Signup() {
  return (
    <section id="get-started" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wolf-green px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 70% at 50% 0%, rgba(11,122,82,0.2), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-wolf-cream/75">
              Join hundreds of restaurants already selling more with Konnect. It&apos;s free
              to start — no setup fees, no lock-in.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wolf-orange px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Start here
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-wolf-cream/70">
              {["Live in 48 hours", "Instant payouts", "Real team behind you"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessPage() {
  useSeo({
    title: "Konnect for Business — grow your restaurant",
    description:
      "Partner with Konnect to reach thousands of hungry customers, manage orders from one simple dashboard and get instant payouts. No setup fees — live in 48 hours.",
    path: "/business",
  });
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <Steps />
      <Testimonial />
      <Signup />
    </>
  );
}
