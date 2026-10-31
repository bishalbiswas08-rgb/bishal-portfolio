"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Decal from "@/components/ui/Decal";

export default function WhatNext() {
  const { contact } = portfolioData;

  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-border-subtle p-6 sm:p-10 md:p-12 overflow-hidden select-none text-center">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#A8FF78_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      {/* Decorative Decal Top Corners */}
      <div className="absolute top-4 left-4 hidden sm:block">
        <Decal text="BUILD // 001" variant="tuning" rotate={-2} />
      </div>
      <div className="absolute top-4 right-4 hidden sm:block">
        <Decal text="LOCAL AI + ESP32" variant="pinout" rotate={2} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {/* Step Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-subtle text-accent font-mono text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>04 // WHAT&apos;S NEXT?</span>
        </div>

        {/* Major Statement Headline */}
        <div className="space-y-2">
          <div className="font-mono text-xs sm:text-sm text-primary-muted tracking-widest uppercase">
            BUILD • BREAK • FIX • LEARN • BUILD AGAIN
          </div>

          <h3 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-primary tracking-tight uppercase leading-[1.05]">
            MORE WEIRD IDEAS.
          </h3>
        </div>

        {/* Narrative & Philosophy */}
        <p className="text-sm sm:text-base md:text-lg text-primary-muted max-w-xl mx-auto font-light leading-relaxed">
          I&apos;m constantly experimenting with software, AI interfaces, and custom microcontroller hardware. If you have an idea worth building—let&apos;s make it.
        </p>

        {/* Identity Signature */}
        <div className="pt-2 flex items-center justify-center gap-2 font-mono text-xs text-accent uppercase tracking-wider font-semibold">
          <span>Bishal Biswas</span>
          <span>•</span>
          <span>Software</span>
          <span>•</span>
          <span>AI</span>
          <span>•</span>
          <span>Hardware</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#A8FF78] text-[#050807] font-heading font-black text-sm tracking-tight hover:bg-[#baff8f] transition-all shadow-[0_0_28px_rgba(168,255,120,0.35)] active:scale-[0.98] min-h-[48px]"
          >
            <span>LET&apos;S BUILD IT</span>
            <ArrowRight className="w-4 h-4 text-[#050807] stroke-[2.5]" />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-elevated/90 border border-neutral-700/80 hover:border-accent hover:bg-surface-elevated text-neutral-100 hover:text-white font-heading font-bold text-sm tracking-tight transition-all active:scale-[0.98] min-h-[48px]"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs">{contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
