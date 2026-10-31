"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import Decal from "@/components/ui/Decal";

export default function SelectedWork() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            number="02"
            tag="THINGS I'VE BUILT"
            title="Projects that started as ideas (or late-night experiments)."
            description="Real projects where I wrote the code, wired the breadboards, debugged weird issues, and got them to actually work."
          />

          <div className="hidden lg:flex items-center gap-3 shrink-0 self-start md:self-end mb-6">
            <Decal text="MADE FROM SCRATCH" variant="stamp" rotate={-2} />
            <Decal text="NIGHT BUILDS" variant="sticker" rotate={1.5} />
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
