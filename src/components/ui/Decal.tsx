"use client";

import React from "react";

interface DecalProps {
  text: string;
  subtext?: string;
  variant?: "tuning" | "stamp" | "caution" | "sticker" | "pinout";
  rotate?: number;
  className?: string;
}

export default function Decal({
  text,
  subtext,
  variant = "sticker",
  rotate = 0,
  className = "",
}: DecalProps) {
  const rotationStyle = {
    transform: `rotate(${rotate}deg)`,
  };

  if (variant === "tuning") {
    return (
      <div
        style={rotationStyle}
        className={`inline-flex items-center gap-2 px-3 py-1 bg-surface-elevated/90 border-l-4 border-accent border-y border-r border-border-subtle/80 font-mono text-[10px] tracking-widest text-primary uppercase select-none shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 pointer-events-none ${className}`}
      >
        <div className="flex gap-0.5">
          <span className="w-1 h-3 bg-accent -skew-x-12" />
          <span className="w-1 h-3 bg-accent -skew-x-12" />
          <span className="w-1 h-3 bg-accent -skew-x-12" />
        </div>
        <span className="font-bold text-neutral-100">{text}</span>
        {subtext && <span className="text-primary-muted/70">{subtext}</span>}
      </div>
    );
  }

  if (variant === "caution") {
    return (
      <div
        style={rotationStyle}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-300 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase select-none shadow-sm transition-transform hover:scale-105 pointer-events-none ${className}`}
      >
        <span className="px-1 py-0.2 rounded bg-amber-500 text-neutral-950 font-black text-[8px]">
          !
        </span>
        <span>{text}</span>
        {subtext && <span className="text-amber-400/60 font-normal">{subtext}</span>}
      </div>
    );
  }

  if (variant === "stamp") {
    return (
      <div
        style={rotationStyle}
        className={`inline-flex flex-col items-center justify-center p-2 rounded-lg border-2 border-dashed border-accent/40 bg-accent/5 font-mono text-[9px] text-accent tracking-widest uppercase select-none transition-transform hover:scale-105 pointer-events-none ${className}`}
      >
        <span className="font-extrabold">{text}</span>
        {subtext && (
          <span className="text-[7px] text-primary-muted/70 tracking-normal mt-0.5">
            {subtext}
          </span>
        )}
      </div>
    );
  }

  if (variant === "pinout") {
    return (
      <div
        style={rotationStyle}
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#07090e]/95 border border-cyan-500/30 text-cyan-300 font-mono text-[9px] sm:text-[10px] tracking-wider select-none shadow-sm transition-transform hover:scale-105 pointer-events-none ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-semibold text-cyan-200">{text}</span>
        {subtext && <span className="text-cyan-400/60 font-light">{subtext}</span>}
      </div>
    );
  }

  // Default "sticker" (laptop / workbench decal)
  return (
    <div
      style={rotationStyle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e1017]/90 border border-border-hover/80 text-primary-muted hover:text-primary font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase select-none shadow-[0_4px_14px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-transform hover:scale-105 pointer-events-none ${className}`}
    >
      <span className="text-accent">#</span>
      <span className="text-neutral-100">{text}</span>
      {subtext && <span className="text-primary-muted/60 text-[9px] font-normal">{subtext}</span>}
    </div>
  );
}
