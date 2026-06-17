/* ============================================================
   WOLFOOD — Ride (rider / courier) page.
   Clean, flat, on-brand — and richly designed. Distinct from
   /business: a route/map hero with social proof, a dark stats
   band, a sticky stacking-cover feature stack, an icon-chip
   requirements block, an icon timeline, a featured testimonial
   card, and a closing signup with social proof.
   ============================================================ */

import { type CSSProperties, type ReactNode } from "react";
import { IMAGES } from "../../assets/images";

/* ---------- shared bits ---------- */
function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
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

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-wolf-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7-6.3-3.4L5.7 21l1.3-7-5-4.8 7-.9z" />
        </svg>
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
          <Icon className="h-4 w-4">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </Icon>
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
        <path d="M20 22 C 62 36, 26 72, 78 100" fill="none" stroke="#f53c08" strokeWidth="1.6" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
      {/* restaurant pin */}
      <span className="absolute left-[12%] top-[12%] grid h-9 w-9 place-items-center rounded-full bg-wolf-orange text-wolf-green-dark shadow-lg">
        <Icon className="h-4 w-4">
          <path d="M6 3v6a2 2 0 0 0 4 0V3" />
          <path d="M8 9v12" />
          <path d="M16 3v18" />
          <path d="M16 3c2 1 3 3 3 6s-1 4-3 4" />
        </Icon>
      </span>
      {/* home pin */}
      <span className="absolute bottom-[12%] right-[12%] grid h-9 w-9 place-items-center rounded-full bg-white text-wolf-green shadow-lg">
        <Icon className="h-4 w-4">
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </Icon>
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
          background: "radial-gradient(60% 60% at 80% 10%, rgba(245,60,8,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
            Ride with Wolfood
          </span>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.02] tracking-tight text-wolf-cream md:text-6xl">
            Earn on your own <span className="text-wolf-orange">terms</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
            Deliver with Wolfood and ride when it suits you. Flexible hours, weekly
            payouts, and bonuses when demand is high — you decide when you ride.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
            >
              Start riding
              <Arrow />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-cream ring-1 ring-white/20 transition-colors hover:bg-white/15"
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
                Join <span className="font-semibold text-wolf-cream">5,000+ riders</span> earning weekly
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
    icon: (
      <Icon>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </Icon>
    ),
    value: "₦40k+",
    label: "avg weekly earnings",
    badge: "+18% MoM",
  },
  {
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </Icon>
    ),
    value: "Weekly",
    label: "payouts, on time",
    badge: "Reliable",
  },
  {
    icon: (
      <Icon>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
    value: "5k+",
    label: "active riders",
    badge: "And growing",
  },
  {
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="m5 5 4 4M15 15l4 4M15 9l4-4M5 19l4-4" />
      </Icon>
    ),
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
                <span className="rounded-full bg-wolf-cream px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-wolf-green/45">
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
    icon: (
      <Icon className="h-5 w-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </Icon>
    ),
    label: "18 years or older",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </Icon>
    ),
    label: "A smartphone",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <circle cx="15" cy="5" r="1" />
        <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
      </Icon>
    ),
    label: "Bike, motorbike or car",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M13 10h5M13 14h5" />
      </Icon>
    ),
    label: "A valid government ID",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </Icon>
    ),
    label: "Right to work locally",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18" />
      </Icon>
    ),
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
        icon: (
          <Icon className="h-5 w-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </Icon>
        ),
        label: "Full-time or part-time",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" />
          </Icon>
        ),
        label: "No shifts or quotas",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </Icon>
        ),
        label: "Pause anytime",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
            <circle cx="12" cy="11" r="2" />
          </Icon>
        ),
        label: "Choose your zones",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M11 18h2" />
          </Icon>
        ),
        label: "Go online in a tap",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <path d="M20 6 9 17l-5-5" />
          </Icon>
        ),
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
        icon: (
          <Icon className="h-5 w-5">
            <path d="M3 11l19-9-9 19-2-8-8-2z" />
          </Icon>
        ),
        label: "Fastest routes",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
            <circle cx="12" cy="11" r="2" />
          </Icon>
        ),
        label: "Live navigation",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <path d="M12 2 3 7v10l9 5 9-5V7z" />
            <path d="M3 7l9 5 9-5" />
            <path d="M12 12v10" />
          </Icon>
        ),
        label: "Branded delivery bag",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="m5 5 4 4M15 15l4 4M15 9l4-4M5 19l4-4" />
          </Icon>
        ),
        label: "24/7 rider support",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
          </Icon>
        ),
        label: "Trip safety tools",
      },
      {
        icon: (
          <Icon className="h-5 w-5">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M11 18h2" />
          </Icon>
        ),
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
          className={`sticky top-0 flex min-h-screen items-center rounded-t-[2.5rem] bg-white ${
            i > 0 ? "shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.35)]" : ""
          }`}
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
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

              <a
                href="#get-started"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-wolf-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-cream transition-transform hover:-translate-y-0.5"
              >
                Start riding
                <Arrow />
              </a>
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
    <RiderCard title="Wolfood Rider" badge="ID">
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
              active.includes(i) ? "bg-wolf-orange text-wolf-green-dark" : "bg-wolf-cream text-wolf-green/35"
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
    icon: (
      <Icon className="h-5 w-5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </Icon>
    ),
    title: "Sign up",
    text: "Share your details and documents — it only takes a few minutes.",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    ),
    title: "Get verified",
    text: "We review and approve your account, usually within 48 hours.",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M3 7l9 5 9-5" />
        <path d="M12 12v10" />
      </Icon>
    ),
    title: "Grab your gear",
    text: "Pick up your Wolfood bag, go online and set yourself available.",
  },
  {
    icon: (
      <Icon className="h-5 w-5">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </Icon>
    ),
    title: "Start earning",
    text: "Accept orders, deliver, and cash out reliably every week.",
  },
];

function Bike({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </Icon>
  );
}

function Flag({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3.5L16 11H5" />
    </Icon>
  );
}

const CONFETTI: { tx: string; ty: string; color: string }[] = [
  { tx: "-26px", ty: "-30px", color: "#f53c08" },
  { tx: "-8px", ty: "-42px", color: "#111111" },
  { tx: "14px", ty: "-36px", color: "#f53c08" },
  { tx: "30px", ty: "-22px", color: "#1c1c1c" },
  { tx: "-32px", ty: "-6px", color: "#111111" },
  { tx: "32px", ty: "-4px", color: "#f53c08" },
  { tx: "-18px", ty: "14px", color: "#f53c08" },
  { tx: "22px", ty: "16px", color: "#111111" },
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
            <div className="wolf-ride-y absolute left-1/2 top-0 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-wolf-green text-wolf-orange ring-4 ring-wolf-cream">
              <Bike className="h-4 w-4" />
            </div>
            <div className="absolute bottom-0 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-wolf-green text-wolf-orange ring-4 ring-wolf-cream">
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
                <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-wolf-orange text-wolf-green-dark ring-4 ring-wolf-cream">
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
            <div className="wolf-snake absolute left-[4%] top-[20%] z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-wolf-green text-wolf-orange ring-4 ring-wolf-cream">
              <div className="wolf-snake-orient flex items-center justify-center">
                <Bike className="h-6 w-6" />
              </div>
            </div>

            {/* finish flag + confetti */}
            <div className="absolute left-[4%] top-[80%] z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-wolf-green text-wolf-orange ring-4 ring-wolf-cream">
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
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-wolf-orange text-wolf-green-dark ring-4 ring-wolf-cream">
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
  { name: "Emeka U.", location: "Enugu", quote: "Started on a bicycle, now I run a bike. Wolfood paid for it." },
  { name: "Fatima S.", location: "Kano", quote: "Smart routes mean less fuel and more drop-offs every shift." },
  { name: "Chidi N.", location: "Port Harcourt", quote: "Sign-up was painless. Verified in two days and earning." },
  { name: "Bisi A.", location: "Ibadan", quote: "Weekly payouts never miss. That trust keeps me riding." },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-2xl bg-white p-6 ring-1 ring-black/5">
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
    <section className="overflow-hidden bg-wolf-cream py-20 md:py-28">
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
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.088-4.61 1.088zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
      </svg>
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
      <svg viewBox="0 0 256 283" className="h-6 w-6" aria-hidden="true">
        <path fill="#4285F4" d="M1.06 23.487A31 31 0 0 0 0 31.61v219.327a31 31 0 0 0 1.06 8.124l122.555-121.058z" />
        <path fill="#34A853" d="M120.436 141.485 181.716 80.79 48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.14 0 4.92 9.149 1.06 23.487z" />
        <path fill="#EA4335" d="M119.553 134.916 1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z" />
        <path fill="#FBBC04" d="M239.37 113.814 181.715 80.79l-64.898 56.95 65.162 64.28 57.216-32.585c19.7-10.474 19.7-38.692.176-49.622z" />
      </svg>
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
        style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(245,60,8,0.22), transparent 60%)" }}
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
          Download the Wolfood Rider app, sign up in minutes and hit the road — it&apos;s
          free to join, with weekly payouts from your very first week.
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
