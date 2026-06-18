import type { IconType } from "react-icons";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { APP_STORE_URL, GOOGLE_PLAY_URL, WEB_URL } from "../lib/links";

const BADGES: { href: string; Icon: IconType; sub: string; name: string; aria: string }[] = [
  {
    href: APP_STORE_URL,
    Icon: FaApple,
    sub: "Download on the",
    name: "App Store",
    aria: "Download on the App Store",
  },
  {
    href: GOOGLE_PLAY_URL,
    Icon: FaGooglePlay,
    sub: "Get it on",
    name: "Google Play",
    aria: "Get it on Google Play",
  },
  {
    href: WEB_URL,
    Icon: FiGlobe,
    sub: "Order on the",
    name: "Web",
    aria: "Open Konnect on the web",
  },
];

export default function StoreBadges({
  className = "",
  fullWidthOnMobile = false,
  size = "md",
}: {
  className?: string;
  fullWidthOnMobile?: boolean;
  size?: "sm" | "md";
}) {
  const pill = size === "sm" ? "px-4 py-2" : "px-5 py-2.5";
  const iconSize = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  const nameSize = size === "sm" ? "text-sm" : "text-base";
  const width = fullWidthOnMobile ? "w-full sm:w-auto sm:justify-start" : "";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      {BADGES.map((b) => (
        <a
          key={b.name}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={b.aria}
          className={`inline-flex items-center justify-center gap-3 rounded-xl bg-white ${pill} text-wolf-green-dark transition-transform hover:-translate-y-0.5 ${width}`}
        >
          <b.Icon className={iconSize} />
          <span className="text-left leading-tight">
            <span className="block text-[0.62rem] font-medium opacity-70">{b.sub}</span>
            <span className={`block font-display ${nameSize} font-bold`}>{b.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
