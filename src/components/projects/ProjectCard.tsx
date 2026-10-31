"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Cpu,
  Layers,
} from "lucide-react";
import { Project } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos = project.photoSeries || [];
  const hasPhotos = photos.length > 0;
  const currentImageSrc = hasPhotos
    ? photos[activePhotoIndex].url
    : project.screenshot || project.image;

  // Determine layout style: "hero-top" (full-width image top) vs "split" (side-by-side)
  const layout = project.cardLayout || (index % 2 === 0 ? "hero-top" : "split-image-right");
  const isHeroTop = layout === "hero-top";
  const isImageLeft = layout === "split-image-left";

  const targetLink = project.liveUrl || `/work/${project.slug}`;
  const isExternal = Boolean(project.liveUrl);

  // Compact info block rendered across layouts
  const InfoBlock = (
    <div className="flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        {/* Top category, status, and timeline */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-accent uppercase tracking-wider font-semibold text-[11px] sm:text-xs">
            {project.category}
          </span>
          <span className="text-border-strong">•</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded border ${
              statusBadgeStyles[project.status] || "border-border-subtle text-primary-muted"
            }`}
          >
            {project.status}
          </span>
          {project.year && (
            <>
              <span className="text-border-strong">•</span>
              <span className="text-primary-muted text-[11px]">{project.year}</span>
            </>
          )}
        </div>

        {/* Project Title & Tagline */}
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-primary group-hover:text-accent transition-colors tracking-tight">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="font-mono text-xs sm:text-sm text-primary/80 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-light">
          {project.shortDescription}
        </p>

        {/* Compact Key Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <div className="p-2.5 rounded-lg bg-surface-subtle/70 border border-border-subtle/50 text-xs">
            <span className="font-mono text-[10px] text-accent uppercase tracking-wider block font-semibold">
              The Problem
            </span>
            <span className="text-primary-muted text-[11px] sm:text-xs mt-0.5 block leading-snug line-clamp-2">
              {project.caseStudy.problem}
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-subtle/70 border border-border-subtle/50 text-xs">
            <span className="font-mono text-[10px] text-accent uppercase tracking-wider block font-semibold">
              What I Built
            </span>
            <span className="text-primary-muted text-[11px] sm:text-xs mt-0.5 block leading-snug line-clamp-2">
              {project.caseStudy.whatIBuilt[0]}
            </span>
          </div>
        </div>

        {/* Verified Technologies */}
        <div className="pt-1 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="muted" className="text-[10px] sm:text-[11px]">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 sm:pt-4 border-t border-border-subtle/60 flex flex-wrap items-center gap-2.5 sm:gap-3">
        <Button
          href={`/work/${project.slug}`}
          variant="primary"
          size="sm"
          className="min-h-[40px]"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>

        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            variant="outline"
            size="sm"
            isExternal
            className="min-h-[40px]"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        )}

        {project.githubUrl && (
          <Button
            href={project.githubUrl}
            variant="ghost"
            size="sm"
            isExternal
            className="border-border-subtle text-primary-muted hover:text-accent min-h-[40px]"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </Button>
        )}
      </div>
    </div>
  );

  /* =========================================================================
   * 1. HERO TOP LAYOUT (Full-width large screenshot top -> info underneath)
   *    Best for flagship showcases like ATTENDER and EDEN.
   * ========================================================================= */
  if (isHeroTop) {
    return (
      <article className="group rounded-2xl bg-surface border border-border-subtle hover:border-border-accent/40 transition-all duration-300 overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        {/* Large Project Image Showcase */}
        {currentImageSrc ? (
          <div className="space-y-3">
            <Link
              href={`/work/${project.slug}`}
              className="group/img block relative w-full aspect-[16/10] sm:aspect-[1.82/1] rounded-xl overflow-hidden border border-border-subtle hover:border-accent/50 bg-[#090a0f] transition-all duration-300 focus-visible:outline-accent"
              aria-label={`View ${project.title} case study`}
            >
              <Image
                src={currentImageSrc}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={95}
                className="object-contain sm:object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.015]"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />

              {/* Top-right subtle action pill */}
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md border border-border-subtle group-hover/img:border-accent/50 text-accent font-mono text-xs flex items-center gap-1.5 shadow-md transition-colors">
                <span>Explore Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/img:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Interactive Screen Switcher Tabs (for projects with photo series like ATTENDER) */}
            {hasPhotos && photos.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[10px] font-mono text-primary-muted uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
                  <Layers className="w-3 h-3 text-accent" />
                  <span>Screens:</span>
                </span>
                {photos.map((photo, i) => (
                  <button
                    key={photo.url}
                    onClick={() => setActivePhotoIndex(i)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all shrink-0 flex items-center gap-1.5 focus-visible:outline-accent ${
                      activePhotoIndex === i
                        ? "bg-accent/15 border border-accent/40 text-accent font-medium shadow-sm"
                        : "bg-surface-subtle border border-border-subtle text-primary-muted hover:text-primary hover:border-border-strong"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        activePhotoIndex === i ? "bg-accent" : "bg-primary-muted/50"
                      }`}
                    />
                    <span>{photo.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* Compact Information Bar */}
        <div className="pt-2 border-t border-border-subtle/60">
          {InfoBlock}
        </div>
      </article>
    );
  }

  /* =========================================================================
   * 2. SPLIT LAYOUT (Massive screenshot occupying 60% of card width)
   *    Best for landscape UI showcases like SmartShut and CraveAI.
   * ========================================================================= */
  return (
    <article className="group rounded-2xl bg-surface border border-border-subtle hover:border-border-accent/40 transition-all duration-300 overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      {/* Large Screenshot Section (60% width on desktop, Order-1 on mobile) */}
      <div
        className={`w-full lg:w-[60%] shrink-0 flex items-center ${
          isImageLeft ? "lg:order-1" : "lg:order-2 order-1"
        }`}
      >
        {currentImageSrc ? (
          <Link
            href={`/work/${project.slug}`}
            className="group/img block relative w-full aspect-[16/10] sm:aspect-[1.7/1] rounded-xl overflow-hidden border border-border-subtle hover:border-accent/50 bg-[#090a0f] transition-all duration-300 focus-visible:outline-accent shadow-md"
            aria-label={`View ${project.title} case study`}
          >
            <Image
              src={currentImageSrc}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 800px"
              quality={95}
              className="object-contain sm:object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.015]"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />

            <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md border border-border-subtle group-hover/img:border-accent/50 text-accent font-mono text-xs flex items-center gap-1.5 shadow-md transition-colors">
              <span>Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/img:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ) : (
          /* Dedicated Hardware Workbench Visual for Embedded Lab */
          <Link
            href={`/work/${project.slug}`}
            className="group/hw block w-full aspect-[16/10] sm:aspect-[1.7/1] rounded-xl overflow-hidden border border-border-subtle hover:border-accent/40 bg-[#090a10] p-4 sm:p-6 relative transition-all duration-300 focus-visible:outline-accent shadow-inner"
            aria-label={`View detailed hardware experiments for ${project.title}`}
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle/60 text-[10px] font-mono">
                <span className="text-accent flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>HARDWARE // BENCH &amp; NODES</span>
                </span>
                <span className="px-2 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  ACTIVE LAB
                </span>
              </div>

              <div className="my-auto py-2 space-y-2 text-center">
                <div className="font-heading font-black text-2xl sm:text-3xl text-primary tracking-tight group-hover/hw:text-accent transition-colors">
                  {project.title}
                </div>
                <p className="font-mono text-xs text-primary-muted max-w-sm mx-auto">
                  {project.tagline}
                </p>

                <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto pt-2 font-mono text-[10px]">
                  <div className="p-1.5 rounded bg-surface/70 border border-border-subtle/60 text-center">
                    <span className="text-primary-muted block text-[8px] uppercase">Bus</span>
                    <span className="text-accent font-semibold">I2C / SPI</span>
                  </div>
                  <div className="p-1.5 rounded bg-surface/70 border border-border-subtle/60 text-center">
                    <span className="text-primary-muted block text-[8px] uppercase">Radio</span>
                    <span className="text-emerald-400 font-semibold">ESP-NOW</span>
                  </div>
                  <div className="p-1.5 rounded bg-surface/70 border border-border-subtle/60 text-center">
                    <span className="text-primary-muted block text-[8px] uppercase">Audio</span>
                    <span className="text-sky-400 font-semibold">I2S PCM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-border-subtle/60 flex items-center justify-between text-[10px] font-mono text-primary-muted/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>BENCH // ACTIVE LOG</span>
                </span>
                <span className="text-accent font-semibold flex items-center gap-1 group-hover/hw:translate-x-1 transition-transform">
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Information Section (40% width on desktop, Order-2 on mobile) */}
      <div
        className={`w-full lg:w-[40%] flex flex-col justify-between ${
          isImageLeft ? "lg:order-2" : "lg:order-1 order-2"
        }`}
      >
        {InfoBlock}
      </div>
    </article>
  );
}
