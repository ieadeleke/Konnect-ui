import { type ReactNode } from "react";
import { FiDollarSign, FiZap, FiUsers, FiHeadphones } from "react-icons/fi";

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

export default function Stats() {
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
