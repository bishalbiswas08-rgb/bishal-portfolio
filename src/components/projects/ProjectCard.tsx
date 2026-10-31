"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Cpu,
} from "lucide-react";
import { Project } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";
import ProjectPreview from "@/components/projects/ProjectPreview";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusBadgeStyles: Record<string, string> = {
  "Working Prototype": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "Active Build": "bg-sky-500/10 text-sky-400 border-sky-500/30",
  "Functional Project": "bg-accent/10 text-accent border-accent/30",
  "Hardware Concept": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  "Ongoing Experiments": "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const imageSrc = project.screenshot || project.image;

  return (
    <article className="group rounded-2xl bg-surface border border-border-subtle hover:border-border-accent/40 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      {/* Visual / Screenshot / Preview Panel */}
      <div
        className={`w-full lg:w-1/2 xl:w-[53%] relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] bg-[#07080d] border-b lg:border-b-0 ${
          isEven ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"
        } border-border-subtle flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden`}
      >
        {imageSrc ? (
          <ProjectPreview
            src={imageSrc}
            alt={`${project.title} interface preview`}
            title={project.title}
            slug={project.slug}
            liveUrl={project.liveUrl}
            photoCount={project.photoSeries?.length || 0}
            priority={index < 2}
            orientation={project.imageConfig?.orientation || "landscape"}
          />
        ) : (
          /* Bespoke technical hardware workbench visual for Embedded Lab */
          <Link
            href={`/work/${project.slug}`}
            className="w-full h-full min-h-[300px] sm:min-h-[360px] rounded-xl sm:rounded-2xl border border-border-subtle/80 bg-[#090a10] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group/hw hover:border-accent/40 transition-all duration-300 shadow-inner focus-visible:outline-accent"
            aria-label={`View detailed hardware experiments for ${project.title}`}
          >
            {/* Ambient circuit background grid */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Top diagnostic telemetry bar */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-border-subtle/60 gap-2">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-accent flex items-center gap-1.5 truncate">
                <Cpu className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">HARDWARE // BENCH &amp; NODES</span>
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-purple-400 shrink-0">
                ACTIVE LAB
              </span>
            </div>

            {/* Circuit Pinout & Telemetry Visual */}
            <div className="relative z-10 my-auto py-4 sm:py-6 space-y-3.5">
              <div className="text-center">
                <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight break-words group-hover/hw:text-accent transition-colors">
                  {project.title}
                </div>
                <p className="font-mono text-[11px] sm:text-xs text-primary-muted max-w-sm mx-auto mt-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Pinout & Bus telemetry chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-md mx-auto pt-2">
                <div className="p-2 rounded bg-surface/70 border border-border-subtle/60 text-center font-mono text-[10px]">
                  <span className="text-primary-muted block text-[8px] uppercase">Bus</span>
                  <span className="text-accent font-semibold">I2C / SPI / UART</span>
                </div>
                <div className="p-2 rounded bg-surface/70 border border-border-subtle/60 text-center font-mono text-[10px]">
                  <span className="text-primary-muted block text-[8px] uppercase">Radio</span>
                  <span className="text-emerald-400 font-semibold">ESP-NOW / Wi-Fi</span>
                </div>
                <div className="p-2 rounded bg-surface/70 border border-border-subtle/60 text-center font-mono text-[10px] col-span-2 sm:col-span-1">
                  <span className="text-primary-muted block text-[8px] uppercase">Audio</span>
                  <span className="text-sky-400 font-semibold">16-bit I2S PCM</span>
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="relative z-10 pt-3 border-t border-border-subtle/60 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-primary-muted/70">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>BENCH // ACTIVE LOG</span>
              </span>
              <span className="text-accent font-semibold flex items-center gap-1 group-hover/hw:translate-x-1 transition-transform">
                <span>VIEW CASE STUDY</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Content Container */}
      <div
        className={`w-full lg:w-1/2 xl:w-[47%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="space-y-3 sm:space-y-4">
          {/* Top category & status badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-accent uppercase tracking-wider font-semibold text-[11px] sm:text-xs">
                {project.category}
              </span>
              {project.year && (
                <>
                  <span className="text-border-strong">•</span>
                  <span className="text-primary-muted/70 text-[11px] sm:text-xs">{project.year}</span>
                </>
              )}
            </div>

            <span
              className={`text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 rounded border ${
                statusBadgeStyles[project.status] || "border-border-subtle text-primary-muted"
              }`}
            >
              {project.status}
            </span>
          </div>

          <div>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors break-words">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-primary/80 mt-1 break-words">
              {project.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-primary-muted leading-relaxed font-light">
            {project.shortDescription}
          </p>

          {/* Key problem & What I built quick summary */}
          <div className="grid grid-cols-1 gap-2 pt-1">
            <div className="p-3 rounded-lg bg-surface-subtle border border-border-subtle/70 text-xs">
              <span className="text-accent font-mono uppercase tracking-wider block mb-1 font-medium text-[10px] sm:text-[11px]">
                Problem &amp; Purpose
              </span>
              <span className="text-primary-muted leading-relaxed font-light text-[11px] sm:text-xs">
                {project.caseStudy.problem}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-surface-subtle border border-border-subtle/70 text-xs">
              <span className="text-accent font-mono uppercase tracking-wider block mb-1 font-medium text-[10px] sm:text-[11px]">
                What I Built
              </span>
              <span className="text-primary-muted leading-relaxed font-light text-[11px] sm:text-xs">
                {project.caseStudy.whatIBuilt[0]}
              </span>
            </div>
          </div>

          {/* Verified Technologies */}
          <div className="pt-1 sm:pt-2">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-primary-muted/60 mb-1.5 sm:mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="muted" className="shrink-0 text-[10px] sm:text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          {/* Primary Action Button */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {project.liveUrl ? (
              <>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-bg bg-accent hover:bg-accent-hover font-semibold transition-colors py-2.5 px-4 rounded-lg min-h-[44px] shadow-sm focus-visible:outline-accent"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary-muted hover:text-accent transition-colors py-2.5 px-3 rounded-lg min-h-[44px]"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </>
            ) : (
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center justify-center sm:justify-start gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-hover font-semibold transition-colors focus-visible:outline-accent py-2.5 px-3.5 rounded-lg bg-surface-subtle sm:bg-transparent border sm:border-transparent border-border-subtle/60 min-h-[44px]"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            )}
          </div>

          {/* External Links: GitHub / Live Site */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            {project.liveUrl && project.githubUrl ? (
              <>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-subtle border border-border-subtle text-xs font-mono text-primary-muted hover:text-accent hover:border-accent/40 transition-colors min-h-[40px]"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-subtle border border-border-subtle text-xs font-mono text-primary-muted hover:text-accent hover:border-accent/40 transition-colors min-h-[40px]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-border-subtle text-xs font-mono text-primary-muted hover:text-accent hover:border-accent/40 transition-colors min-h-[44px]"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub ↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
