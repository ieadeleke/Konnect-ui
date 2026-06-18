import SignupCard from "./SignupCard";
import { useSeo } from "../../lib/seo";

export default function SignupPage() {
  useSeo({
    title: "Create your account",
    description:
      "Sign up for Konnect and start ordering, tracking and earning. It only takes a minute — create your free account today.",
    path: "/signup",
    noindex: true,
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-wolf-green px-6 pb-16 pt-28 md:pt-32">

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

        <SignupCard />

        <p className="mt-6 text-center text-xs text-wolf-cream/45">
          By continuing you agree to Konnect&apos;s Terms &amp; Privacy Policy.
        </p>
      </div>
    </section>
  );
}
