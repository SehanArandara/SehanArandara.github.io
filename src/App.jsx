import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Teaching from "./components/Teaching.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Teaching />
      <Contact />
    </div>
  );
}

export default App;
