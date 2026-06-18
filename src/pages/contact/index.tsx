/* ============================================================
   KONNECT — Contact us
   Dark hero + a two-column body: contact channels on the left,
   a message form on the right. Clean, flat, on-brand.
   ============================================================ */

import { useState } from "react";
import type { IconType } from "react-icons";
import { FaWhatsapp, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FiMail, FiGlobe, FiCheck } from "react-icons/fi";
import { useSeo } from "../../lib/seo";

const CHANNELS: { Icon: IconType; label: string; value: string; href: string }[] = [
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+234 807 337 6943",
    href: "https://wa.me/2348073376943",
  },
  {
    Icon: FiMail,
    label: "Email",
    value: "konnect@consukon.com",
    href: "mailto:konnect@consukon.com",
  },
  {
    Icon: FiGlobe,
    label: "Website",
    value: "konnectbd.com",
    href: "https://konnectbd.com",
  },
];

const SOCIALS: { label: string; href: string; Icon: IconType }[] = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "X", href: "#", Icon: FaXTwitter },
  { label: "TikTok", href: "#", Icon: FaTiktok },
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
  useSeo({
    title: "Contact us",
    description:
      "Questions, partnerships or support? Reach the Konnect team on WhatsApp at +234 807 337 6943, email konnect@consukon.com, or send us a message — we usually reply within a few hours.",
    path: "/contact",
  });

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-wolf-green pt-32 pb-20 text-center md:pt-40 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(55% 55% at 50% 0%, rgba(11,122,82,0.18), transparent 60%)" }}
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
                    <c.Icon className="h-6 w-6" />
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
                    className="grid h-10 w-10 place-items-center rounded-full bg-wolf-cream text-wolf-green ring-1 ring-black/5 transition-colors hover:bg-wolf-orange hover:text-white"
                  >
                    <s.Icon className="h-4 w-4" />
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
                  <FiCheck className="h-6 w-6" />
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
                    className="mt-2 w-full rounded-full bg-wolf-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
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
