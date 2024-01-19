import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#0a192f]">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Work/>
      <Education/>
      <Skills/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
