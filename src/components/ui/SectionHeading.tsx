import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  tag: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  tag,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 sm:mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-accent mb-2.5 sm:mb-3">
        {number && (
          <>
            <span className="text-accent/90 font-medium">{number}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </>
        )}
        <span className="text-primary-muted font-medium">{tag}</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-primary leading-[1.15] sm:leading-[1.1] break-words">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-primary-muted max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
