"use client";

import React from "react";
import {
  Terminal,
  ArrowRight,
  Flame,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Decal from "@/components/ui/Decal";

export default function CurrentlyBuilding() {
  const { currentlyBuilding } = portfolioData;

  return (
    <section id="lab" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          tag="CURRENTLY MESSING WITH"
          title="Active experiments on the workbench."
          description="What's currently wired up on my breadboard, open in VS Code, or being tested at late hours."
        />

        {/* Workbench Terminal Dashboard */}
        <div className="rounded-2xl border border-border-subtle bg-surface overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {/* Terminal Title Bar */}
          <div className="bg-surface-elevated px-4 sm:px-6 py-3 border-b border-border-subtle flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs text-primary-muted ml-1.5 truncate max-w-[180px] xs:max-w-[260px] sm:max-w-none">
                bishal@desk:~/experiments$
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Decal
                text="DO NOT UNPLUG"
                subtext="BENCH // 002"
                variant="caution"
                rotate={-1.5}
                className="hidden md:inline-flex"
              />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-accent uppercase tracking-wider">
                  ACTIVE NOW
                </span>
              </div>
            </div>
          </div>

          {/* Active Experiment Grid */}
          <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {currentlyBuilding.map((item, index) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 md:p-6 rounded-xl bg-surface-subtle border border-border-subtle hover:border-accent/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="font-mono text-[9px] sm:text-[10px] text-accent uppercase tracking-widest flex items-center gap-1.5 truncate">
                      <Flame className="w-3 h-3 text-accent shrink-0" />
                      <span className="truncate">{item.category}</span>
                    </span>
                    <span className="font-mono text-[10px] text-primary-muted/60 shrink-0">
                      SYS_0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2 break-words">
                    {item.title}
                  </h3>

                  <p className="text-xs text-primary-muted font-light leading-relaxed mb-4 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 sm:pt-4 border-t border-border-subtle/50">
                  {/* Progress Indicator */}
                  <div>
                    <div className="flex justify-between font-mono text-[10px] sm:text-[11px] mb-1.5">
                      <span className="text-primary-muted truncate">{item.statusLabel}</span>
                      <span className="text-accent font-semibold ml-2 shrink-0">{item.progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-500 rounded-full"
                        style={{ width: `${item.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border-subtle text-primary-muted shrink-0"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lab Footer Note */}
          <div className="bg-surface-elevated/50 px-4 sm:px-6 py-3.5 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs font-mono text-primary-muted">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent shrink-0" />
              <span className="break-words">Have an idea for a hardware hack or AI build?</span>
            </div>
            <a
              href="#contact"
              className="text-accent hover:underline flex items-center justify-center sm:justify-start gap-1 py-1 min-h-[44px] shrink-0"
            >
              <span>Initiate collaboration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
