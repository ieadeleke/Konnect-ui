const STEPS: { title: string; text: string }[] = [
  { title: "Sign up", text: "Tell us about your restaurant and share a few documents — it takes minutes." },
  { title: "Get verified", text: "Our team reviews your details and helps you set up your menu, usually within 48 hours." },
  { title: "Go live", text: "Your kitchen appears on Konnect and starts receiving orders from nearby customers." },
  { title: "Get paid", text: "Fulfil orders, track everything in your dashboard, and get paid instantly." },
];

export default function Steps() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
            How it works
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-wolf-green md:text-5xl">
            Up and running in <span className="text-wolf-orange">four steps</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-wolf-cream p-7">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-wolf-green font-display text-lg font-bold text-wolf-cream">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-lg tracking-tight text-wolf-green">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wolf-green/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
