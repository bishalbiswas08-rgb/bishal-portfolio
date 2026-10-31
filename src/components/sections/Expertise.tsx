"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import {
  Code,
  Globe,
  Database,
  Cpu,
  Radio,
  Sparkles,
} from "lucide-react";

const skillCategoryIcons: Record<string, React.ReactNode> = {
  LANGUAGES: <Code className="w-5 h-5 text-accent" />,
  "WEB DEVELOPMENT": <Globe className="w-5 h-5 text-accent" />,
  "BACKEND & DATABASE": <Database className="w-5 h-5 text-accent" />,
  "ARTIFICIAL INTELLIGENCE": <Sparkles className="w-5 h-5 text-accent" />,
  "HARDWARE & EMBEDDED": <Radio className="w-5 h-5 text-accent" />,
};

export default function Expertise() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          tag="TOOLS I USE"
          title="Languages, frameworks & stuff on my desk."
          description="Technologies I actually reach for when building software, wiring microcontrollers, or setting up local AI models."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const icon =
              skillCategoryIcons[skill.title] || (
                <Cpu className="w-5 h-5 text-accent" />
              );

            return (
              <div
                key={skill.title}
                className="group p-4 sm:p-6 md:p-7 rounded-xl bg-surface border border-border-subtle hover:border-border-accent/40 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-surface-subtle border border-border-subtle group-hover:border-accent/30 transition-colors">
                      {icon}
                    </div>
                    <span className="font-mono text-xs text-primary-muted/60">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-accent mb-1">
                    {skill.subtitle}
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors break-words">
                    {skill.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-primary-muted font-light leading-relaxed mb-4 sm:mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Verified Technology Badges */}
                {skill.technologies && skill.technologies.length > 0 && (
                  <div className="pt-3 sm:pt-4 border-t border-border-subtle/50">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-primary-muted/60 mb-2">
                      Toolchain
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.technologies.map((tech) => (
                        <Badge key={tech} variant="muted" className="shrink-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
