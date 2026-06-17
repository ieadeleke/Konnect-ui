/* ============================================================
   KONNECT — Contact us
   Dark hero + a two-column body: contact channels on the left,
   a message form on the right. Clean, flat, on-brand.
   ============================================================ */

import { useState, type ReactNode } from "react";

function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const CHANNELS: { icon: ReactNode; label: string; value: string; href: string }[] = [
  {
    icon: (
      <Icon>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </Icon>
    ),
    label: "WhatsApp",
    value: "+234 807 337 6943",
    href: "https://wa.me/2348073376943",
  },
  {
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
    label: "Email",
    value: "hello@konnectbd.com",
    href: "mailto:hello@konnectbd.com",
  },
  {
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z" />
      </Icon>
    ),
    label: "Website",
    value: "konnectbd.com",
    href: "https://konnectbd.com",
  },
];

const SOCIALS: { label: string; href: string; path: string }[] = [
  { label: "Instagram", href: "#", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" },
  { label: "X", href: "#", path: "M18 2h3l-7 8 8 12h-6l-5-7-5 7H3l8-9L3 2h6l4 6 5-6Z" },
  { label: "TikTok", href: "#", path: "M16 3c.5 2.5 2 4 4.5 4.3v3.2c-1.7 0-3.3-.5-4.5-1.4v6.4A6.5 6.5 0 1 1 9 9v3.3a3.2 3.2 0 1 0 3.2 3.2V3H16Z" },
];

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl bg-wolf-cream px-4 py-3.5 text-sm text-wolf-green outline-none ring-1 ring-black/5 placeholder:text-wolf-green/35 focus:ring-2 focus:ring-wolf-orange";
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-wolf-green/70">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={4} placeholder={placeholder} className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-wolf-green pt-32 pb-20 text-center md:pt-40 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(245,60,8,0.18), transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-wolf-orange ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-wolf-orange" />
            Contact us
          </span>
          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.04] tracking-tight text-wolf-cream md:text-6xl">
            Let&apos;s <span className="text-wolf-orange">talk</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-wolf-cream/75">
            Questions, partnerships or support — reach the Konnect team and we&apos;ll get
            back to you, usually within a few hours.
          </p>
        </div>
      </section>

      {/* body */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
          {/* channels */}
          <div>
            <h2 className="font-display text-3xl tracking-tight text-wolf-green md:text-4xl">
              Reach us directly
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-wolf-green/60">
              Prefer to talk now? Use any of these — WhatsApp is fastest.
            </p>

            <div className="mt-8 space-y-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-wolf-cream p-4 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-wolf-orange/15 text-wolf-orange">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-wolf-green/45">
                      {c.label}
                    </span>
                    <span className="block font-semibold text-wolf-green">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs font-medium uppercase tracking-wide text-wolf-green/45">Follow us</div>
              <div className="mt-3 flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-wolf-cream text-wolf-green ring-1 ring-black/5 transition-colors hover:bg-wolf-orange hover:text-wolf-green-dark"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-wolf-orange/15 text-wolf-orange">
                  <Icon>
                    <path d="M20 6 9 17l-5-5" />
                  </Icon>
                </div>
                <h3 className="mt-4 font-display text-2xl text-wolf-green">Message sent!</h3>
                <p className="mt-2 text-sm text-wolf-green/60">
                  Thanks for reaching out — we&apos;ll reply to your email shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl tracking-tight text-wolf-green">Send us a message</h3>
                <p className="mt-1 text-sm text-wolf-green/60">We&apos;ll get back to you as soon as we can.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 space-y-3"
                >
                  <Field label="Your name" name="name" placeholder="e.g. Ada Okeke" />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                  <Field label="Subject" name="subject" placeholder="What's this about?" />
                  <Field label="Message" name="message" placeholder="Tell us a bit more…" textarea />
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-wolf-orange px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-wolf-green-dark transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
