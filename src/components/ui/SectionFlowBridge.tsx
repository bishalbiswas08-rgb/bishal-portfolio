"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

interface SectionFlowBridgeProps {
  step: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export default function SectionFlowBridge({
  step,
  label,
  sublabel,
  className = "",
}: SectionFlowBridgeProps) {
  return (
    <div
      className={`relative w-full py-6 sm:py-8 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Central flowing trace line */}
      <div className="relative flex flex-col items-center">
        {/* Top glowing line segment */}
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-transparent via-accent/40 to-accent" />

        {/* Pulse center waypoint node */}
        <div className="my-1.5 flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/90 border border-border-subtle shadow-md backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span className="font-mono text-[9px] sm:text-[10px] text-accent font-bold tracking-widest uppercase">
            {step}
          </span>
          <span className="text-border-strong text-[10px]">•</span>
          <span className="font-mono text-[9px] sm:text-[10px] text-primary-muted font-medium tracking-wider uppercase">
            {label}
          </span>
          {sublabel && (
            <span className="hidden sm:inline font-mono text-[9px] text-primary-muted/50">
              // {sublabel}
            </span>
          )}
        </div>

        {/* Bottom glowing line segment with arrow */}
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-accent via-accent/40 to-transparent flex flex-col justify-end items-center">
          <ArrowDown className="w-3 h-3 text-accent/60 -mb-1 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
