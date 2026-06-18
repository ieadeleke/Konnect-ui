import type { IconType } from "react-icons";
import { FaBullhorn } from "react-icons/fa6";
import { FiUsers, FiGrid, FiTruck, FiCreditCard, FiLifeBuoy } from "react-icons/fi";

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

export default function Benefits() {
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
