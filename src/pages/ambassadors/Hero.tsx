import { Arrow } from "./shared";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-wolf-green pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(11,122,82,0.18), transparent 60%)" }}
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
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
      </div>
    </section>
  );
}
