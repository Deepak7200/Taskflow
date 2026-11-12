import { Zap, Users, BarChart3, ArrowRight } from "lucide-react";

const features = [
  { icon: Zap, title: "Smart Task Management", description: "Organize tasks, set priorities, and keep your entire team focused on what matters." },
  { icon: Users, title: "Team Collaboration", description: "Collaborate seamlessly with your team, share updates, and keep everyone in sync." },
  { icon: BarChart3, title: "Real-time Analytics", description: "Track progress, measure performance, and make smarter decisions with clear insights." }
];

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">POWERFUL FEATURES</span>
          <h2>Everything you need.<br/><span>Nothing you don't.</span></h2>
          <p>Simple tools. Powerful results. Designed to make your work life easier.</p>
        </div>
        <div className="feature-grid">
          {features.map(({icon: Icon, title, description}) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon size={25}/></div>
              <h3>{title}</h3><p>{description}</p>
              <a href="#about">Learn more <ArrowRight size={15}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
