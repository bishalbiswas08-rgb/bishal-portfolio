"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "I HAD AN IDEA.",
  "...SO I BUILT IT.",
  "THEN I BROKE IT.",
  "...AND FIXED IT.",
];

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if already seen in this session
    const seen = sessionStorage.getItem("bishal_intro_seen");
    if (seen || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    // Sequence timer: ~400ms per line
    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => {
        if (prev < lines.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setShowBrand(true);
          return prev;
        }
      });
    }, 420);

    // Complete exit at ~2.1 seconds
    const exitTimer = setTimeout(() => {
      sessionStorage.setItem("bishal_intro_seen", "true");
      setIsVisible(false);
    }, 2100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        sessionStorage.setItem("bishal_intro_seen", "true");
        setIsVisible(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("bishal_intro_seen", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 bg-[#07080c] flex flex-col items-center justify-center p-6 cursor-pointer select-none"
          role="dialog"
          aria-label="Loading introduction"
        >
          {/* Subtle background circuit pulse */}
          <div className="absolute inset-0 bg-[radial-gradient(#A8FF78_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Centered sequence */}
          <div className="relative z-10 max-w-xl w-full text-center space-y-4">
            <div className="min-h-[140px] sm:min-h-[160px] flex flex-col items-center justify-center space-y-2">
              {lines.slice(0, currentLineIndex + 1).map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className={`font-heading font-extrabold text-xl sm:text-3xl tracking-tight ${
                    idx === currentLineIndex
                      ? "text-primary"
                      : "text-primary-muted/60"
                  }`}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Brand reveal */}
            {showBrand && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="pt-4 border-t border-border-subtle/80 flex items-center justify-center gap-2 font-mono text-xs text-accent uppercase tracking-widest"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>BISHAL BISWAS // WORKBENCH</span>
              </motion.div>
            )}
          </div>

          {/* Skip prompt */}
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-primary-muted/40 uppercase tracking-widest">
            Click or press ESC to skip
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
