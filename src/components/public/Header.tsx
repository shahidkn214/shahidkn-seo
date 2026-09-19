"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111111]/80 border-b border-border w-full relative transition-colors">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-serif text-lg font-bold text-text tracking-tight hover:text-red transition-colors"
          >
            Nexversal Portfolio
          </Link>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red/10 text-red border border-red/20">
            SEO Showcase
          </span>
        </div>

        {/* Desktop Nav & Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-dim">
            <a href="#" className="hover:text-text transition-colors">
              Home
            </a>
            <a href="#portfolio" className="hover:text-text transition-colors">
              Portfolio
            </a>
            <a
              href="#technical-seo"
              className="hover:text-text transition-colors"
            >
              Technical SEO
            </a>
            <a href="#contact" className="hover:text-text transition-colors">
              Contact
            </a>
          </nav>

          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden p-2 text-text focus:outline-none rounded-md hover:bg-card/60 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Layer */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111111]/95 backdrop-blur-md border-b border-border flex flex-col items-center gap-4 py-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-text-dim hover:text-text text-base font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="text-text-dim hover:text-text text-base font-medium transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#technical-seo"
            onClick={() => setIsMenuOpen(false)}
            className="text-text-dim hover:text-text text-base font-medium transition-colors"
          >
            Technical SEO
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-text-dim hover:text-text text-base font-medium transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
