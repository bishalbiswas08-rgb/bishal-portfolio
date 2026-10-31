"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SystemMap from "./SystemMap";
import ProjectPipelines from "./ProjectPipelines";
import BuildLoop from "./BuildLoop";
import WhatNext from "./WhatNext";
import Decal from "@/components/ui/Decal";

export default function MotionInfographic() {
  const [activeTab, setActiveTab] = useState<"system" | "pipelines" | "loop" | "next">("system");

  return (
    <section id="how-i-think" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <SectionHeading
              tag="SYSTEM BLUEPRINT"
              title="THIS IS BASICALLY ME."
              description="A visual summary of what I build, how I think, and why I keep starting projects that were supposed to be 'small.'"
            />
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle overflow-x-auto max-w-full shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveTab("system")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                activeTab === "system"
                  ? "bg-accent text-[#050807] font-bold shadow-sm"
                  : "text-primary-muted hover:text-primary"
              }`}
            >
              01 // System Map
            </button>
            <button
              onClick={() => setActiveTab("pipelines")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                activeTab === "pipelines"
                  ? "bg-accent text-[#050807] font-bold shadow-sm"
                  : "text-primary-muted hover:text-primary"
              }`}
            >
              02 // Signal Pipelines
            </button>
            <button
              onClick={() => setActiveTab("loop")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                activeTab === "loop"
                  ? "bg-accent text-[#050807] font-bold shadow-sm"
                  : "text-primary-muted hover:text-primary"
              }`}
            >
              03 // The Build Loop
            </button>
            <button
              onClick={() => setActiveTab("next")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                activeTab === "next"
                  ? "bg-accent text-[#050807] font-bold shadow-sm"
                  : "text-primary-muted hover:text-primary"
              }`}
            >
              04 // What&apos;s Next
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Stage Display */}
        <div className="relative">
          {activeTab === "system" && <SystemMap />}
          {activeTab === "pipelines" && <ProjectPipelines />}
          {activeTab === "loop" && <BuildLoop />}
          {activeTab === "next" && <WhatNext />}
        </div>
      </div>
    </section>
  );
}
