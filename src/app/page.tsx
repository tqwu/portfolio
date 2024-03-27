import Header from "../components/header";
import Intro from "../components/intro";
import AboutMe from "../components/about-me";
import Skills from "../components/skills";
import Experience from "../components/experience";

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
          <Experience />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="projects" style={{ scrollMarginTop: "60px" }}>
          This is the projects section.
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="about-me" style={{ scrollMarginTop: "60px" }}>
          This is the about me section.
        </div>
      </main>
    </>
  );
}
