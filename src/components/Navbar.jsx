
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-slate-100 bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="flex h-[72px] w-full items-center justify-between px-[30px]">

        {/* =========================
            PERSONAL LOGO
        ========================== */}
        <Link
          to="/"
          className="group flex items-center"
          aria-label="Home"
        >
          <img
            src="/images/logo.png"
            alt="Personal Logo"
            className="h-11 w-auto max-w-[150px] object-contain transition-all duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative rounded-lg px-3 py-2 text-[12px] font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-[3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-teal-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* =========================
            DESKTOP CTA
        ========================== */}
        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-[12px] font-extrabold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
          >
            <Sparkles className="h-3.5 w-3.5" />

            Let's Talk

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-all duration-200 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 bg-white px-[30px] pb-5 shadow-xl lg:hidden">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-2">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-white text-teal-700 shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-950"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition-all hover:bg-yellow-300"
            >
              <Sparkles className="h-4 w-4" />

              Let's Talk

              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
