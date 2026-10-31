import React from "react";
import IntroLoader from "@/components/ui/IntroLoader";
import AmbientBackground from "@/components/ui/AmbientBackground";
import SectionFlowBridge from "@/components/ui/SectionFlowBridge";
import Hero from "@/components/sections/Hero";
import LandingMotionFilm from "@/components/sections/LandingMotionFilm";
import MotionInfographic from "@/components/infographic/MotionInfographic";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import SelectedWork from "@/components/sections/SelectedWork";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Fast, personal loading screen (~1.8s, session-cached) */}
      <IntroLoader />

      {/* 2. Living, breathing ambient background */}
      <AmbientBackground />

      {/* 3. The Continuous Build Experience */}
      <main className="relative z-10 overflow-hidden">
        {/* Step 1: The Spark */}
        <Hero />

        {/* Bridge 1 -> 2 */}
        <SectionFlowBridge
          step="01 // THE SPARK"
          label="IDEA → EXPERIMENT"
          sublabel="Hardware + Software"
        />

        {/* Step 2: Title Sequence & Builder Identity Film */}
        <LandingMotionFilm />

        {/* Bridge 2 -> 3 */}
        <SectionFlowBridge
          step="02 // THE MACHINE"
          label="HOW I THINK & BUILD"
          sublabel="Interactive Blueprint"
        />

        {/* Step 3: Interactive Motion Infographic: THIS IS BASICALLY ME */}
        <MotionInfographic />

        {/* Bridge 3 -> 4 */}
        <SectionFlowBridge
          step="03 // THE WORKBENCH"
          label="EXPERIMENT → BUILD"
          sublabel="Breaking & Fixing"
        />

        {/* Step 4: About Bishal */}
        <About />

        {/* Bridge 4 -> 5 */}
        <SectionFlowBridge
          step="04 // THE TOOLBOX"
          label="LANGUAGES & HARDWARE"
          sublabel="Stuff on My Desk"
        />

        {/* Step 5: Expertise & Tools */}
        <Expertise />

        {/* Bridge 5 -> 6 */}
        <SectionFlowBridge
          step="05 // BUILT & SHIPPED"
          label="PROJECTS & CODE"
          sublabel="Real Deployments"
        />

        {/* Step 6: Selected Work (ATTENDER, SmartShut, CraveAI, EDEN, Embedded Lab) */}
        <SelectedWork />

        {/* Bridge 6 -> 7 */}
        <SectionFlowBridge
          step="06 // ON THE BENCH"
          label="LATE-NIGHT LOGS"
          sublabel="Active Testing"
        />

        {/* Step 7: Currently Building / Lab */}
        <CurrentlyBuilding />

        {/* Bridge 7 -> 8 */}
        <SectionFlowBridge
          step="07 // WHAT'S NEXT"
          label="THE NEXT BUILD"
          sublabel="Start Here"
        />

        {/* Step 8: Contact / The Loop Continues */}
        <Contact />
      </main>
    </>
  );
}
