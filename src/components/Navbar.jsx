import React from "react";
import Magnetic from "./Magnetic";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav>
      <a className="logo" href="#home" aria-label="Angel's Path">
        <img src="/logo.jpeg" alt="Angel's Path logo" />
        Angel’s Path Agency
      </a>
      <div className="navlinks">
        {links.map(l => (
          <Magnetic key={l.href}>
            <a href={l.href} className="badge">{l.label}</a>
          </Magnetic>
        ))}
      </div>
    </nav>
  );
}
