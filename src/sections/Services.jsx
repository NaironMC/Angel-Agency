import React from "react";
import { motion as Motion } from "framer-motion";

const services = [
  {
    title: "Brand & Design",
    desc: "Identity systems, visual worlds, design sprints, pitch decks, campaign art direction, and complete brand strategy tailored to growth."
  },
  {
    title: "Web Experiences",
    desc: "High-performance React sites, WebGL/R3F, conversions-first UX, CMS integration, and software solutions to scale your business digitally."
  },
  {
    title: "AI & Marketing Automation",
    desc: "End-to-end marketing powered by AI: automated campaigns, data-driven insights, CRM automation, paid social, CRO, landing pages, and analytics."
  },
  {
    title: "Content & Video",
    desc: "Short-form edits, motion graphics, Lottie animations, creator collaborations, and scalable content engines that consistently deliver results."
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <h2 className="h1" style={{ fontSize: "clamp(32px,4.8vw,56px)" }}>What we do</h2>

      <div className="grid">
        {services.map((s, i) => (
          <Motion.div
            className="card"
            key={s.title}
            style={{ gridColumn:"span 6" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.45, delay: i * 0.075 }}
          >
            <div className="badge">{String(i+1).padStart(2,"0")}</div>
            <h3 style={{ margin:"10px 0 6px" }}>{s.title}</h3>
            <p className="pxl">{s.desc}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
