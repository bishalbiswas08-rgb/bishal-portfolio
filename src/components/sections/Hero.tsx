"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  Cpu,
  Terminal as TerminalIcon,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { developer } = portfolioData;

  const currentStack = [
    "Next.js",
    "ESP32",
    "Python",
    "Whisper AI",
    "Supabase",
    "Arduino",
    "C/C++",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background workbench grid accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] select-none"
        style={{
          backgroundImage: `radial-gradient(circle, #A8FF78 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between flex-1">
        {/* Top: Personal Status & Casual Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle text-xs font-mono">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-primary-muted">
              building random stuff
            </span>
            <span className="text-border-strong hidden xs:inline">•</span>
            <span className="text-accent hidden xs:inline">occasionally breaks things</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-primary-muted/80">
            <span className="text-primary font-medium">{developer.name}</span>
            <span className="text-border-strong">•</span>
            <span className="text-primary-muted">student who likes making things</span>
          </div>
        </motion.div>

        {/* Hero Main: Split 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-2 sm:py-4">
          {/* Left Column: Bold Human Headline & Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small casual intro tag */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-xs font-mono text-accent mb-3 sm:mb-4"
            >
              <Zap className="w-3.5 h-3.5 shrink-0" />
              <span>curiosity &amp; late-night experiments</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-primary leading-[1.02] break-words"
              >
                I BUILD THINGS
              </motion.h1>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-emerald-300 leading-[1.02] break-words"
              >
                JUST TO SEE IF I CAN.
              </motion.h1>
            </div>

            {/* Subtitle / Human Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-5 sm:mt-8 max-w-xl space-y-3"
            >
              <p className="text-base sm:text-xl text-primary font-normal leading-relaxed">
                Software, AI, hardware, electronics — I&apos;ll probably try building it if the idea sounds fun enough.
              </p>
              <p className="text-xs sm:text-sm text-primary-muted font-light leading-relaxed">
                I learn mostly by wiring circuits on breadboards, writing Next.js apps, breaking things, fixing them, and getting another idea at 2AM.
              </p>
            </motion.div>

            {/* Currently Messing With Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-6 sm:mt-7 flex flex-wrap items-center gap-1.5 sm:gap-2"
            >
              <span className="text-[11px] font-mono text-primary-muted/70 mr-1">
                currently messing with:
              </span>
              {currentStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface border border-border-subtle text-primary-muted hover:border-accent/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Actions: Human CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease: "easeOut" }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-bg font-heading font-bold text-sm tracking-tight hover:bg-accent-hover transition-all duration-200 shadow-[0_0_24px_rgba(168,255,120,0.2)] focus-visible:outline-accent min-h-[48px]"
              >
                <span>SEE WHAT I&apos;VE MADE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-border-subtle hover:border-accent/40 text-primary font-heading font-semibold text-sm tracking-tight transition-all duration-200 focus-visible:outline-accent min-h-[48px]"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </a>

              <span className="text-[11px] font-mono text-primary-muted/50 hidden xl:inline ml-2">
                // powered by curiosity + questionable ideas
              </span>
            </motion.div>
          </div>

          {/* Right Column: Tactile "Developer's Workbench" Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            {/* The Workbench Card */}
            <div className="relative rounded-2xl bg-surface/90 border border-border-subtle/80 p-5 sm:p-6 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.5)] space-y-4 overflow-hidden">
              {/* Subtle top bar resembling a test rig header */}
              <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3 text-xs font-mono text-primary-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/80 animate-pulse" />
                  <span className="text-primary font-medium">BISHAL&apos;S WORKBENCH</span>
                </div>
                <span className="text-[10px] text-accent/80 font-mono">DESK // EXPERIMENTS</span>
              </div>

              {/* Workbench Item 1: Late-Night Idea Sticky Note */}
              <div className="p-3.5 rounded-xl bg-surface-subtle border border-accent/25 relative overflow-hidden group">
                <div className="flex items-center justify-between text-[11px] font-mono text-accent mb-1.5">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>2AM Experiment Idea</span>
                  </span>
                  <span className="text-[10px] text-primary-muted">EDEN.ino</span>
                </div>
                <p className="text-xs sm:text-sm text-primary leading-relaxed font-sans">
                  &ldquo;What if I wire an ESP32 to a digital mic and make it speak back using local AI instead of buying a commercial speaker?&rdquo;
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>status: yes, this actually works now</span>
                </div>
              </div>

              {/* Workbench Item 2: Physical Schematic Pinout Fragment */}
              <div className="p-3.5 rounded-xl bg-surface-subtle border border-border-subtle font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[10px] text-primary-muted/70 uppercase tracking-wider">
                  <span>Hardware Trace</span>
                  <span>ESP32-WROOM-32</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-surface border border-border-subtle/50 flex flex-col">
                    <span className="text-accent font-semibold">INMP441 Mic</span>
                    <span className="text-primary-muted text-[10px]">GPIO 26 / 25 / 33</span>
                  </div>
                  <div className="p-2 rounded bg-surface border border-border-subtle/50 flex flex-col">
                    <span className="text-accent font-semibold">MAX98357A DAC</span>
                    <span className="text-primary-muted text-[10px]">GPIO 14 / 27 / 22</span>
                  </div>
                </div>
              </div>

              {/* Workbench Item 3: Live Code / Terminal snippet */}
              <div className="p-3 rounded-xl bg-[#090B0F] border border-border-subtle font-mono text-[11px] space-y-1 text-primary-muted">
                <div className="text-[10px] text-primary-muted/50 pb-1 border-b border-border-subtle/40 flex justify-between">
                  <span>bash — live log</span>
                  <span className="text-accent">HTTP 200 OK</span>
                </div>
                <p className="text-primary">
                  <span className="text-accent">$</span> attender --scan classroom_04
                </p>
                <p className="text-emerald-400/90 text-[10px]">
                  ✓ Gemini Vision: 32 frontal faces recognized
                </p>
                <p className="text-sky-400/90 text-[10px]">
                  ✓ Supabase RLS: attendance recorded in 4.2s
                </p>
              </div>

              {/* Floating playful stamp */}
              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-primary-muted">
                <span className="text-[10px]">if it can be automated, I&apos;ll probably try</span>
                <span className="text-accent">☕ 100% genuine code</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Subtle Scroll Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="pt-8 sm:pt-12 flex items-center justify-between text-xs font-mono text-primary-muted"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 hover:text-accent transition-colors py-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            <span className="text-[11px] sm:text-xs">scroll down to see the stuff</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <div className="hidden sm:block text-[11px] text-primary-muted/60 font-mono">
            Bishal Biswas • student, builder, experimenter
          </div>
        </motion.div>
      </div>
    </section>
  );
}
