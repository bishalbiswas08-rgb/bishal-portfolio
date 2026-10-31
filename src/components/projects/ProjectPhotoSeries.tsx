"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  Sparkles,
  Eye,
} from "lucide-react";
import { ProjectPhoto } from "@/data/portfolio";

interface ProjectPhotoSeriesProps {
  photos: ProjectPhoto[];
  projectTitle: string;
}

export default function ProjectPhotoSeries({
  photos,
  projectTitle,
}: ProjectPhotoSeriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentPhoto = photos[activeIndex] || photos[0];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  if (!photos || photos.length === 0) return null;

  return (
    <section className="my-10 sm:my-14 rounded-2xl bg-surface border border-border-subtle p-4 sm:p-6 md:p-8">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-border-subtle gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-accent uppercase tracking-wider font-semibold">
              <span>Photo Series &amp; UI Walkthrough</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-primary-muted">{projectTitle}</span>
            </div>
            <h2 className="font-heading text-lg sm:text-xl font-bold text-primary mt-0.5">
              Interface Captures &amp; Architecture
            </h2>
          </div>
        </div>

        {/* Counter and controls */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary-muted self-end sm:self-auto">
          <span className="px-2.5 py-1 rounded bg-surface-subtle border border-border-subtle text-primary">
            <span className="text-accent font-bold">0{activeIndex + 1}</span> / 0{photos.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1.5 sm:p-2 rounded-lg bg-surface-subtle border border-border-subtle text-primary hover:text-accent hover:border-accent/40 transition-colors focus-visible:outline-accent"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 sm:p-2 rounded-lg bg-surface-subtle border border-border-subtle text-primary hover:text-accent hover:border-accent/40 transition-colors focus-visible:outline-accent"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image Display */}
      <div className="mt-5 sm:mt-6 space-y-4">
        <div className="group relative aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle bg-[#090a0f] flex items-center justify-center">
          {/* Ambient blurred backdrop — fills unused space with matching tones */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <Image
              src={currentPhoto.url}
              alt=""
              fill
              sizes="120px"
              quality={20}
              aria-hidden="true"
              className="object-cover scale-150 blur-3xl opacity-25 brightness-75 contrast-125 saturate-150"
            />
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
          </div>

          {/* Foreground uncropped, aspect-preserved, razor-sharp image */}
          <div className="relative z-10 w-full h-full max-w-full max-h-full p-2 sm:p-4 flex items-center justify-center">
            <Image
              src={currentPhoto.url}
              alt={currentPhoto.title}
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              className="object-contain object-center drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
          </div>

          {/* Tag Pill */}
          {currentPhoto.tag && (
            <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-background/85 backdrop-blur-md border border-border-subtle font-mono text-[10px] sm:text-xs text-accent font-semibold tracking-wider uppercase shadow-md">
              {currentPhoto.tag}
            </div>
          )}

          {/* Quick Expand Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-md bg-background/85 backdrop-blur-md border border-border-subtle hover:border-accent/50 text-primary-muted hover:text-accent font-mono text-[10px] sm:text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            aria-label="View full resolution"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Expand Fullscreen</span>
          </button>

          {/* Subtle Navigation Overlays on Hover */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border-subtle text-primary opacity-0 group-hover:opacity-100 hover:text-accent hover:border-accent/50 transition-all hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border-subtle text-primary opacity-0 group-hover:opacity-100 hover:text-accent hover:border-accent/50 transition-all hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-surface-subtle border border-border-subtle/80 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="font-heading font-bold text-base sm:text-lg text-primary">
              {currentPhoto.title}
            </div>
            <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-light max-w-3xl">
              {currentPhoto.caption}
            </p>
          </div>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent hover:underline self-start sm:self-auto py-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open preview</span>
          </button>
        </div>

        {/* Thumbnail Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
          {photos.map((photo, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={photo.url}
                onClick={() => setActiveIndex(idx)}
                className={`group/thumb text-left rounded-lg overflow-hidden border transition-all p-1.5 bg-surface-subtle focus-visible:outline-accent ${
                  isActive
                    ? "border-accent ring-1 ring-accent bg-accent/5"
                    : "border-border-subtle hover:border-primary-muted/50 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative aspect-video rounded overflow-hidden mb-1.5 bg-[#090a0f] flex items-center justify-center">
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    quality={85}
                    className="object-contain object-center p-0.5"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      isActive ? "bg-transparent" : "bg-background/20 group-hover/thumb:opacity-0"
                    }`}
                  />
                  <span className="absolute bottom-1 right-1 font-mono text-[8px] px-1 py-0.5 rounded bg-background/80 text-primary-muted z-10">
                    0{idx + 1}
                  </span>
                </div>
                <div className="px-0.5">
                  <div
                    className={`text-[11px] font-heading font-medium truncate ${
                      isActive ? "text-accent" : "text-primary group-hover/thumb:text-accent"
                    }`}
                  >
                    {photo.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-3">
            <div className="flex items-center gap-2 font-mono text-xs text-primary-muted">
              <span className="text-accent uppercase tracking-wider font-semibold">
                {currentPhoto.tag || "FULLSCREEN PREVIEW"}
              </span>
              <span>•</span>
              <span className="text-primary truncate max-w-xs sm:max-w-md">
                {currentPhoto.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-primary-muted">
                0{activeIndex + 1} / 0{photos.length}
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-lg bg-surface border border-border-subtle text-primary hover:text-accent hover:border-accent/40 transition-colors focus-visible:outline-accent"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={currentPhoto.url}
                alt={currentPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Left/Right click controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/90 border border-border-subtle text-primary hover:text-accent hover:border-accent/50 transition-all shadow-xl"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/90 border border-border-subtle text-primary hover:text-accent hover:border-accent/50 transition-all shadow-xl"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div className="border-t border-border-subtle pt-3 text-center max-w-3xl mx-auto">
            <div className="font-heading font-semibold text-sm sm:text-base text-primary">
              {currentPhoto.title}
            </div>
            <p className="font-mono text-xs text-primary-muted mt-1 leading-relaxed">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
