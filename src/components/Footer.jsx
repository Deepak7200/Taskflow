import { Sparkles } from "lucide-react";

export default function Footer() {
  return <footer className="footer"><div className="container footer-content">
    <a href="#home" className="logo"><span className="logo-icon"><Sparkles size={20}/></span>TaskFlow</a>
    <p>Making teamwork feel effortless.</p>
    <div className="footer-links"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div>
    <small>© 2026 TaskFlow. All rights reserved.</small>
  </div></footer>;
}
