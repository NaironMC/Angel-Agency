import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";

const typingStrings = [
  "Strategy first.",
  "Spectacle second.",
  "Results always."
];

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const stringIndex = useRef(0);
  const charIndex = useRef(0);
  const typingForward = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = typingStrings[stringIndex.current];

      if (typingForward.current) {
        setDisplayText(current.slice(0, charIndex.current + 1));
        charIndex.current += 1;

        if (charIndex.current === current.length) {
          typingForward.current = false;
          setTimeout(() => {
            typingForward.current = true;
            charIndex.current = 0;
            stringIndex.current = (stringIndex.current + 1) % typingStrings.length;
            setDisplayText("");
          }, 1500); // pause at end of string
        }
      }
    }, 80); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="about">
      <div className="card" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="badge">About</div>

        {/* Animated Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <h2 className="h1">{displayText}<span>|</span></h2>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="pxl" style={{ marginTop: "1.5rem" }}>
            Angel’s Path is a multidisciplinary studio led by engineering-minded designers. 
            We partner with founders and bold brands to craft identities that resonate, deliver high-impact content, 
            and build web experiences that are fast, clean, and elegant.
          </p>

          <p className="pxl" style={{ marginTop: "1rem" }}>
            Every project begins with a strategy: understanding your audience, challenges, and goals. 
            We combine creativity, technology, and data to produce solutions that not only look exceptional 
            but also achieve measurable results.
          </p>

          <p className="pxl" style={{ marginTop: "1rem" }}>
            From startups to established brands, we measure every launch, optimize continuously, and iterate weekly. 
            Our mission is to transform ideas into experiences that engage, inspire, and convert.
          </p>
        </Motion.div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2.5rem",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <Motion.div
            className="card"
            style={{ flex: "1 1 45%", border: `1px solid var(--primary)` }}
            whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,.15)" }}
            transition={{ duration: 0.3 }}
          >
            <h4 style={{ color: "var(--primary)" }}>Our Services</h4>
            <ul style={{ marginTop: "0.5rem", lineHeight: "1.6", color: "var(--text-light)" }}>
              <li>Brand Identity & Strategy</li>
              <li>Web & App Design</li>
              <li>Content Creation at Scale</li>
              <li>Performance & Analytics</li>
            </ul>
          </Motion.div>

          <Motion.div
            className="card"
            style={{ flex: "1 1 45%", border: `1px solid var(--primary)` }}
            whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,.15)" }}
            transition={{ duration: 0.3 }}
          >
            <h4 style={{ color: "var(--primary)" }}>Our Approach</h4>
            <ul style={{ marginTop: "0.5rem", lineHeight: "1.6", color: "var(--text-light)" }}>
              <li>Data-driven design decisions</li>
              <li>Weekly iterations & optimizations</li>
              <li>Collaborative process with founders</li>
              <li>Pixel-perfect execution & speed</li>
            </ul>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
