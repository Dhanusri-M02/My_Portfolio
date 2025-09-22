import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
