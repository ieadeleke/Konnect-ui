/* ============================================================
   WOLFOOD — Footer (shared chrome, rendered by DisplayLayout)
   Simple & clean: brand + a few essential links + socials, with a
   slim copyright bar. Suited to a small link set.
   ============================================================ */

const LINKS = ["How it works", "For Restaurants", "For Riders", "FAQ", "Contact"];

const SOCIALS: { label: string; path: string }[] = [
  { label: "Instagram", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" },
  { label: "X", path: "M18 2h3l-7 8 8 12h-6l-5-7-5 7H3l8-9L3 2h6l4 6 5-6Z" },
  { label: "TikTok", path: "M16 3c.5 2.5 2 4 4.5 4.3v3.2c-1.7 0-3.3-.5-4.5-1.4v6.4A6.5 6.5 0 1 1 9 9v3.3a3.2 3.2 0 1 0 3.2 3.2V3H16Z" },
];

function WolfMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        d="M3 3l5.5 4L12 3.5 15.5 7 21 3l-1.4 9.2C19.2 16.6 16 20 12 20S4.8 16.6 4.4 12.2L3 3z"
        fill="#F53C08"
      />
      <circle cx="9.3" cy="11" r="1.1" fill="#111111" />
      <circle cx="14.7" cy="11" r="1.1" fill="#111111" />
      <path d="M10.5 14.5h3l-1.5 1.6z" fill="#111111" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-wolf-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* top: brand + links */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="#" className="flex items-center gap-2">
            <WolfMark />
            <span className="font-display text-2xl font-extrabold tracking-wide text-wolf-cream">
              WOLFOOD
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2" aria-label="Footer">
            {LINKS.map((link) => (
              <a key={link} href="#" className="text-sm transition-colors hover:text-wolf-orange">
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* bottom: copyright + socials */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-wolf-cream/50">© {2026} Wolfood. All rights reserved.</p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-wolf-cream transition-colors hover:bg-wolf-orange hover:text-wolf-green-dark"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
