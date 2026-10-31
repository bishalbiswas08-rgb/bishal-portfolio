"use client";

import React, { useState, useEffect } from "react";
import {
  Lightbulb,
  Wrench,
  Hammer,
  AlertTriangle,
  HelpCircle,
  Bug,
  CheckCircle,
  GraduationCap,
  RotateCw,
  RefreshCw,
  Zap,
} from "lucide-react";
import Decal from "@/components/ui/Decal";

export default function BuildLoop() {
  const [activeStep, setActiveStep] = useState(0);
  const [isBugged, setIsBugged] = useState(false);
  const [bugPhase, setBugPhase] = useState<"idle" | "error" | "debugging" | "fixed">("idle");

  const steps = [
    { title: "IDEA", icon: Lightbulb, note: "2AM random spark", desc: "What if I build a voice assistant or smart lock?" },
    { title: "PROTOTYPE", icon: Wrench, note: "Breadboard setup", desc: "Jumper wires, breadboard, quick Python script." },
    { title: "BUILD", icon: Hammer, note: "Writing real code", desc: "Next.js frontend, Supabase relations, C++ firmware." },
    { title: "BREAK", icon: AlertTriangle, note: "Unexpected fail", desc: "Stack overflow, hardware brownout, or null pointer." },
    { title: "WHY DOESN'T THIS WORK?", icon: HelpCircle, note: "The mystery", desc: "Staring at oscilloscope traces and console logs." },
    { title: "DEBUG", icon: Bug, note: "Finding the root cause", desc: "It was a missing pull-up resistor or wrong CORS header." },
    { title: "FIX", icon: CheckCircle, note: "Patch applied", desc: "git commit -m 'do not touch, it finally works'." },
    { title: "LEARN", icon: GraduationCap, note: "Knowledge gained", desc: "Now I understand how the I2S timing or RLS policy works." },
    { title: "BUILD AGAIN", icon: RotateCw, note: "Next iteration", desc: "Now do it better, cleaner, and faster." },
  ];

  // Continuous subtle loop progression
  useEffect(() => {
    if (isBugged) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isBugged, steps.length]);

  // Trigger playful bug simulation
  const triggerBugSimulation = () => {
    setIsBugged(true);
    setActiveStep(3); // Jump to "BREAK"
    setBugPhase("error");

    setTimeout(() => {
      setBugPhase("debugging");
      setActiveStep(5); // Jump to "DEBUG"
    }, 1200);

    setTimeout(() => {
      setBugPhase("fixed");
      setActiveStep(6); // Jump to "FIX"
    }, 2400);

    setTimeout(() => {
      setBugPhase("idle");
      setIsBugged(false);
      setActiveStep(7); // Continue to "LEARN"
    }, 3600);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-border-subtle p-4 sm:p-6 md:p-8 overflow-hidden select-none">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#A8FF78_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border-subtle/80 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold">
            <span>03 // THE BUILD LOOP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="text-primary-muted font-normal">Continuous Feedback Engine</span>
          </div>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-primary mt-1">
            How I Actually Build (And Fix) Things
          </h3>
        </div>

        {/* Playful Interactive Bug Trigger */}
        <button
          onClick={triggerBugSimulation}
          disabled={isBugged}
          className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 border self-start sm:self-auto ${
            isBugged
              ? "bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse"
              : "bg-surface-elevated text-primary-muted hover:text-accent border-border-subtle hover:border-accent"
          }`}
        >
          <Bug className="w-3.5 h-3.5 text-accent" />
          <span>
            {bugPhase === "error"
              ? "⚠ BUG TRIGGERED: BUFFER OVERFLOW"
              : bugPhase === "debugging"
              ? "DEBUGGING (CHECKING SCHEMATICS)..."
              : bugPhase === "fixed"
              ? "FIXED ✓ RESUMING LOOP"
              : "Simulate 2AM Bug"}
          </span>
        </button>
      </div>

      {/* Visual Endless Circuit Grid */}
      <div className="relative z-10 py-6 sm:py-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-2.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isErrorNode = isBugged && (bugPhase === "error" || bugPhase === "debugging") && (idx === 3 || idx === 4);
            const isFixedNode = isBugged && bugPhase === "fixed" && idx === 6;

            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[140px] relative overflow-hidden group focus-visible:outline-accent ${
                  isErrorNode
                    ? "bg-red-500/10 border-red-500 text-red-200 ring-1 ring-red-500 animate-pulse"
                    : isFixedNode
                    ? "bg-emerald-500/15 border-emerald-400 text-emerald-200 ring-1 ring-emerald-400"
                    : isActive
                    ? "bg-accent/10 border-accent text-primary ring-1 ring-accent shadow-[0_0_20px_rgba(168,255,120,0.15)]"
                    : "bg-surface/70 border-border-subtle/80 text-primary-muted hover:border-primary-muted/50 hover:bg-surface"
                }`}
              >
                {/* Active indicator top bar */}
                <div className="flex items-center justify-between w-full mb-2">
                  <div
                    className={`p-1.5 rounded-lg border transition-colors ${
                      isErrorNode
                        ? "bg-red-500/20 border-red-500/50 text-red-400"
                        : isActive
                        ? "bg-accent text-[#050807] border-accent"
                        : "bg-surface-subtle border-border-subtle text-primary-muted"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] text-primary-muted/60">
                    0{idx + 1}
                  </span>
                </div>

                {/* Step title & note */}
                <div>
                  <div
                    className={`font-heading font-extrabold text-xs sm:text-[13px] tracking-tight leading-tight ${
                      isErrorNode
                        ? "text-red-300"
                        : isActive
                        ? "text-accent"
                        : "text-primary group-hover:text-neutral-100"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="font-mono text-[9px] text-primary-muted/70 mt-1 truncate">
                    {step.note}
                  </div>
                </div>

                {/* Subtitle / micro text */}
                <p className="text-[10px] text-primary-muted/60 mt-1 leading-snug font-sans line-clamp-2">
                  {step.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Bottom Endless Connection Indicator */}
        <div className="pt-4 border-t border-border-subtle/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-primary-muted">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: "8s" }} />
            <span className="text-primary font-semibold">Continuous Build Loop:</span>
            <span>Step 09 connects directly back to Step 01</span>
          </div>

          <div className="flex items-center gap-2 text-primary-muted/70">
            <span>&ldquo;This was supposed to be a small weekend project.&rdquo;</span>
            <span className="text-accent font-bold">— It never is.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
