import { useState } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon"><Sparkles size={22} /></span>TaskFlow
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#about" onClick={closeMenu}>How it works</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Get Started <ArrowRight size={16}/></a>
        </div>
      </div>
    </nav>
  );
}
