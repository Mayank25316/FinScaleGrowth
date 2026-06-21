import { Zap, Leaf, Search, Settings2, BarChart3, TrendingUp } from "lucide-react";

const STEPS = [
  {
    num: "01", icon: Search,    title: "Audit",
    body: "Full compliance review of existing funnels, ad accounts, and landing pages. We map every CROA/TSR risk before a single dollar is spent.",
  },
  {
    num: "02", icon: Settings2, title: "CROA Strategy",
    body: "Build a policy-safe campaign architecture. Intent-based keyword mapping, compliant copy frameworks, and vetted audience segments.",
  },
  {
    num: "03", icon: Zap,       title: "Campaign Launch",
    body: "Deploy across compliant paid channels. Track pixels, CRM integration via marketing automation, and real-time lead routing activated.",
  },
  {
    num: "04", icon: BarChart3, title: "Monitor & Optimize",
    body: "Weekly performance reviews. Conversion rate optimisation, bid adjustments, and continuous lead quality scoring against your ICP.",
  },
  {
    num: "05", icon: TrendingUp, title: "Report & Scale",
    body: "Transparent reporting dashboard. When metrics hit target benchmarks, we scale strategically for maximum qualified pipeline growth.",
  },
];

const PILLARS = [
  {
    icon: Zap,  c: "#3B82F6", bg: "rgba(59,130,246,0.08)", bdr: "rgba(59,130,246,0.2)",
    label: "Pillar 1", title: "Inorganic Velocity",
    desc: "Paid search & social campaigns generating immediate pipeline flow with intent-verified, credit-ready leads.",
  },
  {
    icon: Leaf, c: "#10B981", bg: "rgba(16,185,129,0.08)", bdr: "rgba(16,185,129,0.2)",
    label: "Pillar 2", title: "Organic Sustainability",
    desc: "SEO content, authority building, and retargeting systems that compound over time — reducing CAC month over month.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-grid-dark" style={{ padding: "6rem 0" }}>

      {/* ── Single unified master container — everything aligns to the same grid ── */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div className="pill" style={{ marginBottom: "1.25rem" }}>How It Works</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>
            The Omnichannel Engine: How We Generate{" "}
            <span className="accent-blue">Vetted Leads</span>
          </h2>
          <p className="subtext" style={{ fontSize: "1rem" }}>
            Two pillars power your pipeline, working in tandem for compliant, consistent results.
          </p>
        </div>

        {/* ── Pillars — full container width, same edge as step cards ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          style={{ marginBottom: "5rem" }}
        >
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  background: p.bg,
                  border: `1px solid ${p.bdr}`,
                  borderRadius: "14px",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: p.bg, border: `1px solid ${p.bdr}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} color={p.c} />
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: p.c, marginBottom: "4px" }}>{p.label}</div>
                  <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", marginBottom: "8px" }}>{p.title}</div>
                  <p className="subtext" style={{ fontSize: "0.85rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 5 Steps Grid — same w-full container as pillars above ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem",
                  background: "#111827",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                  e.currentTarget.style.boxShadow  = "0 8px 32px rgba(59,130,246,0.08)";
                  e.currentTarget.style.transform  = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow  = "none";
                  e.currentTarget.style.transform  = "translateY(0)";
                }}
              >
                {/* Step number */}
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B82F6", marginBottom: "12px" }}>
                  {step.num}
                </div>

                {/* Icon */}
                <div style={{ width: "38px", height: "38px", borderRadius: "9px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", flexShrink: 0 }}>
                  <Icon size={17} color="#3B82F6" />
                </div>

                {/* Title */}
                <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.92rem", color: "#FFFFFF", lineHeight: 1.3, marginBottom: "10px" }}>
                  {step.title}
                </div>

                {/* Body */}
                <p style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#9CA3AF", lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
