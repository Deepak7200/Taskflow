import { Check, ArrowRight } from "lucide-react";

const plans = [
  { name:"Starter", price:"0", description:"Perfect for individuals getting started.", features:["Up to 3 projects","Basic task management","5 team members","Community support"], button:"Get Started" },
  { name:"Pro", price:"19", description:"For teams ready to do more.", features:["Unlimited projects","Advanced analytics","Unlimited team members","Priority support"], button:"Start Free Trial", popular:true }
];

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">SIMPLE PRICING</span><h2>Plans that grow <span>with you.</span></h2><p>Start free. Upgrade when you're ready. No surprises.</p></div>
        <div className="pricing-grid">
          {plans.map(plan => <article className={`price-card ${plan.popular ? "popular" : ""}`} key={plan.name}>
            {plan.popular && <div className="popular-label">MOST POPULAR</div>}
            <h3>{plan.name}</h3><p>{plan.description}</p>
            <div className="price"><sup>$</sup>{plan.price}<small>/month</small></div>
            <a href="#contact" className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"} price-btn`}>{plan.button}<ArrowRight size={17}/></a>
            <div className="price-divider"/><strong>What's included:</strong>
            <ul>{plan.features.map(feature => <li key={feature}><Check size={17}/>{feature}</li>)}</ul>
          </article>)}
        </div>
      </div>
    </section>
  );
}
