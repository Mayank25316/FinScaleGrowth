import { X, Check } from "lucide-react";

const ROWS = [
  { feature: "Lead Ownership",    generic: "Shared leads sold to multiple firms",       ours: "Exclusive, first-party leads owned by you" },
  { feature: "Compliance Filter", generic: "No CROA/TSR review — your liability",      ours: "TSR-Compliant Lead Generation vetted against CROA standards" },
  { feature: "Lead Intent",       generic: "Cold outreach & scraped lists",             ours: "Search-intent verified, credit-ready borrowers" },
  { feature: "Backend System",    generic: "Manual follow-up via spreadsheets",         ours: "Automated lead pipelines + CRM routing" },
  { feature: "Financial Risk",    generic: "Locked 6–12 month retainer contracts",      ours: "Month-to-month, performance-fee model" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="bg-grid-surface" style={{ padding: "6rem 0" }}>
      <div className="container-xl">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          <div className="pill" style={{ marginBottom: "1.25rem" }}>The Strategic Contrast</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", marginBottom: "1rem" }}>
            Generic Agencies vs.{" "}
            <span className="accent-blue">Our Performance System</span>
          </h2>
          <p className="subtext" style={{ fontSize: "1rem" }}>Not all growth partners are built equal. Here is the exact delta.</p>
        </div>

        {/* ── Two-column comparison cards — true-centered ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ maxWidth: "960px", margin: "0 auto", width: "100%" }}
        >
          {/* Left: Generic Agencies */}
          <div style={{ background: "#111827", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <div style={{ padding: "1.25rem 1.75rem", background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.15)", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(239,68,68,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <X size={16} color="#EF4444" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.95rem", color: "#EF4444" }}>Generic Agencies</span>
            </div>
            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.feature}
                style={{ padding: "1.1rem 1.75rem", borderBottom: i < ROWS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", gap: "12px", alignItems: "flex-start", flex: 1 }}
              >
                <X size={15} color="#EF4444" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.72rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{row.feature}</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.88rem", color: "#9CA3AF" }}>{row.generic}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Our Architecture */}
          <div style={{ background: "linear-gradient(145deg, #111827 0%, #0f1e38 100%)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 0 40px rgba(59,130,246,0.08)" }}>
            {/* Header */}
            <div style={{ padding: "1.25rem 1.75rem", background: "rgba(59,130,246,0.1)", borderBottom: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={16} color="#3B82F6" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.95rem", color: "#3B82F6" }}>Our Compliant Architecture</span>
            </div>
            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.feature}
                style={{ padding: "1.1rem 1.75rem", borderBottom: i < ROWS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", gap: "12px", alignItems: "flex-start", flex: 1 }}
              >
                <Check size={15} color="#10B981" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.72rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{row.feature}</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.88rem", fontWeight: 600, color: "#FFFFFF" }}>{row.ours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
