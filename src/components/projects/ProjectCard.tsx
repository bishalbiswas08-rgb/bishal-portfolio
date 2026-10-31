"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Cpu,
} from "lucide-react";
import { Project } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";

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
        className={`w-full lg:w-5/12 relative min-h-[220px] sm:min-h-[280px] md:min-h-[340px] bg-surface-subtle border-b lg:border-b-0 ${
          isEven ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"
        } border-border-subtle flex items-center justify-center overflow-hidden p-3 sm:p-5 md:p-6`}
      >
        {imageSrc ? (
          project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/preview block relative w-full h-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-border-subtle hover:border-accent/50 transition-all duration-300 focus-visible:outline-accent"
              aria-label={`Open live demo of ${project.title}`}
            >
              <Image
                src={imageSrc}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center group-hover/preview:scale-[1.02] group-hover/preview:brightness-105 transition-all duration-500 ease-out"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300" />
              {project.photoSeries && project.photoSeries.length > 1 && (
                <div className="absolute bottom-2.5 left-2.5 z-10 px-2 sm:px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md border border-border-subtle text-primary font-mono text-[9px] sm:text-[10px] flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>{project.photoSeries.length} UI Screens</span>
                </div>
              )}
              <div className="absolute top-2.5 right-2.5 z-10 px-2 sm:px-2.5 py-1 rounded-md bg-bg/85 backdrop-blur-md border border-accent/40 text-accent font-mono text-[10px] sm:text-[11px] flex items-center gap-1 shadow-md">
                <span>View Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ) : (
            <Link
              href={`/work/${project.slug}`}
              className="group/preview block relative w-full h-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-border-subtle hover:border-accent/50 transition-all duration-300 focus-visible:outline-accent"
              aria-label={`View detailed case study for ${project.title}`}
            >
              <Image
                src={imageSrc}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center group-hover/preview:scale-[1.02] group-hover/preview:brightness-105 transition-all duration-500 ease-out"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300" />
              {project.photoSeries && project.photoSeries.length > 1 && (
                <div className="absolute bottom-2.5 left-2.5 z-10 px-2 sm:px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md border border-border-subtle text-primary font-mono text-[9px] sm:text-[10px] flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>{project.photoSeries.length} UI Screens</span>
                </div>
              )}
              <div className="absolute top-2.5 right-2.5 z-10 px-2 sm:px-2.5 py-1 rounded-md bg-bg/85 backdrop-blur-md border border-border-subtle text-primary-muted group-hover/preview:text-accent group-hover/preview:border-accent/40 font-mono text-[10px] sm:text-[11px] flex items-center gap-1 shadow-md transition-colors">
                <span>Case Study</span>
                <ArrowRight className="w-3 h-3 group-hover/preview:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          )
        ) : (
          /* Bespoke technical visual placeholder */
          <div className="w-full h-full rounded-xl border border-border-subtle/80 bg-surface/80 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-accent/30 transition-colors">
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-border-subtle/60 gap-2">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-accent flex items-center gap-1.5 truncate">
                <Cpu className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{project.category}</span>
              </span>
              <span
                className={`font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded border shrink-0 ${
                  statusBadgeStyles[project.status] || "border-border-subtle text-primary-muted"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="my-auto py-4 sm:py-6 text-center space-y-1.5 sm:space-y-2">
              <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight break-words">
                {project.title}
              </div>
              <p className="font-mono text-[11px] sm:text-xs text-primary-muted max-w-xs mx-auto leading-relaxed">
                {project.tagline}
              </p>
            </div>

            <div className="pt-2.5 sm:pt-3 border-t border-border-subtle/60 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-primary-muted/60">
              <span className="truncate">PROJECT // {project.slug}</span>
              <span className="shrink-0">CASE STUDY →</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div
        className={`w-full lg:w-7/12 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between ${
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
