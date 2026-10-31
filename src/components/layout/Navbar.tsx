"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Lab", href: "/#lab" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change or ESC key
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border-subtle py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark - Bishal Biswas */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-accent rounded py-1 min-w-0"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span className="font-heading font-black text-sm sm:text-base tracking-tight text-primary group-hover:text-accent transition-colors uppercase truncate">
                {portfolioData.developer.name}
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-primary-muted tracking-wider uppercase pl-4 truncate">
              student • builder • tinkerer
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono tracking-wider uppercase"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-primary-muted hover:text-accent transition-colors relative py-1 focus-visible:outline-accent rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#contact"
              variant="outline"
              size="sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-primary hover:text-accent focus-visible:outline-accent rounded-lg border border-border-subtle bg-surface/60 active:scale-95 transition-all shrink-0 ml-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-background/95 backdrop-blur-xl border-t border-border-subtle z-50 flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="flex flex-col gap-2 pt-2"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-xl font-heading font-medium text-primary hover:text-accent border-b border-border-subtle/40 py-3.5 transition-colors min-h-[48px]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-primary-muted">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 pb-6 border-t border-border-subtle flex flex-col gap-3">
            <div className="font-mono text-[11px] text-primary-muted uppercase tracking-wider">
              Direct Contact
            </div>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-accent text-xs sm:text-sm font-mono break-all hover:underline py-1"
            >
              {portfolioData.contact.email}
            </a>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full mt-2 min-h-[44px]"
              onClick={() => setIsOpen(false)}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
