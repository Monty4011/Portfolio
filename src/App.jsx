import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[70%] mx-auto">
        <Home />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>

      <div>
        <a href="#navbar">
          <img
            className="rounded-full w-10 fixed bottom-12 right-12 "
            src="up-arrow.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default App;
