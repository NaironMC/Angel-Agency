import React, { useState } from "react";
import Magnetic from "./Magnetic";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="logo" href="#home" aria-label="Angel's Path">
        <img src="/logo.jpeg" alt="Angel's Path logo" />
        Angel’s Path Agency
      </a>

      {/* Desktop Nav Links */}
      <div className="navlinks">
        {links.map((l) => (
          <Magnetic key={l.href}>
            <a href={l.href} className="badge">
              {l.label}
            </a>
          </Magnetic>
        ))}
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Dark overlay behind menu */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </nav>
  );
}
