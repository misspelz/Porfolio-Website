import Container from "./Container";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <div className="w-10/12 mx-auto pt-10">
        <Navbar />
      </div>
      <Container />
      <div
        id="projects"
        className="box w-10/12 mx-auto"
      ></div>
      <Projects />
      {/* Contact */}
    </>
  );
}
