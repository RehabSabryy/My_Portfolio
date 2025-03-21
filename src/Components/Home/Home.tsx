import Connect from "../Connect/Connect";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "./About/About";
import FirstSection from "./FirstSection/FirstSection";

export default function Home() {
  return (
    <>
    <FirstSection />
    <About />
    <Skills/>
    <Projects/> 
    <Connect/>
    </>
  )
}
