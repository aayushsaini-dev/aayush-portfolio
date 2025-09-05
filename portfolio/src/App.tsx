// src/App.tsx

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Layout Components
import { Footer } from "./components/Footer";

// Page Sections
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { TechStack } from "./sections/TechStack";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import ActiveSectionContextProvider from "./contexts/ActiveSectionContext";
import { Navbar } from "./components/Navbar";

function App() {
  // Initialize Lenis for smooth scrolling effect
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ActiveSectionContextProvider>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </ActiveSectionContextProvider>
  );
}

export default App;
