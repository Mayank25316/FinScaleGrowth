import { Check, Star, ArrowRight, Zap } from "lucide-react";

const FEATURES_1 = [
  "CROA-compliant ad copy review",
  "Google & Meta campaign setup",
  "Real-time lead routing automation",
  "Weekly performance reports",
  "Month-to-month, no lock-in",
];

const FEATURES_2 = [
  "Everything in Paid Traffic Accelerator",
  "Organic SEO + content architecture",
  "Full retargeting funnel setup",
  "YouTube & LinkedIn authority content",
  "Dedicated account strategist",
  "Bi-weekly strategy review calls",
];

function PricingFeature({ text }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <Check size={15} color="#10B981" strokeWidth={2.5} style={{ marginTop: "2px", flexShrink: 0 }} />
      <span style={{ fontFamily: "Inter", fontSize: "0.87rem", color: "#9CA3AF" }}>{text}</span>
    </li>
  );
}

export default function Pricing({ onOpenModal }) {
  return (
    <section id="pricing" className="bg-grid-dark" style={{ padding: "6rem 0" }}>
      <div className="container-xl">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          <div className="pill" style={{ marginBottom: "1.25rem" }}>Acquisition Models</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", marginBottom: "1rem" }}>
            Choose Your <span className="accent-blue">Growth Architecture</span>
          </h2>
          <p className="subtext" style={{ fontSize: "1rem" }}>
            No locked retainers. Pay for performance. Start when you&apos;re ready.
          </p>
        </div>

        {/* ── Pricing cards — true-centered with max-width ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ maxWidth: "880px", margin: "0 auto", width: "100%" }}
        >
          {/* Card 1 */}
          <div className="card-dark" style={{ padding: "2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "6px", padding: "5px 12px", marginBottom: "1rem" }}>
                <Zap size={12} color="#3B82F6" />
                <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B82F6" }}>Paid Traffic</span>
              </div>
              <h3 className="headline-sm" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Paid Traffic Accelerator</h3>
              <p className="subtext" style={{ fontSize: "0.88rem", marginBottom: "1.5rem" }}>
                Launch immediately with compliant paid search campaigns. Ideal for firms ready to fill the pipeline fast.
              </p>

              <div style={{ background: "rgba(59,130,246,0.03)", border: "1px dashed rgba(59,130,246,0.3)", borderRadius: "10px", padding: "1.1rem 1.25rem", marginBottom: "1.5rem", textAlign: "center" }}>
                <div style={{ fontFamily: "Inter", fontSize: "0.88rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "4px" }}>
                  Custom Acquisition Plan
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "#9CA3AF" }}>
                  Tailored setup & performance models based on capacity. Discussed on call.
                </div>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2rem" }}>
                {FEATURES_1.map(t => <PricingFeature key={t} text={t} />)}
              </ul>
            </div>

            <button onClick={onOpenModal} className="btn-green" style={{ justifyContent: "center", width: "100%" }}>
              Get Started with Ads <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 2 — Featured */}
          <div style={{ background: "linear-gradient(145deg, #0f1e38 0%, #111827 100%)", border: "1px solid rgba(200,155,60,0.35)", borderRadius: "14px", padding: "2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", boxShadow: "0 0 60px rgba(200,155,60,0.08)" }}>
            {/* Most Popular badge */}
            <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)" }}>
              <span className="pill-gold" style={{ fontSize: "0.65rem", padding: "5px 18px", whiteSpace: "nowrap" }}>
                <Star size={10} fill="#C89B3C" /> Most Popular
              </span>
            </div>

            <div style={{ paddingTop: "0.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(200,155,60,0.1)", border: "1px solid rgba(200,155,60,0.25)", borderRadius: "6px", padding: "5px 12px", marginBottom: "1rem" }}>
                <Star size={12} color="#C89B3C" fill="#C89B3C" />
                <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C89B3C" }}>Omnichannel</span>
              </div>
              <h3 className="headline-sm" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Omnichannel Dominator</h3>
              <p className="subtext" style={{ fontSize: "0.88rem", marginBottom: "1.5rem" }}>
                Full-stack acquisition engine: paid + SEO + automation. Dominate your local credit repair market.
              </p>

              <div style={{ background: "rgba(200,155,60,0.03)", border: "1px dashed rgba(200,155,60,0.3)", borderRadius: "10px", padding: "1.1rem 1.25rem", marginBottom: "1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "Inter", fontSize: "0.88rem", fontWeight: 600, color: "#C89B3C", marginBottom: "4px" }}>
                  Custom Omnichannel Plan
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "#9CA3AF" }}>
                  Bespoke search architecture & dedicated support. Tailored pricing discussed on call.
                </div>
              </div>

              <div style={{ background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.25)", borderRadius: "8px", padding: "0.9rem 1.1rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <Star size={14} color="#C89B3C" fill="#C89B3C" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.82rem", fontWeight: 700, color: "#C89B3C", marginBottom: "2px" }}>Limited-Time Offer</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#D1D5DB" }}>First 3 bookings are <strong style={{ color: "#FFFFFF" }}>FREE</strong> — no performance fee charged.</div>
                </div>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2rem" }}>
                {FEATURES_2.map(t => <PricingFeature key={t} text={t} />)}
              </ul>
            </div>

            <button onClick={onOpenModal} className="btn-primary" style={{ justifyContent: "center", textAlign: "center", display: "flex", width: "100%", border: "none", cursor: "pointer" }}>
              Claim My First 3 Free Appointments <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* ── Qualification block — explicit top margin breathing room ── */}
        <div
          style={{
            maxWidth: "720px",
            margin: "4rem auto 0",
            padding: "2rem 2.5rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h4 className="headline-sm" style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Is this right for you?</h4>
          <p className="subtext" style={{ fontSize: "0.87rem", marginBottom: "1rem" }}>
            These systems are built for US-registered credit repair firms actively acquiring clients. You should have an established client intake process, a CRM, and the operational capacity to handle 15+ appointments per month. If you are just starting out,{" "}
            <button onClick={onOpenModal} style={{ background: "none", border: "none", color: "#3B82F6", fontWeight: 600, cursor: "pointer", padding: 0, font: "inherit" }}>book a call</button>{" "}
            and we will help you find the right starting point.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {["US Credit Repair Firm ✓", "Client Intake Process ✓", "CRM in Place ✓"].map(t => (
              <span key={t} style={{ fontFamily: "Inter", fontSize: "0.78rem", fontWeight: 600, color: "#10B981" }}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
