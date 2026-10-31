import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-surface text-primary border border-border-subtle",
    accent:
      "bg-accent-muted text-accent border border-accent-border font-medium",
    muted:
      "bg-surface-subtle text-primary-muted border border-border-subtle/50",
    outline:
      "border border-border-subtle text-primary-muted bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded text-[11px] font-mono tracking-tight select-none",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
