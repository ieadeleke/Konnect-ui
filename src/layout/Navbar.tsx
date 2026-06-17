/* ============================================================
   WOLFOOD — top navigation
   Shared chrome rendered by DisplayLayout. Fixed to the top:
   transparent over the dark hero, fades to a solid bar on scroll.
   Below lg it collapses to a hamburger + dropdown menu.
   ============================================================ */

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Businesses", to: "/business" },
  { label: "Ride", to: "/ride" },
  { label: "Ambassadors", to: "/ambassadors" },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        solid ? "bg-wolf-green/95 shadow-sm ring-1 ring-black/5 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <WolfMark />
          <span className="font-display text-2xl font-extrabold tracking-wide text-wolf-cream">
            WOLFOOD
          </span>
        </Link>

        {/* desktop links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[0.8rem] font-medium uppercase tracking-wide transition-colors hover:text-wolf-orange ${
                  isActive ? "text-wolf-orange" : "text-wolf-cream/85"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-wolf-green-dark transition-transform hover:-translate-y-0.5 sm:flex">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.5 13h11L21 7H6" />
            </svg>
            CART
          </button>

          {/* hamburger (mobile) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-wolf-cream ring-1 ring-white/20 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-wolf-green px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/5 py-3 text-sm font-medium uppercase tracking-wide transition-colors hover:text-wolf-orange ${
                    isActive ? "text-wolf-orange" : "text-wolf-cream/85"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-wolf-green-dark">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="18" cy="20" r="1.4" />
                <path d="M2 3h3l2.5 13h11L21 7H6" />
              </svg>
              Order now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
