/* ============================================================
   KONNECT — Partner section (under "How to order on Konnect")
   Alternating rows (text ↔ image), one for restaurants and one
   for riders. Clean, flat layout inspired by v.png: airy light
   cards, simple dot bullets, small pill buttons, no heavy shadows.
   ============================================================ */

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { IMAGES } from "../../assets/images";

type Row = {
  title: string;
  desc: string;
  points: string[];
  cta: string;
  href: string;
  variant: "green" | "orange";
  img: string;
  imgAlt: string;
};

const ROWS: Row[] = [
  {
    title: "For Restaurants",
    desc: "List your kitchen and turn first-time orders into regulars. We bring the customers, the logistics and the tools — you bring the food.",
    points: [
      "Reach thousands of hungry customers across your city.",
      "One simple dashboard for orders, menus and payouts.",
      "Fast, reliable settlements — paid on time, every time.",
    ],
    cta: "Become a partner",
    href: "/business",
    variant: "green",
    img: IMAGES.partnerRestaurant,
    imgAlt: "A busy restaurant kitchen",
  },
  {
    title: "Become a Rider",
    desc: "Earn on your own terms. Sign up, hit the road, and get paid every week for every delivery you complete — rain or shine.",
    points: [
      "Ride on your own schedule, full-time or whenever you're free.",
      "Weekly payouts plus bonuses when demand is high.",
      "Branded gear and in-app support on every trip.",
    ],
    cta: "Start riding",
    href: "/ride",
    variant: "orange",
    img: IMAGES.partnerRider,
    imgAlt: "A delivery rider on a motorbike",
  },
  {
    title: "Become an Ambassador",
    desc: "Share Konnect with your campus and your followers, and earn for every foodie, rider and restaurant you bring on board.",
    points: [
      "Get paid for every verified signup through your link.",
      "Unlock perks, merch and exclusive Konnect events.",
      "Level up from Rookie to Legend for bigger rewards.",
    ],
    cta: "Join the programme",
    href: "/ambassadors",
    variant: "green",
    img: IMAGES.partnerAmbassador,
    imgAlt: "A Konnect ambassador",
  },
];

function Arrow() {
  return <FiArrowRight className="h-4 w-4" />;
}

export default function Partners() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------- heading ---------- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Partner with Konnect
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Grow with us, <span className="text-wolf-orange">ride with us</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/70">
            Whether you run a kitchen or ride the streets, there&apos;s a place for you on Konnect.
          </p>
        </div>

        {/* ---------- alternating rows ---------- */}
        <div className="mt-14 space-y-6 md:mt-16 md:space-y-8">
          {ROWS.map((row, i) => {
            const flipped = i % 2 === 1; // odd rows put the image on the left
            return (
              <div
                key={row.title}
                className={`grid items-stretch gap-6 md:gap-8 ${
                  flipped
                    ? "md:grid-cols-[1fr_1.5fr]"
                    : "md:grid-cols-[1.5fr_1fr]"
                }`}
              >
                {/* text — background lives here only */}
                <div
                  className={`rounded-[1.75rem] bg-wolf-cream/50 px-7 py-8 md:px-12 md:py-12 ${
                    flipped ? "md:order-2" : ""
                  }`}
                >
                  <h3 className="font-display text-2xl leading-tight tracking-tight text-wolf-green md:text-3xl">
                    {row.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-wolf-green/60">
                    {row.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {row.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-wolf-orange" />
                        <span className="text-sm text-wolf-green/70">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={row.href}
                    className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                      row.variant === "orange"
                        ? "bg-wolf-orange text-white"
                        : "bg-wolf-green text-wolf-cream"
                    }`}
                  >
                    {row.cta}
                    <Arrow />
                  </Link>
                </div>

                {/* image */}
                <div
                  className={`relative min-h-[220px] overflow-hidden rounded-[1.75rem] bg-neutral-200 md:min-h-[320px] ${
                    flipped ? "md:order-1" : ""
                  }`}
                >
                  <img
                    src={row.img}
                    alt={row.imgAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
