"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
  Radio,
  Terminal,
  Layers,
  Database,
  CheckCircle2,
} from "lucide-react";
import Decal from "@/components/ui/Decal";

interface SystemMapProps {
  onSelectProject?: (slug: string) => void;
}

export default function SystemMap({ onSelectProject }: SystemMapProps) {
  const [activeBranch, setActiveBranch] = useState<"all" | "software" | "ai" | "hardware">("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const softwareTech = [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "REST APIs",
    "Supabase",
    "PostgreSQL",
  ];

  const aiTech = [
    "LLMs",
    "Whisper",
    "Speech-to-Text",
    "Text-to-Speech",
    "Local AI",
    "AI-Assisted Apps",
  ];

  const hardwareTech = [
    "ESP32",
    "Arduino",
    "ESP8266",
    "Sensors",
    "I2S Audio",
    "Displays",
    "Microphones",
    "Speakers",
    "Electronics",
  ];

  const branchProjects = {
    software: [
      { slug: "attender", name: "ATTENDER", role: "Full-Stack Web & Auth" },
      { slug: "craveai", name: "CraveAI", role: "Next.js & Supabase" },
    ],
    ai: [
      { slug: "eden", name: "EDEN", role: "Local LLM & Whisper Voice" },
      { slug: "craveai", name: "CraveAI", role: "Recipe Generation Engine" },
      { slug: "attender", name: "ATTENDER", role: "Gemini Natural Query Agent" },
    ],
    hardware: [
      { slug: "eden", name: "EDEN", role: "ESP32 & I2S Audio Bus" },
      { slug: "smartshut", name: "SmartShut", role: "Biometric & Relay Cutoff" },
      { slug: "embedded-lab", name: "Embedded Lab", role: "Microcontrollers & Nodes" },
    ],
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-border-subtle p-4 sm:p-6 md:p-8 overflow-hidden select-none">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#A8FF78_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

      {/* Top Header & Interactive Branch Filter */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border-subtle/80 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold">
            <span>01 // THE SYSTEM MAP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-muted font-normal">Active Neural &amp; Circuit Blueprint</span>
          </div>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-primary mt-1">
            Three Disciplines Acting as One Machine
          </h3>
        </div>

        {/* Branch Selector Filter */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle self-start sm:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveBranch("all")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeBranch === "all"
                ? "bg-accent text-[#050807] font-bold shadow-sm"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            All System
          </button>
          <button
            onClick={() => setActiveBranch("software")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeBranch === "software"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            Software
          </button>
          <button
            onClick={() => setActiveBranch("ai")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeBranch === "ai"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            AI
          </button>
          <button
            onClick={() => setActiveBranch("hardware")}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeBranch === "hardware"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            Hardware
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="relative z-10 py-6 sm:py-8 space-y-8">
        {/* Stage 1: Central Identity Core */}
        <div className="flex flex-col items-center text-center">
          <div className="relative group p-4 sm:p-5 rounded-2xl bg-surface-elevated/95 border-2 border-accent/40 shadow-[0_0_30px_rgba(168,255,120,0.15)] max-w-md w-full">
            <div className="flex items-center justify-between border-b border-border-subtle/80 pb-2 mb-2 font-mono text-[10px] text-accent">
              <span>ROOT // BUILDER NODE</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="font-heading font-black text-2xl sm:text-3xl text-primary tracking-tight">
              BISHAL BISWAS
            </div>
            <p className="font-mono text-xs text-primary-muted mt-1 uppercase tracking-wider">
              Student • Builder • Tinkerer
            </p>
            <div className="mt-3 pt-2 border-t border-border-subtle/60 flex items-center justify-center gap-2 font-mono text-[10px] text-accent font-semibold">
              <span>SOFTWARE</span>
              <span>+</span>
              <span>AI</span>
              <span>+</span>
              <span>HARDWARE</span>
            </div>
          </div>

          {/* Vertical connecting line */}
          <div className="w-[2px] h-8 bg-gradient-to-b from-accent to-border-strong my-1" />
        </div>

        {/* Stage 2 & 3: The 3 Primary Branches and their actual technologies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Branch 1: SOFTWARE */}
          <div
            className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
              activeBranch === "all" || activeBranch === "software"
                ? "bg-surface/90 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                : "bg-surface/30 border-border-subtle opacity-40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-border-subtle/60 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-extrabold text-lg text-primary">
                    SOFTWARE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">
                  BRANCH // 01
                </span>
              </div>

              <p className="font-mono text-xs text-primary-muted leading-relaxed mb-3">
                Modern full-stack web, performant client-side state, relational Postgres, and fast REST endpoints.
              </p>

              {/* Technologies Array */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {softwareTech.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle border border-cyan-500/20 text-cyan-200/90 hover:border-cyan-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Shipped Projects connected to this branch */}
            <div className="mt-4 pt-3 border-t border-border-subtle/60">
              <span className="font-mono text-[10px] text-primary-muted/70 uppercase tracking-wider block mb-2">
                Connected Projects:
              </span>
              <div className="space-y-1.5">
                {branchProjects.software.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    className="flex items-center justify-between p-2 rounded bg-surface-subtle hover:bg-cyan-500/10 border border-border-subtle hover:border-cyan-500/40 text-xs font-mono transition-all group/item"
                  >
                    <span className="text-primary font-bold group-hover/item:text-cyan-300">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-primary-muted flex items-center gap-1">
                      <span>{p.role}</span>
                      <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Branch 2: ARTIFICIAL INTELLIGENCE */}
          <div
            className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
              activeBranch === "all" || activeBranch === "ai"
                ? "bg-surface/90 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                : "bg-surface/30 border-border-subtle opacity-40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-border-subtle/60 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-purple-500/10 text-purple-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-extrabold text-lg text-primary">
                    AI
                  </span>
                </div>
                <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest font-semibold">
                  BRANCH // 02
                </span>
              </div>

              <p className="font-mono text-xs text-primary-muted leading-relaxed mb-3">
                Local Whisper speech inference, LLM conversational loops, and domain-specific AI query agents.
              </p>

              {/* Technologies Array */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {aiTech.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle border border-purple-500/20 text-purple-200/90 hover:border-purple-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Shipped Projects connected to this branch */}
            <div className="mt-4 pt-3 border-t border-border-subtle/60">
              <span className="font-mono text-[10px] text-primary-muted/70 uppercase tracking-wider block mb-2">
                Connected Projects:
              </span>
              <div className="space-y-1.5">
                {branchProjects.ai.map((p) => (
                  <Link
                    key={p.slug + p.role}
                    href={`/work/${p.slug}`}
                    className="flex items-center justify-between p-2 rounded bg-surface-subtle hover:bg-purple-500/10 border border-border-subtle hover:border-purple-500/40 text-xs font-mono transition-all group/item"
                  >
                    <span className="text-primary font-bold group-hover/item:text-purple-300">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-primary-muted flex items-center gap-1">
                      <span>{p.role}</span>
                      <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Branch 3: HARDWARE */}
          <div
            className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
              activeBranch === "all" || activeBranch === "hardware"
                ? "bg-surface/90 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                : "bg-surface/30 border-border-subtle opacity-40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-border-subtle/60 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-extrabold text-lg text-primary">
                    HARDWARE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">
                  BRANCH // 03
                </span>
              </div>

              <p className="font-mono text-xs text-primary-muted leading-relaxed mb-3">
                ESP32 and Arduino microcontrollers, I2S audio pipelines, optical fingerprint scanners, and relays.
              </p>

              {/* Technologies Array */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {hardwareTech.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle border border-emerald-500/20 text-emerald-200/90 hover:border-emerald-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Shipped Projects connected to this branch */}
            <div className="mt-4 pt-3 border-t border-border-subtle/60">
              <span className="font-mono text-[10px] text-primary-muted/70 uppercase tracking-wider block mb-2">
                Connected Projects:
              </span>
              <div className="space-y-1.5">
                {branchProjects.hardware.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    className="flex items-center justify-between p-2 rounded bg-surface-subtle hover:bg-emerald-500/10 border border-border-subtle hover:border-emerald-500/40 text-xs font-mono transition-all group/item"
                  >
                    <span className="text-primary font-bold group-hover/item:text-emerald-300">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-primary-muted flex items-center gap-1">
                      <span>{p.role}</span>
                      <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stage 4: The Core Convergence Statement */}
        <div className="relative mt-8 pt-8 border-t border-border-subtle flex flex-col items-center text-center">
          {/* Animated Converging Signal Graphic */}
          <div className="w-full max-w-lg mx-auto flex items-center justify-between text-xs font-mono text-primary-muted mb-3 px-4">
            <span className="text-cyan-400">SOFTWARE</span>
            <span className="text-accent">───►</span>
            <span className="text-purple-400">AI</span>
            <span className="text-accent">◄───</span>
            <span className="text-emerald-400">HARDWARE</span>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-accent/10 to-emerald-950/30 border-2 border-accent/40 shadow-[0_0_35px_rgba(168,255,120,0.18)] max-w-2xl w-full">
            <div className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold mb-1 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>THE CONVERGENCE NODE</span>
            </div>
            <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight uppercase mt-1">
              I BUILD THINGS TO SEE IF I CAN.
            </div>
            <p className="font-mono text-xs sm:text-sm text-primary-muted max-w-lg mx-auto mt-2 leading-relaxed">
              Software creates the brain and interface. AI gives it natural comprehension. Hardware gives it physical presence in the real world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
