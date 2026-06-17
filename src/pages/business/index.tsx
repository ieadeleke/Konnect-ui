/* ============================================================
   WOLFOOD for Business — merchant / restaurant partner page.
   Pattern inspired by heyfood.africa/merchant, styled to match the
   Wolfood landing page: clean, flat, near-black + orange + cream.
   Sections: hero (copy + signup form), stats, why-partner benefits,
   how-it-works steps, testimonial, final CTA. Footer is shared.
   ============================================================ */

import { useState, type ReactNode } from "react";
import { IMAGES } from "../../assets/images";

/* ---------- small inline icons (stroke style, currentColor) ---------- */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const BENEFITS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: (
      <Icon>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
    title: "More customers",
    text: "Get discovered by thousands of hungry diners searching for their next meal across your city.",
  },
  {
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </Icon>
    ),
    title: "One simple dashboard",
    text: "Manage menus, orders and opening hours from a single, clean dashboard built for busy kitchens.",
  },
  {
    icon: (
      <Icon>
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </Icon>
    ),
    title: "Reliable delivery fleet",
    text: "Our riders handle pickup and delivery, so your food arrives hot and your team stays in the kitchen.",
  },
  {
    icon: (
      <Icon>
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </Icon>
    ),
    title: "Fast weekly payouts",
    text: "Get settled every week, straight to your bank account, with every transaction itemised clearly.",
  },
  {
    icon: (
      <Icon>
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </Icon>
    ),
    title: "Marketing that works",
    text: "Feature in promotions, push offers and in-app placements that bring repeat orders to your door.",
  },
  {
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24" />
      </Icon>
    ),
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
  { title: "Go live", text: "Your kitchen appears on Wolfood and starts receiving orders from nearby customers." },
  { title: "Get paid", text: "Fulfil orders, track everything in your dashboard, and get paid reliably every week." },
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
            "radial-gradient(60% 60% at 80% 10%, rgba(245,60,8,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* copy */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Wolfood for Business
          </span>
          <h1 className="mt-4 font-display text-[2.75rem] leading-[1.02] tracking-tight text-wolf-cream md:text-6xl">
            Grow your restaurant with <span className="text-wolf-orange">Wolfood</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
            Reach thousands of hungry customers, manage every order from one simple
            dashboard, and get paid reliably — every single week.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
            >
              Get started
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-cream ring-1 ring-white/20 transition-colors hover:bg-white/15"
            >
              Talk to sales
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-wolf-cream/70">
            {["No setup fees", "Live in 48 hours", "Cancel anytime"].map((p) => (
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
                "radial-gradient(rgba(245,60,8,0.55) 1.5px, transparent 1.5px)",
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
          <div className="absolute -left-5 top-10 grid h-14 w-14 place-items-center rounded-2xl bg-wolf-orange text-wolf-green-dark shadow-lg ring-1 ring-black/5">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.5 13h11L21 7H6" />
            </svg>
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

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-wolf-green/70">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-wolf-cream px-4 py-3 text-sm text-wolf-green outline-none ring-1 ring-black/5 placeholder:text-wolf-green/35 focus:ring-2 focus:ring-wolf-orange"
      />
    </label>
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
            From your first order to your busiest weekend, Wolfood gives you the customers,
            the tools and the support to grow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-wolf-orange/15 text-wolf-orange">
                {b.icon}
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
        <svg
          viewBox="0 0 24 24"
          className="mx-auto h-14 w-14 text-wolf-orange md:h-16 md:w-16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
        </svg>
        <blockquote className="mt-4 font-display text-2xl leading-snug tracking-tight text-wolf-green md:text-3xl">
          Since joining Wolfood, our weekend orders have nearly doubled. The dashboard is
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

/* ---------- final CTA + signup form ---------- */
function Signup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="get-started" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wolf-green px-8 py-14 md:px-16 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(70% 70% at 15% 0%, rgba(245,60,8,0.18), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* heading */}
            <div>
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
                Ready to grow your business?
              </h2>
              <p className="mt-4 max-w-md text-base text-wolf-cream/75">
                Join hundreds of restaurants already selling more with Wolfood.
                It&apos;s free to start — no setup fees, no lock-in.
              </p>
              <ul className="mt-7 space-y-3">
                {["Live on Wolfood in 48 hours", "Weekly payouts, every time", "A real team behind you"].map(
                  (p) => (
                    <li key={p} className="flex items-center gap-3 text-wolf-cream/80">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wolf-orange/20 text-wolf-orange">
                        <Icon>
                          <path d="M20 6 9 17l-5-5" />
                        </Icon>
                      </span>
                      {p}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* form card */}
            <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-wolf-orange/15 text-wolf-orange">
                    <Icon>
                      <path d="M20 6 9 17l-5-5" />
                    </Icon>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-wolf-green">You&apos;re on the list!</h3>
                  <p className="mt-2 text-sm text-wolf-green/60">
                    Thanks — our partner team will reach out within 48 hours to get you set up.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl tracking-tight text-wolf-green">
                    Get started — it&apos;s free
                  </h3>
                  <p className="mt-1 text-sm text-wolf-green/60">
                    Create your partner account in minutes.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-6 space-y-3"
                  >
                    <Field label="Restaurant name" name="business" placeholder="e.g. Mama's Kitchen" />
                    <Field label="Work email" name="email" type="email" placeholder="you@restaurant.com" />
                    <Field label="Phone number" name="phone" type="tel" placeholder="+234 800 000 0000" />
                    <Field label="City" name="city" placeholder="e.g. Lagos" />
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-wolf-orange px-6 py-3.5 text-sm font-semibold text-wolf-green-dark transition-transform hover:-translate-y-0.5"
                    >
                      Create partner account
                    </button>
                  </form>
                  <p className="mt-4 text-center text-xs text-wolf-green/50">
                    Already a partner?{" "}
                    <a href="#" className="font-semibold text-wolf-green underline-offset-2 hover:underline">
                      Sign in
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessPage() {
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
