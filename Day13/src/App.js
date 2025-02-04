import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
