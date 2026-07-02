import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { TechStack } from "@/components/sections/tech-stack";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-8 sm:px-6">
      <Hero />
      <SelectedWork />
      <TechStack />
      <About />
      <Experience />
      <Skills />
      <Writing />
    </div>
  );
}
