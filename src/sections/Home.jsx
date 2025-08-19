import React from "react";
import { motion as Motion } from "framer-motion";
import CanvasHero from "../components/CanvasHero";
import Magnetic from "../components/Magnetic";

export default function Home() {
  return (
    <section className="section" id="home">
      <div className="hero">
        <Motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.div
            className="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            ✨ Next-level creative engineering
          </Motion.div>

          <Motion.h1
            className="h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Angel’s Path Agency
          </Motion.h1>

          <Motion.p
            className="pxl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            We fuse marketing strategy, design, and code into unforgettable
            digital experiences. Social that *stops the scroll*. Brands that
            feel inevitable. Websites that convert.
          </Motion.p>

          <Motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Magnetic>
              <a href="#contact" className="btn">Start a project</a>
            </Magnetic>
            <Magnetic>
              <a href="#work" className="btn btn-outline">See our work</a>
            </Magnetic>
          </Motion.div>
        </Motion.div>

        <CanvasHero />
      </div>
    </section>
  );
}
