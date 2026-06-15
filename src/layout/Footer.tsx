/* ============================================================
   WOLFOOD — Footer (shared chrome, rendered by DisplayLayout)
   Dark band: brand + tagline + socials, four link columns, and a
   bottom bar with copyright.
   ============================================================ */

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Company", links: ["About us", "Careers", "Blog", "Press"] },
  { title: "Discover", links: ["Restaurants", "Cuisines", "Cities", "Offers"] },
  { title: "Partners", links: ["Become a partner", "Become a rider", "Partner login"] },
  { title: "Legal", links: ["Terms of service", "Privacy policy", "Cookies", "Contact"] },
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

const SOCIALS: { label: string; path: string }[] = [
  { label: "Instagram", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" },
  { label: "X", path: "M18 2h3l-7 8 8 12h-6l-5-7-5 7H3l8-9L3 2h6l4 6 5-6Z" },
  { label: "TikTok", path: "M16 3c.5 2.5 2 4 4.5 4.3v3.2c-1.7 0-3.3-.5-4.5-1.4v6.4A6.5 6.5 0 1 1 9 9v3.3a3.2 3.2 0 1 0 3.2 3.2V3H16Z" },
  { label: "Facebook", path: "M14 9V7c0-1 .5-1.5 1.5-1.5H17V2h-3c-2.5 0-4 1.5-4 4v3H7v3.5h3V22h4v-9.5h2.8l.7-3.5H14Z" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-wolf-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(4,1fr)]">
          {/* brand */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <WolfMark />
              <span className="font-display text-2xl tracking-wide text-wolf-cream">WOLFOOD</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Taste of happiness, delivered fast. Hot meals from the kitchens you love, brought
              right to your door.
            </p>
            <div className="mt-5 flex gap-3">
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

          {/* link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm uppercase tracking-wide text-wolf-cream">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:text-wolf-orange">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>© {2026} Wolfood. All rights reserved.</p>
          <p className="text-wolf-cream/50">Made with love in Lagos.</p>
        </div>
      </div>
    </footer>
  );
}
