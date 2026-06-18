export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-wolf-green pt-32 pb-20 text-center md:pt-40 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(11,122,82,0.18), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
          <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
          Contact us
        </span>
        <h1 className="mt-6 font-display text-[2.75rem] leading-[1.04] tracking-tight text-wolf-cream md:text-6xl">
          Let&apos;s <span className="text-wolf-orange">talk</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
          Questions, partnerships or support — reach the Konnect team and we&apos;ll get
          back to you, usually within a few hours.
        </p>
      </div>
    </section>
  );
}
