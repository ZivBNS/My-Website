import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main>
      <Navbar setActiveSection={setActiveSection} />
      <section>
        {activeSection === "home" && <Home />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
      </section>
    </main>
  );
};

export default App;
