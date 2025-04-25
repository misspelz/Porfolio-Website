import Container from "./Container";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <div className="w-10/12 mx-auto pt-10 max-w-[1200px] mx-auto">
        <Navbar />
      </div>
      <Container />
      <div id="projects" className="box w-10/12 max-w-[1200px] mx-auto"></div>
      <Projects />
   
    </>
  );
}
