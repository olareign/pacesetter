"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-surface/80"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="font-display text-xl font-bold tracking-tight">
            <span className="text-navy">PACE</span>
            <span className="text-lime">SETTER</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-body text-sm font-medium text-navy/70 hover:text-navy px-4 py-2 rounded-lg hover:bg-navy/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" variant="primary-gradient">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden relative z-50 text-navy p-2 hover:bg-navy/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl text-navy hover:text-lime transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/contact"
            variant="primary-gradient"
            className="mt-4 w-full max-w-xs text-center"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
