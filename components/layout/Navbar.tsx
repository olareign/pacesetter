"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const MobileMenu = dynamic(() => import("@/components/layout/MobileMenu"), {
  ssr: false,
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-surface/80"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Logo className="h-8 w-auto" />

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm font-medium px-4 py-2 rounded-lg transition-[color,background-color] duration-200 ${
                  pathname === link.href
                    ? "text-lime bg-lime/5"
                    : "text-navy/70 hover:text-navy hover:bg-navy/5"
                }`}
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
            className="md:hidden relative z-50 flex items-center justify-center h-11 w-11 rounded-lg text-navy/70 hover:text-navy hover:bg-navy/5 transition-colors duration-200"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {isOpen && <MobileMenu isOpen={isOpen} onClose={close} />}
    </header>
  );
}
