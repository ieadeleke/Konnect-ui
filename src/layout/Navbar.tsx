/* ============================================================
   WOLFOOD — top navigation
   Shared chrome rendered by DisplayLayout. Sits as a transparent
   overlay pinned to the top of the page (cream text reads on the
   green hero behind it).
   ============================================================ */

const NAV_LINKS = ["Home", "Key Features", "About Us", "Service", "Testimonial", "FAQ"];

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
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <WolfMark />
          <span className="font-display text-2xl tracking-wide text-wolf-cream">WOLFOOD</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.8rem] font-medium uppercase tracking-wide text-wolf-cream/85 transition-colors hover:text-wolf-orange"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-wolf-green-dark transition-transform hover:-translate-y-0.5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="20" r="1.4" />
            <circle cx="18" cy="20" r="1.4" />
            <path d="M2 3h3l2.5 13h11L21 7H6" />
          </svg>
          CART
        </button>
      </div>
    </header>
  );
}
