"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import Decal from "@/components/ui/Decal";

export default function Contact() {
  const { contact, developer } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 border-t border-border-subtle relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="ambient-glow bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center gap-2 justify-center">
            <Decal
              text="THE BUILD LOOP CONTINUES"
              variant="tuning"
              rotate={-1}
            />
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent mt-2">
              <span>06 // REACH OUT DIRECTLY</span>
            </div>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.05] sm:leading-[1.0] break-words">
            {contact.headline}
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-primary-muted font-normal max-w-2xl mx-auto leading-relaxed">
            {contact.subheadline}
          </p>

          {/* Primary Mailto Action & Copy Button */}
          <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button
              href={`mailto:${contact.email}`}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] px-8 bg-[#A8FF78] text-[#050807] font-black text-sm tracking-tight hover:bg-[#baff8f] shadow-[0_0_28px_rgba(168,255,120,0.35)]"
            >
              <Mail className="w-4 h-4 shrink-0 text-[#050807] stroke-[2.5]" />
              <span className="break-all font-mono text-xs sm:text-sm font-bold">Email: {contact.email}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#050807] stroke-[2.5]" />
            </Button>

            <Button
              onClick={handleCopyEmail}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[44px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span>Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 shrink-0" />
                  <span>Copy Address</span>
                </>
              )}
            </Button>
          </div>

          {/* Social Profiles */}
          <div className="pt-8 sm:pt-12 border-t border-border-subtle/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono">
            {contact.socials
              .filter((item) => item.isAvailable && item.url)
              .map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary-muted hover:text-accent transition-colors p-2 min-h-[44px] rounded focus-visible:outline-accent"
                >
                  <span>{item.platform}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              ))}
          </div>

          <div className="pt-3 text-[11px] sm:text-xs font-mono text-primary-muted/60 leading-relaxed max-w-md mx-auto">
            {developer.name} • {developer.location} • Open for project collaboration, hackathons &amp; hardware chats.
          </div>
        </div>
      </div>
    </section>
  );
}
