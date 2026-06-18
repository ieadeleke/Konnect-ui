import type { IconType } from "react-icons";
import { FaGraduationCap } from "react-icons/fa6";
import { FiCamera, FiUsers, FiHeart, FiShare2 } from "react-icons/fi";
import { Check } from "./shared";

const AUDIENCE: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: FaGraduationCap,
    title: "Students",
    desc: "University & poly students who know everyone on campus.",
  },
  {
    Icon: FiCamera,
    title: "Creators",
    desc: "Influencers & content creators with an engaged following.",
  },
  {
    Icon: FiUsers,
    title: "Community leaders",
    desc: "Organisers who run clubs, groups and societies.",
  },
  {
    Icon: FiHeart,
    title: "Foodies",
    desc: "People who already can't stop sharing where to eat.",
  },
  {
    Icon: FaGraduationCap,
    title: "Grads & NYSC",
    desc: "Recent graduates and corps members with time to earn.",
  },
  {
    Icon: FiShare2,
    title: "Connectors",
    desc: "Anyone with a network they love putting onto good things.",
  },
];

export default function WhoJoins() {
  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Who should join
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Made for <span className="text-wolf-orange">people like you</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/60">
            If any of these sound like you, you&apos;re exactly who we&apos;re looking for.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a) => (
            <div
              key={a.title}
              className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wolf-orange/15 text-wolf-orange">
                  <a.Icon className="h-6 w-6" />
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-wolf-cream px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-wolf-green/45">
                  <Check className="h-2.5 w-2.5" />
                  Eligible
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg tracking-tight text-wolf-green">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-wolf-green/60">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
