import { Arrow, Avatars } from "./shared";

export default function Apply() {
  return (
    <section id="apply" className="scroll-mt-24 bg-wolf-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wolf-green px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(60% 70% at 50% 0%, rgba(11,122,82,0.2), transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-wolf-cream md:text-5xl">
              Ready to join the pack?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-wolf-cream/75">
              Apply in minutes and start earning as a Konnect Ambassador. It&apos;s free to
              join — no fees, no commitment.
            </p>
            <a
              href="https://forms.gle/DjqKWtpTCXR1Zgc58"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wolf-orange px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              Apply now
              <Arrow />
            </a>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Avatars />
              <span className="text-sm text-wolf-cream/70">
                Join <span className="font-semibold text-wolf-cream">2,500+ ambassadors</span> across Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
