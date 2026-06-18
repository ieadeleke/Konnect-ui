/* ============================================================
   KONNECT — top navigation
   Shared chrome rendered by DisplayLayout. Fixed to the top:
   transparent over the dark hero, fades to a solid bar on scroll.
   Below lg it collapses to a hamburger + dropdown menu.
   ============================================================ */

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Business", to: "/business" },
  { label: "Rider", to: "/ride" },
  { label: "Ambassador", to: "/ambassadors" },
  { label: "Contact us", to: "/contact" },
];

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
        solid
          ? "bg-wolf-green/95 shadow-sm ring-1 ring-black/5 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Konnect" className="h-8 w-8 rounded-lg" />
          <span className="font-display text-2xl font-extrabold tracking-wide text-wolf-cream">
            KONNECT
          </span>
        </Link>

        {/* desktop links */}
        <nav
          className="hidden items-center gap-14 8 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium capitalize tracking-wide transition-colors hover:text-wolf-orange ${
                  isActive ? "text-wolf-orange" : "text-wolf-cream/85"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/signup"
            className="hidden items-center gap-2 rounded-full bg-white px-7 text-sm py-4 font-bold text-wolf-green-dark transition-transform hover:-translate-y-0.5 sm:flex cursor-pointer"
          >
            Create Account
          </Link>

          {/* hamburger (mobile) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-wolf-cream ring-1 ring-white/20 lg:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
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
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-wolf-orange px-5 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Start here
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
