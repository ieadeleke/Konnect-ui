import type { ReactNode } from "react";

export type Section = { heading: string; body: ReactNode };

export function Lead({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-wolf-green/80">{children}</span>;
}

export default function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: Section[];
}) {
  return (
    <>

      <section className="relative overflow-hidden bg-wolf-green pt-32 pb-16 text-center md:pt-40 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(11,122,82,0.18), transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-wolf-cream/60">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4 text-base leading-relaxed text-wolf-green/70">{intro}</div>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl tracking-tight text-wolf-green md:text-2xl">
                  <span className="text-wolf-orange">{String(i + 1).padStart(2, "0")}.</span> {s.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-wolf-green/60">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-wolf-cream p-6 ring-1 ring-black/5">
            <p className="text-sm text-wolf-green/70">
              Questions about this {title.toLowerCase()}? Reach us at{" "}
              <a href="mailto:konnect@consukon.com" className="font-semibold text-wolf-green underline-offset-2 hover:underline">
                konnect@consukon.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
