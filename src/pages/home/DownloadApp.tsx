/* ============================================================
   WOLFOOD — Download app
   A green CTA card with copy + store badges on the left and a grey
   phone mockup on the right (clipped at the card's bottom edge).
   ============================================================ */

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5"
      aria-label="Download on the App Store"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M16.4 12.7c0-2 1.6-3 1.7-3a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.3-2a8.6 8.6 0 0 0 1-2.1c0-.1-2-.8-2-3.1ZM14.5 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1.1Z" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Download on the</span>
        <span className="block font-display text-base">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5"
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="#F53C08" d="M3.6 2.3 13.8 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1Z" />
        <path fill="#111111" d="m16.8 8.9 2.9 1.7c.9.5.9 1.8 0 2.3l-2.9 1.7L14 12l2.8-3.1Z" />
        <path fill="#F53C08" d="M3.6 2.3c.2-.1.5-.1.8 0L16.8 9 14 12 3.6 2.3Z" />
        <path fill="#111111" d="M3.6 21.7 14 12l2.8 3.1L4.4 21.8c-.3.1-.6.1-.8-.1Z" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Get it on</span>
        <span className="block font-display text-base">Google Play</span>
      </span>
    </a>
  );
}

export default function DownloadApp() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-8 py-12 md:px-16 md:py-0">
          {/* pattern + glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(80% 80% at 85% 0%, rgba(245,60,8,0.16), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* copy */}
            <div className="md:py-20">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
                Get the app
              </span>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
                Your next meal is <span className="text-wolf-orange">a tap away</span>
              </h2>
              <p className="mt-4 max-w-md text-base text-wolf-cream/75">
                Order faster, track live, save your favourites and unlock app-only deals.
                Free on iOS and Android.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>

            {/* phone (clipped at the card's bottom edge) */}
            <div className="relative hidden md:block" aria-hidden="true">
              <div className="absolute bottom-0 left-1/2 w-[260px] -translate-x-1/2 translate-y-16">
                <div className="rounded-[2.4rem] bg-neutral-900 p-2.5 shadow-2xl">
                  <div className="relative aspect-[260/460] overflow-hidden rounded-[1.9rem] bg-neutral-100">
                    <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-neutral-300" />
                    <div className="h-24 bg-neutral-200" />
                    <div className="space-y-3 p-4">
                      <div className="h-9 rounded-lg bg-neutral-200" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-square rounded-lg bg-neutral-200" />
                        <div className="aspect-square rounded-lg bg-neutral-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
