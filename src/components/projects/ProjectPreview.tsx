"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ExternalLink, ArrowRight, Layers, Eye } from "lucide-react";

interface ProjectPreviewProps {
  src: string;
  alt: string;
  title: string;
  slug: string;
  liveUrl?: string | null;
  photoCount?: number;
  priority?: boolean;
  orientation?: "landscape" | "portrait" | "auto";
  className?: string;
}

export default function ProjectPreview({
  src,
  alt,
  title,
  slug,
  liveUrl,
  photoCount = 0,
  priority = false,
  className = "",
}: ProjectPreviewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Derive mock host address for browser frame
  const hostLabel = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
    : `${slug.toLowerCase()}.app`;

  const linkTarget = liveUrl || `/work/${slug}`;
  const isExternal = Boolean(liveUrl);

  const previewContent = (
    <div
      className={`group/preview relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle hover:border-accent/50 bg-[#090a0f] flex flex-col transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* 1. Elegant Product Browser Bar */}
      <div className="shrink-0 h-8 sm:h-9 bg-[#11131c]/90 border-b border-border-subtle/70 px-3 sm:px-4 flex items-center justify-between gap-2 select-none z-20 backdrop-blur-md">
        {/* Window controls (dots) */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60 group-hover/preview:bg-[#ef4444] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60 group-hover/preview:bg-[#f59e0b] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60 group-hover/preview:bg-[#10b981] transition-colors" />
        </div>

        {/* Center URL Address Pill */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-background/70 border border-border-subtle/80 text-[10px] sm:text-[11px] font-mono text-primary-muted max-w-[220px] truncate shadow-inner">
          <Lock className="w-2.5 h-2.5 text-accent shrink-0" />
          <span className="truncate">{hostLabel}</span>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center gap-1.5">
          {photoCount > 1 ? (
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[9px] text-accent px-1.5 py-0.5 rounded bg-accent/10 border border-accent/25">
              <Layers className="w-2.5 h-2.5" />
              <span>{photoCount} screens</span>
            </span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
          )}
        </div>
      </div>

      {/* 2. Visual Viewport with Ambient Backdrop & Crisp Contained Image */}
      <div className="relative flex-1 w-full min-h-0 overflow-hidden flex items-center justify-center p-2.5 sm:p-4 bg-gradient-to-b from-[#0e1017] to-[#07080c]">
        {/* Ambient blurred backdrop — softly expands matching image tones without distortion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <Image
            src={src}
            alt=""
            fill
            sizes="120px"
            quality={20}
            aria-hidden="true"
            className="object-cover scale-150 blur-3xl opacity-25 brightness-75 contrast-125 saturate-150"
          />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
        </div>

        {/* Foreground sharp, uncropped, aspect-preserved screenshot */}
        <div className="relative z-10 w-full h-full max-w-full max-h-full flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
            quality={95}
            className={`object-contain object-center rounded-md sm:rounded-lg drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] transition-all duration-500 ease-out group-hover/preview:scale-[1.015] group-hover/preview:brightness-105 ${
              imageLoaded ? "opacity-100" : "opacity-90"
            }`}
            onLoad={() => setImageLoaded(true)}
            priority={priority}
          />
        </div>

        {/* Hover overlay hint */}
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-20 pointer-events-none">
          <div className="px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md border border-border-subtle group-hover/preview:border-accent/50 text-primary-muted group-hover/preview:text-accent font-mono text-[10px] sm:text-[11px] flex items-center gap-1.5 shadow-lg transition-all opacity-0 group-hover/preview:opacity-100 translate-y-1 group-hover/preview:translate-y-0">
            {isExternal ? (
              <>
                <span>View Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </>
            ) : (
              <>
                <span>Case Study</span>
                <ArrowRight className="w-3 h-3 group-hover/preview:translate-x-0.5 transition-transform" />
              </>
            )}
          </div>
        </div>

        {/* Multi-screen indicator pill for mobile / compact */}
        {photoCount > 1 && (
          <div className="sm:hidden absolute top-2 left-2 z-20 px-2 py-0.5 rounded bg-background/90 backdrop-blur-md border border-border-subtle text-accent font-mono text-[9px] flex items-center gap-1 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{photoCount} Screens</span>
          </div>
        )}
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={linkTarget}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full focus-visible:outline-accent rounded-xl sm:rounded-2xl"
        aria-label={`Open live demo of ${title}`}
      >
        {previewContent}
      </a>
    );
  }

  return (
    <Link
      href={linkTarget}
      className="block w-full h-full focus-visible:outline-accent rounded-xl sm:rounded-2xl"
      aria-label={`View detailed case study for ${title}`}
    >
      {previewContent}
    </Link>
  );
}
