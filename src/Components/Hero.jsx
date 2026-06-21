import { ArrowRight, Download, ShieldCheck, TrendingUp, Users } from "lucide-react";

/* ── Hero dashboard mockup card ── */
function DashboardMockup() {
  const metrics = [
    { label: "Qualified Leads / Mo", value: "142", delta: "+34%", color: "#10B981" },
    { label: "Cost Per Appointment", value: "$187", delta: "-22%", color: "#3B82F6" },
    { label: "CROA Violations",      value: "0",    delta: "Clean", color: "#C89B3C" },
  ];

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "1.75rem",
        boxShadow: "0 0 80px rgba(59,130,246,0.12), 0 24px 60px rgba(0,0,0,0.5)",
        animation: "pulse-glow 4s ease-in-out infinite",
        width: "100%",
      }}
    >
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B82F6", marginBottom: "3px" }}>
            LIVE PIPELINE ENGINE
          </div>
          <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF" }}>
            Policy-Compliant Dashboard
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["#EF4444","#F59E0B","#10B981"].map(c => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
        </div>
      </div>

      {/* Metric cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1.5rem" }}>
        {metrics.map(m => (
          <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.72rem", color: "#9CA3AF", marginBottom: "3px" }}>{m.label}</div>
              <div style={{ fontFamily: "Inter", fontWeight: 800, fontSize: "1.4rem", color: "#FFFFFF", letterSpacing: "-0.02em" }}>{m.value}</div>
            </div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: m.color, background: `${m.color}18`, border: `1px solid ${m.color}30`, padding: "4px 10px", borderRadius: "99px" }}>
              {m.delta}
            </div>
          </div>
        ))}
      </div>

      {/* Progress bars */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>CROA Compliance Score</span>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10B981" }}>100%</span>
        </div>
        <div style={{ height: "6px", background: "rgba(255,255,255,0.07)", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg, #10B981, #3B82F6)", borderRadius: "4px" }} />
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>Pipeline Fill Rate</span>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#3B82F6" }}>87%</span>
        </div>
        <div style={{ height: "6px", background: "rgba(255,255,255,0.07)", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "87%", background: "#3B82F6", borderRadius: "4px" }} />
        </div>
      </div>

      {/* Bottom status */}
      <div style={{ marginTop: "1.25rem", padding: "10px 14px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", flexShrink: 0, boxShadow: "0 0 8px #10B981" }} />
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981" }}>All systems operational — zero violations</span>
      </div>
    </div>
  );
}

export default function Hero({ onOpenChecklistModal, onOpenBookingModal }) {
  return (
    <section
      id="hero"
      className="bg-grid-dark"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: "2rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glows */}
      <div style={{ position:"absolute", top:"10%", left:"20%", width:"500px", height:"500px", background:"radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"5%", right:"10%", width:"400px", height:"400px", background:"radial-gradient(circle, rgba(11,107,75,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className="pill-green" style={{ marginBottom: "1.5rem" }}>
              <ShieldCheck size={12} /> CROA-Compliant Performance Marketing
            </div>

            <h1
              className="headline"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", marginBottom: "1.5rem" }}
            >
              A Policy-Compliant<br />
              Client Acquisition System<br />
              Built for{" "}
              <span className="accent-blue">US Credit Repair Firms.</span>
            </h1>

            <p className="subtext" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", maxWidth: "560px", marginBottom: "2.5rem" }}>
              Zero Compliance Risks. No Ghost Leads. No Policy Bans.
              Build a predictable pipeline of qualified borrowers — on autopilot.
            </p>

            {/* Stats */}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              {[
                { icon: ShieldCheck, v: "100%", l: "CROA Compliant",       c: "#10B981" },
                { icon: TrendingUp,  v: "3×",   l: "Lead Quality Lift",    c: "#3B82F6" },
                { icon: Users,       v: "$0",    l: "Hidden Fees",          c: "#C89B3C" },
              ].map(({ icon: Icon, v, l, c }) => (
                <div key={l} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${c}18`, border: `1px solid ${c}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color={c} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter", fontWeight: 800, fontSize: "1.5rem", color: c, lineHeight: 1, letterSpacing: "-0.02em" }}>{v}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9CA3AF", fontWeight: 500, marginTop: "2px" }}>{l}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <button onClick={onOpenBookingModal} className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 28px", border: "none", cursor: "pointer" }}>
                Find What's Bleeding My Pipeline <ArrowRight size={16} />
              </button>
              <button onClick={onOpenChecklistModal} className="btn-outline" style={{ fontSize: "0.95rem", padding: "13px 26px" }}>
                <Download size={16} /> Download Free CROA Checklist
              </button>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "1rem", fontFamily: "Inter" }}>
              No credit card required · Free 20-min audit · Cancel anytime
            </p>
          </div>

          {/* ── Right: Dashboard Mockup (5 cols) ── */}
          <div className="lg:col-span-5 hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}