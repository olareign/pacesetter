"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.[0]?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col transition-[transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 shrink-0 border-b border-surface">
          <Logo className="h-7 w-auto" />
          <button
            ref={toggleRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center h-11 px-4 rounded-xl font-display text-base font-semibold transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-lime bg-lime/5"
                      : "text-navy/80 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 pb-8 pt-4 border-t border-surface shrink-0">
          <Button
            href="/contact"
            variant="primary-gradient"
            className="w-full text-center"
            onClick={onClose}
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </>
  );
}
