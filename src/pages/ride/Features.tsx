import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaMotorcycle, FaIdCard, FaBuildingColumns } from "react-icons/fa6";
import {
  FiUser,
  FiSmartphone,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiPause,
  FiCheck,
  FiNavigation,
  FiPackage,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";
import { IMAGES } from "../../assets/images";
import { Arrow, Bike, RouteMap } from "./shared";

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

export default function Features() {
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

            <div className="order-2 md:order-1">
              <div className="mx-auto w-full max-w-sm">{s.illo}</div>
            </div>

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

const BARCODE = [3, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 1, 2];

const ID_FIELDS: [string, string][] = [
  ["Vehicle", "Motorbike"],
  ["City", "Ibadan"],
  ["Member since", "2024"],
  ["Status", "Active"],
];

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
