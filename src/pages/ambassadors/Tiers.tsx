import { Check } from "./shared";

const TIERS: { name: string; rate: string; reach: string; perks: string[]; featured?: boolean }[] = [
  { name: "Rookie", rate: "₦45K", reach: "Start here", perks: ["Starter kit", "Your referral link"] },
  { name: "Rising", rate: "₦95K", reach: "50+ referrals", perks: ["Branded merch", "Recognition badges"] },
  { name: "Pro", rate: "₦155K", reach: "150+ referrals", perks: ["Event access", "Performance bonuses"] },
  { name: "Legend", rate: "₦245K", reach: "400+ referrals", perks: ["Cash bonuses", "Internships & roles"], featured: true },
];

export default function Tiers() {
  return (
    <section className="bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            Levels & growth
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Level up from <span className="text-wolf-orange">Rookie to Legend</span>
          </h2>
          <p className="mt-4 text-base text-wolf-green/60">
            The more you share, the higher you climb — and the bigger your rewards get.
          </p>
        </div>

        <div className="mt-14 grid items-end gap-5 md:grid-cols-4">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-3xl p-7 ring-1 transition-transform hover:-translate-y-1 ${
                t.featured
                  ? "bg-wolf-green text-wolf-cream ring-transparent shadow-2xl md:pb-9 md:pt-9"
                  : "bg-white text-wolf-green ring-black/5"
              }`}
            >
              <div className="flex items-center justify-between">

                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map((d) => (
                    <span
                      key={d}
                      className={`h-2 w-2 rounded-full ${
                        d <= i ? "bg-wolf-orange" : t.featured ? "bg-white/20" : "bg-wolf-green/15"
                      }`}
                    />
                  ))}
                </div>
                {t.featured && (
                  <span className="rounded-full bg-wolf-orange px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-white">
                    Top tier
                  </span>
                )}
              </div>

              <h3 className={`mt-5 font-display text-2xl tracking-tight ${t.featured ? "text-wolf-cream" : "text-wolf-green"}`}>
                {t.name}
              </h3>
              <div className={`text-xs font-medium uppercase tracking-wide ${t.featured ? "text-wolf-cream/50" : "text-wolf-green/45"}`}>
                {t.reach}
              </div>

              <div className="mt-4">
                <div className={`text-[0.7rem] font-medium uppercase tracking-wide ${t.featured ? "text-wolf-cream/50" : "text-wolf-green/45"}`}>
                  Up to
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight text-wolf-orange">{t.rate}</span>
                  <span className={`text-sm ${t.featured ? "text-wolf-cream/60" : "text-wolf-green/50"}`}>
                    / week
                  </span>
                </div>
              </div>

              <div className={`my-5 h-px ${t.featured ? "bg-white/10" : "bg-black/[0.06]"}`} />

              <ul className="space-y-2.5">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wolf-orange/20 text-wolf-orange">
                      <Check />
                    </span>
                    <span className={`text-sm ${t.featured ? "text-wolf-cream/80" : "text-wolf-green/75"}`}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
