/* ============================================================
   KONNECT — Download app
   A green CTA card with copy + store badges on the left and a grey
   phone mockup on the right (clipped at the card's bottom edge).
   ============================================================ */

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5 sm:w-auto sm:justify-start"
      aria-label="Download on the App Store"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.088-4.61 1.088zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Download on the</span>
        <span className="block font-display text-base font-bold">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5 sm:w-auto sm:justify-start"
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 256 283" className="h-6 w-6" aria-hidden="true">
        <path fill="#4285F4" d="M1.06 23.487A31 31 0 0 0 0 31.61v219.327a31 31 0 0 0 1.06 8.124l122.555-121.058z" />
        <path fill="#34A853" d="M120.436 141.485 181.716 80.79 48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.14 0 4.92 9.149 1.06 23.487z" />
        <path fill="#EA4335" d="M119.553 134.916 1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z" />
        <path fill="#FBBC04" d="M239.37 113.814 181.715 80.79l-64.898 56.95 65.162 64.28 57.216-32.585c19.7-10.474 19.7-38.692.176-49.622z" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Get it on</span>
        <span className="block font-display text-base font-bold">Google Play</span>
      </span>
    </a>
  );
}

function WebBadge() {
  return (
    <a
      href="https://konnectbd.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5 sm:w-auto sm:justify-start"
      aria-label="Open Konnect on the web"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Order on the</span>
        <span className="block font-display text-base font-bold">Web</span>
      </span>
    </a>
  );
}

/* gray placeholder phone; two skeleton variants so the pair doesn't look identical */
function Phone({ variant = "a" }: { variant?: "a" | "b" }) {
  return (
    <div className="rounded-[2.4rem] bg-neutral-900 p-2.5 shadow-2xl">
      <div className="relative aspect-[260/460] w-full overflow-hidden rounded-[1.9rem] bg-neutral-100">
        <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-neutral-300" />
        <div className="h-24 bg-neutral-200" />
        <div className="space-y-3 p-4">
          <div className="h-9 rounded-lg bg-neutral-200" />
          {variant === "a" ? (
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-lg bg-neutral-200" />
              <div className="aspect-square rounded-lg bg-neutral-200" />
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="h-12 rounded-lg bg-neutral-200" />
              <div className="h-12 rounded-lg bg-neutral-200" />
              <div className="h-12 rounded-lg bg-neutral-200" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DownloadApp() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-8 py-12 md:px-16 md:py-16">
          {/* pattern + glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(80% 80% at 85% 0%, rgba(16,185,129,0.16), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* copy */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
                Get the app
              </span>
              <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
                Your next meal is <span className="text-wolf-orange">a tap away</span>
              </h2>
              <p className="mt-4 max-w-md text-base text-wolf-cream/75">
                Order faster, track live, save your favourites and unlock app-only deals.
                Free on iOS and Android.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AppStoreBadge />
                <GooglePlayBadge />
                <WebBadge />
              </div>
            </div>

            {/* phone preview — single on mobile, staggered overlapping pair on desktop */}
            <div className="flex justify-center md:justify-end" aria-hidden="true">
              {/* mobile: one phone */}
              <div className="w-[250px] md:hidden">
                <Phone variant="a" />
              </div>

              {/* desktop: two phones, back one offset behind the front */}
              <div className="relative hidden h-[500px] w-[400px] md:block">
                <div className="absolute left-0 top-12 w-[230px] opacity-95">
                  <Phone variant="b" />
                </div>
                <div className="absolute right-0 top-0 w-[262px]">
                  <Phone variant="a" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
