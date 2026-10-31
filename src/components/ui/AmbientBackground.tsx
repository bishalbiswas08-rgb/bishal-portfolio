"use client";

import React, { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Subtle Slow Migrating Gradient Orbs */}
      <div
        className={`absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.035] blur-[140px] ${
          reducedMotion ? "" : "animate-pulse"
        }`}
        style={{ animationDuration: "14s" }}
      />
      <div
        className={`absolute top-[45%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.025] blur-[160px] ${
          reducedMotion ? "" : "animate-pulse"
        }`}
        style={{ animationDuration: "18s" }}
      />
      <div
        className={`absolute bottom-[-5%] left-[25%] w-[550px] h-[550px] rounded-full bg-emerald-500/[0.03] blur-[150px] ${
          reducedMotion ? "" : "animate-pulse"
        }`}
        style={{ animationDuration: "16s" }}
      />

      {/* 2. Micro Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.03]" />

      {/* 3. Subtle Film Grain Texture (SVG data URI, static, zero CPU lag) */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
