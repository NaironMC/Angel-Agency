import React, { useState } from "react";
import Magnetic from "../components/Magnetic";

export default function Contact(){
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="grid">
        <div className="card" style={{ gridColumn:"span 7" }}>
          <div className="badge">Let’s build</div>
          <h3 style={{ margin:"10px 0 6px" }}>Tell us about your project</h3>
          {sent ? (
            <p className="pxl">Thanks! We’ll get back to you within 24 hours.</p>
          ) : (
            <form onSubmit={onSubmit} className="grid" style={{ gridTemplateColumns:"repeat(12, 1fr)" }}>
              <input className="card" style={{ gridColumn:"span 6" }} placeholder="Your name" required />
              <input className="card" style={{ gridColumn:"span 6" }} placeholder="Email" type="email" required />
              <input className="card" style={{ gridColumn:"span 12" }} placeholder="Company / Brand" />
              <textarea className="card" style={{ gridColumn:"span 12", minHeight:120 }} placeholder="What are you building?" />
              <div style={{ gridColumn:"span 12" }}>
                <Magnetic>
                  <button className="btn">Send message</button>
                </Magnetic>
              </div>
            </form>
          )}
        </div>

        <div className="card" style={{ gridColumn:"span 5" }}>
          <div className="badge">Contact</div>
          <p className="pxl">
            hello@angelspath.agency<br/>
            +258 87 829 6706 • +258 84 808 7372 • +27 (64) 526-0655 • Global
          </p>
          <div style={{ height: 280, borderRadius: 12, overflow:"hidden", marginTop:12, background:"linear-gradient(180deg, rgba(120,166,255,.2), transparent)" }}>
            {/* Map slot (add Mapbox/Leaflet later) */}
            <div style={{ display:"grid", placeItems:"center", height:"100%", opacity:.7 }}>
              <span>Map coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
