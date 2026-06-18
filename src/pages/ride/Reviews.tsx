import { Stars } from "./shared";

type Review = { name: string; location: string; quote: string };

const REVIEWS: Review[] = [
  { name: "Tunde A.", location: "Ibadan", quote: "Best gig I've had. I cash out every Friday like clockwork." },
  { name: "Aisha B.", location: "Lagos", quote: "I choose my own hours — it fits around my kids perfectly." },
  { name: "Kola O.", location: "Abuja", quote: "Surge pay on weekends is real money. The app just makes sense." },
  { name: "Ngozi E.", location: "Lagos", quote: "Support actually picks up when you need them. Rare these days." },
  { name: "Emeka U.", location: "Enugu", quote: "Started on a bicycle, now I run a bike. Konnect paid for it." },
  { name: "Fatima S.", location: "Kano", quote: "Smart routes mean less fuel and more drop-offs every shift." },
  { name: "Chidi N.", location: "Port Harcourt", quote: "Sign-up was painless. Verified in two days and earning." },
  { name: "Bisi A.", location: "Ibadan", quote: "Instant payouts never miss. That trust keeps me riding." },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-2xl bg-white p-6 ring-1 ring-black/5 border border-black/10">
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

export default function Reviews() {
  return (
    <section className="overflow-hidden bg-wolf-cream py-20 md:py-0 md:pb-20">
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
