import React from "react";
import { motion as Motion} from "framer-motion";

const projects = [
  {
    name: "NovaTech — AI Automation Platform",
    tag: "AI + Web + Automation",
    cover: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Stratos — SaaS Dashboard",
    tag: "Product + UI/UX",
    cover: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Elevate — Brand Revamp",
    tag: "Branding + Design",
    cover: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Luminary — Marketing Automation",
    tag: "Growth + AI",
    cover: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vertex — WebGL Experience",
    tag: "Web + 3D",
    cover: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1600&auto=format&fit=crop"
  },
  {
    name: "Pulse — Mobile App",
    tag: "UI/UX + Development",
    cover: "https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export default function Work() {
  return (
    <section className="section" id="work">
      <h2 className="h1" style={{ fontSize: "clamp(32px,4.8vw,56px)" }}>
        Selected Work
      </h2>

      <div
        className="grid"
        style={{
          display: "grid",
          gap: "32px",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {projects.map((p, i) => (
          <Motion.a
            key={p.name}
            href="#"
            className="card"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 16,
              alignItems: "center",
              cursor: "pointer",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Motion.img
              src={p.cover}
              alt={p.name}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 16,
              }}
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <div
                className="badge"
                style={{
                  border: "1px solid var(--primary)",
                  background: "rgba(255,73,55,0.1)",
                  color: "var(--primary)",
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  marginBottom: 8,
                }}
              >
                {p.tag}
              </div>
              <h3 style={{ margin: "0 0 6px", color: "var(--text-light)" }}>
                {p.name}
              </h3>
              <p className="pxl" style={{ color: "var(--text-muted)" }}>
                A glimpse into our work across AI automation, marketing, design, and software development — building products and campaigns that drive growth.
              </p>
            </div>
          </Motion.a>
        ))}
      </div>
    </section>
  );
}
