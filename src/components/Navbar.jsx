import { useState } from "react";
import { NavLink } from "react-router-dom";

// Single source of truth for the site's nav: add a page by adding one
// object here (and one <Route> in App.jsx) -- nothing else needs to change.
const links = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/progress", label: "Progress" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

/** Sticky site header: desktop nav row + a collapsible mobile menu. */
export default function Navbar() {
  // Whether the mobile hamburger menu is expanded.
  const [open, setOpen] = useState(false);

  // Passed to <NavLink>'s `className` prop. Unlike a plain <Link>,
  // <NavLink> calls this with { isActive } (true when this link's `to`
  // matches the current URL) -- that's how the current page's link turns
  // red while the rest stay black with a red hover.
  const linkClass = ({ isActive }) =>
    `text-sm uppercase tracking-widest transition-colors ${
      isActive ? "text-thrasher-red" : "text-ink hover:text-thrasher-red"
    }`;

  return (
    // sticky top-0 z-50: pins the header to the top of the viewport while
    // scrolling, above everything else on the page.
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-2xl tracking-tight">
          SFOR<span className="text-thrasher-red">S</span>
        </NavLink>

        {/* Desktop nav: hidden on small screens, shown from md: up. */}
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger icon: only visible below md:, toggles `open`. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* `{open && (...)}` -- a common React pattern for "only render
          this if the condition is true". When `open` is false, this
          entire <nav> simply doesn't exist in the DOM. */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
