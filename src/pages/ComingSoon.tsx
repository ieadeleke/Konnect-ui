/* ============================================================
   KONNECT — generic "coming soon" page
   Used for routes that aren't built yet (/ride, /ambassadors).
   Dark hero so the transparent navbar's cream text stays readable.
   ============================================================ */

import { Link } from "react-router-dom";

type Props = { eyebrow: string; title: string; blurb: string };

export default function ComingSoon({ eyebrow, title, blurb }: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-wolf-green px-6 text-center">
      {/* soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, rgba(245,60,8,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-xl pt-20">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-wolf-cream/70">{blurb}</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-full bg-white/95 px-5 py-3 text-sm text-wolf-green outline-none ring-1 ring-white/20 placeholder:text-wolf-green/40 focus:ring-wolf-orange"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-wolf-orange px-6 py-3 text-sm font-semibold text-wolf-green-dark transition-transform hover:-translate-y-0.5"
          >
            Notify me
          </button>
        </form>

        <Link
          to="/"
          className="mt-8 inline-block text-sm font-medium text-wolf-cream/60 underline-offset-4 transition-colors hover:text-wolf-orange hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
