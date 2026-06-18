import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Signup() {
  return (
    <section id="get-started" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wolf-green px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 70% at 50% 0%, rgba(11,122,82,0.2), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-wolf-cream/75">
              Join hundreds of restaurants already selling more with Konnect. It&apos;s free
              to start — no setup fees, no lock-in.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wolf-orange px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Start here
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-wolf-cream/70">
              {["Live in 48 hours", "Instant payouts", "Real team behind you"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
