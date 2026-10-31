"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  isExternal = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs tracking-wider uppercase font-medium transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-[11px] rounded-md gap-1.5 min-h-[38px]",
    md: "px-4 sm:px-5 py-2.5 text-xs rounded-lg gap-2 min-h-[44px]",
    lg: "px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm rounded-lg gap-2.5 min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-accent text-background font-semibold hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(168,255,120,0.25)] border border-accent",
    secondary:
      "bg-surface text-primary border border-border-subtle hover:border-border-hover hover:bg-surface-elevated",
    outline:
      "border border-border-strong text-primary hover:border-accent hover:text-accent bg-transparent",
    ghost:
      "text-primary-muted hover:text-primary hover:bg-surface/50 border border-transparent",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
