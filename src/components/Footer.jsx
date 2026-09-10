
import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
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
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="w-full px-[30px] py-[45px]">

        {/* =========================
            MAIN FOOTER CONTENT
        ========================== */}
        <div className="grid w-full gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1.3fr_1fr_1fr]">

          {/* =========================
              BRAND
          ========================== */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="group inline-flex items-center"
              aria-label="Home"
            >
              <img
                src="/images/logo.png"
                alt="Md Tauseef Logo"
                className="h-12 w-auto max-w-[170px] object-contain transition-all duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Building modern, responsive and production-ready web
              experiences with clean frontend architecture and powerful
              backend solutions.
            </p>

            {/* Developer Badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600" />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-teal-700">
                Full Stack / MERN Developer
              </span>
            </div>
          </div>

          {/* =========================
              NAVIGATION
          ========================== */}
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700">
              Navigation
            </p>

            <h3 className="mt-1 font-heading text-lg font-extrabold tracking-tight text-slate-950">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group flex w-fit items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-teal-700"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* =========================
              CONNECT
          ========================== */}
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700">
              Connect
            </p>

            <h3 className="mt-1 font-heading text-lg font-extrabold tracking-tight text-slate-950">
              Let's Connect
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Have a project, idea or collaboration in mind? Let's build
              something valuable together.
            </p>

            {/* =========================
                COLORFUL SOCIAL ICONS
            ========================== */}
            <div className="mt-5 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/Md-TAUSEEF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <FaGithub className="h-[19px] w-[19px] text-[#181717] transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-tauseef/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2]/30 hover:shadow-lg"
              >
                <FaLinkedinIn className="h-[18px] w-[18px] text-[#0A66C2] transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Email */}
              <a
                href="mailto:mdtauseefkhan38@gamil.com"
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EA4335]/30 hover:shadow-lg"
              >
                <Mail className="h-[19px] w-[19px] text-[#EA4335] transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 transition-colors duration-200 hover:text-teal-700"
            >
              Start a conversation

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-yellow-300">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="flex w-full flex-col items-center justify-between gap-4 pt-7 sm:flex-row">

          <p className="text-xs text-slate-500">
            © 2026 Md Tauseef. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Built with</span>

            <span className="font-semibold text-slate-600">
              React.js
            </span>

            <span className="text-slate-300">•</span>

            <span className="font-semibold text-slate-600">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
