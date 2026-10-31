import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Layers,
  Award,
  Cpu,
  Wrench,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectPhotoSeries from "@/components/projects/ProjectPhotoSeries";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | ${portfolioData.developer.name}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | ${portfolioData.developer.name}`,
      description: project.shortDescription,
      url: `${portfolioData.seo.siteUrl}/work/${project.slug}`,
    },
  };
}

const statusBadgeStyles: Record<string, string> = {
  "Working Prototype": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "Active Build": "bg-sky-500/10 text-sky-400 border-sky-500/30",
  "Functional Project": "bg-accent/10 text-accent border-accent/30",
  "Hardware Concept": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  "Ongoing Experiments": "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = portfolioData.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects[projectIndex];
  const { caseStudy } = project;

  // Previous and Next project navigation
  const prevProject =
    projectIndex > 0 ? portfolioData.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[projectIndex + 1]
      : null;

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary-muted hover:text-accent transition-colors py-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects &amp; experiments</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-b border-border-subtle pb-8 sm:pb-10">
          <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono text-primary-muted mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <span className="text-accent uppercase tracking-wider font-semibold text-[11px] sm:text-xs">
                {project.category}
              </span>
              {project.year && (
                <>
                  <span className="text-border-strong">•</span>
                  <span className="text-[11px] sm:text-xs">{project.year}</span>
                </>
              )}
            </div>

            <span
              className={`text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded border ${
                statusBadgeStyles[project.status] || "border-border-subtle text-primary-muted"
              }`}
            >
              STATUS: {project.status.toUpperCase()}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight leading-[1.05] break-words">
            {project.title}
          </h1>

          <p className="mt-2.5 sm:mt-3 font-mono text-xs sm:text-base text-accent break-words">
            {project.tagline}
          </p>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-primary-muted max-w-3xl font-light leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action Links & Key Metadata */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="md" isExternal className="w-full sm:w-auto min-h-[44px]">
                <span>Live Project Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            )}

            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                size="md"
                isExternal
                className="w-full sm:w-auto min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </Button>
            )}

            <div className="p-3 rounded-lg bg-surface border border-border-subtle flex items-center justify-between sm:justify-start gap-2 text-xs font-mono text-primary-muted sm:ml-auto w-full sm:w-auto">
              <span className="text-primary-muted/70">Role:</span>
              <span className="text-primary font-medium truncate">{caseStudy.role}</span>
            </div>
          </div>
        </header>

        {/* Visual / Screenshot Showcase or Photo Series */}
        <div className="my-8 sm:my-12">
          {project.photoSeries && project.photoSeries.length > 0 ? (
            <ProjectPhotoSeries
              photos={project.photoSeries}
              projectTitle={project.title}
            />
          ) : project.screenshot ? (
            <div className="group relative aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle bg-[#090a0f] flex items-center justify-center">
              {/* Ambient blurred backdrop — fills empty space with matching tones */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <Image
                  src={project.screenshot}
                  alt=""
                  fill
                  sizes="120px"
                  quality={20}
                  aria-hidden="true"
                  className="object-cover scale-150 blur-3xl opacity-25 brightness-75 contrast-125 saturate-150"
                />
                <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
              </div>

              {/* Foreground uncropped sharp image */}
              <div className="relative z-10 w-full h-full max-w-full max-h-full p-2.5 sm:p-5 flex items-center justify-center">
                <Image
                  src={project.screenshot}
                  alt={`${project.title} preview`}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-contain object-center drop-shadow-[0_12px_32px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="rounded-xl sm:rounded-2xl border border-border-subtle bg-surface p-6 sm:p-12 md:p-14 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-primary-muted mb-3 sm:mb-4">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="font-heading text-lg sm:text-2xl font-bold text-primary break-words">
                {project.title} // Project Spec &amp; Architecture
              </div>
              <p className="mt-2 text-xs sm:text-sm text-primary-muted max-w-lg font-mono leading-relaxed">
                Hardware breadboard snapshot &amp; live demo capture pending final enclosure assembly. Full engineering architecture, implementation steps, and problem breakdowns are documented below.
              </p>
            </div>
          )}
        </div>

        {/* Case Study Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent mb-2.5 sm:mb-3">
                <Layers className="w-4 h-4 shrink-0" />
                <span>System Overview</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-primary leading-relaxed">
                {caseStudy.overview}
              </p>
            </section>

            {/* Problem / Purpose */}
            <section className="p-4 sm:p-6 rounded-xl bg-surface border border-border-subtle">
              <h2 className="font-heading text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">
                The Problem &amp; Core Purpose
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-primary-muted leading-relaxed font-light">
                {caseStudy.problem}
              </p>
            </section>

            {/* What I Built */}
            {caseStudy.whatIBuilt && caseStudy.whatIBuilt.length > 0 && (
              <section>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">
                  <Wrench className="w-4 h-4 shrink-0" />
                  <span>What I Built</span>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  {caseStudy.whatIBuilt.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-4 rounded-lg bg-surface border border-border-subtle/80 flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Constraints and Challenges */}
            <section>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Constraints &amp; Real Challenges</span>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                {caseStudy.constraints.map((constraint, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 rounded-lg bg-surface border border-border-subtle/80 flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary-muted"
                  >
                    <span className="font-mono text-xs text-accent mt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="leading-relaxed">{constraint}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Implementation */}
            <section>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent mb-3 sm:mb-4">
                <Code2 className="w-4 h-4 shrink-0" />
                <span>Technical Implementation &amp; Protocols</span>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                {caseStudy.technicalImplementation.map((step, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 rounded-lg bg-surface border border-border-subtle flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Delivered */}
            <section>
              <h2 className="font-heading text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">
                Features &amp; Capabilities Delivered
              </h2>
              <ul className="space-y-2">
                {caseStudy.featuresDelivered.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Verified Outcome */}
            {caseStudy.verifiedOutcome && (
              <section className="p-4 sm:p-6 rounded-xl bg-accent-muted/40 border border-accent-border">
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Verified Outcome / Benchmark</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-primary font-medium leading-relaxed">
                  {caseStudy.verifiedOutcome}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar Metadata (4 cols) */}
          <aside className="lg:col-span-4 space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-xl bg-surface border border-border-subtle space-y-4 sm:space-y-6 lg:sticky lg:top-24">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary-muted/60 mb-1.5">
                  Role
                </div>
                <div className="text-xs sm:text-sm font-medium text-primary break-words">
                  {caseStudy.role}
                </div>
              </div>

              <div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary-muted/60 mb-1.5">
                  Category
                </div>
                <div className="text-xs sm:text-sm text-primary">{project.category}</div>
              </div>

              <div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary-muted/60 mb-1.5">
                  Project Status
                </div>
                <span
                  className={`inline-block font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded border ${
                    statusBadgeStyles[project.status] || "border-border-subtle text-primary-muted"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {project.year && (
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary-muted/60 mb-1.5">
                    Timeline
                  </div>
                  <div className="text-xs sm:text-sm text-primary">{project.year}</div>
                </div>
              )}

              <div className="pt-3 sm:pt-4 border-t border-border-subtle">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary-muted/60 mb-2.5">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="shrink-0 text-[10px] sm:text-[11px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-border-subtle flex flex-col gap-2">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="outline"
                    size="sm"
                    className="w-full justify-between min-h-[44px]"
                    isExternal
                  >
                    <span>View Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between border-border-subtle min-h-[44px]"
                    isExternal
                  >
                    <span>View Repository</span>
                    <Github className="w-3.5 h-3.5" />
                  </Button>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / Next Project Navigation */}
        <nav
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          aria-label="Case Study Navigation"
        >
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group p-4 sm:p-6 rounded-xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span className="font-mono text-xs text-primary-muted flex items-center gap-2 group-hover:text-accent transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-primary mt-2 group-hover:text-accent transition-colors break-words">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="p-4 sm:p-6 rounded-xl bg-surface/30 border border-border-subtle/40 opacity-40">
              <span className="font-mono text-xs text-primary-muted">
                First Project
              </span>
            </div>
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group p-4 sm:p-6 rounded-xl bg-surface border border-border-subtle hover:border-accent/40 transition-colors flex flex-col justify-between text-right min-h-[44px]"
            >
              <span className="font-mono text-xs text-primary-muted flex items-center justify-end gap-2 group-hover:text-accent transition-colors">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-primary mt-2 group-hover:text-accent transition-colors break-words">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="p-4 sm:p-6 rounded-xl bg-surface/30 border border-border-subtle/40 opacity-40 text-right">
              <span className="font-mono text-xs text-primary-muted">
                Latest Project
              </span>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
