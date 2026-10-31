import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="font-mono text-accent text-xs tracking-widest uppercase">
          ERROR 404 // ROUTE NOT FOUND
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-black text-primary uppercase">
          Lost in Space.
        </h1>
        <p className="text-sm font-mono text-primary-muted leading-relaxed">
          The requested coordinate or project case study does not exist or has been relocated.
        </p>
        <div className="pt-4">
          <Button href="/" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
