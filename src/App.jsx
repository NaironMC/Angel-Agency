import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import useLenis from "./utils/useLenis";

export default function App() {
  useLenis(); // ultra-smooth scrolling

  // set theme color for mobile UI
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = "#0d0f14";
    document.head.appendChild(meta);
  }, []);

  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Home />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
