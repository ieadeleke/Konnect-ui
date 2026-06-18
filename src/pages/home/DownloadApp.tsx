import StoreBadges from "../../components/StoreBadges";

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

          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(80% 80% at 85% 0%, rgba(11,122,82,0.16), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">

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
              <StoreBadges className="mt-8" fullWidthOnMobile />
            </div>

            <div className="flex justify-center md:justify-end" aria-hidden="true">

              <div className="w-[250px] md:hidden">
                <Phone variant="a" />
              </div>

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
