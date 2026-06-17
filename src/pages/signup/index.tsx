/* ============================================================
   KONNECT — Sign up
   Centred auth card on the dark brand backdrop (keeps the
   transparent navbar readable). Dressed up: social proof, a
   Google option, icon inputs. Clean and on-brand.
   ============================================================ */

import { useState, type ReactNode } from "react";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  options,
  icon,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  options?: string[];
  icon: ReactNode;
  optional?: boolean;
}) {
  const base =
    "w-full rounded-xl bg-wolf-cream py-4 pl-11 pr-4 text-sm text-wolf-green outline-none ring-1 ring-black/5 placeholder:text-wolf-green/35 focus:ring-2 focus:ring-wolf-orange";
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-wolf-green/70">{label}</span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-wolf-green/35">
          {icon}
        </span>
        {options ? (
          <select name={name} required={!optional} defaultValue="" className={base}>
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : (
          <input name={name} type={type} required={!optional} placeholder={placeholder} className={base} />
        )}
      </div>
    </label>
  );
}

function FIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function SignupPage() {
  const [done, setDone] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-wolf-green px-6 pb-16 pt-28 md:pt-32">
      {/* backdrop: glow + dot grid + blob */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(55% 50% at 50% 0%, rgba(16,185,129,0.18), transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-wolf-orange/20 blur-3xl" aria-hidden="true" />

      <div className="relative w-full max-w-md">
        {/* brand + heading */}

        {/* card */}
        <div className="mt-7 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-8">
          {done ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-wolf-orange/15 text-wolf-orange">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 className="mt-5 font-display text-2xl text-wolf-green">Account created!</h2>
              <p className="mx-auto mt-2 max-w-xs text-sm text-wolf-green/60">
                Welcome to Konnect. Download the app to start ordering, tracking and earning.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3">
                <a
                  href="#"
                  className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-wolf-green px-5 py-2.5 text-wolf-cream transition-transform hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.088-4.61 1.088zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block text-[0.6rem] opacity-70">Download on the</span>
                    <span className="block font-display text-sm font-bold">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-wolf-green px-5 py-2.5 text-wolf-cream transition-transform hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 256 283" className="h-6 w-6" aria-hidden="true">
                    <path fill="#4285F4" d="M1.06 23.487A31 31 0 0 0 0 31.61v219.327a31 31 0 0 0 1.06 8.124l122.555-121.058z" />
                    <path fill="#34A853" d="M120.436 141.485 181.716 80.79 48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.14 0 4.92 9.149 1.06 23.487z" />
                    <path fill="#EA4335" d="M119.553 134.916 1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z" />
                    <path fill="#FBBC04" d="M239.37 113.814 181.715 80.79l-64.898 56.95 65.162 64.28 57.216-32.585c19.7-10.474 19.7-38.692.176-49.622z" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block text-[0.6rem] opacity-70">Get it on</span>
                    <span className="block font-display text-sm font-bold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          ) : (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="space-y-5"
              >
                <Field
                  label="Full name"
                  name="name"
                  placeholder="e.g. Ada Okeke"
                  icon={
                    <FIcon>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </FIcon>
                  }
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  icon={
                    <FIcon>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </FIcon>
                  }
                />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  icon={
                    <FIcon>
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.6 9.8a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                    </FIcon>
                  }
                />
                <Field
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  icon={
                    <FIcon>
                      <rect x="4" y="11" width="16" height="10" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </FIcon>
                  }
                />
                <Field
                  label="Referral code (if a friend referred you)"
                  name="referral"
                  placeholder="Enter code — optional"
                  optional
                  icon={
                    <FIcon>
                      <path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <circle cx="7" cy="7" r="1.4" />
                    </FIcon>
                  }
                />
                <button
                  type="submit"
                  className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-wolf-orange px-6 py-4 text-sm font-bold tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
                >
                  Create Account
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-wolf-cream/45">
          By continuing you agree to Konnect&apos;s Terms &amp; Privacy Policy.
        </p>
      </div>
    </section>
  );
}
