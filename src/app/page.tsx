import Hero from "@/components/sections/Hero";
import PersonalIntroMotion from "@/components/sections/PersonalIntroMotion";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import SelectedWork from "@/components/sections/SelectedWork";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <PersonalIntroMotion />
      <About />
      <Expertise />
      <SelectedWork />
      <CurrentlyBuilding />
      <Contact />
    </>
  );
}
