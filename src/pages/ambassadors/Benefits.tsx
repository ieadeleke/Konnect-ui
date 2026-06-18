import type { IconType } from "react-icons";
import { FaBullhorn } from "react-icons/fa6";
import { FiSmartphone, FiHeart, FiUsers } from "react-icons/fi";

const BENEFITS: { Icon: IconType; title: string; text: string }[] = [
  {
    Icon: FiSmartphone,
    title: "Earn by sharing",
    text: "Get paid for every foodie, rider or restaurant who joins through your unique link.",
  },
  {
    Icon: FiHeart,
    title: "Perks & growth",
    text: "Unlock free health insurance, quarterly performance incentives, meals, and invites to exclusive Konnect events.",
  },
  {
    Icon: FaBullhorn,
    title: "Build your brand",
    text: "Grow your audience with content, campaigns and co-marketing support from our team.",
  },
  {
    Icon: FiUsers,
    title: "Real community",
    text: "Join a nationwide crew of ambassadors, swap tips and level up together.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            The programme
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            What is the <span className="text-wolf-orange">Ambassador programme?</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/60">
            It pays you to do what you already do — share things you love. Promote Konnect,
            earn rewards, and unlock real opportunities as you grow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl bg-wolf-cream p-7 ring-1 ring-black/5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-wolf-orange/15 text-wolf-orange">
                <b.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-tight text-wolf-green">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-wolf-green/60">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
