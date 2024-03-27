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
        <div id="skills">
          <Skills />
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
        <div id="experience" className="py-10 bg-navy">
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
        <div id="projects">This is the projects section.</div>
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
        <div id="about-me">This is the about me section.</div>
      </main>
    </>
  );
}
