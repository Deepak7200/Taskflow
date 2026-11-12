import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return setError("Please fill in all fields.");
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) return setError("Please enter a valid email address.");
    setError(""); setSuccess(true); setForm({name:"",email:"",message:""});
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-text"><span className="eyebrow">LET'S GET STARTED</span><h2>Ready to make work <span>work for you?</span></h2><p>Join thousands of teams achieving more with TaskFlow. Start your free journey today.</p>
          <div className="contact-info"><div><span>✉</span><div><strong>Email us</strong><p>hello@taskflow.example</p></div></div><div><span>◷</span><div><strong>We're here for you</strong><p>Monday – Friday, 9 AM – 6 PM</p></div></div></div>
        </div>
        <div className="contact-form-card"><h3>Request a demo</h3><p>See how TaskFlow can transform your workflow.</p>
          {success ? <div className="success-message"><div className="success-icon"><Check size={28}/></div><h3>Thank you!</h3><p>Your demo request has been submitted successfully.</p><button className="btn btn-secondary" onClick={() => setSuccess(false)}>Send another request</button></div> :
          <form onSubmit={handleSubmit}>
            <label>Your name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="John Doe"/>
            <label>Email address</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="john@example.com"/>
            <label>Tell us about your team</label><textarea rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What would you like to achieve?"/>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn btn-primary form-btn">Request Demo <ArrowRight size={17}/></button><small className="form-note">No spam. Just a better way to work.</small>
          </form>}
        </div>
      </div>
    </section>
  );
}
