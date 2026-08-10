"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/navigation";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,6,23,0.3)] border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              Fahad<span className="text-primary transition-all duration-300 group-hover:text-secondary font-extrabold">.</span>Naeem
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm font-medium text-slate-300 transition-colors hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/35 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Nav Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:text-white md:hidden transition-colors border border-white/5 bg-white/5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-black/60 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`absolute left-0 right-0 top-full z-50 border-t border-white/5 bg-[#090a0f] px-4 py-6 shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary py-3 text-base font-semibold text-white shadow-lg shadow-primary/20"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
