import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    id:"faq-1",
    question:"Is your system compliant with CROA and TSR regulations?",
    answer:"Yes — compliance is the core of our architecture, not an afterthought. Every campaign, every ad copy variant, every landing page goes through a documented CROA Section 405 and TSR compliance review before going live. We maintain a 0-violation track record across all active client accounts. You receive a compliance sign-off document before any campaign launches.",
  },
  {
    id:"faq-2",
    question:"What makes your leads different from other lead vendors?",
    answer:"Most lead vendors sell shared, cold-contact leads scraped from list brokers. Our leads are first-party, search-intent verified contacts who have actively searched for credit repair solutions in the last 24–72 hours. They're exclusive to your firm, warm, and credit-aware — meaning they understand setup fees and have already indicated financial readiness through their search behavior.",
  },
  {
    id:"faq-3",
    question:"What is the minimum commitment to get started?",
    answer:"There are no long-term contracts. We operate on a month-to-month basis. The setup fee covers infrastructure build, compliance review, campaign creation, and automation setup. After the initial month, you continue only on the performance-fee model — paying per qualified appointment set, not per lead. You can pause or exit with 30 days notice.",
  },
  {
    id:"faq-4",
    question:"How long before I see qualified appointments on my calendar?",
    answer:"For the Paid Traffic Accelerator, most clients see the first qualified appointments within 7–14 days of campaign launch. The Omnichannel Dominator begins showing paid results in the same window, with organic compounding over 60–90 days. We set clear KPI benchmarks upfront so you always know what success looks like at each stage.",
  },
  {
    id:"faq-5",
    question:"Do you work with firms outside the US?",
    answer:"No. Our entire compliance framework, lead sourcing infrastructure, and legal review process is calibrated specifically for the US CROA/TSR regulatory environment. We only work with US-registered credit repair firms to ensure full compliance alignment.",
  },
];

export default function FAQs({ onOpenModal }) {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faqs" className="bg-grid-surface" style={{ padding:"6rem 0" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:"580px", margin:"0 auto 4rem" }}>
          <div className="pill" style={{ marginBottom:"1.25rem" }}>Common Questions</div>
          <h2 className="headline" style={{ fontSize:"clamp(1.9rem,3.5vw,2.8rem)", marginBottom:"1rem" }}>
            Frequently Asked <span className="accent-blue">Questions</span>
          </h2>
          <p className="subtext" style={{ fontSize:"1rem" }}>Everything you need to know before making a decision.</p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth:"760px", margin:"0 auto" }}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  id={faq.id}
                >
                  <span style={{ maxWidth:"85%" }}>{faq.question}</span>
                  <span style={{ width:"32px", height:"32px", borderRadius:"8px", background: isOpen ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.05)", border:`1px solid ${isOpen ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.08)"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all 0.2s" }}>
                    {isOpen ? <ChevronUp size={15} color="#3B82F6" /> : <ChevronDown size={15} color="#9CA3AF" />}
                  </span>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p className="subtext" style={{ fontSize:"0.91rem", lineHeight:1.75 }}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ maxWidth:"560px", margin:"3rem auto 0", textAlign:"center", padding:"2rem 2.25rem", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"14px" }}>
          <p className="subtext" style={{ fontSize:"0.88rem", marginBottom:"1.25rem" }}>
            Still have questions? Let&apos;s talk through your specific situation.
          </p>
          <button onClick={onOpenModal} className="btn-primary" style={{ border: "none", cursor: "pointer" }}>I'm Ready — Show Me My Audit</button>
        </div>
      </div>
    </section>
  );
}
