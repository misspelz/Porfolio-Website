import Container from "./Container";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="w-10/12 mx-auto pt-10">
        <Navbar />
      </div>
      <Container />
    </>
  );
}
