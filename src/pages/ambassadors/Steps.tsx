import type { IconType } from "react-icons";
import { FiClipboard, FiShare2, FiCreditCard, FiAward } from "react-icons/fi";

const STEPS: { Icon: IconType; title: string; text: string }[] = [
  {
    Icon: FiClipboard,
    title: "Apply",
    text: "Fill a short form and get approved — usually within 48 hours.",
  },
  {
    Icon: FiShare2,
    title: "Share",
    text: "Post your unique link online and spread the word everywhere.",
  },
  {
    Icon: FiCreditCard,
    title: "Earn",
    text: "Get paid for every verified signup, order or partner you bring in.",
  },
  {
    Icon: FiAward,
    title: "Level up",
    text: "Climb the tiers to unlock bigger rewards and real opportunities.",
  },
];

export default function Steps() {
  return (
    <section id="how" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">How it works</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Start earning in <span className="text-wolf-orange">four steps</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">

          <span
            className="absolute bottom-4 left-[27px] top-4 w-0.5 bg-wolf-green/10 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <ol className="space-y-8 md:space-y-12">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="relative pl-20 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pl-0"
              >

                <span className="absolute left-0 top-1 z-10 grid h-14 w-14 place-items-center rounded-2xl bg-wolf-orange text-white ring-8 ring-white md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <s.Icon className="h-6 w-6" />
                </span>

                <div
                  className={`rounded-2xl bg-wolf-cream p-6 ring-1 ring-black/5 ${
                    i % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:text-right"
                  }`}
                >
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
      </div>
    </section>
  );
}
