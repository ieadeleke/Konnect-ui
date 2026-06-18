/* ============================================================
   KONNECT — Footer (shared chrome, rendered by DisplayLayout)
   Simple & clean: brand + a few essential links + socials, with a
   slim copyright bar. Suited to a small link set.
   ============================================================ */

import type { IconType } from "react-icons";
import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import logo from "../assets/logo.svg";

const LINKS: { label: string; href: string }[] = [
  { label: "For Ambassador", href: "/ambassadors" },
  { label: "For Restaurants", href: "/business" },
  { label: "For Riders", href: "/ride" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const SOCIALS: { label: string; href: string; Icon: IconType }[] = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "X", href: "#", Icon: FaXTwitter },
  { label: "TikTok", href: "#", Icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-wolf-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* top: brand + links */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Konnect" className="h-8 w-8 rounded-lg" />
            <span className="font-display text-2xl font-extrabold tracking-wide text-wolf-cream">
              KONNECT
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2" aria-label="Footer">
            {LINKS.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm transition-colors hover:text-wolf-orange"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* bottom: copyright + socials */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-wolf-cream/50">© {2026} Konnect. All rights reserved.</p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-wolf-cream transition-colors hover:bg-wolf-orange hover:text-white"
              >
                <s.Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
