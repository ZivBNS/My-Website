import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main>
      <Navbar
      setActiveSection={setActiveSection}
      activeSection={activeSection}
      />
      <section>
        {activeSection === "home" && <Home />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "resume" && <Resume />}
      </section>
    </main>
  );
};

export default App;
