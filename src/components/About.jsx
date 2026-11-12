import { Target } from "lucide-react";

const steps = [
  ["01", "Create your workspace", "Bring your team together in one shared space."],
  ["02", "Organize your projects", "Create tasks, assign responsibilities, and set deadlines."],
  ["03", "Track & achieve goals", "Monitor progress and celebrate every milestone."]
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-box">
            <div className="about-box-header"><Target size={20}/><strong>Project Overview</strong></div>
            {["Website Launch|75%|75%", "Mobile App|45%|45%", "Marketing Campaign|90%|90%"].map(item => {
              const [name, value, width] = item.split("|");
              return <div className="project-progress" key={name}><div><span>{name}</span><strong>{value}</strong></div><div className="progress"><span style={{width}}/></div></div>;
            })}
            <div className="team-members"><span>Team members</span><div className="avatars"><span>A</span><span>S</span><span>R</span><span>+</span></div></div>
          </div>
        </div>
        <div className="about-text">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>From scattered tasks to <span>smooth workflows.</span></h2>
          <p>TaskFlow makes managing projects feel effortless. Get your team organized in just three simple steps.</p>
          <div className="steps">{steps.map(([number,title,description]) => <div className="step" key={number}><span>{number}</span><div><h4>{title}</h4><p>{description}</p></div></div>)}</div>
        </div>
      </div>
    </section>
  );
}
