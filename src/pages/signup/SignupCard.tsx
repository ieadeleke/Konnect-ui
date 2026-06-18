import { useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiTag,
  FiCheck,
  FiArrowRight,
  FiLoader,
  FiAlertCircle,
  FiGlobe,
} from "react-icons/fi";
import Field from "./Field";
import { checkEmail, signUpUser } from "../../lib/api";
import { APP_STORE_URL, GOOGLE_PLAY_URL, WEB_URL } from "../../lib/links";

function normalizePhone(input: string): { phone_code: string; phone_number: string } {
  let digits = input.replace(/\D/g, "");
  if (digits.startsWith("234")) {
    digits = "0" + digits.slice(3);
  } else if (digits.length > 0 && !digits.startsWith("0")) {
    digits = "0" + digits;
  }
  return { phone_code: "+234", phone_number: digits };
}

export default function SignupCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("konnectrfc");
    const stored = localStorage.getItem("referralCode");
    const code = fromUrl || stored || "";
    if (code) setReferral(code.slice(0, 8));
  }, []);

  useEffect(() => {
    if (referral) localStorage.setItem("referralCode", referral);
  }, [referral]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const emailCheck = await checkEmail(email.trim());
      if (!emailCheck.ok) {
        setError(emailCheck.message || "Please enter a valid email address.");
        setSubmitting(false);
        return;
      }

      const { phone_code, phone_number } = normalizePhone(phone);
      await signUpUser({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        password,
        phone_code,
        phone_number,
        referral_code: referral.trim() ? referral.trim() : null,
      });
      localStorage.removeItem("referralCode");
      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-7 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-8">
      {done ? (
        <div className="py-6 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-wolf-orange/15 text-wolf-orange">
            <FiCheck className="h-7 w-7" strokeWidth={3} />
          </div>
          <h2 className="mt-5 font-display text-2xl text-wolf-green">Account created!</h2>
          <p className="mx-auto mt-2 max-w-xs text-sm text-wolf-green/60">
            Welcome to Konnect. Check your email to verify your account and claim your sign-up
            bonus, then download the app to start ordering, tracking and earning.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-wolf-green px-5 py-2.5 text-wolf-cream transition-transform hover:-translate-y-0.5"
            >
              <FaApple className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[0.6rem] opacity-70">Download on the</span>
                <span className="block font-display text-sm font-bold">App Store</span>
              </span>
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-wolf-green px-5 py-2.5 text-wolf-cream transition-transform hover:-translate-y-0.5"
            >
              <FaGooglePlay className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[0.6rem] opacity-70">Get it on</span>
                <span className="block font-display text-sm font-bold">Google Play</span>
              </span>
            </a>
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-wolf-green px-5 py-2.5 text-wolf-cream transition-transform hover:-translate-y-0.5"
            >
              <FiGlobe className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[0.6rem] opacity-70">Order on the</span>
                <span className="block font-display text-sm font-bold">Web</span>
              </span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 ring-1 ring-red-100">
              <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="First name"
              name="first_name"
              placeholder="Ada"
              autoComplete="given-name"
              value={firstName}
              onChange={setFirstName}
              icon={<FiUser className="h-4 w-4" />}
            />
            <Field
              label="Last name"
              name="last_name"
              placeholder="Okeke"
              autoComplete="family-name"
              value={lastName}
              onChange={setLastName}
              icon={<FiUser className="h-4 w-4" />}
            />
          </div>
          <Field
            label="Email"
            name="email"
            type="email"
            inputMode="email"
            placeholder="you@email.com"
            autoComplete="email"
            value={email}
            onChange={setEmail}
            icon={<FiMail className="h-4 w-4" />}
          />
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+234 800 000 0000"
            autoComplete="tel"
            value={phone}
            onChange={setPhone}
            icon={<FiPhone className="h-4 w-4" />}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            value={password}
            onChange={setPassword}
            icon={<FiLock className="h-4 w-4" />}
          />
          <Field
            label="Referral code"
            name="referral"
            placeholder="8-character code — optional"
            optional
            maxLength={8}
            value={referral}
            onChange={(v) => setReferral(v.trim())}
            icon={<FiTag className="h-4 w-4" />}
            hint="If a friend referred you, enter their code."
          />
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-wolf-orange px-6 py-4 text-sm font-bold tracking-wide text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {submitting ? (
              <>
                <FiLoader className="h-4 w-4 animate-spin" />
                Creating account…
              </>
            ) : (
              <>
                Create Account
                <FiArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
