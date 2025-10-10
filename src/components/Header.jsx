"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Products", "Support", "Solution"];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#04121d] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white text-blue-600 font-bold text-xl px-3 py-1 rounded-md shadow-sm">
            EC
          </div>
          <span className="font-semibold text-lg text-white tracking-tight">
            EasyConntect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white/80">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative group hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button (hidden on very small screens) */}
        <div className="hidden sm:block">
          <Link
            href="#contact"
            className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            // Close icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#04121d] border-t border-white/10 px-6 pb-6 animate-slideDown">
          <nav className="flex flex-col gap-4 mt-4 text-white/90 font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-white text-blue-700 font-semibold px-5 py-2 rounded-full text-center shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
