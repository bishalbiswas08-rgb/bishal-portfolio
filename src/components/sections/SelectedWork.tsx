"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";

export default function SelectedWork() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          tag="THINGS I'VE BUILT"
          title="Projects that started as ideas (or late-night experiments)."
          description="Real projects where I wrote the code, wired the breadboards, debugged weird issues, and got them to actually work."
        />

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
