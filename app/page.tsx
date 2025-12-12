import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="skills" className="box w-10/12 max-w-[1200px] mx-auto"></div>
      <Skills />
      <div id="projects" className="box w-10/12 max-w-[1200px] mx-auto"></div>
      <Projects />
    </>
  );
}
