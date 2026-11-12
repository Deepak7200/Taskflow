import { ArrowRight, Play, Sparkles, Zap, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="eyebrow"><Sparkles size={15}/> YOUR WORK, SIMPLIFIED</div>
          <h1>Work smarter.<br/><span>Achieve more.</span></h1>
          <p>TaskFlow brings your projects, tasks, and team together in one simple workspace. Less chaos, more productivity.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started Free <ArrowRight size={18}/></a>
            <a href="#about" className="btn btn-secondary"><Play size={17}/> See How It Works</a>
          </div>
          <div className="hero-trust">
            <div className="avatars"><span>A</span><span>S</span><span>R</span><span>M</span></div>
            <div><strong>10,000+ teams</strong><small>already work smarter</small></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard">
            <div className="dashboard-top">
              <div><small>YOUR WORKSPACE</small><h3>Good morning, Alex 👋</h3></div>
              <div className="profile">A</div>
            </div>
            <div className="stats-grid">
              <div className="stat-card"><span>Tasks completed</span><h2>24 <small>+12%</small></h2><div className="progress"><span style={{width:"75%"}}/></div></div>
              <div className="stat-card"><span>Productivity</span><h2>86%</h2><div className="progress purple"><span style={{width:"86%"}}/></div></div>
            </div>
            <div className="task-heading"><h4>Today's Tasks</h4><span>View all →</span></div>
            <div className="task"><span className="task-check"><Check size={14}/></span><div><strong>Design homepage</strong><small>Website redesign</small></div><span className="tag green">Done</span></div>
            <div className="task"><span className="task-check"><Check size={14}/></span><div><strong>Review new features</strong><small>Product development</small></div><span className="tag orange">In progress</span></div>
            <div className="task"><span className="task-check"><Check size={14}/></span><div><strong>Team meeting</strong><small>Marketing team</small></div><span className="tag blue">Upcoming</span></div>
            <div className="floating-card"><div className="floating-icon"><Zap size={18}/></div><div><strong>Great progress!</strong><small>You're 86% productive today.</small></div></div>
          </div>
          <div className="hero-orb"/>
        </div>
      </div>
    </section>
  );
}
