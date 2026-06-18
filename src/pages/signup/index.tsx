/* ============================================================
   KONNECT — Sign up
   Centred auth card on the dark brand backdrop (keeps the
   transparent navbar readable). Dressed up: social proof, a
   Google option, icon inputs. Clean and on-brand.
   ============================================================ */

import { useState, type ReactNode } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { FiUser, FiMail, FiPhone, FiLock, FiTag, FiCheck, FiArrowRight } from "react-icons/fi";
import { useSeo } from "../../lib/seo";

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

export default function SignupPage() {
  const [done, setDone] = useState(false);
  useSeo({
    title: "Create your account",
    description:
      "Sign up for Konnect and start ordering, tracking and earning. It only takes a minute — create your free account today.",
    path: "/signup",
    noindex: true,
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-wolf-green px-6 pb-16 pt-28 md:pt-32">
      {/* backdrop: glow + dot grid + blob */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "radial-gradient(55% 50% at 50% 0%, rgba(11,122,82,0.18), transparent 60%)" }}
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
                <FiCheck className="h-7 w-7" strokeWidth={3} />
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
                  <FaApple className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[0.6rem] opacity-70">Download on the</span>
                    <span className="block font-display text-sm font-bold">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-wolf-green px-5 py-2.5 text-wolf-cream transition-transform hover:-translate-y-0.5"
                >
                  <FaGooglePlay className="h-6 w-6" />
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
                  icon={<FiUser className="h-4 w-4" />}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  icon={<FiMail className="h-4 w-4" />}
                />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  icon={<FiPhone className="h-4 w-4" />}
                />
                <Field
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  icon={<FiLock className="h-4 w-4" />}
                />
                <Field
                  label="Referral code (if a friend referred you)"
                  name="referral"
                  placeholder="Enter code — optional"
                  optional
                  icon={<FiTag className="h-4 w-4" />}
                />
                <button
                  type="submit"
                  className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-wolf-orange px-6 py-4 text-sm font-bold tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  Create Account
                  <FiArrowRight className="h-4 w-4" />
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
