import { FileX, Cog, ShieldOff } from "lucide-react";

const POINTS = [
  {
    icon: FileX, c: "#3B82F6", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)",
    title: "No Locked Contracts",
    body: `Every engagement is month-to-month. We earn your business every 30 days. If we don't deliver qualified appointments, you don't stay — and we don't expect you to.`,
  },
  {
    icon: Cog, c: "#10B981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)",
    title: "Done-FOR-You Execution",
    body: "Marketing automation, conversion pixels, API integrations, CRM routing — all handled by our technical team. You focus on closing qualified borrowers. We handle the entire infrastructure stack.",
  },
  {
    icon: ShieldOff, c: "#C89B3C", bg: "rgba(200,155,60,0.1)", border: "rgba(200,155,60,0.2)",
    title: "Zero Manipulation",
    body: "We use verified search-intent data, not dark patterns or inflated vanity metrics. Every lead has demonstrated active intent to repair their credit. No fake urgency. No manufactured numbers.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-grid-surface" style={{ padding: "6rem 0" }}>
      <div className="container-xl">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          <div className="pill" style={{ marginBottom: "1.25rem" }}>Risk Elimination</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", marginBottom: "1rem" }}>
            Risk Elimination <span className="accent-blue">Built Into the Contract</span>
          </h2>
          <p className="subtext" style={{ fontSize: "1rem" }}>
            We don&apos;t ask you to trust a promise. We eliminate risk structurally.
          </p>
        </div>

        {/* ── 3 cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {POINTS.map((pt) => {
            const Icon = pt.icon;
            return (
              <div key={pt.title} className="card-dark" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: pt.bg, border: `1px solid ${pt.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", flexShrink: 0 }}>
                  <Icon size={24} color={pt.c} strokeWidth={1.8} />
                </div>
                <div className="divider-blue" />
                <h3 className="headline-sm" style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{pt.title}</h3>
                <p className="subtext" style={{ fontSize: "0.88rem" }}>{pt.body}</p>
              </div>
            );
          })}
        </div>

        {/* ── Stats bar — explicit top margin so it never collides with cards ── */}
        <div
          style={{
            marginTop: "4rem",
            width: "100%",
            background: "linear-gradient(135deg, #0f1e38 0%, #111827 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "14px",
            padding: "2rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { v: "100%",   l: "Performance-Based Fees" },
            { v: "0",      l: "Compliance Violations"  },
            { v: "30-Day", l: "Cancellation Policy"    },
            { v: "24hr",   l: "Lead Response SLA"      },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "Inter", fontSize: "2rem", fontWeight: 800, color: "#C89B3C", lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.02em" }}>{s.v}</div>
              <div style={{ fontFamily: "Inter", fontSize: "0.72rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
