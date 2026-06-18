const STATS: { value: string; label: string }[] = [
  { value: "10k+", label: "orders every month" },
  { value: "500+", label: "partner restaurants" },
  { value: "20+", label: "cities and growing" },
  { value: "4.8★", label: "average partner rating" },
];

export default function Stats() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold tracking-tight text-wolf-green md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-wolf-green/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
