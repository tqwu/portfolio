import HeaderMain from "../components/headerMain";
import Intro from "../components/intro";
import Bio from "../components/bio";
import Skills from "../components/skills";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <main className="bg-navy-light">
        <Intro />
        <Bio />
        <div
          id="skills"
          className="bg-navy"
          style={{ scrollMarginTop: "60px" }}
        >
          <Skills />
        </div>
        <div
          id="experience"
          className="bg-navy"
          style={{ scrollMarginTop: "60px" }}
        >
          <Experiences />
        </div>
        <div id="projects" style={{ scrollMarginTop: "60px" }}>
          <Projects />
        </div>
        <div id="footer" className="bg-navy">
          <Footer />
        </div>
      </main>
    </>
  );
}
