"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Cpu,
  Code2,
  Mic,
  Database,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Volume2,
  Terminal,
} from "lucide-react";
import Decal from "@/components/ui/Decal";

const totalScenes = 7;
const sceneDurations = [3500, 3600, 3600, 4000, 3500, 3500, 4000];

export default function LandingMotionFilm() {
  const shouldReduceMotion = useReducedMotion();
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer to only play when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scene timing cycle
  useEffect(() => {
    if (!isPlaying || !isInView || shouldReduceMotion) return;

    const duration = sceneDurations[currentScene] || 3500;
    const timer = setTimeout(() => {
      setCurrentScene((prev) => (prev + 1) % totalScenes);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying, isInView, shouldReduceMotion]);

  const sceneLabels = [
    "01 // THE IDEA",
    "02 // BUILDING",
    "03 // THREE STREAMS",
    "04 // REAL PROJECTS",
    "05 // SOMETHING BREAKS",
    "06 // THE PHILOSOPHY",
    "07 // IDENTITY",
  ];

  // Static fallback for reduced motion
  if (shouldReduceMotion) {
    return (
      <section className="py-12 sm:py-16 border-t border-border-subtle bg-[#08090d] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-10 rounded-2xl bg-surface border border-border-subtle space-y-4">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              CINEMATIC IDENTITY FILM
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-primary uppercase">
              BISHAL BISWAS
            </h2>
            <p className="font-mono text-sm sm:text-base text-accent">
              SOFTWARE • AI • HARDWARE
            </p>
            <p className="text-sm sm:text-base text-primary-muted font-light max-w-lg mx-auto">
              I build things to see if I can. From ESP32 hardware voice assistants to full-stack Next.js platforms.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 md:py-20 border-t border-border-subtle relative overflow-hidden bg-[#07080c]"
      aria-label="Motion Graphic Title Sequence"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic Film Viewport Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-border-subtle/80 bg-[#090b11] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.85)] min-h-[460px] sm:min-h-[520px] md:min-h-[560px] flex flex-col justify-between p-4 sm:p-8 md:p-10 select-none">
          {/* Subtle blueprint background grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168, 255, 120, 0.4) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Top Bar: Scene Indicator, Film Progress, Playback Controls */}
          <div className="relative z-20 flex items-center justify-between border-b border-border-subtle/60 pb-3 sm:pb-4 gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-primary font-bold uppercase tracking-wider">
                {sceneLabels[currentScene]}
              </span>
            </div>

            {/* Scene Scrub Dots */}
            <div className="hidden md:flex items-center gap-1.5">
              {sceneLabels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentScene(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentScene
                      ? "w-6 bg-accent"
                      : "w-2 bg-border-strong hover:bg-primary-muted/50"
                  }`}
                  aria-label={`Jump to scene ${idx + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause & Replay Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-subtle border border-border-subtle text-primary-muted hover:text-accent hover:border-accent/40 transition-colors active:scale-95"
                title={isPlaying ? "Pause Sequence" : "Play Sequence"}
                aria-label={isPlaying ? "Pause Sequence" : "Play Sequence"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => {
                  setCurrentScene(0);
                  setIsPlaying(true);
                }}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-subtle border border-border-subtle text-primary-muted hover:text-accent hover:border-accent/40 transition-colors active:scale-95"
                title="Replay from Scene 01"
                aria-label="Replay from Scene 01"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Central Cinematic Stage */}
          <div className="relative z-10 my-auto py-8 sm:py-12 flex items-center justify-center min-h-[300px] sm:min-h-[340px]">
            <AnimatePresence mode="wait">
              {/* =========================================================================
               * SCENE 01 — THE IDEA
               * ========================================================================= */}
              {currentScene === 0 && (
                <motion.div
                  key="scene-1"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 max-w-2xl px-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest"
                  >
                    <span>IDEA // 001</span>
                    <span className="text-border-strong">•</span>
                    <span className="text-primary-muted">2:14 AM SPARK</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="font-mono text-4xl sm:text-5xl text-accent font-black tracking-widest my-2"
                  >
                    ???
                  </motion.div>

                  {/* Animated Sketch Blueprint Vector */}
                  <div className="relative w-48 sm:w-64 h-16 sm:h-20 mx-auto my-3">
                    <svg viewBox="0 0 240 80" className="w-full h-full stroke-accent fill-none stroke-[2]">
                      <motion.path
                        d="M 10 40 L 60 40 L 90 15 L 150 15 L 180 65 L 230 40"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                      />
                      <motion.circle
                        cx="90"
                        cy="15"
                        r="3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="fill-accent"
                      />
                      <motion.circle
                        cx="180"
                        cy="65"
                        r="3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="fill-accent"
                      />
                    </svg>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-primary uppercase tracking-tight"
                  >
                    I HAD AN IDEA.
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="font-mono text-xs sm:text-sm text-primary-muted max-w-md mx-auto"
                  >
                    A rough sketch on scrap paper: &ldquo;What if I wire this up?&rdquo;
                  </motion.p>
                </motion.div>
              )}

              {/* =========================================================================
               * SCENE 02 — BUILDING (ASSEMBLY)
               * ========================================================================= */}
              {currentScene === 1 && (
                <motion.div
                  key="scene-2"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 max-w-3xl px-2 w-full"
                >
                  <div className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest">
                    SYSTEM // HARDWARE &amp; CODE ASSEMBLY
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-4xl text-primary tracking-tight uppercase">
                    THE SKETCH BECOMES HARDWARE &amp; CODE
                  </h3>

                  {/* Motion Component Grid Assembling */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl mx-auto pt-3">
                    {[
                      { icon: Cpu, label: "ESP32", tag: "Microcontroller" },
                      { icon: Mic, label: "INMP441 MIC", tag: "I2S Audio" },
                      { icon: Code2, label: "NEXT.JS API", tag: "REST Endpoints" },
                      { icon: Database, label: "SUPABASE", tag: "PostgreSQL" },
                      { icon: Sparkles, label: "LOCAL AI", tag: "Whisper STT" },
                      { icon: Volume2, label: "MAX98357A", tag: "DAC Speaker" },
                      { icon: Zap, label: "RELAYS", tag: "Energy Cutoff" },
                      { icon: Terminal, label: "UI PANELS", tag: "Real-time State" },
                    ].map((comp, idx) => {
                      const Icon = comp.icon;
                      return (
                        <motion.div
                          key={comp.label}
                          initial={{ opacity: 0, y: 15, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.08 * idx, duration: 0.4 }}
                          className="p-3 rounded-xl bg-surface border border-border-subtle/80 flex flex-col items-center justify-center text-center group hover:border-accent/40"
                        >
                          <Icon className="w-5 h-5 text-accent mb-1.5" />
                          <span className="font-heading font-bold text-xs sm:text-sm text-primary">
                            {comp.label}
                          </span>
                          <span className="font-mono text-[9px] text-primary-muted mt-0.5">
                            {comp.tag}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* =========================================================================
               * SCENE 03 — SOFTWARE + AI + HARDWARE (3 INDEPENDENT STREAMS)
               * ========================================================================= */}
              {currentScene === 2 && (
                <motion.div
                  key="scene-3"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 max-w-4xl w-full px-2"
                >
                  <div className="text-center">
                    <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest">
                      SYNCHRONIZED ARCHITECTURE
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-4xl text-primary tracking-tight uppercase mt-1">
                      THREE STREAMS ACTING TOGETHER
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {/* Stream 1: SOFTWARE */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="p-4 rounded-xl bg-surface border border-cyan-500/30 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-2">
                          <Code2 className="w-4 h-4" />
                          <span>SOFTWARE STREAM</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs text-cyan-200/90">
                          <div className="p-1.5 rounded bg-cyan-950/30 border border-cyan-500/20">Code Blocks [ { } ]</div>
                          <div className="p-1.5 rounded bg-cyan-950/30 border border-cyan-500/20">Next.js App Router</div>
                          <div className="p-1.5 rounded bg-cyan-950/30 border border-cyan-500/20">PostgreSQL Schema</div>
                        </div>
                      </div>
                      <div className="mt-3 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                        <span>DATA PIPELINE</span>
                        <span>→ UI</span>
                      </div>
                    </motion.div>

                    {/* Stream 2: AI */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="p-4 rounded-xl bg-surface border border-purple-500/30 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase mb-2">
                          <Sparkles className="w-4 h-4" />
                          <span>AI STREAM</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs text-purple-200/90">
                          <div className="p-1.5 rounded bg-purple-950/30 border border-purple-500/20">Sine Waveform ∿∿∿</div>
                          <div className="p-1.5 rounded bg-purple-950/30 border border-purple-500/20">Local Whisper STT</div>
                          <div className="p-1.5 rounded bg-purple-950/30 border border-purple-500/20">LLM Response Gen</div>
                        </div>
                      </div>
                      <div className="mt-3 text-[10px] font-mono text-purple-400 flex items-center justify-between">
                        <span>AUDIO IN</span>
                        <span>→ SYNTHESIS</span>
                      </div>
                    </motion.div>

                    {/* Stream 3: HARDWARE */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="p-4 rounded-xl bg-surface border border-emerald-500/30 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-2">
                          <Cpu className="w-4 h-4" />
                          <span>HARDWARE STREAM</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs text-emerald-200/90">
                          <div className="p-1.5 rounded bg-emerald-950/30 border border-emerald-500/20">Circuit Traces</div>
                          <div className="p-1.5 rounded bg-emerald-950/30 border border-emerald-500/20">ESP32 Pinout Bus</div>
                          <div className="p-1.5 rounded bg-emerald-950/30 border border-emerald-500/20">Relay &amp; Sensors</div>
                        </div>
                      </div>
                      <div className="mt-3 text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                        <span>BREADBOARD</span>
                        <span>→ ACTUATION</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* =========================================================================
               * SCENE 04 — REAL PROJECTS COLLISION
               * ========================================================================= */}
              {currentScene === 3 && (
                <motion.div
                  key="scene-4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 max-w-3xl w-full px-2 text-center"
                >
                  <div className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest">
                    TRANSFORMATION // REAL WORK
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-4xl text-primary tracking-tight uppercase">
                    STREAMS COLLIDE INTO REAL BUILDS
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-left">
                    <div className="p-4 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between group hover:border-accent/40">
                      <div>
                        <span className="font-mono text-[10px] text-accent uppercase">AI Signal → Voice</span>
                        <div className="font-heading font-black text-xl text-primary mt-1">EDEN</div>
                        <p className="font-mono text-xs text-primary-muted mt-1">
                          Microphone → Local AI Loop → Spoken Audio
                        </p>
                      </div>
                      <span className="inline-block mt-3 font-mono text-[10px] text-accent">ESP32 + Whisper + Flask</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between group hover:border-accent/40">
                      <div>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase">Database → Platform</span>
                        <div className="font-heading font-black text-xl text-primary mt-1">ATTENDER</div>
                        <p className="font-mono text-xs text-primary-muted mt-1">
                          60s Classroom Scan → Supabase Auth → Gemini Query
                        </p>
                      </div>
                      <span className="inline-block mt-3 font-mono text-[10px] text-cyan-300">Next.js + Postgres</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between group hover:border-accent/40">
                      <div>
                        <span className="font-mono text-[10px] text-purple-400 uppercase">Search → Culinary AI</span>
                        <div className="font-heading font-black text-xl text-primary mt-1">CraveAI</div>
                        <p className="font-mono text-xs text-primary-muted mt-1">
                          Pantry Ingredients → Vector Search → Meal Steps
                        </p>
                      </div>
                      <span className="inline-block mt-3 font-mono text-[10px] text-purple-300">Next.js + AI Models</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between group hover:border-accent/40">
                      <div>
                        <span className="font-mono text-[10px] text-emerald-400 uppercase">Sensor → Energy Cutoff</span>
                        <div className="font-heading font-black text-xl text-primary mt-1">SmartShut</div>
                        <p className="font-mono text-xs text-primary-muted mt-1">
                          Fingerprint + PIR Motion → Relay State Machine
                        </p>
                      </div>
                      <span className="inline-block mt-3 font-mono text-[10px] text-emerald-300">ESP32 + Optocoupler</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* =========================================================================
               * SCENE 05 — SOMETHING BREAKS (ERROR → DEBUG → FIXED)
               * ========================================================================= */}
              {currentScene === 4 && (
                <motion.div
                  key="scene-5"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 max-w-xl px-2 w-full"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: [1, 1.04, 1], opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-5 sm:p-7 rounded-2xl bg-red-500/10 border-2 border-red-500/50 shadow-[0_0_35px_rgba(239,68,68,0.2)] space-y-3"
                  >
                    <div className="flex items-center justify-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-widest">
                      <AlertTriangle className="w-4 h-4 animate-bounce" />
                      <span>SYSTEM EXCEPTION // 0xDEADBEEF</span>
                    </div>

                    <div className="font-heading font-black text-2xl sm:text-3xl text-red-300 tracking-tight">
                      ERROR: SIGNAL DISCONNECTED.
                    </div>

                    <p className="font-mono text-xs text-red-200/80">
                      ...well, that was unexpected.
                    </p>

                    <div className="pt-2 border-t border-red-500/30 flex items-center justify-between text-[11px] font-mono text-primary-muted">
                      <span className="text-amber-300">DEBUGGING TRACES...</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        FIXED.
                      </span>
                    </div>
                  </motion.div>

                  <p className="font-mono text-xs text-primary-muted">
                    Breaking things is literally the fastest way to learn how they work.
                  </p>
                </motion.div>
              )}

              {/* =========================================================================
               * SCENE 06 — THE PHILOSOPHY (KINETIC TYPOGRAPHY)
               * ========================================================================= */}
              {currentScene === 5 && (
                <motion.div
                  key="scene-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 max-w-2xl px-2 w-full"
                >
                  <span className="font-mono text-xs text-accent uppercase tracking-widest">
                    THE BUILD CYCLE
                  </span>

                  {/* Kinetic Bold Loop Sequence */}
                  <div className="space-y-1.5 py-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="font-heading font-black text-3xl sm:text-5xl text-primary tracking-tight"
                    >
                      BUILD.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-heading font-black text-3xl sm:text-5xl text-red-400 tracking-tight"
                    >
                      BREAK.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="font-heading font-black text-3xl sm:text-5xl text-accent tracking-tight"
                    >
                      FIX.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="font-heading font-black text-3xl sm:text-5xl text-cyan-400 tracking-tight"
                    >
                      LEARN.
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 }}
                      className="font-heading font-black text-4xl sm:text-6xl text-primary tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-300 to-emerald-400 pt-2"
                    >
                      BUILD AGAIN.
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* =========================================================================
               * SCENE 07 — FINAL IDENTITY LOCKUP
               * ========================================================================= */}
              {currentScene === 6 && (
                <motion.div
                  key="scene-7"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 max-w-2xl px-2 w-full"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent max-w-sm mx-auto my-2"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-primary tracking-tight uppercase"
                  >
                    BISHAL BISWAS
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-mono text-sm sm:text-base text-accent font-semibold uppercase tracking-widest"
                  >
                    SOFTWARE • AI • HARDWARE
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="font-heading font-extrabold text-lg sm:text-2xl text-primary-muted max-w-lg mx-auto pt-2"
                  >
                    &ldquo;I BUILD THINGS TO SEE IF I CAN.&rdquo;
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Quick Replay Cue & Tag */}
          <div className="relative z-20 flex items-center justify-between border-t border-border-subtle/60 pt-3 text-xs font-mono text-primary-muted/70">
            <div className="flex items-center gap-2">
              <span className="text-accent">#</span>
              <span>CINEMATIC SEQUENCE // 15–25S</span>
            </div>
            <button
              onClick={() => {
                setCurrentScene((prev) => (prev + 1) % totalScenes);
              }}
              className="text-accent hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Next Scene →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
