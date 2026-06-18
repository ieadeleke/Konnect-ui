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
} from "react-icons/fi";
import Field from "./Field";
import { signUpUser, validateReferralCode } from "../../lib/api";

type ReferralState = "idle" | "checking" | "valid" | "invalid";

function splitPhone(input: string): { phone_code: string; phone_number: string } {
  let digits = input.replace(/\D/g, "");
  let phone_code = "234";
  if (digits.startsWith("234")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.replace(/^0+/, "");
  }
  return { phone_code, phone_number: digits };
}

export default function SignupCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const [referralState, setReferralState] = useState<ReferralState>("idle");
  const [referralName, setReferralName] = useState("");
  const [referralError, setReferralError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("konnectrfc");
    const stored = localStorage.getItem("referralCode");
    const code = fromUrl || stored || "";
    if (code) setReferral(code.slice(0, 6));
  }, []);

  useEffect(() => {
    if (referral) localStorage.setItem("referralCode", referral);
  }, [referral]);

  useEffect(() => {
    const code = referral.trim();
    if (code.length !== 6) {
      setReferralState("idle");
      setReferralName("");
      setReferralError("");
      return;
    }
    let cancelled = false;
    setReferralState("checking");
    setReferralError("");
    validateReferralCode(code)
      .then((details) => {
        if (cancelled) return;
        setReferralState("valid");
        setReferralName(details?.is_sl && details?.name ? details.name : "");
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setReferralState("invalid");
        setReferralName("");
        setReferralError(err instanceof Error ? err.message : "Invalid referral code");
      });
    return () => {
      cancelled = true;
    };
  }, [referral]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (referral.trim() && referralState === "invalid") {
      setError("Please fix or clear the referral code before continuing.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const { phone_code, phone_number } = splitPhone(phone);
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

  const referralStatus =
    referralState === "checking" ? (
      <span className="inline-flex items-center gap-1.5 text-xs text-wolf-green/50">
        <FiLoader className="h-3.5 w-3.5 animate-spin" />
        Checking…
      </span>
    ) : referralState === "valid" ? (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-wolf-green">
        <FiCheck className="h-3.5 w-3.5" />
        {referralName ? `Referred by ${referralName}` : "Code applied"}
      </span>
    ) : null;

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
            placeholder="6-character code — optional"
            optional
            maxLength={6}
            value={referral}
            onChange={(v) => setReferral(v.trim())}
            icon={<FiTag className="h-4 w-4" />}
            status={referralStatus}
            error={referralState === "invalid" ? referralError : undefined}
            hint={
              referralState === "idle" ? "If a friend referred you, enter their code." : undefined
            }
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
