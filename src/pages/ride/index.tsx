/* ============================================================
   KONNECT — Ride (rider / courier) page.
   Clean, flat, on-brand — and richly designed. Distinct from
   /business: a route/map hero with social proof, a dark stats
   band, a sticky stacking-cover feature stack, an icon-chip
   requirements block, an icon timeline, a featured testimonial
   card, and a closing signup with social proof.
   ============================================================ */

import { type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaApple,
  FaGooglePlay,
  FaMotorcycle,
  FaFlagCheckered,
  FaUtensils,
  FaIdCard,
  FaBuildingColumns,
} from "react-icons/fa6";
import {
  FiArrowRight,
  FiUser,
  FiHome,
  FiDollarSign,
  FiZap,
  FiUsers,
  FiHeadphones,
  FiSmartphone,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiPause,
  FiCheck,
  FiNavigation,
  FiPackage,
  FiShield,
  FiUserPlus,
  FiCreditCard,
} from "react-icons/fi";
import { IMAGES } from "../../assets/images";
import { useSeo } from "../../lib/seo";

/* ---------- shared bits ---------- */
function Arrow() {
  return <FiArrowRight className="h-4 w-4" />;
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-wolf-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={className} aria-hidden="true" />
      ))}
    </span>
  );
}

function Avatars() {
  return (
    <div className="flex -space-x-2.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="grid h-9 w-9 place-items-center rounded-full bg-wolf-cream text-wolf-green ring-2 ring-wolf-green"
        >
          <FiUser className="h-4 w-4" />
        </span>
      ))}
    </div>
  );
}

/* ---------- reusable route/map panel ---------- */
function RouteMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-wolf-green-deep shadow-2xl ring-1 ring-white/10 ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
        aria-hidden="true"
      />
      <svg viewBox="0 0 100 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M20 22 C 62 36, 26 72, 78 100" fill="none" stroke="#0b7a52" strokeWidth="1.6" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
      {/* restaurant pin */}
      <span className="absolute left-[12%] top-[12%] grid h-9 w-9 place-items-center rounded-full bg-wolf-orange text-white shadow-lg">
        <FaUtensils className="h-4 w-4" />
      </span>
      {/* home pin */}
      <span className="absolute bottom-[12%] right-[12%] grid h-9 w-9 place-items-center rounded-full bg-white text-wolf-green shadow-lg">
        <FiHome className="h-4 w-4" />
      </span>
      {/* rider avatar mid-route */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-wolf-orange shadow-xl">
          <img src={IMAGES.partnerRider} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

/* ---------- hero ---------- */
function Hero() {
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
        {/* copy */}
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

          {/* social proof */}
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

        {/* route map visual */}
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-wolf-orange/25 blur-3xl" />
          <RouteMap className="aspect-[4/5]" />

          {/* earnings chip (top-left) */}
          <div className="absolute -left-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
            <div className="text-[0.7rem] font-medium text-wolf-green/50">This week</div>
            <div className="font-display text-lg font-bold tracking-tight text-wolf-green">₦42,500</div>
          </div>

          {/* ETA chip (bottom-right) */}
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

/* ---------- stats band ---------- */
const STATS: { icon: ReactNode; value: string; label: string; badge: string }[] = [
  {
    icon: <FiDollarSign className="h-6 w-6" />,
    value: "₦40k+",
    label: "avg weekly earnings",
    badge: "+18% MoM",
  },
  {
    icon: <FiZap className="h-6 w-6" />,
    value: "Instant",
    label: "payouts, every time",
    badge: "Reliable",
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    value: "5k+",
    label: "active riders",
    badge: "And growing",
  },
  {
    icon: <FiHeadphones className="h-6 w-6" />,
    value: "24/7",
    label: "rider support",
    badge: "In-app",
  },
];

function Stats() {
  return (
    <section className="bg-wolf-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-wolf-orange/15 text-wolf-orange">
                  {s.icon}
                </span>
                <span className="rounded-full bg-wolf-cream px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-wolf-green/45">
                  {s.badge}
                </span>
              </div>
              <div className="mt-5 font-display text-4xl font-bold tracking-tight text-wolf-green">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-wolf-green/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- feature illustrations ---------- */
/* requirements list — used as the chips on the "Getting started" panel */
const REQUIREMENTS: { icon: ReactNode; label: string }[] = [
  {
    icon: <FiUser className="h-5 w-5" />,
    label: "18 years or older",
  },
  {
    icon: <FiSmartphone className="h-5 w-5" />,
    label: "A smartphone",
  },
  {
    icon: <FaMotorcycle className="h-5 w-5" />,
    label: "Bike, motorbike or car",
  },
  {
    icon: <FaIdCard className="h-5 w-5" />,
    label: "A valid government ID",
  },
  {
    icon: <FiMapPin className="h-5 w-5" />,
    label: "Right to work locally",
  },
  {
    icon: <FaBuildingColumns className="h-5 w-5" />,
    label: "A bank account",
  },
];

/* ---------- stacking feature sections (sticky-cover scroll) ----------
   Each panel uses the same two-column design as the old Requirements
   section: illustration / card on the left, eyebrow / heading / copy /
   icon-chips / CTA on the right. White panels stack and cover via the
   rounded top + upward shadow. */
const STACKS: {
  tag: string;
  title: ReactNode;
  text: string;
  bullets: { icon: ReactNode; label: string }[];
  illo: ReactNode;
}[] = [
  {
    tag: "What you'll need",
    title: (
      <>
        Getting started is <span className="text-wolf-orange">simple</span>
      </>
    ),
    text: "If you've got a way to get around and a smartphone, you're most of the way there. Here's the short checklist.",
    bullets: REQUIREMENTS,
    illo: <IdCard />,
  },
  {
    tag: "Your schedule",
    title: (
      <>
        Ride whenever it <span className="text-wolf-orange">suits you</span>
      </>
    ),
    text: "No shifts, no quotas, no minimum hours. Go online when you want and stop when you're done — you're always in control of your time.",
    bullets: [
      {
        icon: <FiClock className="h-5 w-5" />,
        label: "Full-time or part-time",
      },
      {
        icon: <FiCalendar className="h-5 w-5" />,
        label: "No shifts or quotas",
      },
      {
        icon: <FiPause className="h-5 w-5" />,
        label: "Pause anytime",
      },
      {
        icon: <FiMapPin className="h-5 w-5" />,
        label: "Choose your zones",
      },
      {
        icon: <FiSmartphone className="h-5 w-5" />,
        label: "Go online in a tap",
      },
      {
        icon: <FiCheck className="h-5 w-5" />,
        label: "Fits around life",
      },
    ],
    illo: <ScheduleCard />,
  },
  {
    tag: "Your trips",
    title: (
      <>
        Smart routes, <span className="text-wolf-orange">less waiting</span>
      </>
    ),
    text: "In-app navigation points you to the fastest pickups and drop-offs, with a branded bag and a support team on every single trip.",
    bullets: [
      {
        icon: <FiNavigation className="h-5 w-5" />,
        label: "Fastest routes",
      },
      {
        icon: <FiMapPin className="h-5 w-5" />,
        label: "Live navigation",
      },
      {
        icon: <FiPackage className="h-5 w-5" />,
        label: "Branded delivery bag",
      },
      {
        icon: <FiHeadphones className="h-5 w-5" />,
        label: "24/7 rider support",
      },
      {
        icon: <FiShield className="h-5 w-5" />,
        label: "Trip safety tools",
      },
      {
        icon: <FiSmartphone className="h-5 w-5" />,
        label: "In-app order help",
      },
    ],
    illo: <TripCard />,
  },
];

function Features() {
  return (
    <div className="relative">
      {STACKS.map((s, i) => (
        <section
          key={s.tag}
          className={`sticky top-0 flex min-h -screen items-center rounded-t-[2.5rem] bg-white ${
            i > 0 ? "shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.35)]" : ""
          }`}
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-40 md:grid-cols-2 md:gap-16">
            {/* left: illustration card */}
            <div className="order-2 md:order-1">
              <div className="mx-auto w-full max-w-sm">{s.illo}</div>
            </div>

            {/* right: content */}
            <div className="order-1 md:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
                {s.tag}
              </span>
              <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
                {s.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-wolf-green/60">{s.text}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 rounded-2xl bg-wolf-cream p-3 ring-1 ring-black/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-wolf-orange/15 text-wolf-orange">
                      {b.icon}
                    </span>
                    <span className="text-sm font-medium text-wolf-green/80">{b.label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/signup"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-wolf-green px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-wolf-cream transition-transform hover:-translate-y-0.5"
              >
                Start riding
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/* ---------- rider ID card (left visual of the "Getting started" panel) ---------- */
const BARCODE = [3, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 1, 2];

const ID_FIELDS: [string, string][] = [
  ["Vehicle", "Motorbike"],
  ["City", "Ibadan"],
  ["Member since", "2024"],
  ["Status", "Active"],
];

/* shared ID-card frame: tilt + depth + dark header band */
function RiderCard({
  title,
  badge,
  children,
}: {
  title: string;
  badge: string;
  children: ReactNode;
}) {
  return (
    <div className="relative mx-auto max-w-sm">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-4 rotate-[6deg] rounded-[1.75rem] bg-wolf-orange/15"
      />
      <div className="relative -rotate-[3deg] overflow-hidden rounded-[1.75rem] bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between bg-wolf-green px-6 py-4">
          <div className="flex items-center gap-2 text-wolf-cream">
            <Bike className="h-5 w-5 text-wolf-orange" />
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em]">{title}</span>
          </div>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-wolf-cream/50">
            {badge}
          </span>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function CardFooter({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6 flex items-end justify-between">
      <div>
        <div className="text-[0.55rem] uppercase tracking-[0.2em] text-wolf-green/40">{label}</div>
        <div className="font-mono text-sm text-wolf-green/70">{value}</div>
      </div>
      <div className="flex h-8 items-stretch gap-[2px]" aria-hidden="true">
        {BARCODE.map((w, i) => (
          <span key={i} className="block bg-wolf-green" style={{ width: `${w}px` }} />
        ))}
      </div>
    </div>
  );
}

/* panel 01 — rider ID */
function IdCard() {
  return (
    <RiderCard title="Konnect Rider" badge="ID">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-2xl ring-2 ring-wolf-orange">
          <img src={IMAGES.partnerRider} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="font-display text-lg leading-tight text-wolf-green">Tunde Adeyemi</div>
          <div className="text-xs text-wolf-green/50">Rider · Ibadan</div>
        </div>
        <span className="rounded-full bg-wolf-orange/15 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-wolf-orange">
          Eligible
        </span>
      </div>
      <div className="my-5 h-px bg-black/[0.06]" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {ID_FIELDS.map(([k, v]) => (
          <div key={k}>
            <div className="text-[0.55rem] uppercase tracking-[0.2em] text-wolf-green/40">{k}</div>
            <div className="mt-0.5 text-sm font-medium text-wolf-green/80">{v}</div>
          </div>
        ))}
      </div>
      <CardFooter label="Member ID" value="WF-2024-0042" />
    </RiderCard>
  );
}

/* panel 02 — schedule */
function ScheduleCard() {
  const active = [0, 2, 3, 5];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <RiderCard title="Your week" badge="Hours">
      <div className="text-[0.55rem] uppercase tracking-[0.2em] text-wolf-green/40">Availability</div>
      <div className="mt-3 grid grid-cols-7 gap-2">
        {days.map((d, i) => (
          <div
            key={i}
            className={`grid aspect-square place-items-center rounded-xl text-sm font-semibold ${
              active.includes(i) ? "bg-wolf-orange text-white" : "bg-wolf-cream text-wolf-green/35"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-wolf-green/60">
        <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
        Online 4 days this week
      </div>
      <CardFooter label="Hours logged" value="24h 30m" />
    </RiderCard>
  );
}

/* panel 03 — live trip */
function TripCard() {
  return (
    <RiderCard title="Live trip" badge="Route">
      <RouteMap className="aspect-[5/4]" />
      <div className="mt-4 flex items-center gap-2 text-sm text-wolf-green/60">
        <span className="h-2 w-2 animate-pulse rounded-full bg-wolf-orange" />
        On the way · arrives in 8 min
      </div>
      <CardFooter label="Trip ID" value="TR-7741" />
    </RiderCard>
  );
}

/* ---------- how it works (icon timeline) ---------- */
const STEPS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <FiUserPlus className="h-5 w-5" />,
    title: "Sign up",
    text: "Share your details and documents — it only takes a few minutes.",
  },
  {
    icon: <FiShield className="h-5 w-5" />,
    title: "Get verified",
    text: "We review and approve your account, usually within 48 hours.",
  },
  {
    icon: <FiPackage className="h-5 w-5" />,
    title: "Grab your gear",
    text: "Pick up your Konnect bag, go online and set yourself available.",
  },
  {
    icon: <FiCreditCard className="h-5 w-5" />,
    title: "Start earning",
    text: "Accept orders, deliver, and cash out reliably every day.",
  },
];

function Bike({ className = "h-5 w-5" }: { className?: string }) {
  return <FaMotorcycle className={className} />;
}

function Flag({ className = "h-5 w-5" }: { className?: string }) {
  return <FaFlagCheckered className={className} />;
}

const CONFETTI: { tx: string; ty: string; color: string }[] = [
  { tx: "-26px", ty: "-30px", color: "#ffffff" },
  { tx: "-8px", ty: "-42px", color: "#ffffff" },
  { tx: "14px", ty: "-36px", color: "#ffffff" },
  { tx: "30px", ty: "-22px", color: "#ffffff" },
  { tx: "-32px", ty: "-6px", color: "#ffffff" },
  { tx: "32px", ty: "-4px", color: "#ffffff" },
  { tx: "-18px", ty: "14px", color: "#ffffff" },
  { tx: "22px", ty: "16px", color: "#ffffff" },
];

function Steps() {
  return (
    <section id="how" className="scroll-mt-24 bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">How it works</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            On the road in <span className="text-wolf-orange">four steps</span>
          </h2>
        </div>

        {/* ===== mobile: straight vertical road ===== */}
        <div className="relative mt-14 md:hidden">
          <div className="pointer-events-none absolute bottom-0 left-[19px] top-0 w-2.5" aria-hidden="true">
            <div className="absolute inset-0 rounded-full bg-wolf-green" />
            <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-wolf-cream/40" />
            <div className="wolf-ride-y absolute left-1/2 top-0 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-wolf-green text-white ring-4 ring-wolf-cream">
              <Bike className="h-4 w-4" />
            </div>
            <div className="absolute bottom-0 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-wolf-green text-white ring-4 ring-wolf-cream">
              <Flag className="h-4 w-4" />
            </div>
            <div className="absolute bottom-[20px] left-1/2" aria-hidden="true">
              {CONFETTI.map((c, i) => (
                <span
                  key={i}
                  className="wolf-confetti absolute h-1.5 w-1.5 rounded-[1px]"
                  style={{ "--tx": c.tx, "--ty": c.ty, backgroundColor: c.color } as CSSProperties}
                />
              ))}
            </div>
          </div>
          <ol className="relative grid gap-y-10">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative flex gap-5">
                <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-wolf-orange text-white ring-4 ring-wolf-cream">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
                    Step 0{i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-lg tracking-tight text-wolf-green">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-wolf-green/60">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ===== desktop: one continuous winding road ===== */}
        <div className="relative mt-16 hidden md:block">
          <div className="relative mx-auto aspect-[1000/600] w-full max-w-none">
            {/* road (single path = real connector, no overlap) */}
            <svg
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M40 120 L920 220 C 989 230 989 370 920 380 L40 480"
                fill="none"
                stroke="#111111"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40 120 L920 220 C 989 230 989 370 920 380 L40 480"
                fill="none"
                stroke="#f7f6f9"
                strokeWidth="2.5"
                strokeDasharray="10 12"
                strokeLinecap="round"
              />
            </svg>

            {/* riding bike — follows the whole road */}
            <div className="wolf-snake absolute left-[4%] top-[20%] z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-wolf-green text-white ring-4 ring-wolf-cream">
              <div className="wolf-snake-orient flex items-center justify-center">
                <Bike className="h-6 w-6" />
              </div>
            </div>

            {/* finish flag + confetti */}
            <div className="absolute left-[4%] top-[80%] z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-wolf-green text-white ring-4 ring-wolf-cream">
              <Flag className="h-6 w-6" />
            </div>
            <div className="absolute left-[4%] top-[80%] z-10" aria-hidden="true">
              {CONFETTI.map((c, i) => (
                <span
                  key={i}
                  className="wolf-confetti absolute h-2 w-2 rounded-[2px]"
                  style={{ "--tx": c.tx, "--ty": c.ty, backgroundColor: c.color } as CSSProperties}
                />
              ))}
            </div>

            {/* stops */}
            {[
              { s: STEPS[0], n: 1, x: "26%", y: "24.2%", above: true },
              { s: STEPS[1], n: 2, x: "70%", y: "32.5%", above: true },
              { s: STEPS[2], n: 3, x: "70%", y: "67.5%", above: false },
              { s: STEPS[3], n: 4, x: "26%", y: "75.8%", above: false },
            ].map(({ s, n, x, y, above }) => (
              <div
                key={s.title}
                className={`absolute z-20 flex w-[220px] -translate-x-1/2 flex-col items-center text-center ${
                  above ? "flex-col-reverse -translate-y-[calc(100%-28px)]" : "-translate-y-7"
                }`}
                style={{ left: x, top: y }}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-wolf-orange text-white ring-4 ring-wolf-cream">
                  {s.icon}
                </div>
                <div className={above ? "mb-1" : "mt-1"}>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
                    Step 0{n}
                  </div>
                  <h3 className="mt-1 font-display text-lg tracking-tight text-wolf-green">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-wolf-green/60">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- reviews (scrolling wall) ---------- */
type Review = { name: string; location: string; quote: string };

const REVIEWS: Review[] = [
  { name: "Tunde A.", location: "Ibadan", quote: "Best gig I've had. I cash out every Friday like clockwork." },
  { name: "Aisha B.", location: "Lagos", quote: "I choose my own hours — it fits around my kids perfectly." },
  { name: "Kola O.", location: "Abuja", quote: "Surge pay on weekends is real money. The app just makes sense." },
  { name: "Ngozi E.", location: "Lagos", quote: "Support actually picks up when you need them. Rare these days." },
  { name: "Emeka U.", location: "Enugu", quote: "Started on a bicycle, now I run a bike. Konnect paid for it." },
  { name: "Fatima S.", location: "Kano", quote: "Smart routes mean less fuel and more drop-offs every shift." },
  { name: "Chidi N.", location: "Port Harcourt", quote: "Sign-up was painless. Verified in two days and earning." },
  { name: "Bisi A.", location: "Ibadan", quote: "Instant payouts never miss. That trust keeps me riding." },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-2xl bg-white p-6 ring-1 ring-black/5 border border-black/10">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-wolf-orange/15 font-display text-base font-bold text-wolf-orange">
          {r.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-semibold text-wolf-green">{r.name}</div>
          <div className="text-xs text-wolf-green/50">Rider · {r.location}</div>
        </div>
      </div>
      <div className="mt-4">
        <Stars className="h-3.5 w-3.5" />
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-wolf-green/70">
        “{r.quote}”
      </blockquote>
    </figure>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max gap-5 ${reverse ? "wolf-marquee-reverse" : "wolf-marquee"}`}>
        {[...items, ...items].map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section className="overflow-hidden bg-wolf-cream py-20 md:py-0 md:pb-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
          Riders love it
        </span>
        <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
          Loved by riders <span className="text-wolf-orange">across the city</span>
        </h2>
        <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
          <Stars className="h-4 w-4" />
          <span className="text-sm text-wolf-green/60">
            <span className="font-semibold text-wolf-green">4.9</span> from 2,400+ riders
          </span>
        </div>
      </div>

      <div className="mt-12">
        <MarqueeRow items={REVIEWS} />
      </div>
    </section>
  );
}

/* ---------- signup: "get the rider app" (full-bleed, app-first) ---------- */
function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5"
      aria-label="Download on the App Store"
    >
      <FaApple className="h-6 w-6" />
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Download on the</span>
        <span className="block font-display text-base font-bold">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5"
      aria-label="Get it on Google Play"
    >
      <FaGooglePlay className="h-6 w-6" />
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Get it on</span>
        <span className="block font-display text-base font-bold">Google Play</span>
      </span>
    </a>
  );
}

function Signup() {
  return (
    <section id="get-started" className="relative scroll-mt-24 overflow-hidden bg-wolf-green">
      {/* full-bleed rider photo */}
      <img
        src={IMAGES.partnerRider}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      {/* legibility + brand wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-wolf-green via-wolf-green/90 to-wolf-green/75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(11,122,82,0.22), transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
          Get the rider app
        </span>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-6xl">
          Start earning <span className="text-wolf-orange">this week</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
          Download the Konnect Rider app, sign up in minutes and hit the road — it&apos;s
          free to join, with instant payouts from your very first delivery.
        </p>

        {/* store badges */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>

        {/* social proof */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Avatars />
          <span className="text-sm text-wolf-cream/70">
            <span className="font-semibold text-wolf-cream">5,000+ riders</span> already earning
          </span>
        </div>
      </div>
    </section>
  );
}

export default function RidePage() {
  useSeo({
    title: "Ride with Konnect — earn on your own terms",
    description:
      "Deliver with Konnect and ride when it suits you. Flexible hours, instant payouts and bonuses when demand is high. Join 5,000+ riders earning daily across Nigeria.",
    path: "/ride",
  });
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <Reviews />
      <Signup />
    </>
  );
}
