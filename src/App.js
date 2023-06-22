import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
