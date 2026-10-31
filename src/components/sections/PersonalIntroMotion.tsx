"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Play,
  Pause,
  RotateCcw,
  ArrowDown,
  Layers,
  Sparkles,
  Radio,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function PersonalIntroMotion() {
  const { cinematicIntro } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalScenes = 5;
  const sceneDurationMs = 2800;

  // Intersection Observer to only cycle when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || !isInView || shouldReduceMotion) return;

    const timer = setTimeout(() => {
      setCurrentScene((prev) => (prev + 1) % totalScenes);
    }, sceneDurationMs);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying, isInView, shouldReduceMotion]);

  const sceneTitles = [
    "WHO I AM",
    "WHAT I BUILD",
    "MY TOOLBOX",
    "REAL PROJECTS",
    "WHY I BUILD",
  ];

  // If user has reduced motion enabled, render an elegant static editorial sequence
  if (shouldReduceMotion) {
    return (
      <section className="py-16 sm:py-20 border-t border-border-subtle bg-surface-subtle relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-12 rounded-2xl bg-surface border border-border-subtle space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3 text-xs font-mono text-primary-muted">
              <span>Bishal Biswas — builder</span>
              <span className="text-accent">{cinematicIntro.scene1.name}</span>
            </div>

            <div>
              <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-primary uppercase break-words">
                {cinematicIntro.scene1.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-mono text-accent">
                {cinematicIntro.scene1.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-border-subtle">
              {cinematicIntro.scene2.pillars.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-surface-subtle border border-border-subtle">
                  <div className="font-heading font-bold text-accent text-base sm:text-lg mb-1">{p.label}</div>
                  <div className="text-xs text-primary-muted font-light">{p.description}</div>
                </div>
              ))}
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-accent-muted/20 border border-accent-border text-center">
              <blockquote className="font-heading font-black text-lg sm:text-2xl text-primary break-words">
                &ldquo;{cinematicIntro.scene5.statement}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-20 md:py-24 border-t border-border-subtle relative overflow-hidden bg-background"
      aria-label="Cinematic Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic Viewport Container */}
        <div className="relative rounded-xl sm:rounded-3xl border border-border-subtle bg-[#0B0D12] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] min-h-[420px] sm:min-h-[500px] flex flex-col justify-between p-4 sm:p-8 md:p-10">
          {/* Subtle Background Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244, 245, 247, 0.12) 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Subtle Corner Labels */}
          <div className="hidden md:block absolute top-4 left-4 text-primary-muted/40 font-mono text-[10px] select-none pointer-events-none">
            Bishal Biswas
          </div>
          <div className="hidden md:block absolute top-4 right-4 text-primary-muted/40 font-mono text-[10px] select-none pointer-events-none">
            curious builder
          </div>
          <div className="hidden md:block absolute bottom-4 left-4 text-primary-muted/40 font-mono text-[10px] select-none pointer-events-none">
            software + hardware + ai
          </div>
          <div className="hidden md:block absolute bottom-4 right-4 text-primary-muted/40 font-mono text-[10px] select-none pointer-events-none">
            desk experiments
          </div>

          {/* Top Bar: Scene Indicator & Controls */}
          <div className="relative z-10 flex items-center justify-between gap-3 border-b border-border-subtle/60 pb-3 sm:pb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-primary-muted uppercase tracking-wider">
                {sceneTitles[currentScene]}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-accent">
              <span>{cinematicIntro.scene1.telemetry}</span>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-md hover:bg-surface border border-border-subtle text-primary-muted hover:text-accent transition-colors active:scale-95"
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
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-md hover:bg-surface border border-border-subtle text-primary-muted hover:text-accent transition-colors active:scale-95"
                title="Replay from Scene 01"
                aria-label="Replay from Scene 01"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Central Cinematic Stage */}
          <div className="relative z-10 my-auto py-6 sm:py-10 flex items-center justify-center min-h-[240px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              {/* SCENE 01 — IDENTITY */}
              {currentScene === 0 && (
                <motion.div
                  key="scene-1"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-3 sm:space-y-4 max-w-3xl px-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/5 font-mono text-[9px] sm:text-xs text-accent uppercase tracking-widest"
                  >
                    <span>STUDENT DEVELOPER • BUILDER</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, letterSpacing: "0.15em", filter: "blur(4px)" }}
                    animate={{ opacity: 1, letterSpacing: "-0.04em", filter: "blur(0px)" }}
                    transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading font-black text-3xl sm:text-5xl md:text-7xl text-primary tracking-tight sm:tracking-tighter uppercase leading-[1.0] sm:leading-[0.95] break-words"
                  >
                    {cinematicIntro.scene1.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="font-mono text-[11px] sm:text-sm text-primary-muted tracking-wider uppercase max-w-md mx-auto"
                  >
                    {cinematicIntro.scene1.tagline}
                  </motion.p>
                </motion.div>
              )}

              {/* SCENE 02 — WHAT I BUILD */}
              {currentScene === 1 && (
                <motion.div
                  key="scene-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-4xl space-y-4 sm:space-y-6"
                >
                  <div className="text-center font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest">
                    WHAT I BUILD
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
                    {cinematicIntro.scene2.pillars.map((pillar, i) => (
                      <motion.div
                        key={pillar.id}
                        initial={{ opacity: 0, y: 15, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.12 * (i + 1), duration: 0.45 }}
                        className="p-3.5 sm:p-5 rounded-xl bg-surface/80 border border-border-subtle flex flex-col justify-between group hover:border-accent/40 transition-colors"
                      >
                        <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-border-subtle/50">
                          <span className="font-mono text-[10px] text-accent">0{i + 1}</span>
                          {pillar.id === "software" && <Layers className="w-3.5 h-3.5 text-accent" />}
                          {pillar.id === "ai" && <Sparkles className="w-3.5 h-3.5 text-accent" />}
                          {pillar.id === "hardware" && <Radio className="w-3.5 h-3.5 text-accent" />}
                        </div>

                        <div className="font-heading font-black text-xl sm:text-2xl text-primary tracking-tight my-1">
                          {pillar.label}
                        </div>

                        <p className="text-[11px] sm:text-xs text-primary-muted font-light leading-relaxed">
                          {pillar.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="text-center font-mono text-[11px] sm:text-xs text-primary font-medium"
                  >
                    &mdash; {cinematicIntro.scene2.connector} &mdash;
                  </motion.div>
                </motion.div>
              )}

              {/* SCENE 03 — TECHNOLOGY / STACK */}
              {currentScene === 2 && (
                <motion.div
                  key="scene-3"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-3xl text-center space-y-4 sm:space-y-6 px-2"
                >
                  <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent">
                    SOFTWARE + HARDWARE + AI
                  </div>

                  <h4 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl text-primary tracking-tight break-words">
                    I like building across the stack.
                  </h4>

                  {/* Real Toolchain Nodes Grid */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-xl mx-auto pt-1 sm:pt-2">
                    {cinematicIntro.scene3.nodes.map((node, i) => (
                      <motion.span
                        key={node}
                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.06 * i, duration: 0.35 }}
                        className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg font-mono text-[10px] sm:text-xs bg-surface border border-border-subtle text-primary hover:border-accent/40 transition-colors shadow-sm shrink-0"
                      >
                        <span className="text-accent mr-1.5">•</span>
                        {node}
                      </motion.span>
                    ))}
                  </div>

                  <p className="font-mono text-[11px] sm:text-xs text-primary-muted max-w-md mx-auto pt-1 sm:pt-2 leading-relaxed">
                    {cinematicIntro.scene3.convergenceText}
                  </p>
                </motion.div>
              )}

              {/* SCENE 04 — RECENT BUILDS */}
              {currentScene === 3 && (
                <motion.div
                  key="scene-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-4xl space-y-4 sm:space-y-6 text-center"
                >
                  <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent">
                    RECENT BUILDS &amp; EXPERIMENTS
                  </div>

                  {/* 4 Real Project Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {cinematicIntro.scene4.projects.map((proj, i) => (
                      <motion.div
                        key={proj.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className="p-3 sm:p-4 rounded-xl bg-surface border border-border-subtle text-left space-y-1 hover:border-accent/40 transition-colors"
                      >
                        <div className="font-mono text-[9px] sm:text-[10px] text-accent">PRJ_0{i + 1}</div>
                        <div className="font-heading font-bold text-sm sm:text-base md:text-lg text-primary truncate">
                          {proj.name}
                        </div>
                        <div className="font-mono text-[10px] sm:text-[11px] text-primary-muted truncate">
                          {proj.tag}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="font-mono text-[11px] sm:text-sm text-primary font-medium pt-1 sm:pt-2"
                  >
                    &ldquo;{cinematicIntro.scene4.ethos}&rdquo;
                  </motion.p>
                </motion.div>
              )}

              {/* SCENE 05 — PERSONAL STATEMENT */}
              {currentScene === 4 && (
                <motion.div
                  key="scene-5"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 sm:space-y-6 max-w-3xl px-2 py-2"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent"
                  >
                    PERSONAL ETHOS
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-primary uppercase tracking-tight leading-[1.1] break-words"
                  >
                    &ldquo;{cinematicIntro.scene5.statement}&rdquo;
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="font-mono text-xs sm:text-sm text-primary-muted max-w-lg mx-auto leading-relaxed"
                  >
                    {cinematicIntro.scene5.subtext}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.4 }}
                    className="pt-2"
                  >
                    <a
                      href="#about"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-lg bg-surface border border-border-subtle hover:border-accent font-mono text-xs uppercase tracking-wider text-accent transition-colors shadow-sm w-full sm:w-auto min-h-[44px]"
                    >
                      <span>Explore Projects &amp; Lab</span>
                      <ArrowDown className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Timeline Progress & Skip Link */}
          <div className="relative z-10 pt-3 border-t border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Timeline Progress Indicators (1 to 5) */}
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto" role="tablist" aria-label="Scene Navigator">
              {Array.from({ length: totalScenes }).map((_, idx) => {
                const isActive = currentScene === idx;
                return (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setCurrentScene(idx);
                      setIsPlaying(true);
                    }}
                    className="group flex items-center gap-1.5 focus-visible:outline-accent py-2 px-1 min-h-[44px]"
                    title={`Jump to Scene 0${idx + 1}`}
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-7 sm:w-10 bg-accent shadow-[0_0_10px_rgba(168,255,120,0.4)]"
                          : "w-3 bg-border-strong group-hover:bg-primary-muted"
                      }`}
                    />
                    <span
                      className={`text-[10px] font-mono hidden sm:inline transition-colors ${
                        isActive ? "text-accent font-bold" : "text-primary-muted/40"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Jump straight to main portfolio */}
            <a
              href="#about"
              className="text-xs font-mono text-primary-muted hover:text-accent flex items-center gap-1.5 transition-colors py-1 min-h-[44px] items-center"
            >
              <span>Skip Intro to About</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
