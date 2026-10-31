import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-subtle/50 relative z-10 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-sm">
            <span className="font-heading font-semibold text-primary tracking-tight text-sm">
              {portfolioData.developer.name}
            </span>
            <p className="text-xs text-primary-muted font-mono leading-relaxed">
              Student who likes making things. Software, AI, hardware, and late-night experiments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-primary-muted">
            <Link href="/#about" className="hover:text-accent transition-colors py-1.5 min-h-[44px] flex items-center">
              About
            </Link>
            <Link href="/#projects" className="hover:text-accent transition-colors py-1.5 min-h-[44px] flex items-center">
              Projects
            </Link>
            <Link href="/#skills" className="hover:text-accent transition-colors py-1.5 min-h-[44px] flex items-center">
              Skills
            </Link>
            <Link href="/#lab" className="hover:text-accent transition-colors py-1.5 min-h-[44px] flex items-center">
              Lab
            </Link>
            <Link href="/#contact" className="hover:text-accent transition-colors py-1.5 min-h-[44px] flex items-center">
              Contact
            </Link>
          </div>

          <div className="text-xs font-mono text-primary-muted">
            Built by {portfolioData.developer.name} • curiosity + coffee
          </div>
        </div>
      </div>
    </footer>
  );
}
