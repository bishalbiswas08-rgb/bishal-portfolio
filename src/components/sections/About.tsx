"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function About() {
  const { developer, about, education, milestones, contact } = portfolioData;

  const github = contact.socials.find((s) => s.platform === "GitHub");
  const linkedin = contact.socials.find((s) => s.platform === "LinkedIn");

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          tag="ABOUT ME"
          title="I like figuring out how things work."
          description="Usually by writing code, wiring circuits at 2AM, breaking them, fixing them, and building things just to see if they work."
        />

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-sm sm:text-base md:text-lg text-primary leading-relaxed space-y-3 sm:space-y-4">
              {about.primaryNarrative.map((paragraph, idx) => (
                <p key={idx} className="text-primary-muted leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interest Areas Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {about.interestAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-4 sm:p-5 rounded-xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase mb-1.5 sm:mb-2">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{area.title}</span>
                    </div>
                    <p className="text-xs text-primary-muted leading-relaxed mb-3 sm:mb-4 font-light">
                      {area.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {area.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-subtle border border-border-subtle/80 text-primary-muted shrink-0"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button href="#projects" variant="primary" size="md" className="w-full sm:w-auto min-h-[44px]">
                <span>View My Work</span>
              </Button>

              {github && github.isAvailable && (
                <Button
                  href={github.url}
                  variant="secondary"
                  size="md"
                  isExternal
                  className="w-full sm:w-auto min-h-[44px]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </Button>
              )}

              {linkedin && linkedin.isAvailable && (
                <Button
                  href={linkedin.url}
                  variant="secondary"
                  size="md"
                  isExternal
                  className="w-full sm:w-auto min-h-[44px]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Identity & Education & Milestones Card */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Visual Builder Badge */}
            {developer.portraitUrl ? (
              <div className="relative rounded-2xl overflow-hidden border border-border-subtle aspect-[4/5] bg-surface">
                <Image
                  src={developer.portraitUrl}
                  alt={`${developer.name} - ${developer.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-border-subtle bg-surface p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                    <span className="font-mono text-[10px] sm:text-[11px] text-accent uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                      QUICK GLANCE
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] text-emerald-400">
                      ● Active Builder
                    </span>
                  </div>

                  <div className="font-mono text-xs text-primary-muted space-y-2 sm:space-y-2.5 pt-1">
                    <div className="flex justify-between py-1 border-b border-border-subtle/40 gap-2">
                      <span className="text-primary-muted/60 shrink-0">Who</span>
                      <span className="text-primary font-medium truncate">{developer.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-subtle/40 gap-2">
                      <span className="text-primary-muted/60 shrink-0">Role</span>
                      <span className="text-accent truncate">student who likes making things</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-subtle/40 gap-2">
                      <span className="text-primary-muted/60 shrink-0">Interests</span>
                      <span className="text-primary truncate">Software + Hardware + AI</span>
                    </div>
                    <div className="flex justify-between py-1 gap-2">
                      <span className="text-primary-muted/60 shrink-0">Habit</span>
                      <span className="text-primary truncate">breaks things to learn them</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-border-subtle/60 mt-4 sm:mt-6">
                  <div className="p-2.5 sm:p-3 rounded bg-surface-subtle border border-border-subtle text-[10px] sm:text-[11px] font-mono text-primary-muted leading-relaxed break-words">
                    <span className="text-accent font-semibold">// PHOTO NOTE</span>
                    <br />
                    To attach your photo, set <code className="text-primary">portraitUrl</code> in <code className="text-primary">src/data/portfolio.ts</code>.
                  </div>
                </div>
              </div>
            )}

            {/* Clean Education Block */}
            <div className="rounded-2xl border border-border-subtle bg-surface p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>Education &amp; Background</span>
                </div>
                <Badge variant="outline">Current</Badge>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="font-heading font-semibold text-primary text-sm sm:text-base break-words">
                    {edu.degreeOrField}
                  </div>
                  <div className="font-mono text-xs text-accent break-words">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-primary-muted font-light leading-relaxed pt-1">
                    {edu.description}
                  </p>
                  {edu.isPlaceholderNote && (
                    <div className="mt-2 text-[10px] font-mono text-primary-muted/70 bg-surface-subtle p-2 rounded border border-border-subtle/50 break-words">
                      💡 <em>{edu.isPlaceholderNote}</em>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Milestones / Real Accomplishments */}
            <div className="rounded-2xl border border-border-subtle bg-surface p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                  <Code2 className="w-4 h-4 shrink-0" />
                  <span>Key Project Milestones</span>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-surface-subtle border border-border-subtle/60 space-y-1"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="font-heading font-medium text-primary break-words">
                        {m.title}
                      </span>
                      <span className="font-mono text-[10px] text-accent shrink-0">
                        {m.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-primary-muted leading-relaxed font-light">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
