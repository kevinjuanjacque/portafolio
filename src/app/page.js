import Image from "next/image";
import { Section } from "./components/layouts/section";
import { Hero } from "./components/sections/hero";
import { Me } from "./components/sections/me";
import { Experience } from "./components/sections/experience";
import { Education } from "./components/sections/education";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";

export default function Home() {
  return (
    <main className="px-16 space-y-24">
      <Section>
        <Hero></Hero>
        <Me></Me>
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </Section>
      
    </main>
  );
}
