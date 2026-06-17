/* ============================================================
   KONNECT — Ambassadors page.
   Clean, flat, on-brand (near-black + orange + cream). Structure
   inspired by usexara.ai/ambassadors: hero + stats, why join,
   who should join, how it works, gamified tiers, FAQ, apply form.
   ============================================================ */

import { useState, type ReactNode } from "react";
import { IMAGES } from "../../assets/images";

/* ---------- shared ---------- */
function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Check({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Avatars() {
  return (
    <div className="flex -space-x-2.5">
      {IMAGES.ambassadorFaces.slice(0, 3).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-9 w-9 rounded-full object-cover ring-2 ring-wolf-green"
        />
      ))}
    </div>
  );
}

/* ---------- hero ---------- */
// const HERO_STATS: { value: string; label: string }[] = [
//   { value: "2,500+", label: "active ambassadors" },
//   { value: "₦20M+", label: "paid in bonuses" },
//   { value: "40+", label: "campuses & cities" },
// ];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-wolf-green pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(16,185,129,0.18), transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
          <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
          Become a Konnect Ambassador
        </span>
        <h1 className="mt-6 font-display text-[2.75rem] leading-[1.04] tracking-tight text-wolf-cream md:text-6xl">
          Grow the pack, get <span className="text-wolf-orange">rewarded</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-wolf-cream/75">
          Share Konnect with your campus, your followers and your friends — and earn for
          every foodie, rider and restaurant you bring on board.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://forms.gle/DjqKWtpTCXR1Zgc58"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
          >
            Apply now
            <Arrow />
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-wolf-cream ring-1 ring-white/20 transition-colors hover:bg-white/15"
          >
            How it works
          </a>
        </div>

        {/* stats row */}
        {/* <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold tracking-tight text-wolf-cream md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-wolf-cream/55 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

/* ---------- what is the programme ---------- */
const BENEFITS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: (
      <Icon>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" />
      </Icon>
    ),
    title: "Earn by sharing",
    text: "Get paid for every foodie, rider or restaurant who joins through your unique link.",
  },
  {
    icon: (
      <Icon>
        <rect x="3" y="8" width="18" height="13" rx="1" />
        <path d="M12 8v13M3 12h18M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5" />
      </Icon>
    ),
    title: "Perks & growth",
    text: "Unlock free health insurance, quarterly performance incentives, meals, and invites to exclusive Konnect events.",
  },
  {
    icon: (
      <Icon>
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </Icon>
    ),
    title: "Build your brand",
    text: "Grow your audience with content, campaigns and co-marketing support from our team.",
  },
  {
    icon: (
      <Icon>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
    title: "Real community",
    text: "Join a nationwide crew of ambassadors, swap tips and level up together.",
  },
];

function Benefits() {
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
                {b.icon}
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

/* ---------- who should join ---------- */
const AUDIENCE: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <Icon>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </Icon>
    ),
    title: "Students",
    desc: "University & poly students who know everyone on campus.",
  },
  {
    icon: (
      <Icon>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <circle cx="12" cy="13.5" r="3.5" />
        <path d="M8 7l1.5-2h5L16 7" />
      </Icon>
    ),
    title: "Creators",
    desc: "Influencers & content creators with an engaged following.",
  },
  {
    icon: (
      <Icon>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
    title: "Community leaders",
    desc: "Organisers who run clubs, groups and societies.",
  },
  {
    icon: (
      <Icon>
        <path d="M12 21s-7-4.35-9.5-8.5C1 9.5 2.5 6 6 6c2 0 3 1.2 4 2.5C11 7.2 12 6 14 6c3.5 0 5 3.5 3.5 6.5C19 16.65 12 21 12 21z" />
      </Icon>
    ),
    title: "Foodies",
    desc: "People who already can't stop sharing where to eat.",
  },
  {
    icon: (
      <Icon>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </Icon>
    ),
    title: "Grads & NYSC",
    desc: "Recent graduates and corps members with time to earn.",
  },
  {
    icon: (
      <Icon>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </Icon>
    ),
    title: "Connectors",
    desc: "Anyone with a network they love putting onto good things.",
  },
];

function WhoJoins() {
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
                  {a.icon}
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

/* ---------- how it works ---------- */
const STEPS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: (
      <Icon>
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 4V3h6v1" />
        <path d="M9 10h6M9 14h4" />
      </Icon>
    ),
    title: "Apply",
    text: "Fill a short form and get approved — usually within 48 hours.",
  },
  {
    icon: (
      <Icon>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </Icon>
    ),
    title: "Share",
    text: "Post your unique link online and spread the word everywhere.",
  },
  {
    icon: (
      <Icon>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" />
      </Icon>
    ),
    title: "Earn",
    text: "Get paid for every verified signup, order or partner you bring in.",
  },
  {
    icon: (
      <Icon>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
      </Icon>
    ),
    title: "Level up",
    text: "Climb the tiers to unlock bigger rewards and real opportunities.",
  },
];

function Steps() {
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
          {/* journey line — left on mobile, centered on desktop */}
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
                {/* node */}
                <span className="absolute left-0 top-1 z-10 grid h-14 w-14 place-items-center rounded-2xl bg-wolf-orange text-wolf-green-dark ring-8 ring-white md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  {s.icon}
                </span>
                {/* content */}
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

/* ---------- tiers ---------- */
const TIERS: { name: string; rate: string; reach: string; perks: string[]; featured?: boolean }[] = [
  { name: "Rookie", rate: "₦25K", reach: "Start here", perks: ["Starter kit", "Your referral link"] },
  { name: "Rising", rate: "₦45K", reach: "50+ referrals", perks: ["Branded merch", "Recognition badges"] },
  { name: "Pro", rate: "₦95K", reach: "150+ referrals", perks: ["Event access", "Performance bonuses"] },
  { name: "Legend", rate: "₦150K", reach: "400+ referrals", perks: ["Cash bonuses", "Internships & roles"], featured: true },
];

function Tiers() {
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
                {/* progression pips */}
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
                  <span className="rounded-full bg-wolf-orange px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-wolf-green-dark">
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

/* ---------- FAQ ---------- */
const FAQS: { q: string; a: string }[] = [
  { q: "How and when do I get paid?", a: "Ambassadors are paid weekly, straight to your bank account or Konnect wallet, for every verified referral." },
  { q: "Do I have to be a student?", a: "Not at all. Students, creators, graduates, NYSC members — anyone with a network can apply." },
  { q: "Is there a fee to join?", a: "No. Joining the ambassador programme is completely free, and always will be." },
  { q: "How much can I earn?", a: "There's no cap. Your earnings grow with every referral and climb as you level up the tiers." },
  { q: "Can I do this alongside school or NYSC?", a: "Yes — it's fully flexible. Share whenever it suits you, with no minimum hours or quotas." },
  { q: "Does it help my career?", a: "Top ambassadors unlock internships, leadership roles and references that look great on any CV." },
];

function Faq() {
  const [open, setOpen] = useState<string | null>(FAQS[0].q);
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">FAQ</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Questions? <span className="text-wolf-orange">We&apos;ve got answers</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f) => {
            const isOpen = open === f.q;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl bg-white ring-1 transition-colors duration-300 ${
                  isOpen ? "ring-wolf-orange/30" : "ring-black/5 hover:ring-wolf-green/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                >
                  <span className="font-semibold text-wolf-green">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-wolf-cream text-wolf-green transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-wolf-orange text-wolf-green-dark" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-wolf-green/70 md:px-6 md:pb-6">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- apply CTA ---------- */
function Apply() {
  return (
    <section id="apply" className="scroll-mt-24 bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wolf-green px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(60% 70% at 50% 0%, rgba(16,185,129,0.2), transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
              Ready to join the pack?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-wolf-cream/75">
              Apply in minutes and start earning as a Konnect Ambassador. It&apos;s free to
              join — no fees, no commitment.
            </p>
            <a
              href="https://forms.gle/DjqKWtpTCXR1Zgc58"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wolf-orange px-8 py-4 text-sm font-bold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
            >
              Apply now
              <Arrow />
            </a>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Avatars />
              <span className="text-sm text-wolf-cream/70">
                Join <span className="font-semibold text-wolf-cream">2,500+ ambassadors</span> across Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AmbassadorsPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <WhoJoins />
      <Steps />
      <Tiers />
      <Faq />
      <Apply />
    </>
  );
}
