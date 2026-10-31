"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mic,
  Cpu,
  Volume2,
  Sparkles,
  Camera,
  Database,
  Lock,
  ArrowRight,
  Flame,
  Search,
  Zap,
  Play,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import Decal from "@/components/ui/Decal";

export default function ProjectPipelines() {
  const [activeProject, setActiveProject] = useState<"eden" | "attender" | "craveai" | "smartshut">("eden");
  const [pulseActive, setPulseActive] = useState(false);

  const triggerPipelineSignal = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2400);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#090b10] border border-border-subtle p-4 sm:p-6 md:p-8 overflow-hidden select-none">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#A8FF78_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border-subtle/80 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold">
            <span>02 // SIGNAL PIPELINES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-primary-muted font-normal">Real Architecture &amp; Data Flow</span>
          </div>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-primary mt-1">
            How The Signals Actually Travel
          </h3>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle overflow-x-auto max-w-full">
          <button
            onClick={() => {
              setActiveProject("eden");
              triggerPipelineSignal();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeProject === "eden"
                ? "bg-accent text-[#050807] font-bold shadow-sm"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            EDEN (Voice AI)
          </button>
          <button
            onClick={() => {
              setActiveProject("attender");
              triggerPipelineSignal();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeProject === "attender"
                ? "bg-accent text-[#050807] font-bold shadow-sm"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            ATTENDER (Platform)
          </button>
          <button
            onClick={() => {
              setActiveProject("craveai");
              triggerPipelineSignal();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeProject === "craveai"
                ? "bg-accent text-[#050807] font-bold shadow-sm"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            CraveAI (Recipe AI)
          </button>
          <button
            onClick={() => {
              setActiveProject("smartshut");
              triggerPipelineSignal();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
              activeProject === "smartshut"
                ? "bg-accent text-[#050807] font-bold shadow-sm"
                : "text-primary-muted hover:text-primary"
            }`}
          >
            SmartShut (IoT)
          </button>
        </div>
      </div>

      {/* Main Pipeline Display */}
      <div className="relative z-10 py-6 sm:py-8 space-y-6">
        {/* =========================================================================
         * PIPELINE 1: EDEN VOICE ASSISTANT LOOP
         * ========================================================================= */}
        {activeProject === "eden" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Hardware + Local AI Audio Loop
                </span>
                <h4 className="font-heading font-extrabold text-2xl text-primary">
                  EDEN // Physical Voice Pipeline
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPipelineSignal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-[#050807] font-mono text-xs font-bold hover:bg-accent-hover transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Pulse Voice Packet</span>
                </button>
                <Link
                  href="/work/eden"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-primary-muted hover:text-accent font-mono text-xs transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Step-by-Step Schematic Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-2.5 sm:gap-3 text-xs font-mono">
              {/* Step 1: Physical Mic */}
              <div className={`p-3.5 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <Mic className="w-4 h-4" />
                  <span className="text-[10px]">01 // CAPTURE</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">INMP441 Mic</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-snug">
                  Captures raw acoustic speech at 16kHz 16-bit mono.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  I2S Protocol
                </span>
              </div>

              {/* Step 2: ESP32 Buffer */}
              <div className={`p-3.5 rounded-xl border transition-all ${pulseActive ? "border-cyan-400 bg-cyan-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[10px]">02 // BUFFER</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">ESP32 Buffer</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-snug">
                  Streams buffered PCM chunks over Wi-Fi sockets to local server.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-cyan-300 border border-cyan-500/20">
                  C++ Firmware
                </span>
              </div>

              {/* Step 3: Whisper STT */}
              <div className={`p-3.5 rounded-xl border transition-all ${pulseActive ? "border-purple-400 bg-purple-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-purple-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px]">03 // STT</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Local Whisper</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-snug">
                  Transcribes raw audio to text locally without third-party cloud.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-purple-300 border border-purple-500/20">
                  Whisper Base
                </span>
              </div>

              {/* Step 4: Local LLM */}
              <div className={`p-3.5 rounded-xl border transition-all ${pulseActive ? "border-purple-400 bg-purple-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-purple-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px]">04 // INFERENCE</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Local LLM</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-snug">
                  Formulates response with custom system instructions.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-purple-300 border border-purple-500/20">
                  Python Flask
                </span>
              </div>

              {/* Step 5: TTS Synthesis */}
              <div className={`p-3.5 rounded-xl border transition-all ${pulseActive ? "border-cyan-400 bg-cyan-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[10px]">05 // TTS</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Audio Synth</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-snug">
                  Synthesizes speech PCM and streams back to microcontroller.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-cyan-300 border border-cyan-500/20">
                  TTS Pipeline
                </span>
              </div>

              {/* Step 6: Physical Speaker */}
              <div className={`p-3.5 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[10px]">06 // AUDIO OUT</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">MAX98357A</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-snug">
                  I2S DAC amplifier powers 3W speaker for spoken audible reply.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Hardware Speaker
                </span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
         * PIPELINE 2: ATTENDER PLATFORM
         * ========================================================================= */}
        {activeProject === "attender" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Full-Stack Architecture + Gemini Query Loop
                </span>
                <h4 className="font-heading font-extrabold text-2xl text-primary">
                  ATTENDER // 60-Second Roll-Call Architecture
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPipelineSignal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-[#050807] font-mono text-xs font-bold hover:bg-accent-hover transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Verification</span>
                </button>
                <Link
                  href="/work/attender"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-primary-muted hover:text-accent font-mono text-xs transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-mono">
              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <Camera className="w-4 h-4" />
                  <span className="text-[10px]">01 // CAMERA SCAN</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Classroom Capture</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Single classroom snapshot ingested via client camera stream.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Next.js Client
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-cyan-400 bg-cyan-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px]">02 // AUTH &amp; RLS</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Supabase Auth &amp; RLS</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  JWT validation ensures teachers only mark their assigned section.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-cyan-300 border border-cyan-500/20">
                  Row-Level Security
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-cyan-400 bg-cyan-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <Database className="w-4 h-4" />
                  <span className="text-[10px]">03 // DATABASE</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">PostgreSQL Relations</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Relational records link student IDs, dates, subjects, and statuses.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-cyan-300 border border-cyan-500/20">
                  Live Supabase Sync
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-purple-400 bg-purple-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-purple-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px]">04 // GEMINI AI</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">ATTENDER AI Agent</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Natural-language questions (&quot;Who is below 75%?&quot;) queried safely.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-purple-300 border border-purple-500/20">
                  Controlled Data Access
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px]">05 // DASHBOARD</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Live Roster UI</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Instant visual indicators for low attendance and audit logs.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Admin &amp; Teacher UI
                </span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
         * PIPELINE 3: CRAVEAI RECIPE PLATFORM
         * ========================================================================= */}
        {activeProject === "craveai" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Vector Ingredient Search + Recipe Synthesis
                </span>
                <h4 className="font-heading font-extrabold text-2xl text-primary">
                  CraveAI // Pantry-to-Recipe Pipeline
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPipelineSignal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-[#050807] font-mono text-xs font-bold hover:bg-accent-hover transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Recipe Match</span>
                </button>
                <Link
                  href="/work/craveai"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-primary-muted hover:text-accent font-mono text-xs transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <Search className="w-4 h-4" />
                  <span className="text-[10px]">01 // PANTRY INPUT</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Multi-Ingredient Tags</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  User selects whatever ingredients are currently in their fridge.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Client Tag Filter
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-cyan-400 bg-cyan-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <Database className="w-4 h-4" />
                  <span className="text-[10px]">02 // POSTGRES MATCH</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Full-Text Search</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  PostgreSQL full-text index queries indexed culinary database.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-cyan-300 border border-cyan-500/20">
                  Supabase Postgres
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-purple-400 bg-purple-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-purple-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px]">03 // AI GENERATION</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">AI Prompt Engine</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Fills recipe gaps, calculates cooking duration &amp; caloric metrics.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-purple-300 border border-purple-500/20">
                  Structured JSON
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px]">04 // COOKING VIEW</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Clean Step Mode</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Ad-free, concise cooking steps ready for immediate kitchen prep.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Mobile Recipe Card
                </span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
         * PIPELINE 4: SMARTSHUT IOT SECURITY
         * ========================================================================= */}
        {activeProject === "smartshut" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Biometric Sensor + Appliance Power Cutoff
                </span>
                <h4 className="font-heading font-extrabold text-2xl text-primary">
                  SmartShut // Sensor &amp; Relay State Logic
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPipelineSignal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-[#050807] font-mono text-xs font-bold hover:bg-accent-hover transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Cutoff</span>
                </button>
                <Link
                  href="/work/smartshut"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-primary-muted hover:text-accent font-mono text-xs transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px]">01 // SENSING</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Optical &amp; PIR</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  AS608 fingerprint scanner + PIR infrared motion sensor detection.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Hardware UART
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-emerald-400 bg-emerald-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-emerald-400 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[10px]">02 // STATE LOGIC</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">ESP32 State Loop</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Non-blocking millis timer monitors vacant room countdown.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-emerald-300 border border-emerald-500/20">
                  C++ State Machine
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-cyan-400 bg-cyan-500/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-[10px]">03 // OPTOCOUPLER</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Isolated Relays</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Cuts high-voltage line power to lights/fans when room is vacant.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-cyan-300 border border-cyan-500/20">
                  Energy Cutoff
                </span>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${pulseActive ? "border-accent bg-accent/10" : "bg-surface border-border-subtle"}`}>
                <div className="flex items-center justify-between text-accent mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px]">04 // OVERRIDE</span>
                </div>
                <div className="font-heading font-bold text-sm text-primary">Failsafe Egress</div>
                <p className="text-[11px] text-primary-muted mt-1 leading-relaxed">
                  Physical push-button bypass ensures safe manual room egress always.
                </p>
                <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent border border-accent/20">
                  Hardware Override
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
