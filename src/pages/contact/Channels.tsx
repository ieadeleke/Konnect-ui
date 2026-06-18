import type { IconType } from "react-icons";
import { FaWhatsapp, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FiMail, FiGlobe } from "react-icons/fi";

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

export default function Channels() {
  return (
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
  );
}
