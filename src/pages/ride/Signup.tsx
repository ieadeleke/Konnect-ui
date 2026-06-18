import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { IMAGES } from "../../assets/images";
import { Avatars } from "./shared";

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5"
      aria-label="Download on the App Store"
    >
      <FaApple className="h-6 w-6" />
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Download on the</span>
        <span className="block font-display text-base font-bold">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-2.5 text-wolf-green-dark transition-transform hover:-translate-y-0.5"
      aria-label="Get it on Google Play"
    >
      <FaGooglePlay className="h-6 w-6" />
      <span className="leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-70">Get it on</span>
        <span className="block font-display text-base font-bold">Google Play</span>
      </span>
    </a>
  );
}

export default function Signup() {
  return (
    <section id="get-started" className="relative scroll-mt-24 overflow-hidden bg-wolf-green">

      <img
        src={IMAGES.partnerRider}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-wolf-green via-wolf-green/90 to-wolf-green/75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(11,122,82,0.22), transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange">
          Get the rider app
        </span>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-6xl">
          Start earning <span className="text-wolf-orange">this week</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
          Download the Konnect Rider app, sign up in minutes and hit the road — it&apos;s
          free to join, with instant payouts from your very first delivery.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Avatars />
          <span className="text-sm text-wolf-cream/70">
            <span className="font-semibold text-wolf-cream">5,000+ riders</span> already earning
          </span>
        </div>
      </div>
    </section>
  );
}
