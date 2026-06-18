import { type CSSProperties, type ReactNode } from "react";
import { FaFlagCheckered } from "react-icons/fa6";
import { FiUserPlus, FiShield, FiPackage, FiCreditCard } from "react-icons/fi";
import { Bike } from "./shared";

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

export default function Steps() {
  return (
    <section id="how" className="scroll-mt-24 bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">How it works</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            On the road in <span className="text-wolf-orange">four steps</span>
          </h2>
        </div>

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

        <div className="relative mt-16 hidden md:block">
          <div className="relative mx-auto aspect-[1000/600] w-full max-w-none">

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

            <div className="wolf-snake absolute left-[4%] top-[20%] z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-wolf-green text-white ring-4 ring-wolf-cream">
              <div className="wolf-snake-orient flex items-center justify-center">
                <Bike className="h-6 w-6" />
              </div>
            </div>

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
