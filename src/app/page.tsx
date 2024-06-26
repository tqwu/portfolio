import Header from "../components/header";
import Intro from "../components/intro";
import AboutMe from "../components/about-me";
import Skills from "../components/skills";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-navy-light">
        <Intro />
        <AboutMe />
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
